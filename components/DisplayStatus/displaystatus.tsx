import { Box } from "@mui/material"
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { app } from '../../utils/firebase';


export const DisplayStatus = () => {



    const auth = getAuth(app);
    const [user, loading] = useAuthState(auth);



    if (user) {
        const numTokens = useSelector((state: any) => state.token.numTokens)
        return (
            <Box sx={{ margin: 5 }}>
                <h1>Hello {user.displayName}</h1>
                <h2>You currently have {numTokens} Spicy Tokens</h2>
            </Box>
        )
    }

    return (<></>)

}

