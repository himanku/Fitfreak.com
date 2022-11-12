import { Link, useParams } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import ItemImages from "./ItemImages";
import { Box, Button, Flex, Input, InputGroup, InputRightElement, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import NavbarStore from "./NavbarStore";
import styles from "../Styles/NavbarStore.module.css";
import Footer1 from "../Footer/Footer1";
import {CartContext} from "../../Context/CartContext/CartContextProvider";
import {addToCart} from "../../Context/CartContext/action";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const itemAlreadyExists = (id,cartItem) => {
    if(cartItem.find((item)=>item.id===id)) {
      return true;
    }
    return false;
  }

const SingleItem = () => {
  const { id } = useParams();
  const [details, setDetails] = React.useState([]);
  const {state, dispatch} = useContext(CartContext);

  useEffect(() => {
    getData(`http://localhost:8080/bestsellers/${id}`)
    .then((res) => {
        setDetails(res)
    })
    .catch((err)=> console.log(err))
  }, [id]);

   console.log(details);
  return (
    <> 
      <NavbarStore/>
      <Flex mt="50px" mb="40px" direction={{base:"column", md:"row", lg:"row"}}>
        <Box width={{base:"100%",md:"60%",lg:"60%"}}>
            <ItemImages 
                img1={details.img1}
                img2={details.img2}
                img3={details.img3}
                img4={details.img4}
                img5={details.img5}
                img6={details.img6}
                img7={details.img7}
                img8={details.img8}
                img9={details.img9}
                img10={details.img10}
            />
        </Box>
        <Box p="20px" width={{base:"100%",md:"50%",lg:"40%"}}>
            <Text textAlign="left">{details.tag}</Text>
            <Text className={styles.title}>{details.title}</Text>
            <Flex ml='1' mt='1' >
                <Text className={styles.price} p="5px"  >₹ {details.price}</Text>
                <Text className={styles.striked}  p="5px"><s>₹ {details.striked}</s></Text>
                <Text className={styles.discount} p="5px">{details.discount}</Text>
            </Flex>
            <UnorderedList className={styles.list}>
                <ListItem>Fitness just got smarter with the all new cultsport smartbike c2. Designed for the everyday athlete, with the most interactive workout experience on the market, this Bluetooth enabled indoor spin bike with infinite magnetic resistance and a 13.3 lbs flywheel offers serious value. Bring home the full smart training experience:</ListItem>
                <ListItem>Bluetooth enabled: Connects your smartphone or tablet with the cultsport app</ListItem>
                <ListItem>Interactive content: Trainer led sessions, 100+ scenic rides & immersive multiplayer challenges</ListItem>
                <ListItem>Free diet coaching: Free 1:1 dietician consultations and customized 3-month diet plan</ListItem>
                <ListItem>Free Installation & care: Get free on-time installation and servicing right at your doorstep</ListItem>
                <ListItem>Complimentary 1 month cultpass elite subscription</ListItem>
                <ListItem>One bike, many workouts: Access 500+ on-demand videos across Strength, Dance fitness, HIIT, Yoga, and many more</ListItem>
                <ListItem>Warranty: 6 Months Warranty on Manufacturing defects</ListItem>
            </UnorderedList>
            <Text ml="25px" fontSize="13px" textAlign="left">Choose size</Text>
            <Button mt="10px" ml="25px" display="block" borderRadius="20px" colorScheme="orange" variant="outline">ALL</Button>
            <Flex gap={4} mt="15px">
                <button className={styles.addcart}
                        onClick={()=>dispatch(addToCart(details))}
                        disabled={itemAlreadyExists(details.id, state)} 
                        >
                        Add to cart
                </button>
                <button className={styles.viewcart}><Link to="/cart">View cart</Link></button>
            </Flex>
            <Text className={styles.details}>PRODUCT DETAILS</Text>
            <UnorderedList className={styles.detailedlist}>
                <ListItem>Flywheel Weight: 13.3lbs, Max Weight Support: 110Kgs</ListItem>
                <ListItem>Resistance Type: Magnetic, Resistance Level: Stepless</ListItem>
                <ListItem>Phone/Tablet Holder: Present, Seat Adjustment: Horizontal & Vertical</ListItem>
                <ListItem>Locking Pedal: Yes</ListItem>
                <ListItem>Transportation Wheels: Present</ListItem>
                <ListItem>Bluetooth Enabled Spin Bike with cultsport APP connectivity</ListItem>
            </UnorderedList>
            <div className={styles.hr}></div>
            <InputGroup mb="20px" size='md'>
                <Input
                    borderColor="gray.400"
                    pr='4.5rem'
                    placeholder='Enter pincode'
                />
                <InputRightElement width='4.5rem'>
                    <Button variant="ghost" h='1.75rem' size='sm'>
                        CHECK
                    </Button>
                </InputRightElement>
            </InputGroup>
            <UnorderedList className={styles.detailedlist}>
                <ListItem>Free delivery within 5-7 days</ListItem>
                <ListItem>Easy 7 days return available</ListItem>
                <ListItem>10 days exchange available</ListItem>
                <ListItem>Free door-step installation by cultsport team after delivery</ListItem>
                <ListItem color="black" fontWeight="600">To minimise contact between you and the delivery partner, Pay on Delivery option is temporarily disabled.</ListItem>
            </UnorderedList>
        </Box>
      </Flex>
      <Footer1/>
    </>
  );
};


export default SingleItem;
