import React from 'react';
import { push as MenuBurger } from 'react-burger-menu'
import Menu from '../Menu';

function Sidebar({ isOpen, onSidebarClick }) {
    return (
        <MenuBurger isOpen={ isOpen } disableOverlayClick={() => onSidebarClick(false)}>
            <Menu sidebar onSidebarClick={onSidebarClick} />
        </MenuBurger>
    )
}

export default Sidebar;
