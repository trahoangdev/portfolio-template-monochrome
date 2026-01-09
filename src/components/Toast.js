import React, { useEffect, useState } from 'react';
import styles from '../styles/Toast.module.css';
import PropTypes from 'prop-types';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onClose) onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`${styles.toast} ${type === 'success' ? styles.success : styles.error}`}>
            {message}
        </div>
    );
};

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error']),
    onClose: PropTypes.func,
    duration: PropTypes.number,
};

export default Toast;
