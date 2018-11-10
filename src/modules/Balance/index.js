import React from 'react';
import PropTypes from 'prop-types';

import { Row, Column } from 'ui/Layout';
import Title from 'ui/Title';
import Price from 'ui/Price';

/**
 *
 * @param {object} data - object with all props
 * @param {number} data.trading_capital - trading capital data
 * @param {string} data.trading_capital_currency - currency in trading capital
 * @param {number} data.balance - balance data data
 * @param {number} data.on_hold - hold data
 * @returns {React.Component}
 * @constructor
 */
function Balance({ data }) {
    const { trading_capital, trading_capital_currency, balance, on_hold } = data;
    return (
        <Row className="balance" jc="space-between" ai="flex-end">
            <Column>
                <Title size="small" bold uppercase>Trading capital</Title>
                <Price price={trading_capital} currency={trading_capital_currency} size="l" fullPrice />
            </Column>
            <Column className="balance__data">
                <Row className="balance__item">
                    <Title size="small" bold uppercase>Balance:</Title>
                    <Price price={balance} currency="coin" size="s" imagedCurrency />
                </Row>
                <Row className="balance__item">
                    <Title size="small" bold uppercase>On hold:</Title>
                    <Price price={on_hold} currency="coin" size="s" imagedCurrency />
                </Row>
            </Column>
        </Row>
    )
}

Balance.propTypes = {
    data: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]),
};

Balance.defaultProps = {
    data: [],
};

export default Balance;
