/* eslint-disable jsx-a11y/alt-text */
import { LinearProgress } from '@mui/material';
import React from 'react';
import './styles.scss';

function Skills() {
  // eslint-disable-next-line no-unused-vars
  return (
    <div className="am-page" id="projects-page">
      <div className="am-page__content">
        <ul className="skill-list">
          <li className="skill">
            Front-End
            <LinearProgress variant="determinate" value={90} />
            <div className="skill__carousel">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            </div>
          </li>
          <li className="skill">
            Back-End
            <LinearProgress variant="determinate" value={70} />
          </li>
          <li className="skill">
            Database
            <LinearProgress variant="determinate" value={70} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;

// https://www.youtube.com/watch?v=tqOSN4K5ha4
