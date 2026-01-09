import React, { useState, useRef, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { projects } from '../data/projects';
import styles from '../styles/Projects.module.css';
import ProjectModal from './ProjectModal';
import ImageWithFallback from './ImageWithFallback';

const Projects = forwardRef((props, ref) => {
  const [listProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const divs = useRef([]);

  // Custom hook to handle scroll animations
  useScrollAnimation(ref, divs);

  return (
    <section className={styles.projects} ref={ref} id='projects'>
      <div className={styles.title} ref={(el) => (divs.current[0] = el)}>
        My Projects
      </div>
      <div className={styles.sectionDes} ref={(el) => (divs.current[1] = el)}>
        Here are some of the projects I have worked on. Click on a project to view more details.
      </div>
      <div className={styles.list}>
        {
          listProjects.map((value, key) => (
            <div
              className={styles.item}
              key={key}
              ref={(el) => (divs.current[key + 2] = el)}
              onClick={() => setSelectedProject(value)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.images}>
                <ImageWithFallback src={value.images} alt={value.name} />
              </div>
              <div className={styles.content}>
                <h3>{value.name}</h3>
                <div className={styles.des}>{value.des}</div>
                <div className={styles.mission}>
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Mission</h4>
                    <div className={styles.des}>{value.mission}</div>
                  </div>
                </div>
                <div className={styles.mission}>
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Languages</h4>
                    <div className={styles.des}>{value.language}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
})
export default Projects
