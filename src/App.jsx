/* eslint-disable import/no-unresolved */
import NavBar from 'components/common/NavBar';
import SideNavBar from 'components/common/SideNavBar';
import About from 'components/pages/About';
import Career from 'components/pages/Career';
import Contact from 'components/pages/Contact';
import Projects from 'components/pages/Projects';
import React from 'react';
import './styles/global.scss';

function App() {
  // useEffect(() => {
  //   document.title = "Alvarez Matias"
  // },[]);

  return (
    <div>
      <NavBar />
      <SideNavBar />
      <About />
      <Career />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
