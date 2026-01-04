import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent background scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, []);

    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="modal-body">
                    <div className="modal-image">
                        <img src={project.images} alt={project.name} />
                    </div>

                    <div className="modal-info">
                        <h2>{project.name}</h2>
                        <div className="tags">
                            {project.language.split(',').map((tech, index) => (
                                <span key={index} className="tech-tag">{tech.trim()}</span>
                            ))}
                        </div>

                        <p className="description">{project.des}</p>

                        <div className="meta">
                            <div>
                                <strong>Role:</strong> {project.mission}
                            </div>
                        </div>

                        <div className="links">
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                    <FontAwesomeIcon icon={faGithub} /> Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
