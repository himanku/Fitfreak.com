import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Passcard from './Passcard';
import styles from "../Styles/Passcard.module.css"

const Passcards = () => {
    return (
        <SimpleGrid minChildWidth='250px' spacing='10px' className={styles.grid}>
            <Passcard 
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                    text="Unlimited access to group classes, all gyms and at-home workouts"
            />
            <Passcard 
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
                    text="Unlimited access to all PRO gyms and at-home workouts"
            />
            <Passcard 
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
                    text="Unlimited access to at-home workouts with calorie tracking"
            />
        </SimpleGrid>
    );
}

export default Passcards;
