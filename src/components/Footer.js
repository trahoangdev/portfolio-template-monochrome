import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

import { config } from '../data/config';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h2>{config.nickname}</h2>
                    <p>{config.description}</p>
                </div>

                <div className={styles.links}>
                    <h3>Explore</h3>
                    <ul>
                        <li><Link to="/blog">Tech Notes</Link></li>
                        <li><Link to="/uses">Uses</Link></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contacts">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.social}>
                    <h3>Connect</h3>
                    <div className={styles.socialIcons}>
                        <a href={config.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href={config.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={config.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} trahoangdev. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
