import React, { forwardRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import styles from '../styles/Home.module.css';
import SEO from './SEO';
import { config } from '../data/config';
import AvatarCard from './AvatarCard';

const Home = forwardRef((props, ref) => {
    useScrollAnimation(ref);

    // Reset active tab to home when mounting this component
    React.useEffect(() => {
        // We only want to set 'home' active on initial mount if needed, 
        // but 'App.js' IntersectionObserver will handle active state on scroll.
    }, []);

    return (
        <section ref={ref} className={styles.home} id='home'>
            <SEO />
            <div className={styles.content}>
                <div className={styles.name}>
                    MY NAME IS <span>{config.name}</span>
                </div>
                <div className={styles.des}>
                    {config.description}
                </div>

                <a href={config.cvLink} target="_blank" rel="noopener noreferrer" className={`animation active ${styles.button}`}>
                    Download My CV
                </a>
            </div>

            <AvatarCard />
        </section>
    )
})
export default Home
