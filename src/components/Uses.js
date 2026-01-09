import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLaptopCode, faKeyboard, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Uses.module.css';
import { config } from '../data/config';

const Uses = () => {
    useEffect(() => {
        document.title = `Uses | ${config.name}`;
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.usesPage}>
            <div className={styles.container}>
                <Link to="/" className={styles.backBtn}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
                </Link>

                <div className={styles.header}>
                    <h1>Uses</h1>
                    <p>A curated list of the tech, hardware, and software I use daily.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.category}>
                        <h2><FontAwesomeIcon icon={faLaptopCode} /> Hardware</h2>
                        <ul>
                            <li>
                                <strong>Laptop</strong>
                                <span>MacBook Pro 14" M1 Pro (32GB RAM)</span>
                            </li>
                            <li>
                                <strong>Monitor</strong>
                                <span>LG UltraFine 4K 32" Ergo</span>
                            </li>
                            <li>
                                <strong>Mouse</strong>
                                <span>Logitech MX Master 3S</span>
                            </li>
                            <li>
                                <strong>Headphones</strong>
                                <span>Sony WH-1000XM5</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.category}>
                        <h2><FontAwesomeIcon icon={faKeyboard} /> Peripherals</h2>
                        <ul>
                            <li>
                                <strong>Keyboard</strong>
                                <span>Keychron Q1 Pro (Gateron Brown)</span>
                            </li>
                            <li>
                                <strong>Webcam</strong>
                                <span>Logitech C920 HD Pro</span>
                            </li>
                            <li>
                                <strong>Desk</strong>
                                <span>IKEA Standing Desk</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.category}>
                        <h2><FontAwesomeIcon icon={faMicrochip} /> Software</h2>
                        <ul>
                            <li>
                                <strong>Editor</strong>
                                <span>VS Code (Dracula Theme)</span>
                            </li>
                            <li>
                                <strong>Terminal</strong>
                                <span>Warp / iTerm2</span>
                            </li>
                            <li>
                                <strong>Browser</strong>
                                <span>Arc Browser</span>
                            </li>
                            <li>
                                <strong>Productivity</strong>
                                <span>Notion, Raycast, Figma</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Uses;
