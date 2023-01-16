import Image from 'next/image'
import crab from '../../public/crab.png'
import { useState } from "react";
import { Box } from '@mui/material';

const MAX_NUM = 6;

// return a random integer between 1 and MAX_NUM
const getRandomNum = () => {
    return Math.floor(Math.random() * (MAX_NUM)) + 1;
}

const CSSinline = {
    display: "inline-block",
    padding: "5px"
}

const CSSstatus = {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    width: "100%"
}

const CSShorizontal = {
    display: "flex"
}



export const Game = () => {
    const [die1, setDie1] = useState(0);
    const [die2, setDie2] = useState(0);
    const [die3, setDie3] = useState(0);


    const [numTokens, setNumTokens] = useState(3);

    const roll = () => {

        if (numTokens > 0) {
            setNumTokens(numTokens - 1);

            setDie1(getRandomNum());
            setDie2(getRandomNum());
            setDie3(getRandomNum());
        }
        else {
            console.log("You need at least 1 token to play")
        }

    }

    return (<>

        <div style={CSShorizontal}>
            <div style={CSSinline}>
                <div>
                    <div style={CSSinline}>
                        <Image
                            src={crab}
                            alt="Crab"
                            width={150}
                        />
                        <h2>1</h2>
                        <Box>
                            <p>-</p>
                            <p>0</p>
                            <p>+</p>
                        </Box>

                    </div>
                    <div style={CSSinline}>
                        <Image
                            src={crab}
                            alt="Crab"
                            width={150}
                        />
                        <h2>2</h2>
                    </div>
                    <div style={CSSinline}>
                        <Image
                            src={crab}
                            alt="Crab"
                            width={150}
                        />
                        <h2>3</h2>
                    </div>
                </div>

                <div>
                    <div style={CSSinline}>
                        <Image
                            src={crab}
                            alt="Crab"
                            width={150}
                        />
                        <h2>4</h2>
                    </div>
                    <div style={CSSinline}>
                        <Image
                            src={crab}
                            alt="Crab"
                            width={150}
                        />
                        <h2>5</h2>
                    </div>
                    <div style={CSSinline}>
                        <Image
                            src={crab}
                            alt="Crab"
                            width={150}
                        />
                        <h2>6</h2>
                    </div>
                </div>
            </div>


            <div style={CSSinline}>
                <h1>{die1}</h1>
                <h1>{die2}</h1>
                <h1>{die3}</h1>
            </div>

        </div>

        <div style={CSSstatus}>
            <button>Spicy Tokens: {numTokens}</button>
            <button onClick={() => roll()}>Play Now</button>
            <button>Spicy points: 0</button>
        </div>

    </>
    );
};

