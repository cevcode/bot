import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Column, Row } from 'ui/Layout';
import { getBotImage, getBotText, getBotPercent, getActiveBot } from './helpers';

/**
 *
 * @param {object} bot - bot data comes from config
 * @param {string} activeFilter - active filter name
 * @param {func} onChangeBot - function onChange bot name
 * @param {string} activeBot - active bot name
 * @returns {React.Component} - render bot item
 */
function BotItem({ bot, activeFilter, onChangeBot, activeBot }) {
    const { name } = bot;
    const percent = bot[activeFilter];
    const className = cx('percent', getBotPercent(percent));
    const botClassName = cx('bot__item', getActiveBot(name, activeBot));
    return (
        <Column className={botClassName} onClick={() => onChangeBot(name)}>
            <div className="bot__image-container"><img className="bot__image" src={getBotImage(name)} alt={name} /></div>
            <p className="bot__title">{getBotText(name)}</p>
            <p className={className}>{`${percent}%`}</p>
        </Column>
    )
}

BotItem.propTypes = {
    bot: PropTypes.shape({}),
    activeFilter: PropTypes.string.isRequired,
    onChangeBot: PropTypes.func,
    activeBot: PropTypes.string.isRequired,
};

BotItem.defaultProps = {
    bot: {},
    onChangeBot: () => {},
};

/**
 *
 * @param {array} bots - all bots data comes from config
 * @param {string} activeFilter - active filter name
 * @param {func} onChangeBot - function onChange bot name
 * @param {string} activeBot - active bot name
 * @returns {React.Component} - render bots list
 */
function BotList({ bots, activeFilter, onChangeBot, activeBot }) {
    if(!bots) {
        return <p className="bot__list_empty">Empty bot list</p>;
    }
    return (
        <Row className="bot__list">
            {bots.map(item =>
                <BotItem bot={item}
                         key={item.name}
                         activeFilter={activeFilter}
                         activeBot={activeBot}
                         onChangeBot={onChangeBot}
                />
            )}
        </Row>
    )
}

BotList.propTypes = {
    bots: PropTypes.arrayOf(PropTypes.shape({})),
    activeFilter: PropTypes.string.isRequired,
    onChangeBot: PropTypes.func,
    activeBot: PropTypes.string.isRequired,
};

BotList.defaultProps = {
    bot: {},
    onChangeBot: () => {},
};

export default BotList;
