import React from 'react';
import PropTypes from 'prop-types';
import Title from 'ui/Title';
import { Row } from 'ui/Layout';
import Button from 'ui/Button';

import config from './config';

/**
 *
 * @param {string} value - value of filter from config
 * @param {string} filterValue - value of active filter, comes from state
 * @returns {string} - return className for active filter
 */
function getActiveButton(value, filterValue) {
    if(value === filterValue) {
        return 'filter_active';
    }
    return null;
}

/**
 *
 * @param {string} filterValue - value of active filter, comes from state
 * @param onChangeFilter - func for change filter and get value of this filter
 * @returns {React.Component} - return list with all filters
 */
function Filter({ activeFilter, onChangeFilter }) {
    return (
        <Row className="filter">
            <Title size="small" bold>Time range:</Title>
            <Row className="filter__container">
                {config.map(item =>
                    <Button key={item.value}
                            bStyle="fill"
                            className={getActiveButton(item.value, activeFilter)}
                            onClick={() => onChangeFilter(item.value)}
                            size="m">
                        {item.text}
                    </Button>
                )}
            </Row>
        </Row>
    )
}

Filter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func,
};

Filter.defaultProps = {
    onChangeFilter: () => {},
};

export default Filter;
