import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



import Image from 'next/image'
import crab from '../../public/crab.png'
import gourd from '../../public/gourd.png'
import shrimp from '../../public/shrimp.png'
import fish from '../../public/fish.png'
import chicken from '../../public/chicken.png'
import deer from '../../public/deer.png'



import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { useState } from "react";
import { Box, Button } from '@mui/material';
import { Dicebar } from './dicebar'

import { useDispatch, useSelector } from "react-redux";
import { UPDATE } from '@/redux/tokenSlice';


const MAX_NUM = 6;

// return a random integer between 1 and MAX_NUM
const getRandomNum = () => {
    return Math.floor(Math.random() * (MAX_NUM)) + 1;
}


const animals = [deer, gourd, chicken, fish, crab, shrimp]

export const Game = () => {

    const [dice, setDice] = useState([0, 0, 0]);



    const numTokens = useSelector((state:any) => state.token.numTokens)
    const dispatch = useDispatch();

   // const [numTokens, setNumTokens] = useState(3);


    // The first element is the total counters selected at a given time
    const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0, 0])

    const incDecCounters = (inc: number, index: number) => {
        const newCounters = [...counters]
        if (counters[0] == numTokens && inc == 1) {
            return
        }

        if (newCounters[index] + inc >= 0) {
            newCounters[index] += inc;
            newCounters[0] += inc; // Add to the total count
            setCounters(newCounters)
        }
    }


    const onClickReset = () => {
        setCounters([0, 0, 0, 0, 0, 0, 0])
    }


    const roll = () => {

        if (numTokens <= 0) {
            alert("Out of tokens")
            return;

        }

        if (counters[0] == 0) {
            alert("Please place a bet before playing")
            return;
        }

        if (counters[0] > numTokens) {
            alert("Not enough tokens");
            return;
        }

        // Roll the dice
        const newDice: Array<number> = [getRandomNum(), getRandomNum(), getRandomNum()]
        setDice(newDice)


        // Calculate earnings
        let earnings: number = 0


        // All 3 dice are the same
        if (newDice[0] == newDice[1] && newDice[1] == newDice[2]) {
            // You get your money back + 3 times what you bet
            earnings = 4 * counters[newDice[0]];
        }
        // 2 out of the 3 dices are the same
        else if (newDice[0] == newDice[1]) {
            earnings = (3 * counters[newDice[0]]) + (2 * counters[newDice[2]])
        }
        else if (newDice[0] == newDice[2]) {
            earnings = (3 * counters[newDice[0]]) + (2 * counters[newDice[1]])
        }
        else if (newDice[1] == newDice[2]) {
            earnings = (3 * counters[newDice[1]]) + (2 * counters[newDice[0]])
        }
        // None of the dice are the same
        else {
            earnings = (2 * counters[newDice[0]]) + (2 * counters[newDice[1]]) + (2 * counters[newDice[2]])
        }


        // Adjust for the number of tokens spent + earnings
        dispatch(UPDATE(numTokens - counters[0] + earnings));


        // Reset counters
        onClickReset();
    }

    return (
        <>
            <h1>Welcome to the Spicy Game
                <Popup trigger={<HelpOutlineIcon />} position="right center">
                    <div>Bet with your tokens to get more tokens. The game ends when you run out of tokens, so choose wisely!</div>
                </Popup>
            </h1>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Box>


                    <Box sx={{ display: 'flex', flexDirection: 'row', }}>


                        <Box sx={{ justifyContent: 'center' }}>
                            <Image
                                src={deer}
                                alt="Deer"
                                width={150}
                                height={150}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
                                <Button onClick={() => incDecCounters(-1, 1)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[1]}</Button>
                                <Button onClick={() => incDecCounters(1, 1)}>+</Button>
                            </Box>
                        </Box>
                        <Box sx={{ justifyContent: 'center' }}>
                            <Image
                                src={gourd}
                                alt="Gourd"
                                width={150}
                                height={150}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
                                <Button onClick={() => incDecCounters(-1, 2)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[2]}</Button>
                                <Button onClick={() => incDecCounters(1, 2)}>+</Button>
                            </Box>
                        </Box>
                        <Box sx={{ justifyContent: 'center' }}>
                            <Image
                                src={chicken}
                                alt="Chicken"
                                width={150}
                                height={150}

                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Button onClick={() => incDecCounters(-1, 3)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[3]}</Button>
                                <Button onClick={() => incDecCounters(1, 3)}>+</Button>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box sx={{ justifyContent: 'center' }}>
                            <Image
                                src={fish}
                                alt="Fish"
                                width={150}
                                height={150}

                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Button onClick={() => incDecCounters(-1, 4)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[4]}</Button>
                                <Button onClick={() => incDecCounters(1, 4)}>+</Button>
                            </Box>
                        </Box>
                        <Box sx={{ justifyContent: 'center' }}>
                            <Image
                                src={crab}
                                alt="Crab"
                                width={150}
                                height={150}

                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Button onClick={() => incDecCounters(-1, 5)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[5]}</Button>
                                <Button onClick={() => incDecCounters(1, 5)}>+</Button>
                            </Box>
                        </Box>
                        <Box sx={{ justifyContent: 'center' }}>
                            <Image
                                src={shrimp}
                                alt="Shrimp"
                                width={150}
                                height={150}

                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Button onClick={() => incDecCounters(-1, 6)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[6]}</Button>
                                <Button onClick={() => incDecCounters(1, 6)}>+</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Dicebar{...dice} />

            </Box>

            <Box sx={{ textAlign: 'center' }}>
                <h1>Spicy Tokens: {numTokens}</h1>
                <Button onClick={() => roll()}>Play Now</Button>
                <Button onClick={() => onClickReset()}>Reset</Button>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
            </Box>

        </>
    );
};

