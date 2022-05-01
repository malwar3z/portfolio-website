import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ApiIcon from '@mui/icons-material/Api';
import './styles.scss';
import Button from '../Button';

function NavBar() {
  const [showBlackNavbar, setShowBlackNavbar] = useState(false);

  const handleScrollChange = () => {
    if (window.scrollY > 0) {
      setShowBlackNavbar(true);
    } else {
      setShowBlackNavbar(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (elementId) => {
    const el = document.getElementById(elementId);
    const rect = el.getBoundingClientRect();
    window.scrollTo({ top: rect.top + window.scrollY, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScrollChange);

  return (
    <div className={showBlackNavbar ? 'am-navbar am-navbar--hidden' : 'am-navbar'}>
      <div className="am-navbar__logo">
        <ApiIcon />
        {/* <Button handler={() => console.log('logo')}>
          <ApiIcon />
        </Button> */}
      </div>
      <div className="am-navbar__option-container">
        <div className="am-navbar__option">
          <Button handler={scrollToTop}>
            <>
              <span className="nav-option-number">01.</span>
              <span className="nav-option-text">&nbsp;About</span>
            </>
          </Button>
        </div>
        <div className="am-navbar__option">
          <Button handler={() => navigateTo('career-page')}>
            <>
              <span className="nav-option-number">02.</span>
              <span className="nav-option-text">&nbsp;Career</span>
            </>
          </Button>
        </div>
        <div className="am-navbar__option">
          <Button handler={() => navigateTo('projects-page')}>
            <>
              <span className="nav-option-number">03.</span>
              <span className="nav-option-text">&nbsp;Projects</span>
            </>
          </Button>
        </div>
        <div className="am-navbar__option">
          <Button handler={() => navigateTo('contact-page')}>
            <>
              <span className="nav-option-number">04.</span>
              <span className="nav-option-text">&nbsp;Contact</span>
            </>
          </Button>
        </div>
        <div className="am-navbar__option">
          <Button type={2} handler={() => navigateTo('projects-page')}>
            <span className="nav-option-text">Resume</span>
          </Button>
        </div>
      </div>
      <div className="am-navbar__quick-menu">
        <Button handler={() => { console.log('ciao'); }}>
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
