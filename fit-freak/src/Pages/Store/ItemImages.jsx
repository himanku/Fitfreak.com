import { Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';

const ItemImages = ({img1,img2,img3,img4,img5,img6,img7,img8,img9,img10}) => {
    return (
        <div>
            <Grid templateColumns={{base:"repeat(2,1fr)", sm:"repeat(2,1fr)", md:"repeat(2,1fr)", lg:"repeat(2,1fr)"}} gap="20px">
                <GridItem>
                    <Image src={img1}/>
                </GridItem>
                <GridItem>
                    <Image src={img2}/>
                </GridItem>
                <GridItem>
                    <Image src={img3}/>
                </GridItem>
                <GridItem>
                    <Image src={img4}/>
                </GridItem>
                <GridItem>
                    <Image src={img5}/>
                </GridItem>
                <GridItem>
                    <Image src={img6}/>
                </GridItem>
                <GridItem>
                    <Image src={img7}/>
                </GridItem>
                <GridItem>
                    <Image src={img8}/>
                </GridItem>
                <GridItem>
                    <Image src={img9}/>
                </GridItem>
                <GridItem>
                    <Image src={img10}/>
                </GridItem>
            </Grid>
        </div>
    );
}

export default ItemImages;
