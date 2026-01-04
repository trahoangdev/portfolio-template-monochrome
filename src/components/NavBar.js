import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive, changeTheme } from '../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import '../styles/NavBar.css';

const NavBar = ({ activeTab, theme }) => {
    const dispatch = useDispatch();
    const [linkNav] = useState(['home', 'skills', 'projects', 'contacts']);
    const [statusNav, changeStatusNav] = useState(null);

    const toggleNav = () => {
        changeStatusNav(statusNav === null ? 'active' : null);
    }

    const changeTab = (value) => {
        dispatch(changeTabActive(value));
        toggleNav();
    }

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        dispatch(changeTheme(newTheme));
    }

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={theme === 'dark' ? "/logo-light.png" : "/logo-dark.png"} alt="Logo" />
                    TRAHOANGDEV
                </div>
                <nav className={statusNav}>
                    {
                        linkNav.map(value => (
                            <span key={value}
                                className={activeTab === value ? 'active' : ''}
                                onClick={() => changeTab(value)}>{value}</span>
                        ))
                    }
                </nav>
                <div className="actions">
                    <button className="theme-toggle" onClick={toggleTheme}>
                        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                    </button>
                    <div className="icon-bar" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab,
    theme: state.theme
});

export default connect(mapStateToProps, { changeTabActive, changeTheme })(NavBar);