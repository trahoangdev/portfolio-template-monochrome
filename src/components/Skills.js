import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { skills } from '../data/skills';
import '../styles/Skills.css';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  useScrollAnimation(scrollTab, divs);
  const [listSkills] = useState(skills);

  return (
    <section className='skills' ref={scrollTab} id='skills'>
      <div className="title" ref={(el) => (divs.current[0] = el)}>
        My Skills
      </div>
      <div className="des" ref={(el) => (divs.current[1] = el)}>
        I differ from many other developers in that I have a business first approach to development.
      </div>
      <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => (divs.current[key + 2] = el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills


