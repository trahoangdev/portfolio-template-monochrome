import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/ProjectDetail.module.css';
import { config } from '../data/config';
import SEO from './SEO';
import ImageWithFallback from './ImageWithFallback';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project]);

    if (!project) {
        return <div className="project-not-found">Project not found</div>;
    }

    return (
        <div className={styles.projectDetail}>
            <SEO
                title={project.name}
                description={project.des}
                type="article"
            />
            <div className={styles.container}>
                <Link to="/" className={styles.backBtn}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
                </Link>

                <div className={styles.header}>
                    <h1>{project.name}</h1>
                    <div className={styles.meta}>
                        <span>{project.mission}</span>
                    </div>
                </div>

                <div className={styles.showcase}>
                    <ImageWithFallback src={project.images} alt={project.name} className="main-image" />
                </div>

                <div className={styles.content}>
                    <div className="description">
                        <h2>Overview</h2>
                        <p>{project.des}</p>
                    </div>

                    <div className={styles.techStack}>
                        <h2>Technologies</h2>
                        <p>{project.language}</p>
                    </div>

                    <div className={styles.actions}>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                            <FontAwesomeIcon icon={faGlobe} /> Live Demo
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                            <FontAwesomeIcon icon={faGithub} /> Source Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
