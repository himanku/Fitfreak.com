import React from 'react';
import Footer1 from '../Footer/Footer1';
import AutoSlide from './AutoSlide';
import FAQs from './FAQs';
import LeafCarousel from './LeafCarousel';
import NavbarStore from './NavbarStore';

const Store = () => {
    return (
        <div>
            <NavbarStore/>
            <AutoSlide/>
            <LeafCarousel/>
            <FAQs/>
            <Footer1/>
        </div>
    );
}

export default Store;
