import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import styles from "../Styles/Overlay.module.css";

const Overlay = () => {
    return (
        <Box className={styles.overlay}>
            <Box className={styles.cult}>
                <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png" alt="cult"/>
            </Box>
            <Box>
            <svg className={styles.svg1} width="1033" height="256" viewBox="0 0 1033 256" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path id="Path 6" opacity="0.658748" fillRule="evenodd" clipRule="evenodd" d="M1032.26 105.178C1032.26 105.178 831.789 -99.4979 605.32 63.0676C378.851 225.633 15.1793 107.411 15.1793 107.411L0.750166 243.722C0.750166 243.722 403.2 312.882 619.696 113.14C836.191 -86.6017 1029.23 106.835 1029.23 106.835L1032.26 105.178Z" fill="url(#paint0_linear_6391_14874)">
                </path>
                <defs>
                    <linearGradient id="paint0_linear_6391_14874" x1="-27" y1="140" x2="768.964" y2="587.997" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#111D27" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FBD94C"></stop>
                    </linearGradient>
                </defs>
            </svg>
            </Box>
            <Box>
            <svg className={styles.svg2} width="906" height="569" viewBox="0 0 906 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Path 3" opacity="0.815929" fillRule="evenodd" clipRule="evenodd" d="M0.541494 567.256C0.541494 567.256 288.184 599.186 412 357.019C535.815 114.851 905.7 128.198 905.7 128.198L853.178 0.542129C853.178 0.542129 460.098 56.1967 363 327.202C265.902 598.207 2.44773 564.478 2.44773 564.478L0.541494 567.256Z" fill="url(#paint0_linear_6391_14875)">
                </path>
                <defs>
                    <linearGradient id="paint0_linear_6391_14875" x1="896.553" y1="577.97" x2="66.1909" y2="486.524" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#111D27" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#EC4ED1"></stop>
                    </linearGradient>
                </defs>
            </svg>
            </Box>
            <Flex className={styles.overlay_text}>
                <Text fontSize={{base: "25px"}}>A fitness movement that is worth breaking a sweat for</Text>
            </Flex>
            <Box left={{base:"32%", md: "40%", lg: "44%"}} className={styles.button}>
                <Button colorScheme='red' variant='solid'>EXPLORE CULTPASS</Button>
            </Box>
            <Box className={styles.blend}>
                <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png" alt="blend"/>
            </Box>
        </Box>
    );
}

export default Overlay;
