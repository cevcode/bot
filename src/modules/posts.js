import React from 'react';
import { Column, Row } from '../ui/Layout';
import Post from './components/Post';
import Title from 'ui/Title';


//Task #1

const Posts = ({tickets, currency }) => {
    if(!tickets.length) {
        return (
            <Column className="posts__empty">
                <Title size="small">По вашему запросу билетов не найдено</Title>
            </Column>
        )
    }
    return (
        <Column className="posts">
            {tickets.map((item, i) => <Post key={i} {...item} currency={currency}/>)}
        </Column>
    )
};

export default Posts;
