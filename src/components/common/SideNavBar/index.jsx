/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import './styles.scss';
import Button from '../Button';

function SideNavBar(props) {
  const { show, sideBarHandler } = props;

  const navigateTo = (elementId) => {
    const el = document.getElementById(elementId);
    const rect = el.getBoundingClientRect();
    window.scrollTo({ top: rect.top + window.scrollY, behavior: 'smooth' });

    setTimeout(() => {
      sideBarHandler();
    }, 300);
  };

  return (
    <div className={show ? 'am-side-navbar am-side-navbar--active' : 'am-side-navbar'}>
      <Button
        className="am-button-2 am-side-navbar__close"
        handler={sideBarHandler}
        type={2}
      >
        <CloseIcon />
      </Button>
      <ul className="am-side-navbar__options">
        <li onClick={() => navigateTo('about-page')}> About </li>
        <li onClick={() => navigateTo('career-page')}> Career </li>
        <li onClick={() => navigateTo('projects-page')}> Projects </li>
        <li onClick={() => navigateTo('skills-page')}> Skills </li>
      </ul>
    </div>
  );
}

SideNavBar.propTypes = {
  show: PropTypes.bool.isRequired,
  sideBarHandler: PropTypes.func,
};

SideNavBar.defaultProps = {
  sideBarHandler: () => {},
};

export default SideNavBar;
