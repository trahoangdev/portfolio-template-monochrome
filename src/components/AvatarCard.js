import React, { useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import { config } from '../data/config';
import ImageWithFallback from './ImageWithFallback';

const AvatarCard = () => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
        setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 1 });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setGlare(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <div className={styles.avatar}>
            <div
                className={styles.card}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
            >
                {/* Glare Effect */}
                <div
                    className={styles.glare}
                    style={{
                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.3) 0%, transparent 80%)`,
                        opacity: glare.opacity
                    }}
                ></div>

                {!imageLoaded && <div className={styles.skeletonLoading} style={{ height: '450px', width: '100%', borderRadius: '20px' }}></div>}
                <ImageWithFallback
                    src="/avatar.webp"
                    alt="Avatar"
                    onLoad={() => setImageLoaded(true)}
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                />
                <div className={styles.info}>
                    <div>{config.role}</div>
                    <div>{config.nationality}</div>
                    <div>{config.birthday}</div>
                    <div>{config.gender}</div>
                </div>
            </div>
        </div>
    );
};

export default AvatarCard;
