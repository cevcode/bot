import React from 'react';
import { Column, Row } from 'ui/Layout';
import Button from 'ui/Button';
import Title from 'ui/Title';
import Description from 'ui/Description';
import cx from 'classnames';
import { showSymbol, prettifyDate, numberText, formattedPrice } from 'helpers';
import {EUR, RUB, USD} from "../../currency/code";

//rates from central bank 19.07
const rate = {
    [RUB]: 1,
    [EUR]: 0.0137,
    [USD]: 0.0159,
};

class Post extends React.Component {
    constructor(props) {
        super(props);

    }
    renderCarrier = carrier => {
        return <i className={cx('post__icon', `post__icon--${carrier.toLowerCase()}`)} />;
    };
    renderPostDates = (time, name, date, origin) => {
        const description = `${origin}, ${name}`;
        return (
            <Column className="post__dates">
                <Title size="x-medium" containerClassName="post__time">{time}</Title>
                <Description>{description}</Description>
                <p className="post__date">{prettifyDate(date)}</p>
            </Column>
        );
    };
    render() {
        const {
            departure_time,
            origin_name,
            departure_date,
            price,
            carrier,
            origin,
            arrival_time,
            destination_name,
            arrival_date,
            destination,
            stops,
            currency,
        } = this.props;
        const buttonText = formattedPrice((price * rate[currency])) + showSymbol(currency);
        const stopsCount = stops ? stops + numberText(stops, [' Пересадка', ' Пересадки', ' Пересадок']) : null;
        return (
            <Row className="post">
                <Column className="post__column">
                    {this.renderCarrier(carrier)}
                    <Button text={'Купить за ' + buttonText} />
                </Column>
                <Row className="post__column">
                    {this.renderPostDates(departure_time, origin_name, departure_date, origin)}
                    <p className="post__stops">{stopsCount}</p>
                    {this.renderPostDates(arrival_time, destination_name, arrival_date, destination)}
                </Row>
            </Row>
        );
    }
}

export default Post;
