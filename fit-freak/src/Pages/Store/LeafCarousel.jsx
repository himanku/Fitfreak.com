import { Box, Flex, Image, Skeleton, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styles from "../Styles/Carousel.module.css"

const getData1 = () => {
    return axios.get(`http://localhost:8080/bestsellers`);
}
const getData2 = () => {
    return axios.get(`http://localhost:8080/tshirts`);
}
const getData3 = () => {
    return axios.get(`http://localhost:8080/cycles`);
}
const getData4 = () => {
    return axios.get(`http://localhost:8080/spinbikes`);
}
const getData5 = () => {
    return axios.get(`http://localhost:8080/treadmills`);
}
const getData6 = () => {
    return axios.get(`http://localhost:8080/topwear`);
}
const getData7 = () => {
    return axios.get(`http://localhost:8080/bottomwear`);
}
const getData8 = () => {
    return axios.get(`http://localhost:8080/health&nutrition`);
}

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src='https://www.svgrepo.com/show/109459/left-arrow.svg' alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src='https://www.svgrepo.com/show/83417/right-arrow.svg' alt="nextArrow" {...props} />
  );

const LeafCarousel = () => {
    const [loading, setLoading] = useState(false);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);
    const [data7, setData7] = useState([]);
    const [data8, setData8] = useState([]);

    useEffect(()=> {
        setLoading(true);
        getData1()
        .then((res)=> {
            setLoading(false);
            setData1(res.data);
            console.log(res.data)
        })
        .catch(()=> {
          setData1([]);
        })
        .finally(()=> {
          setLoading(false);
        })
      },[])

    useEffect(()=> {
        setLoading(true);
        getData2()
        .then((res)=> {
          setData2(res.data);
          console.log(res.data)
        })
        .catch(()=> {
          setData2([]);
        })
        .finally(()=> {
          setLoading(false);
        })
      },[])

    useEffect(()=> {
        setLoading(true);
        getData3()
        .then((res)=> {
          setData3(res.data);
          console.log(res.data)
        })
        .catch(()=> {
          setData3([]);
        })
        .finally(()=> {
          setLoading(false);
        })
      },[])

    useEffect(()=> {
        setLoading(true);
        getData4()
        .then((res)=> {
          setData4(res.data);
          console.log(res.data)
        })
        .catch(()=> {
          setData4([]);
        })
        .finally(()=> {
          setLoading(false);
        })
      },[])

    useEffect(()=> {
        setLoading(true);
        getData5()
        .then((res)=> {
          setData5(res.data);
          console.log(res.data)
        })
        .catch(()=> {
          setData5([]);
        })
        .finally(()=> {
          setLoading(false);
        })
      },[])

    useEffect(()=> {
        setLoading(true);
        getData6()
        .then((res)=> {
          setData6(res.data);
          console.log(res.data)
        })
        .catch(()=> {
          setData6([]);
        })
        .finally(()=> {
          setLoading(false);
        })
      },[])

    useEffect(()=> {
        setLoading(true);
        getData7()
        .then((res)=> {
          setData7(res.data);
          console.log(res.data)
        })
        .catch(()=> {
          setData7([]);
        })
        .finally(()=> {
          setLoading(false);
        })
      },[])

    useEffect(()=> {
        setLoading(true);
        getData8()
        .then((res)=> {
          setData8(res.data);
          console.log(res.data)
        })
        .catch(()=> {
          setData8([]);
        })
        .finally(()=> {
          setLoading(false);
        })
      },[])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      if(loading) {
        return (
          <Stack my={20}>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
            <Skeleton height="40px"/>
          </Stack>
        )
      }
    
    return (
        <Box mt="50px">
            <Flex width="90%" margin="auto">
                <Flex p="20px" className={styles.carousel}>BESTSELLERS</Flex>
                <Flex p="20px">VIEW ALL</Flex>
            </Flex>
            <Slider {...settings} style={{width:"90%", margin: "auto", marginBottom:"40px"}}>
            {
                data1 && data1.map((item)=> (
                    <Flex ml="20px" key={item.id} justifyContent="center">
                        <Box width={{base:"200px", md:"250px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                            <Box width={{base:"170px", md:"220px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                                <Link to={`/store/${item.id}`}><Image boxSize='100%' objectFit="cover"
                                        src={item.img1} 
                                        alt={item.title}
                                    /></Link>
                            </Box>
                            <Box textAlign="left" fontSize={{base:"12px", md:"14px", lg:"16px"}}>
                                <Text color="rgb( 0 0 0 / 60%)" ml='2' mt='2' fontSize= "16px" lineHeight= "18px" marginBottom= "5px" >{item.tag}</Text>
                                <Text  className={styles.title} ml='2' mt='3' letterSpacing= '1px' >{item.title}</Text>
                                <Flex ml='1' mt='1' >
                                    <Text className={styles.price} p="5px"  >₹ {item.price}</Text>
                                    <Text className={styles.striked}  p="5px"><s>₹ {item.striked}</s></Text>
                                    <Text className={styles.discount} p="5px">{item.discount}</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                ))
            }
            </Slider>
            <Flex width="90%" margin="auto">
                <Flex p="20px" className={styles.carousel}>T-SHIRTS</Flex>
                <Flex p="20px">VIEW ALL</Flex>
            </Flex>
            <Slider {...settings} style={{width:"90%", margin: "auto", marginBottom:"40px"}}>
            {
                data2 && data2.map((item)=> (
                    <Flex ml="20px" key={item.id} justifyContent="center">
                        <Box width={{base:"200px", md:"250px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                            <Box width={{base:"170px", md:"220px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                                <Link to={`/store/${item.id}`}><Image boxSize='100%' objectFit="cover"
                                        src={item.img1} 
                                        alt={item.title}
                                    /></Link>
                            </Box>
                            <Box textAlign="left" fontSize={{base:"12px", md:"14px", lg:"16px"}}>
                                <Text color="rgb( 0 0 0 / 60%)" ml='2' mt='2' fontSize= "16px" lineHeight= "18px" marginBottom= "5px" >{item.tag}</Text>
                                <Text  className={styles.title} ml='2' mt='3' letterSpacing= '1px' >{item.title}</Text>
                                <Flex ml='1' mt='1' >
                                    <Text className={styles.price} p="5px"  >₹ {item.price}</Text>
                                    <Text className={styles.striked}  p="5px"><s>₹ {item.striked}</s></Text>
                                    <Text className={styles.discount} p="5px">{item.discount}</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                ))
            }
            </Slider>
            <Flex width="90%" margin="auto">
                <Flex p="20px" className={styles.carousel}>CYCLES</Flex>
                <Flex p="20px">VIEW ALL</Flex>
            </Flex>
            <Slider {...settings} style={{width:"90%", margin: "auto", marginBottom:"40px"}}>
            {
                data3 && data3.map((item)=> (
                    <Flex ml="20px" key={item.id} justifyContent="center">
                        <Box width={{base:"200px", md:"250px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                            <Box width={{base:"170px", md:"220px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                                <Link to={`/store/${item.id}`}><Image boxSize='100%' objectFit="cover"
                                        src={item.img1} 
                                        alt={item.title}
                                    /></Link>
                            </Box>
                            <Box textAlign="left" fontSize={{base:"12px", md:"14px", lg:"16px"}}>
                                <Text color="rgb( 0 0 0 / 60%)" ml='2' mt='2' fontSize= "16px" lineHeight= "18px" marginBottom= "5px" >{item.tag}</Text>
                                <Text  className={styles.title} ml='2' mt='3' letterSpacing= '1px' >{item.title}</Text>
                                <Flex ml='1' mt='1' >
                                    <Text className={styles.price} p="5px"  >₹ {item.price}</Text>
                                    <Text className={styles.striked}  p="5px"><s>₹ {item.striked}</s></Text>
                                    <Text className={styles.discount} p="5px">{item.discount}</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                ))
            }
            </Slider>
            <Flex width="90%" margin="auto">
                <Flex p="20px" className={styles.carousel}>SPINBIKES</Flex>
                <Flex p="20px">VIEW ALL</Flex>
            </Flex>
            <Slider {...settings} style={{width:"90%", margin: "auto", marginBottom:"40px"}}>
            {
                data4 && data4.map((item)=> (
                    <Flex ml="20px" key={item.id} justifyContent="center">
                        <Box width={{base:"200px", md:"250px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                            <Box width={{base:"170px", md:"220px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                                <Link to={`/store/${item.id}`}><Image boxSize='100%' objectFit="cover"
                                        src={item.img1} 
                                        alt={item.title}
                                    /></Link>
                            </Box>
                            <Box textAlign="left" fontSize={{base:"12px", md:"14px", lg:"16px"}}>
                                <Text color="rgb( 0 0 0 / 60%)" ml='2' mt='2' fontSize= "16px" lineHeight= "18px" marginBottom= "5px" >{item.tag}</Text>
                                <Text  className={styles.title} ml='2' mt='3' letterSpacing= '1px' >{item.title}</Text>
                                <Flex ml='1' mt='1' >
                                    <Text className={styles.price} p="5px"  >₹ {item.price}</Text>
                                    <Text className={styles.striked}  p="5px"><s>₹ {item.striked}</s></Text>
                                    <Text className={styles.discount} p="5px">{item.discount}</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                ))
            }
            </Slider>
            <Flex width="90%" margin="auto">
                <Flex p="20px" className={styles.carousel}>TREADMILLS</Flex>
                <Flex p="20px">VIEW ALL</Flex>
            </Flex>
            <Slider {...settings} style={{width:"90%", margin: "auto", marginBottom:"40px"}}>
            {
                data5 && data5.map((item)=> (
                    <Flex ml="20px" key={item.id} justifyContent="center">
                        <Box width={{base:"200px", md:"250px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                            <Box width={{base:"170px", md:"220px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                                <Link to={`/store/${item.id}`}><Image boxSize='100%' objectFit="cover"
                                        src={item.img1} 
                                        alt={item.title}
                                    /></Link>
                            </Box>
                            <Box textAlign="left" fontSize={{base:"12px", md:"14px", lg:"16px"}}>
                                <Text color="rgb( 0 0 0 / 60%)" ml='2' mt='2' fontSize= "16px" lineHeight= "18px" marginBottom= "5px" >{item.tag}</Text>
                                <Text  className={styles.title} ml='2' mt='3' letterSpacing= '1px' >{item.title}</Text>
                                <Flex ml='1' mt='1' >
                                    <Text className={styles.price} p="5px"  >₹ {item.price}</Text>
                                    <Text className={styles.striked}  p="5px"><s>₹ {item.striked}</s></Text>
                                    <Text className={styles.discount} p="5px">{item.discount}</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                ))
            }
            </Slider>
            <Flex width="90%" margin="auto">
                <Flex p="20px" className={styles.carousel}>TOPWEAR</Flex>
                <Flex p="20px">VIEW ALL</Flex>
            </Flex>
            <Slider {...settings} style={{width:"90%", margin: "auto", marginBottom:"40px"}}>
            {
                data6 && data6.map((item)=> (
                    <Flex ml="20px" key={item.id} justifyContent="center">
                        <Box width={{base:"200px", md:"250px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                            <Box width={{base:"170px", md:"220px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                                <Link to={`/store/${item.id}`}><Image boxSize='100%' objectFit="cover"
                                        src={item.img1} 
                                        alt={item.title}
                                    /></Link>
                            </Box>
                            <Box textAlign="left" fontSize={{base:"12px", md:"14px", lg:"16px"}}>
                                <Text color="rgb( 0 0 0 / 60%)" ml='2' mt='2' fontSize= "16px" lineHeight= "18px" marginBottom= "5px" >{item.tag}</Text>
                                <Text  className={styles.title} ml='2' mt='3' letterSpacing= '1px' >{item.title}</Text>
                                <Flex ml='1' mt='1' >
                                    <Text className={styles.price} p="5px"  >₹ {item.price}</Text>
                                    <Text className={styles.striked}  p="5px"><s>₹ {item.striked}</s></Text>
                                    <Text className={styles.discount} p="5px">{item.discount}</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                ))
            }
            </Slider>
            <Flex width="90%" margin="auto">
                <Flex p="20px" className={styles.carousel}>BOTTOMWEAR</Flex>
                <Flex p="20px">VIEW ALL</Flex>
            </Flex>
            <Slider {...settings} style={{width:"90%", margin: "auto", marginBottom:"40px"}}>
            {
                data7 && data7.map((item)=> (
                    <Flex ml="20px" key={item.id} justifyContent="center">
                        <Box width={{base:"200px", md:"250px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                            <Box width={{base:"170px", md:"220px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                                <Link to={`/store/${item.id}`}><Image boxSize='100%' objectFit="cover"
                                        src={item.img1} 
                                        alt={item.title}
                                    /></Link>
                            </Box>
                            <Box textAlign="left" fontSize={{base:"12px", md:"14px", lg:"16px"}}>
                                <Text color="rgb( 0 0 0 / 60%)" ml='2' mt='2' fontSize= "16px" lineHeight= "18px" marginBottom= "5px" >{item.tag}</Text>
                                <Text  className={styles.title} ml='2' mt='3' letterSpacing= '1px' >{item.title}</Text>
                                <Flex ml='1' mt='1' >
                                    <Text className={styles.price} p="5px"  >₹ {item.price}</Text>
                                    <Text className={styles.striked}  p="5px"><s>₹ {item.striked}</s></Text>
                                    <Text className={styles.discount} p="5px">{item.discount}</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                ))
            }
            </Slider>
            <Flex width="90%" margin="auto">
                <Flex p="20px" className={styles.carousel}>HEALTH AND NUTRITION</Flex>
                <Flex p="20px">VIEW ALL</Flex>
            </Flex>
            <Slider {...settings} style={{width:"90%", margin: "auto", marginBottom:"40px"}}>
            {
                data8 && data8.map((item)=> (
                    <Flex ml="20px" key={item.id} justifyContent="center">
                        <Box width={{base:"200px", md:"250px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                            <Box width={{base:"170px", md:"220px",lg:"280px"}} height={{base:"200",md:"300",lg:"400px"}}>
                                <Link to={`/store/${item.id}`}><Image boxSize='100%' objectFit="cover"
                                        src={item.img1} 
                                        alt={item.title}
                                    /></Link>
                            </Box>
                            <Box textAlign="left" fontSize={{base:"12px", md:"14px", lg:"16px"}}>
                                <Text color="rgb( 0 0 0 / 60%)" ml='2' mt='2' fontSize= "16px" lineHeight= "18px" marginBottom= "5px" >{item.tag}</Text>
                                <Text  className={styles.title} ml='2' mt='3' letterSpacing= '1px' >{item.title}</Text>
                                <Flex ml='1' mt='1' >
                                    <Text className={styles.price} p="5px"  >₹ {item.price}</Text>
                                    <Text className={styles.striked}  p="5px"><s>₹ {item.striked}</s></Text>
                                    <Text className={styles.discount} p="5px">{item.discount}</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                ))
            }
            </Slider>
        </Box>
    );
}

export default LeafCarousel;
