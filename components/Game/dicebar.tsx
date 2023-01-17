import { Box } from "@mui/material"
import Image from 'next/image'
import { animals } from "./animalFaces"


export const Dicebar = (dice:Array<number>) => {
    if (dice[0] != 0 ) {
        return(
            <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Image
                src={animals[dice[0] - 1]}
                alt="dice"
                width={50}
                height={50}
            />
            <Image
                src={animals[dice[1] - 1]}
                alt="dice"
                width={50}
                height={50}
            />
            <Image
                src={animals[dice[2] - 1]}
                alt="dice"
                width={50}
                height={50}
            />
        </Box>
        </>
        )
    }
    return (<></>)

   
}
