import { Box } from '@chakra-ui/layout';
import React from 'react';
import Footer1 from '../Footer/Footer1';
import AnimatedGrids from './AnimatedGrids';
import AnimatedImages from './AnimatedImages';
import CultQuote from './CultQuote';
import Family from './Family';
import NavbarHome from './NavbarHome';
import Passcards from './Passcards';

const Home = () => {
    return (
        <Box backgroundColor="#171A26" width="100%">
            <NavbarHome/>
            <Passcards/>
            <AnimatedImages/>
            <AnimatedGrids/>
            <Family/>
            <CultQuote/>
            <Footer1/>
        </Box>
    );
}

export default Home;
