import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const DrinkListItem = ({
                                  id, title,
                                  category, vol,
                                  alc, price, aged,
                                  isOpen, isEmpty,
                                  boughtAt, bottledAt, bestBefore,
                              }) => (
    <div>
        <Link className={`list-item ${isOpen ? 'list-item--opened' : ''} ${isEmpty ? 'list-item--empty' : ''}`} to={`/view/${id}`}>
            <div>
                {title}
                <br/>
                {category} - {vol}L
            </div>
            <ul>
                <li>{alc}%</li>
                <li>{numeral(price/100).format('$0,0.00')}</li>
                <li>Age: {aged}</li>
            </ul>
            <ul>
                <li>Bought: {moment(boughtAt).format('MMMM Do, YYYY')}</li>
                <li>Bottled: {moment(bottledAt).format('MMMM Do, YYYY')}</li>
                <li>BBF: {moment(bestBefore).format('MMMM Do, YYYY')}</li>
            </ul>
        </Link>
    </div>
);



export default DrinkListItem;