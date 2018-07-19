import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ children, className }) => {
    return <p className={cx('description', className)}>{children}</p>;
};

Description.PropTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

Description.defaultProps = {
    children: '',
    className: '',
};
export default Description;
