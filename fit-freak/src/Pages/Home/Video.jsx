import React from 'react';
import styles from "../Styles/Video.module.css"

const Video = () => {
    return (
        <div className={styles.video}>
            <video className={styles.content} autoPlay loop playsInline muted src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4">
            </video>
        </div>
    );
}

export default Video;
