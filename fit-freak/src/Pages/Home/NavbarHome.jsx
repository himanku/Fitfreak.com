import { Box, Button, Flex, Image, Spacer } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import React from 'react';
import darkimg from "../Images/ftiFreak-dark-theme.png";
import styles from "../Styles/NavbarHome.module.css";
import Overlay from './Overlay';
import Video from './Video';

const NavbarHome = () => {
    return (
        <div style={{position: "relative"}}>  
            <Video/>
            <Flex className={styles.nav_flex}>
                <Flex ml="10px">
                    <img  width="150px" height="30px" src={darkimg} alt="fit-freak-logo"/>
                </Flex>
                <Flex className={styles.links_flex}>
                    <Flex>FITNESS</Flex>
                    <Spacer/>
                    <Flex>CARE</Flex>
                    <Spacer/>
                    <Flex>MIND</Flex>
                    <Spacer/>
                    <Flex><Link to="/store">STORE</Link></Flex>
                </Flex>
                <Flex className={styles.cred_links}>
                    <Box>
                        <Button variant="outline" color="orange">GET APP</Button>
                    </Box>
                    <Spacer/>
                    <Box>
                        <Link to="/login"><Image w='30px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png" alt="profile-logo"/></Link>
                    </Box>
                    <Spacer/>
                    <Box>
                        <Link to="/cart"><Image w='30px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg" alt="cart-logo"/></Link>
                    </Box>
                </Flex>
            </Flex>
            <Overlay/>
        </div>
    );
}

export default NavbarHome;