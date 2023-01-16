import Image from 'next/image'
import crab from '../../public/crab.png'
import { useState } from "react";
import { Box, Button } from '@mui/material';


const MAX_NUM = 6;

// return a random integer between 1 and MAX_NUM
const getRandomNum = () => {
    return Math.floor(Math.random() * (MAX_NUM)) + 1;
}


export const Game = () => {

    const [dice, setDice] = useState([0, 0, 0]);


    const [numTokens, setNumTokens] = useState(3);


    const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0])

    const incDecCounters = (inc: number, index: number) => {
        const newCounters = [...counters]
        if (newCounters[index - 1] + inc >= 0) {
            newCounters[index - 1] += inc;
            setCounters(newCounters)
        }
    }


    const sumCounters = () => {
        let total: number = 0
        counters.forEach((counter: number) => {
            total += counter;
        })
        return total;
    }


    const onClickReset = () => {
        setCounters([0, 0, 0, 0, 0, 0])
    }


    const roll = () => {

        if (numTokens <= 0) {
            alert("Out of tokens")
            return;

        }

        if (sumCounters() == 0) {
            alert("Please place a bet before playing")
            return;
        }

        if (sumCounters() > numTokens) {
            alert("Not enough tokens");
            return;
        }



        // Roll the dice
        const newDice: Array<number> = [getRandomNum(), getRandomNum(), getRandomNum()]
        setDice(newDice)


        // Calculate earnings
        let earnings: number = 0
        newDice.forEach((die: number) => {
            earnings += Number(counters[die - 1])
        })

        // Adjust for the number of tokens spent + earnings
        setNumTokens(numTokens - sumCounters() + earnings);


        // Reset counters
        onClickReset();
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                        <Box>
                            <h2>1</h2>

                            <Image
                                src={crab}
                                alt="Crab"
                                width={150}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
                                <Button onClick={() => incDecCounters(-1, 1)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[0]}</Button>
                                <Button onClick={() => incDecCounters(1, 1)}>+</Button>
                            </Box>
                        </Box>
                        <Box>
                            <h2>2</h2>

                            <Image
                                src={crab}
                                alt="Crab"
                                width={150}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
                                <Button onClick={() => incDecCounters(-1, 2)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[1]}</Button>
                                <Button onClick={() => incDecCounters(1, 2)}>+</Button>
                            </Box>
                        </Box>
                        <Box>
                            <h2>3</h2>

                            <Image
                                src={crab}
                                alt="Crab"
                                width={150}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Button onClick={() => incDecCounters(-1, 3)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[2]}</Button>
                                <Button onClick={() => incDecCounters(1, 3)}>+</Button>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box>
                            <h2>4</h2>
                            <Image
                                src={crab}
                                alt="Crab"
                                width={150}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Button onClick={() => incDecCounters(-1, 4)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[3]}</Button>
                                <Button onClick={() => incDecCounters(1, 4)}>+</Button>
                            </Box>
                        </Box>
                        <Box>
                            <h2>5</h2>

                            <Image
                                src={crab}
                                alt="Crab"
                                width={150}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Button onClick={() => incDecCounters(-1, 5)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[4]}</Button>
                                <Button onClick={() => incDecCounters(1, 5)}>+</Button>
                            </Box>
                        </Box>
                        <Box>
                            <h2>6</h2>

                            <Image
                                src={crab}
                                alt="Crab"
                                width={150}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Button onClick={() => incDecCounters(-1, 6)}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counters[5]}</Button>
                                <Button onClick={() => incDecCounters(1, 6)}>+</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>


                <Box>
                    <h1>{dice[0]}</h1>
                    <h1>{dice[1]}</h1>
                    <h1>{dice[2]}</h1>
                </Box>

            </Box>

            <Box sx={{ textAlign: 'center' }}>
                <Button>Spicy Tokens: {numTokens}</Button>
                <Button onClick={() => roll()}>Play Now</Button>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
                <Button onClick={() => onClickReset()}>Reset</Button>
            </Box>

        </>
    );
};

