import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import styles from "../Styles/AnimatedImg.module.css";
import Aos from 'aos';
import "aos/dist/aos.css";

const AnimatedGrids = () => {
    React.useEffect(()=> {
        Aos.init({duration: 1000})
    },[])
    return (
        <Box className={styles.box} width="100%">
            <SimpleGrid width={{base: "90%", md: "90%", lg: "75%"}} minChildWidth={{base:"220px", lg:'150px'}} spacing='10px' className={styles.animated_grid1}>
                <Box data-aos="fade-right" width={{base: "180px", md:"100%", lg: "100%"}} className={styles.animated_grid_div1}>
                    <Image width="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png" alt="alt-img"/>
                </Box>
                <Box data-aos="zoom-in" width={{base: "80%", md:"100%", lg: "100%"}} className={styles.animated_grid_div2}>
                    <Image width="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png" alt="alt-img"/>
                </Box>
                <Box data-aos="zoom-in" width={{base: "80%", md:"100%", lg: "100%"}} className={styles.animated_grid_div3}>
                    <Image width="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png" alt="alt-img"/>
                </Box>
                <Box data-aos="fade-left" width={{base: "180px", md:"100%", lg: "100%"}} className={styles.animated_grid_div4}>
                    <Image width="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png" alt="alt-img"/>
                </Box>
            </SimpleGrid>
            <Box style={{positon: "relative"}}>
                <Text position={{base:"static", md:"relative", lg:"static"}} right={{base:"none", md:"-120px", lg:"none"}} top={{md:"-200px"}} data-aos="zoom-in" className={styles.text2} fontSize={{base:"40px", md:"50px", lg: "70px"}}>Fun, trainer led group classes</Text>
            </Box>
        </Box>
    );
}

export default AnimatedGrids;
