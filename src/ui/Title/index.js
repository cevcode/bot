import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ size = 'medium', children, align, tagName, extraCLass, containerClassName }) => {
    const className = cx(`title__size_${size}`, `title__align_${align}`, extraCLass);
    return (
        <div className={cx('title__container', containerClassName)}>
            {React.createElement(tagName, { className }, children)}
        </div>
    );
};

Title.PropTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'x-medium', 'big']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
    tagName: PropTypes.oneOf(['h1', 'h2']),
    extraCLass: PropTypes.string,
    containerClassName: PropTypes.string,
};

Title.defaultProps = {
    size: 'medium',
    align: 'left',
    tagName: 'h2',
    className: '',
    containerClassName: '',
};

export default Title;
