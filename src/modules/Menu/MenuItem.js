import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { getMenuIcon } from './helpers';


function showImage(sidebar, name) {
    if(sidebar) {
        return null;
    }
    return <img src={getMenuIcon(name)} alt={name} />;
}

/**
 *
 * @param {string} link - url to page
 * @param {bool} sidebar - check is it render in sidebar
 * @param {string} name - name of route
 * @param {string} text - text of route
 * @returns {React.Component} - return menu item with all route data
 */

function getActiveLink(link) {
    if(window.location.pathname === `/${link}`) {
        return 'active';
    }
    return null;
}

function MenuItem({ link, name, text, sidebar, onSidebarClick }) {
    return (
        <li className="menu__item">
            <NavLink to={`/${link}`} onClick={() => onSidebarClick(false)} activeClassName={getActiveLink(link)}>
                {showImage(sidebar, name)}
                <span>{text}</span>
            </NavLink>
        </li>
    )
}

MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default MenuItem;
