import React from "react";
import preloader from '../../../assets/images/preloader.svg';
import styles from './Preloader.module.css'


let Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} className={styles.preloaderImage} />
        </div>
    )
}

export default Preloader;