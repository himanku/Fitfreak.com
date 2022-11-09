import React from 'react';
import AnimatedGrids from './AnimatedGrids';
import AnimatedImages from './AnimatedImages';
import Family from './Family';
import NavbarHome from './NavbarHome';
import Passcards from './Passcards';

const Home = () => {
    return (
        <div style={{backgroundColor: "#171A26"}}>
            <NavbarHome/>
            <Passcards/>
            <AnimatedImages/>
            <AnimatedGrids/>
            <Family/>
        </div>
    );
}

export default Home;
