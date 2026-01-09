import React, { useRef, useState, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { skills } from '../data/skills';
import styles from '../styles/Skills.module.css';

const Skills = forwardRef((props, ref) => {
  const divs = useRef([]);
  useScrollAnimation(ref, divs);
  const [listSkills] = useState(skills);

  return (
    <section className={styles.skills} ref={ref} id='skills'>
      <div className={styles.title} ref={(el) => (divs.current[0] = el)}>
        My Skills
      </div>
      <div className={styles.des} ref={(el) => (divs.current[1] = el)}>
        I differ from many other developers in that I have a business first approach to development.
      </div>
      <div className={styles.list}>
        {
          listSkills.map((value, key) => (
            <div className={styles.item} key={key} ref={(el) => (divs.current[key + 2] = el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{value.name}</h3>
              <div className={styles.des}>{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
})

export default Skills


