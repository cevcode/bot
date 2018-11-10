import React from 'react';
import PropTypes from 'prop-types';
import  { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
//hardcoded data
import data from './config';

function Charts({ activeBot }) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <AreaChart className="charts" data={data[activeBot]} >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1f4e84" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#1d2637" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke='#1d375fe3' />
                <XAxis dataKey="name" />
                <Tooltip />
                <Area type='monotone' dataKey='uv' stroke='#227ad6' fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

Charts.propTypes = {
  activeBot: PropTypes.string.isRequired,
};

export default Charts;
