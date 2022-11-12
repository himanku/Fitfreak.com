import { Box, CloseButton, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ItemDisplay = ({img,tag,price,striked, title, onClick}) => {
    return (
        <Grid w="70%" templateColumns="repeat(1, 1fr)" m="auto" borderTop="1px solid black">
            <Flex pt="20px" pb="20px" justifyContent="center" gap="20px">
                <Box w="30%" whiteSpace="no-wrap">
                    <Image borderRadius="10px" w="100%" src={img}/>
                </Box>
                <Box w="70%" textAlign="left">
                    <Flex justifyContent="space-between">
                        <Text display="block" fontSize="14px">{tag}</Text>
                        <CloseButton onClick={onClick}/>
                    </Flex>
                    <Text>{title}</Text>
                    <Text mt={1}>Size: ALL</Text>
                    <Flex mt={1} alignItems="center">
                        <Text fontSize="18px" fontWeight="600">₹ {price}</Text>
                        <Text ml="10px"><s>₹ {striked}</s></Text>
                    </Flex>
                    <Flex p={1} mt={4} w="25%" alignItems="center" border="1px solid #ff3278" borderRadius="10px" justifyContent="center">
                        <button color="#ff3278">-</button>
                        <Text ml="10px" mr="10px">1</Text>
                        <button color="#ff3278">+</button>
                    </Flex>
                </Box>
            </Flex>
        </Grid>
    );
}

export default ItemDisplay;
