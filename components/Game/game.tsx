import React, { useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Image from 'next/image';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Dicebar } from './dicebar';

import { useDispatch, useSelector } from 'react-redux';
import { SET_COUNTERS, UPDATE } from '@/redux/tokenSlice';

import { db } from '../../utils/firebase';
import { doc, setDoc} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { app } from '../../utils/firebase';
import { getAuth } from 'firebase/auth';

import { getPoints, getUsers } from '../FetchDB/fetchdb';
import { AnimalCounters } from './animalCounters';
import { animals } from './animalFaces';

const MAX_NUM = 6;

// return a random integer between 1 and MAX_NUM
const getRandomNum = () => {
  return Math.floor(Math.random() * MAX_NUM) + 1;
};

export const Game = () => {
  const auth = getAuth(app);

  const [dice, setDice] = useState([0, 0, 0]);
  const [user, loading] = useAuthState(auth);
  const [data, setData] = useState({});

  // The first element is the total counters selected at a given time

  const { numTokens, isLoading, counters } = useSelector((state: any) => state.token);

  const dispatch = useDispatch();

  // const [numTokens, setNumTokens] = useState(3);


  const onClickReset = () => {
    dispatch(SET_COUNTERS([0, 0, 0, 0, 0, 0, 0]));
  };

  const addToDB = async (numTokens: number) => {
    if (user) {
      try {
        const docRef = await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          numTokens: numTokens,
          userName: user.displayName,
        });
        console.log("userName is " + user.displayName)
        console.log('Document written with ID: ', user.uid);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };

  const roll = () => {
    if (numTokens <= 0) {
      alert('Out of tokens');
      return;
    }

    if (counters[0] == 0) {
      alert('Please place a bet before playing');
      return;
    }

    if (counters[0] > numTokens) {
      alert('Not enough tokens');
      return;
    }

    // Roll the dice
    const newDice: Array<number> = [getRandomNum(), getRandomNum(), getRandomNum()];
    setDice(newDice);

    // Calculate earnings
    let earnings: number = 0;

    // All 3 dice are the same
    if (newDice[0] == newDice[1] && newDice[1] == newDice[2]) {
      // You get your money back + 3 times what you bet
      earnings = 4 * counters[newDice[0]];
    }
    // 2 out of the 3 dices are the same
    else if (newDice[0] == newDice[1]) {
      earnings = 3 * counters[newDice[0]] + 2 * counters[newDice[2]];
    } else if (newDice[0] == newDice[2]) {
      earnings = 3 * counters[newDice[0]] + 2 * counters[newDice[1]];
    } else if (newDice[1] == newDice[2]) {
      earnings = 3 * counters[newDice[1]] + 2 * counters[newDice[0]];
    }
    // None of the dice are the same
    else {
      earnings = 2 * counters[newDice[0]] + 2 * counters[newDice[1]] + 2 * counters[newDice[2]];
    }

    // Adjust for the number of tokens spent + earnings
    dispatch(UPDATE(numTokens - counters[0] + earnings));
    addToDB(numTokens - counters[0] + earnings);

    // Reset counters
    onClickReset();
  };

  const hello = async () => {
    const result = await getPoints(user);
    dispatch(UPDATE(result));
    console.log(result);
  };

  useEffect(() => {
    if (user) {
      hello();
      console.log('User: ', user);
    }
  }, [user, hello]);    

  if (isLoading) {
    return null;
  }
  return (
    <>
      <h1>
        Welcome to the Spicy Game
        <Popup trigger={<HelpOutlineIcon />} position="right center">
          <div>
            Bet with your tokens to get more tokens. The game ends when you run out of tokens, so choose wisely!
          </div>
        </Popup>
      </h1>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ justifyContent: 'center' }}>
              <Image src={animals[0]} alt="Deer" width={150} height={150} />
              <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
                <AnimalCounters counters={counters} numTokens={numTokens} idx={1} />
              </Box>
            </Box>
            <Box sx={{ justifyContent: 'center' }}>
              <Image src={animals[1]} alt="Gourd" width={150} height={150} />
              <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
                <AnimalCounters counters={counters} numTokens={numTokens} idx={2} />

              </Box>
            </Box>
            <Box sx={{ justifyContent: 'center' }}>
              <Image src={animals[2]} alt="Chicken" width={150} height={150} />
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <AnimalCounters counters={counters} numTokens={numTokens} idx={3} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ justifyContent: 'center' }}>
              <Image src={animals[3]} alt="Fish" width={150} height={150} />
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <AnimalCounters counters={counters} numTokens={numTokens} idx={4} />
              </Box>
            </Box>
            <Box sx={{ justifyContent: 'center' }}>
              <Image src={animals[4]} alt="Crab" width={150} height={150} />
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <AnimalCounters counters={counters} numTokens={numTokens} idx={5} />
              </Box>
            </Box>
            <Box sx={{ justifyContent: 'center' }}>
              <Image src={animals[5]} alt="Shrimp" width={150} height={150} />
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <AnimalCounters counters={counters} numTokens={numTokens} idx={6} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Dicebar {...dice} />
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <h1>Spicy Tokens: {numTokens}</h1>
        <Button onClick={() => roll()}>Play Now</Button>
        <Button onClick={() => onClickReset()}>Reset</Button>
      </Box>

      <Box sx={{ textAlign: 'center' }}></Box>
    </>
  );
};
