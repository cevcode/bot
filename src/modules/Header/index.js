import React from 'react';
import { Row } from 'ui/Layout';
import Button from 'ui/Button';
import Title from 'ui/Title';

function onClickRefresh() {
    return console.log('refresh clicked');
}

function Header({ onSidebarClick }) {
    return (
        <Row jc="space-between" className="header" ai="center">
           <Button icon="menu" onClick={() => onSidebarClick(true)} />
            <Title size="x-medium" bold>Dashboard</Title>
            <Button icon="refresh" onClick={onClickRefresh} />
        </Row>
    )
}

export default Header;
