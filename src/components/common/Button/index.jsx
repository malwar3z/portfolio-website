import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Button(props) {
  const {
    children,
    type,
    handler,
  } = props;

  const getClass = () => {
    switch (type) {
      case 1:
        return 'am-button-1';
      case 2:
        return 'am-button-2';
      default:
        return 'am-button-1';
    }
  };

  return (
    <button
      className={getClass()}
      onClick={handler}
      type="button"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.number,
  handler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 1,
};

export default Button;
