import React from 'react';
import { Column, Row } from 'ui/Layout';
import Button from 'ui/Button';
import cx from 'classnames';
import Description from 'ui/Description';
import { showSymbol } from 'helpers';
import {RUB, EUR, USD } from '../../currency/code';

const config = [RUB, EUR, USD];


class Currency extends React.Component {

    renderButtons = () => {
        const {currency, onChange} = this.props;
        return config.map((item, i) => (
            <Button
                key={i}
                className={cx('currency__button', item === currency && 'currency__button--active')}
                style="fill"
                onClick={() => onChange(item)}
                size="full"
                text={item}
            />
        ));
    };

    render() {
        return (
            <Column className="currency">
                <Description size="x-medium">Валюта</Description>
                <Row className="currency__controls">{this.renderButtons()}</Row>
            </Column>
        );
    }
}

export default Currency;
