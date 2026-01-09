import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import { useAppContext } from '../context/AppContext';
import { config } from "../data/config";

const NavBar = () => {
    const { activeTab, changeTabActive, theme, changeTheme, scrollToSection } = useAppContext();
    const [linkNav] = useState(['home', 'skills', 'projects', 'contacts']);
    const [statusNav, changeStatusNav] = useState(null);

    const toggleNav = () => {
        changeStatusNav(statusNav === null ? 'active' : null);
    }

    const changeTab = (value) => {
        changeTabActive(value);
        scrollToSection(value);
        toggleNav();
    }

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        changeTheme(newTheme);
    }

    return (
        <>
            <div className={`${styles.overlay} ${statusNav === 'active' ? styles.active : ''}`} onClick={toggleNav}></div>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src={theme === 'dark' ? "/logo-light.webp" : "/logo-dark.webp"} alt="Logo" />
                        {config.nickname}
                    </div>
                    <nav className={`${styles.nav} ${statusNav === 'active' ? styles.active : ''}`}>
                        {
                            linkNav.map(value => (
                                <span key={value}
                                    className={activeTab === value ? styles.active : ''}
                                    onClick={() => changeTab(value)}>{value}</span>
                            ))
                        }
                        <Link to="/blog" onClick={toggleNav}>Tech Notes</Link>
                    </nav>
                    <div className={styles.actions}>
                        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
                            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                        </button>
                        <div className={styles.iconBar} onClick={toggleNav} aria-label="Toggle menu" role="button" tabIndex={0}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default NavBar;