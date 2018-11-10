import React from 'react';
import { Row } from 'ui/Layout';
import Button from 'ui/Button';
import Title from 'ui/Title';

import menuImage from 'theme/img/menu_icon.svg';
import refreshImage from 'theme/img/refresh_icon.svg';

function onClickRefresh() {
    return console.log('refresh clicked');
}

function Header({ onSidebarClick }) {
    return (
        <Row jc="space-between" className="header">
           <Button image={menuImage} onClick={() => onSidebarClick(true)} />
            <Title size="x-medium" bold>Dashboard</Title>
            <Button image={refreshImage} onClick={onClickRefresh} />
        </Row>
    )
}

export default Header;
