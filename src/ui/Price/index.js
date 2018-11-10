import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getCurrencyImage } from './helpers';

/**
 *
 * @param {number} price - actual price
 * @param {bool} fullPrice - check if we need to show full price
 * @returns {string} - return prettify price with 5 symbols after comma
 */
function prettifyPrice(price, fullPrice) {
    if(!price) {
        return null;
    }
    if(fullPrice) {
        return price.toFixed(5);
    }
    return price;
}

/**
 *
 * @param {string} currency - actual currency
 * @param {string} imagedCurrency - currency name for render image
 * @returns {React.Component} - render image or string currency
 */
function getCurrency(currency, imagedCurrency) {
    if(imagedCurrency) {
        return <img className={cx("currency", "currency_imaged")} src={getCurrencyImage(currency)} alt={currency} />;
    }
    return <span className="currency">{currency}</span>;
}

/**
 *
 * @param {number} price - price data
 * @param {bool} fullPrice  - check if need to render all price with 5 symbols after decimal
 * @param {string} currency - currency comes from props
 * @param {bool} imagedCurrency - check if we need to render icon of currency
 * @param {string} size - size of price
 * @returns {React.Component} - stylized and prettify price with currency
 */
function Price({ price, fullPrice, currency, imagedCurrency, size }) {
    const className = cx('price', `price__size_${size}`);
    return (
        <div className={className}>
            <span className="price__container">{prettifyPrice(price, fullPrice)}</span>
            {getCurrency(currency, imagedCurrency)}
        </div>
    )
}

Price.propTypes = {
    price: PropTypes.number,
    currency: PropTypes.string,
    fullPrice: PropTypes.bool,
    size: PropTypes.oneOf(['l', 's']),
    imagedCurrency: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]),
};

Price.defaultProps = {
    price: 0,
    currency: '',
    size: 's',
    imagedCurrency: false,
    fullPrice: false,
};

export default Price;
