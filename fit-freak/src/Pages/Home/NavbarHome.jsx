import { Box, Button, Flex, Image, Spacer } from '@chakra-ui/react';
import {Link, Navigate} from "react-router-dom"
import React from 'react';
import darkimg from "../Images/ftiFreak-dark-theme.png";
import styles from "../Styles/NavbarHome.module.css";
import Overlay from './Overlay';
import Video from './Video';
import Swal from 'sweetalert2';
import {AuthContext} from "../../Context/AuthContext/AuthContextProvider";

const NavbarHome = () => {
    const {state} = React.useContext(AuthContext);

    const successAlert = () => {
        Swal.fire({  
            title: 'Already Logged in',  
            icon: 'success',
            confirmButtonColor: "#ff3278"
          }); 
    }
    const handleClick = () => {
        if(state.isAuth) {
            successAlert()
        }
        return <Navigate to="/login"/>
    }
    return (
        <div style={{position: "relative"}}>  
            <Video/>
            <Flex className={styles.nav_flex}>
                <Flex ml="10px">
                    <Link to="/"><Image width="150px" height="50px" src={darkimg} alt="fit-freak-logo"/></Link>
                </Flex>
                <Flex width={{base:"50%", md:"35%",lg:"35%"}} fontSize={{base:"14px", md:"16px", lg:"18px"}} className={styles.links_flex}>
                    <Flex >FITNESS</Flex>
                    <Flex>CARE</Flex>
                    <Flex>MIND</Flex>
                    <Flex><Link to="/store">STORE</Link></Flex>
                </Flex>
                <Flex className={styles.cred_links}>
                    <Box>
                        <Button display={{base: "none", md:"block", lg: "block"}} variant="outline" color="orange">GET APP</Button>
                    </Box>
                    <Spacer/>
                    <Box onClick={handleClick}>
                        <Link to="/login"><Image w='30px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png" alt="profile-logo"/></Link>
                    </Box>
                    <Spacer/>
                    <Box >
                        <Link to="/cart"><Image w='30px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg" alt="cart-logo"/></Link>
                    </Box>
                </Flex>
            </Flex>
            <Overlay/>
        </div>
    );
}

export default NavbarHome;