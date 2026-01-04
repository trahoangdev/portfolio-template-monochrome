import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { projects } from '../data/projects';
import '../styles/Projects.css';
import ProjectModal from './ProjectModal';

function Projects() {
  const [listProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const divs = useRef([]);
  const scrollTab = useRef();

  // Custom hook to handle scroll animations
  useScrollAnimation(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab} id='projects'>
      <div className="title" ref={(el) => (divs.current[0] = el)}>
        My Projects
      </div>
      <div className="des" ref={(el) => (divs.current[1] = el)}>
        Here are some of the projects I have worked on. Click on a project to view more details.
      </div>
      <div className="list">
        {
          listProjects.map((value, key) => (
            <div
              className='item'
              key={key}
              ref={(el) => (divs.current[key + 2] = el)}
              onClick={() => setSelectedProject(value)}
              style={{ cursor: 'pointer' }}
            >
              <div className="images">
                <img src={value.images} alt={value.name} />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Mission</h4>
                    <div className="des">{value.mission}</div>
                  </div>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Languages</h4>
                    <div className="des">{value.language}</div>
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
}
export default Projects
