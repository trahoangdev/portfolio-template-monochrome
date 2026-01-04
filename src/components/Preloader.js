import React, { useEffect, useState } from 'react';
import '../styles/Preloader.css';

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
        <div className={`preloader ${fadeResult ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="hexagon" aria-label="Loading animation">
                    <div className="hexagon-inner"></div>
                </div>
                <div className="loader-text">
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
