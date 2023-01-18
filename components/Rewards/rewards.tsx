import { Box } from "@mui/material";
import { getAuth } from "firebase/auth";
import { userAgent } from "next/server";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from '../../utils/firebase';
import { DisplayStatus } from "../DisplayStatus/displaystatus";


export const Rewards = () => {



        return (<>

            <DisplayStatus/>
   
            <button>
                <h1>Một Con Vịt</h1>
                <h2>500 Spicy Tokens</h2>
            </button>


            <button>
                <h1>Request Any Song</h1>
                <h2>5000 Spicy Tokens</h2>

            </button>


        </>
        );
};

