//import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import {  ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Input, Button, InputGroup, InputRightElement, Divider, Flex, Image } from '@chakra-ui/react';
import React, {useState, useContext} from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { loginFailureAction, loginSuccessAction } from "../../Context/AuthContext/action"
import styles from "../Styles/Login.module.css"
import {FcGoogle} from "react-icons/fc";
import {BsApple} from "react-icons/bs"
import darkimg from "../Images/ftiFreak-dark-theme.png";
import {AuthContext} from "../../Context/AuthContext/AuthContextProvider";
import Swal from 'sweetalert2';

const Login = () => {
    const [show, setShow] = React.useState(false);
    const {state,dispatch} = useContext(AuthContext);
    const [loginDetails, setLoginDetails] = useState({
      email:"",
      password:"",
    });

    const successAlert2 = () => {
        Swal.fire({  
            title: 'Login Successful',  
            icon: 'success',
            confirmButtonColor: "#ff3278"
          }); 
    }
    const failureAlert = () => {
        Swal.fire ({
            title: "Wrong Credentials",
            text: "Please try again",
            icon: "error",
            confirmButtonColor: "#ff3278"
        })
    }

    const handleChange = (e) => {
      const {name, value} = e.target;
      setLoginDetails({...loginDetails,[name]: value})
    }
    const handleLogin = () => {
      axios({
        method: "POST",
        url: "https://reqres.in/api/login",
        data: loginDetails,
      })
      .then((res)=> {
        dispatch(loginSuccessAction(res.data.token))
        successAlert2();
      })
      .catch(()=> {
        dispatch(loginFailureAction())
        failureAlert();
      })
      
    }
    const iconToggle = () => {
        setShow(!show);
    }
    if(state.isAuth) {
      return (
        <>
        <Navigate to="/"/>
        </>
      )
    }
    const {email,password} = loginDetails;
    return (
        <Flex className={styles.login} >
            <Image position="absolute" top="10px" left="20px" width="150px" height="50px" src={darkimg} alt="fit-freak-logo"/>
            <Flex border="1px solid rgba(110, 110, 110, 0.151)" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="20px" width="60%" height="70vh" backgroundSize="cover" backgroundImage="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1000,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/we_are_cult_new.svg">
                <Box width="100%"></Box>
                <Box width="100%" border="1px solid rgba(110, 110, 110, 0.151)" borderTopRightRadius="20px" borderBottomRightRadius="20px" >
                    <Box padding='12px 40px 20px 40px' w='400px' h="100%" margin='auto' mt='4' position='relative' boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px'>
                    <Image width="150px" height="50px" src={darkimg} alt="fit-freak-logo"/>
                        <Button 
                            m='auto'
                            mt='4'
                            size='md'
                            height='48px'
                            width='80%'
                            display='block'
                            fontSize='1rem'
                            color='white'
                            fontWeight='normal'
                            border='1px solid #bdbdbd'
                            leftIcon={<FcGoogle/>}
                            variant="ghost"
                            >
                            Continue with Google
                        </Button>
                        <Button 
                            m='auto'
                            mt='2'
                            size='md'
                            height='48px'
                            width='80%'
                            display='block'
                            fontSize='1rem'
                            color='white'
                            fontWeight='normal'
                            border='1px solid #bdbdbd'
                            leftIcon={<BsApple/>}
                            variant="ghost"
                            >
                            Continue with Apple
                        </Button>
                        <Divider mt='4'/>
                        <Box w='10%' margin='auto' mt='-14px' zIndex='3' color='#9397a0' fontSize='1.1667em'>OR</Box>
                        <Input mt='4' 
                            borderColor='#bdbdbd' 
                            focusBorderColor='orange'
                            color="white" 
                            placeholder='ENTER EMAIL ADDRESS' 
                            name='email'
                            value={email}
                            onChange={handleChange}
                            _placeholder={{ fontWeight: "600", color: 'white' }}
                            />
                        <InputGroup size='md'>
                            <Input
                            borderColor='#bdbdbd'
                                focusBorderColor='black'
                                pr='4.5rem'
                                mt='4'
                                color="white"
                                type={show ? 'text' : 'password'}
                                placeholder='ENTER PASSWORD'
                                name='password'
                                value={password}
                                onChange={handleChange}
                                _placeholder={{ fontWeight: "600", color: 'white' }}
                                
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' mt='8' onClick={iconToggle}>
                                {show ?  <ViewOffIcon/> : <ViewIcon/> }
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button
                            onClick={handleLogin}
                            fontFamily='sans-serif'
                            size='md'
                            height='48px'
                            width='100%'
                            backgroundColor='rgb(235, 50, 17)'
                            color='white'
                            fontSize='18px'
                            mt='8'
                            _hover={{ bg: "gray.300", color: "blue.900", border: "1px solid blue" }}
                            >
                            Log In
                        </Button>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Login;
