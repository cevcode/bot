import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import config from './config';


function Menu({ sidebar, onSidebarClick }) {
    const className = cx("menu", sidebar && "menu_sidebar");
    return (
        <ul className={className}>
            {config.map(item => <MenuItem
                link={item.link}
                onSidebarClick={onSidebarClick}
                sidebar={sidebar}
                name={item.name}
                text={item.text}
                key={item.link}
            />)}
        </ul>
    )
}

Menu.propTypes = {
    sidebar: PropTypes.bool,
};

Menu.defaultProps = {
    sidebar: false,
};

export default Menu;
