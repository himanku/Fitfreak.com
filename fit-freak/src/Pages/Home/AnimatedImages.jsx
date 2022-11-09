import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import styles from "../Styles/AnimatedImg.module.css";

const AnimatedImages = () => {
    React.useEffect(()=> {
        Aos.init({duration: 1000})
    },[])
    return (
        <Box className={styles.background}>
            <SimpleGrid minChildWidth='350px' spacing='20px' className={styles.animated1}>
                <Box width={{base: "350px", md:"350px", lg: "478px"}} data-aos="fade-right" className={styles.animated_div1}>
                    <Image width="100%"  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png" alt="yoga-1"/>
                </Box>
                <Box width={{base: "350px", md:"350px", lg: "478px"}} data-aos="fade-left" className={styles.animated_div2}>
                    <Image width="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png" alt="yoga-2"/>
                </Box>
            </SimpleGrid>
            <Text data-aos="zoom-in" className={styles.text1} fontSize={{base:"40px", md:"50px", lg: "70px"}}>One membership for all your fitness needs</Text>
            <SimpleGrid minChildWidth='350px' spacing='20px' className={styles.animated2}>
                <Box width={{base: "350px", md:"350px", lg: "320px"}} data-aos="fade-right" className={styles.animated_div1}>
                    <Image width="100%"  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png" alt="yoga-1"/>
                </Box>
                <Box width={{base: "350px", md:"350px", lg: "450px"}} data-aos="slide-up" className={styles.animated_divx}>
                    <Image width="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png" alt="yoga-2"/>
                </Box>
                <Box width={{base: "350px", md:"350px", lg: "320px"}} data-aos="fade-left" className={styles.animated_div2}>
                    <Image width="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png" alt="yoga-2"/>
                </Box>
            </SimpleGrid>
        </Box>
       
    );
}

export default AnimatedImages;
