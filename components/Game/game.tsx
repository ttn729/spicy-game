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
    const [die1, setDie1] = useState(0);
    const [die2, setDie2] = useState(0);
    const [die3, setDie3] = useState(0);


    const [numTokens, setNumTokens] = useState(3);



    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counter4, setCounter4] = useState(0);
    const [counter5, setCounter5] = useState(0);
    const [counter6, setCounter6] = useState(0);

    const inc1 = () => {
        setCounter1(counter1 + 1);
    }

    const dec1 = () => {
        if (counter1 > 0) {
            setCounter1(counter1 - 1);
        }
    }

    const inc2 = () => {
        setCounter2(counter2 + 1);
    }

    const dec2 = () => {
        if (counter2 > 0) {
            setCounter2(counter2 - 1);
        }
    }

    const inc3 = () => {
        setCounter3(counter3 + 1);
    }


    const dec3 = () => {
        if (counter3 > 0) {
            setCounter3(counter3 - 1);
        }
    }

    const inc4 = () => {
        setCounter4(counter4 + 1);
    }

    const dec4 = () => {
        if (counter4 > 0) {
            setCounter4(counter4 - 1);
        }
    }

    const inc5 = () => {
        setCounter5(counter5 + 1);
    }

    const dec5 = () => {
        if (counter5 > 0) {
            setCounter5(counter5 - 1);
        }
    }

    const inc6 = () => {
        setCounter6(counter6 + 1);
    }

    const dec6 = () => {
        if (counter6 > 0) {
            setCounter6(counter6 - 1);
        }
    }



    const onClickReset = () => {
        setCounter1(0)
        setCounter2(0)
        setCounter3(0)
        setCounter4(0)
        setCounter5(0)
        setCounter6(0)
    }




    const roll = () => {

        if (numTokens <= 0) {
            alert("Out of tokens")
            return;

        }

        if (counter1 + counter2 + counter3 + counter4 + counter5 + counter6 == 0) {
            alert("Please place a bet before playing")
            return;
        }

        if (counter1 + counter2 + counter3 + counter4 + counter5 + counter6 > numTokens) {
            alert("Not enough tokens");
            return;
        }

        setNumTokens(numTokens - (counter1 + counter2 + counter3 + counter4 + counter5 + counter6));

        setDie1(getRandomNum());
        setDie2(getRandomNum());
        setDie3(getRandomNum());

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
                                <Button onClick={() => dec1()}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counter1}</Button>
                                <Button onClick={() => inc1()}>+</Button>
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
                                <Button onClick={() => dec2()}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counter2}</Button>
                                <Button onClick={() => inc2()}>+</Button>
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
                                <Button onClick={() => dec3()}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counter3}</Button>
                                <Button onClick={() => inc3()}>+</Button>
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
                                <Button onClick={() => dec4()}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counter4}</Button>
                                <Button onClick={() => inc4()}>+</Button>
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
                                <Button onClick={() => dec5()}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counter5}</Button>
                                <Button onClick={() => inc5()}>+</Button>
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
                                <Button onClick={() => dec6()}>-</Button>
                                <Button disabled variant='contained' color='secondary'>{counter6}</Button>
                                <Button onClick={() => inc6()}>+</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>


                <Box>
                    <h1>{die1}</h1>
                    <h1>{die2}</h1>
                    <h1>{die3}</h1>
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

