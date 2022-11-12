import { Box, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {HamburgerIcon} from "@chakra-ui/icons";
import React from 'react';
import lightImg from "../Images/light-theme-FitFreak.png";
import styles from "../Styles/NavbarStore.module.css";
import { Link } from 'react-router-dom';

const NavbarStore = () => {
    return (
        <div>
            <Flex className={styles.NavbarStore}>
                <Box pl="10px">
                    <Image width="150px" height="50px" src={lightImg} alt="logo"/>
                </Box>
                <Flex className={styles.links} display={{base: "none", md: "none", lg: "flex"}}>
                    <Box p="10px">Best Sellers</Box>
                    <Box p="10px">Just Launched</Box>
                    <Box p="10px">Men</Box>
                    <Box p="10px">Women</Box>
                    <Box p="10px">Footwear</Box>
                    <Box p="10px">Cardio</Box>
                    <Box p="10px">Cycles</Box>
                    <Box p="10px">Accessories</Box>
                    <Box p="10px">Supplements</Box>
                    <Box p="10px">Equipments</Box>
                </Flex>
                <Flex pr="10px" justifyContent="space-between" width={{base:"150px", md: "150px", lg:"100px"}} alignItems="center">
                    <Box>
                        <Link to="/login"><Image w="26px" h="26px" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/cultsport/prod/Profile.svg" alt="profile"/></Link>
                    </Box>
                    <Box>
                        <Link to="/cart"><Image w='24px' src="https://static.cure.fit/assets/images/cart-icon-new.svg" alt="cart"/></Link>
                    </Box>
                    <Box display={{base: "block", md: "block", lg: "none"}}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem >
                                BESTSELLERS
                                </MenuItem>
                                <MenuItem >
                                JUST LAUNCHED
                                </MenuItem>
                                <MenuItem >
                                MEN
                                </MenuItem>
                                <MenuItem >
                                WOMEN
                                </MenuItem>
                                <MenuItem >
                                FOOTWEAR
                                </MenuItem>
                                <MenuItem >
                                CARDIO
                                </MenuItem>
                                <MenuItem >
                                CYCLES
                                </MenuItem>
                                <MenuItem >
                                ACCESSORIES
                                </MenuItem>
                                <MenuItem >
                                SUPPLEMENTS
                                </MenuItem>
                                <MenuItem >
                                EQUIPMENTS
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>
        </div>
    );
}

export default NavbarStore;
