/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.scss';

const SKILL_LIST = [
  {
    name: 'Html5',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'Javascript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'C#',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
  },
  {
    name: '.NET',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
  },
  {
    name: '.NET Core',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
  },
  {
    name: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Redux',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
  },
  {
    name: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'Firebase',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
  },
  {
    name: 'D3.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg'
  },
  // {
  //   name: 'C++',
  //   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
  // },
  // {
  //   name: 'C',
  //   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
  // },
  {
    name: 'Azure',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
  },
  {
    name: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg'
  },
  {
    name: 'Webpack',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg'
  }
];

function Skills() {
  return (
    <div className="am-page" id="skills-page">
      <div className="am-page__content">
        <div className="grid-container">
          {
            SKILL_LIST.map((x) => (
              <div className="grid-item">
                <img src={x.src} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Skills;
