import React from 'react';
import { Column, Row } from '../ui/Layout';
import Currency from './components/Currency';
import Stops from './components/Stops';

const Filters = ({currency, minStops, maxStops, stops, onChangeCur, onChangeStops}) => (
    <Column className="filter">
        <div className="filter__inner">
            <Currency currency={currency} onChange={onChangeCur}/>
            <Stops minStops={minStops} maxStops={maxStops} stops={stops} onChange={onChangeStops}/>
        </div>
    </Column>
);

export default Filters;
