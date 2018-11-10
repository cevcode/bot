import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {node} children - component inside description
 * @param {string} className - extra class
 * @returns {React.Component} - stylized p tag
 */
const Description = ({ children, className }) => {
    return <p className={cx('description', className)}>{children}</p>;
};

Description.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

Description.defaultProps = {
    children: '',
    className: '',
};
export default Description;
