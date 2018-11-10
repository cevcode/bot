import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 *
 * @param {string} image - src to image
 * @returns {React.Component} - image added to button
 */
function getImage(image) {
    if(!image) {
         return null;
    }
    return <img className="ux-button__image" src={image} alt="img" />;
}

/**
 *
 * @param {func} onClick - function onClick button
 * @param {string} className - extra className
 * @param {node} children - pasted components
 * @param {bool} disabled - check is button disabled
 * @param {string} bStyle - button style
 * @param {string} size - button size
 * @param {string} type - type (submit, button, etc)
 * @param {string} image - pasted image into button
 * @param {icon} icon - pasted icon into button
 * @returns {React.Component} - return button with all props
 */
function Button({ onClick, className, children, disabled, bStyle, type, size, image, icon }) {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={cx('ux-button',
                `ux-button__style_${bStyle}`,
                `ux-button__size_${size}`,
                `ux-button__icon_${icon}`,
                className)}
        >
            {children}
            {getImage(image)}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    image: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ]),
    children: PropTypes.node,
    size: PropTypes.oneOf(['s', 'm', 'full']),
    bStyle: PropTypes.oneOf(['void', 'fill']),
    disabled: PropTypes.bool,
    type: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,

};

Button.defaultProps = {
    size: 's',
    image: false,
    icon: '',
    bStyle: 'void',
    disabled: false,
    className: '',
};

export default Button;
