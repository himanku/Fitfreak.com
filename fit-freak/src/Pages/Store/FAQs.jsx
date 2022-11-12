import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import styles from "../Styles/NavbarStore.module.css"

const FAQs = () => {
    return (
        <Box p="20px" backgroundColor="#f2f4f8">
            <Flex justifyContent="space-between" p="10px">
                <Box className={styles.faq}>FAQS</Box>
                <Box color="#ff3278">SEE ALL</Box>
            </Flex>
            <Text className={styles.question} p="10px" textAlign="left">2 QUESTIONS</Text>
            <Accordion allowToggle pb="10px" >
                <AccordionItem color="#6a6a6a">
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            <UnorderedList>
                                <ListItem color="#6a6a6a" fontWeight="600">
                                What is cultsport and what does it offer?
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <AccordionIcon color="#ff3278" />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} w={{base:"80%",md:"60%"}} textAlign='left' ml="10px">
                    cultsport from the house of fit-freak aims to make health easy by providing smart fitness products for the everyday athlete.  Designed to give you the best workout experience, the cultsport product range includes sportswear, at-home workout equipments, bicycles & nutraceutical. 
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem color="#6a6a6a">
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <UnorderedList>
                                <ListItem color="#6a6a6a" fontWeight="600">
                                What makes cultsport special?
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <AccordionIcon color="#ff3278" />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} w={{base:"80%",md:"60%"}} textAlign='left' ml="10px">
                    cultsport has a wide range of smart fitness products across categories. Each of the products is crafted to create you workout exprience better. Be it the moisture-wicking technology in our apparel, extra soft and light insole in our footwear, smart tracking in the outdoor cycle or progress tracker in our home equipment. cultsport aims to give you products that look good and have even better quality. With our post-sale assembly & installation service, we make sure you have a delightful experience from when you add to cart till when it's delivered.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}

export default FAQs;
