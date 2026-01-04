import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/ProjectDetail.css';
import { config } from '../data/config';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        if (project) {
            document.title = `${project.name} | ${config.name}`;
        }
        window.scrollTo(0, 0);
    }, [project]);

    if (!project) {
        return <div className="project-not-found">Project not found</div>;
    }

    return (
        <div className="project-detail">
            <div className="container">
                <Link to="/" className="back-btn">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
                </Link>

                <div className="project-header">
                    <h1>{project.name}</h1>
                    <div className="meta">
                        <span>{project.mission}</span>
                    </div>
                </div>

                <div className="project-showcase">
                    <img src={project.images} alt={project.name} className="main-image" />
                </div>

                <div className="project-content">
                    <div className="description">
                        <h2>Overview</h2>
                        <p>{project.des}</p>
                    </div>

                    <div className="tech-stack">
                        <h2>Technologies</h2>
                        <p>{project.language}</p>
                    </div>

                    <div className="actions">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                            <FontAwesomeIcon icon={faGlobe} /> Live Demo
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                            <FontAwesomeIcon icon={faGithub} /> Source Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
