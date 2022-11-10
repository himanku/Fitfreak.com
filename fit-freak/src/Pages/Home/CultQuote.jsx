import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import styles from "../Styles/Family.module.css"

const CultQuote = () => {
    return (
        <Flex className={styles.quote} height={{base:"47vw",md:"47vw",lg:"47vw"}} pr={{base:"40px", md: "80px",lg:"100px"}}>
            <Box width={{base:"45%", md:"40%", lg:"30%"}} fontSize={{base:"14px", md:"16px", lg:"25px"}} >
                <Text>At Fit-Freak, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free.</Text>
                <Text>#BeBetterEveryDay</Text>
            </Box>
        </Flex>
    );
}

export default CultQuote;
