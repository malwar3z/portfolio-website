import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles.scss';

const PROJECT_MESSAGE = 'Nothing to show yet';

function Projects() {
  // eslint-disable-next-line no-unused-vars
  const [chars, setChars] = useState(PROJECT_MESSAGE.split(''));
  return (
    <div className="am-page background-projects" id="projects-page">
      <div className="am-page__content">
        <div className="project-icon-container">
          <GitHubIcon className="project-icon" />
          <div className="project-message">
            {
              chars.map((letter, i) => (
                <span
                  style={{ transform: `rotate(${i * 6}deg)` }}
                >
                  {letter}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

// https://www.youtube.com/watch?v=tqOSN4K5ha4
