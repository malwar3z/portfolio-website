import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import './styles.scss';
import Button from '../Button';

function SideNavBar(props) {
  const { show, sideBarHandler } = props;

  return (
    <div className={show ? 'am-side-navbar am-side-navbar--active' : 'am-side-navbar'}>
      <Button
        className="am-side-navbar__close"
        handler={sideBarHandler}
      >
        <CloseIcon />
      </Button>
      <ul className="am-side-navbar__options">
        <li> About </li>
        <li> Career </li>
        <li> Projects </li>
        <li> Contact </li>
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
