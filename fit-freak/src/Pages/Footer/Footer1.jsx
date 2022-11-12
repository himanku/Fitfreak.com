import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import img from "../Images/ftiFreak-dark-theme.png"

const Footer1 = () => {
    return (
        <Box padding={{base:"20px",md:"70px" }}backgroundColor="#000" color="rgba(255, 255, 255, 0.692)">
            <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(1,1fr)",lg:"repeat(5,1fr)"}} gap={3} justifyContent="flex-start" p="20px">
                <GridItem pr="30px">
                    <Image w="150px" src={img} alt="logo"/>
                    <Text mt="20px">At Fit-Freak, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay</Text>
                </GridItem>
                <GridItem textAlign="left" lineHeight={{base:"23px",md:"30px",lg:"45px"}}>
                    <Text>Fit-Freak for business</Text>
                    <Text>Fit-Freak fanchise</Text>
                    <Text>Corporate partnerships</Text>
                    <Text>Cult pass network</Text>
                    <Text>T&C for business</Text>
                </GridItem>
                <GridItem textAlign="left" lineHeight={{base:"23px",md:"30px",lg:"45px"}}>
                    <Text>Freak partner</Text>
                    <Text>Blogs & Articles</Text>
                    <Text>Security</Text>
                    <Text>Partners & Media</Text>
                    <Text>Youtube</Text>
                </GridItem>
                <GridItem textAlign="left" lineHeight={{base:"23px",md:"30px",lg:"45px"}}>
                    <Text>Contact us</Text>
                    <Text>Privacy policy</Text>
                    <Text>BMI Calculator</Text>
                    <Text>Locations</Text>
                    <Text>Terms & conditions</Text>
                </GridItem>
                <GridItem>
                    <Image mt="20px" w={{base:"150px",md:"200px",lg:"200px"}} display="block" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png" alt="app-store"/>
                    <Image mt="20px" w={{base:"150px",md:"200px",lg:"200px"}} display="block" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png" alt="play-store"/>
                    <Grid m="auto" templateColumns="repeat(5,40px)" gap={2} mt="20px">
                        <Image boxSize="36px" objectFit='cover' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/youtube.svg" alt=""/>
                        <Image boxSize="36px" objectFit='cover' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/fb-page.svg" alt=""/>
                        <Image boxSize="36px" objectFit='cover' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/twitter-page.svg" alt=""/>
                        <Image boxSize="36px" objectFit='cover' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/insta-page.svg" alt=""/>
                        <Image boxSize="36px" objectFit='cover' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/linked-in-page.svg" alt=""/>
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Footer1;
