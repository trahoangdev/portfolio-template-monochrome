import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';
import { config } from '../data/config';

const NotFound = () => {
    React.useEffect(() => {
        document.title = `404 Not Found | ${config.name}`;
    }, []);

    return (
        <div className="not-found-container">
            <div className="glitch-wrapper">
                <h1 className="glitch" data-text="404">404</h1>
            </div>
            <h2>Page Not Found</h2>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link to="/" className="home-btn">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
