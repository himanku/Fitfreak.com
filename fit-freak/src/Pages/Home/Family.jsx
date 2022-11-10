import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import styles from "../Styles/Family.module.css"

const Family = () => {
    React.useEffect(()=> {
        Aos.init({duration: 1000})
    },[])
    return (
        <Box className={styles.family}>
            <Box>
                <Text data-aos="zoom-in" className={styles.family_text} fontSize={{base:"40px", md:"50px", lg: "70px"}}>Join the cult family</Text>
            </Box>
            <SimpleGrid width={{base:"90%", md:"90%", lg:"70%"}} m="auto" mt="50px" columns={{base:"1", lg:"2", md:"2"}} spacing={10}>
                <Box className={styles.background1} width={{base:"450px", md:"350px", lg:"460px"}} height={{base:"300px", md:"270px", lg:"310px"}} borderRadius="20px" padding={4}>
                    <Text  fontSize={{base:"40px", md:"40px", lg:"50px"}} display="block" color="white" letterSpacing= "0.01px" lineHeight="60px">Careers at Cult</Text>
                    <Image display="block" m="auto" mt={10} width="80%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_600,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/join-the-cult/career-icons-v2.png" alt="fam-1"/>
                    <Button colorScheme='messenger' variant='ghost'>LEARN MORE</Button>
                </Box>
                <Box  className={styles.background2} width={{base:"450px", md:"350px", lg:"460px"}} height={{base:"300px", md:"270px", lg:"310px"}} borderRadius="20px" padding={4}>
                    <Text className={styles.gradient} fontSize={{base:"30px", md:"30px", lg:"40px"}} >Fit-Freak franchise</Text>
                    <Text className={styles.gradient} fontSize={{base:"30px", md:"30px", lg:"40px"}} >opportunities</Text>
                    <Text className={styles.text} fontSize={{base:"20px", md:"15px", lg:"22px"}}>Partner with the largest fitness brand in India</Text>
                    <Button mt="20px" colorScheme='messenger' variant='ghost'>LEARN MORE</Button>
                </Box>
            </SimpleGrid>
        </Box>
    );
}

export default Family;

