import { Box } from "@mui/material"
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from '../../utils/firebase';


export const DisplayStatus = () => {

    const auth = getAuth(app);
    const [user, loading] = useAuthState(auth);
    
    if (user)
    return (
        <Box sx={{ margin: 5 }}>
        <h1>Hello {user.displayName}</h1>
        <h2>You currently have xxx Spicy Tokens</h2>
    </Box>
    )
    return (<></>)

}

