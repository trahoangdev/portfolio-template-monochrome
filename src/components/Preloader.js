import React, { useEffect, useState } from 'react';
import styles from '../styles/Preloader.module.css';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeResult, setFadeResult] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeResult(true);
            setTimeout(() => setIsLoading(false), 500); // Complete removal after fade out
        }, 2000); // Duration of the loader

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`${styles.preloader} ${fadeResult ? styles.fadeOut : ''}`}>
            <div className={styles.content}>
                <div className={styles.hexagon} aria-label="Loading animation">
                    <div className={styles.inner}></div>
                </div>
                <div className={styles.text}>
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
