/* eslint-disable import/no-unresolved */
import NavBar from 'components/common/NavBar';
import SideNavBar from 'components/common/SideNavBar';
import About from 'components/pages/About';
import Career from 'components/pages/Career';
import Skills from 'components/pages/Skills';
import Projects from 'components/pages/Projects';
import React, { useState } from 'react';
import './styles/global.scss';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const sideHandler = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div>
      <NavBar sideBarHandler={sideHandler} />
      <SideNavBar show={showSideBar} sideBarHandler={sideHandler} />
      <About />
      <Career />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
