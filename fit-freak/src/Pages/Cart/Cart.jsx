import { Box, Flex, Text, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, useDisclosure, AlertDialogOverlay, Button } from '@chakra-ui/react';
import React, {useContext} from 'react';
import { checkout, removeFromCart } from "../../Context/CartContext/action";
import { CartContext } from '../../Context/CartContext/CartContextProvider';
import NavbarStore from '../Store/NavbarStore';
import ItemDisplay from './ItemDIsplay';
import styles from "../Styles/NavbarStore.module.css"
import Footer1 from '../Footer/Footer1';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const placedAlert = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your order has been placed',
        showConfirmButton: true,
        timer: 20000,
        confirmButtonText: "Continue shopping",
        confirmButtonColor: "#ff3278"
      })
}

const Cart = () => {
    const {state, dispatch} = useContext(CartContext);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const navigate = useNavigate();
    const cancelRef = React.useRef();
    const handleCheckout = () => {
        dispatch(checkout());
        placedAlert();
        navigate("/store");
        onClose();
    }
    console.log(state)

    return (
        <div>
        <NavbarStore/>
            <Flex gap="10px" mt="60px" mb="40px" direction={{base:"column", md:"row", lg:"row"}}>
                <Box width={{base:"100%",md:"60%",lg:"50%"}} >
                    <Box className={styles.border} m="auto" mt="20px">
                    {state.map((item)=>(
                        <ItemDisplay 
                            img={item.img1}
                            title={item.title}
                            striked={item.striked}
                            tag={item.tag}
                            price={item.price}
                            id={item.id}
                            onClick={()=>dispatch(removeFromCart(item.id))}/>
                    ))}
                    </Box>
                </Box>
                <Box height="60vh" width={{base:"100%",md:"50%",lg:"50%"}} >
                    <Box pt={4} w="90%" m="auto" h="100vh">
                        <Text fontSize="25px" fontWeight="600" textAlign={{base:"center",md:"left"}}>ORDER SUMMARY</Text>
                        <div className={styles.hr}></div>
                        <Flex color="rgb(107, 107, 107)" fontWeight="500" mt={4} pl="15px" pr="30px" justifyContent="space-between">
                            <Text>Price</Text>
                            <Text>₹ {Math.round(state.reduce((a,c)=>a+c.price,0))}</Text>
                        </Flex>
                        <Flex color="rgb(107, 107, 107)" fontWeight="500" mt={1} pl="15px" pr="30px" justifyContent="space-between">
                            <Text>(-) Total Discount</Text>
                            <Text>{((((Math.round(state.reduce((a,c)=>a+c.striked,0))-Math.round(state.reduce((a,c)=>a+c.price,0))))/Math.round(state.reduce((a,c)=>a+c.striked,0)))*100).toFixed(2)}%</Text>
                        </Flex>
                        <Flex color="#ff3278" fontWeight="500" pl="15px" mt={1} pr="30px" justifyContent="space-between">
                            <Text>Congratulations! You saved</Text>
                            <Text>₹ {Math.round(state.reduce((a,c)=>a+c.striked,0))}</Text>
                        </Flex>
                        <Flex color="black" fontWeight="700" pl="15px" mt={4} pr="30px" justifyContent="space-between">
                            <Text>Total Payable</Text>
                            <Text>₹ {Math.round(state.reduce((a,c)=>a+c.price,0))}</Text>
                        </Flex>
                        <button className={styles.checkout} onClick={onOpen}>Proceed to Checkout</button>
                        <AlertDialog
                            isOpen={isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}
                        >
                            <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Place Order
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                Are you sure you want to place this order? 
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme='red' onClick={handleCheckout}  ml={3}>
                                    Yes
                                </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                    </Box>
                </Box>
            </Flex>
            <Footer1/>
        </div>
    );
}

export default Cart;
