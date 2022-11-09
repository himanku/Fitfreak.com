import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import styles from "../Styles/Passcard.module.css";

const Passcard = ({text,src}) => {
    return (
        <div>
            <Box className={styles.pass}>
                <Image w={100} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg" alt="cult-pass"/>
                <Image w={100} src={src}/>
                <Text color="grey">{text}</Text>
            </Box>
        </div>
    );
}

export default Passcard;
