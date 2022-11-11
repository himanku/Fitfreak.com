import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AutoSlide = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return (
        <div>
            <Slider {...settings} style={{width:"100%", margin: "auto", marginTop: "50px"}} >
                        <Box>
                            <Image w="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/529881d8-bf67-415a-8a87-a971e249a6f9.jpg"/>
                        </Box>
                        <Box>
                            <Image w="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/adbb2fa3-dd16-495f-964a-54ce7af1838f.jpg"/>
                        </Box>
                        <Box>
                            <Image w="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/86407fda-f7d0-4aaf-99bd-bafc498f4217.jpg"/>
                        </Box>
            </Slider>
        </div>
    );
}

export default AutoSlide;
