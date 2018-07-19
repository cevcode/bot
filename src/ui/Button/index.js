import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = ({ onClick, className, text, size, disabled, style, type }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={cx('ux-button', `ux-button__size_${size}`, `ux-button__style_${style}`, className)}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['s', 'full']),
    text: PropTypes.string,
    style: PropTypes.oneOf(['void', 'fill']),
    disabled: PropTypes.bool,
    type: PropTypes.string,
};

Button.defaultProps = {
    size: 's',
    // text: 'hi',
    style: 'void',
    disabled: false,
};

export default Button;
