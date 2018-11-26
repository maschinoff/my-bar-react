import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const DrinkListItem = ({
                                  id, title,
                                  category, vol,
                                  alc, price, aged,
                                  description,
                                  isOpen, isEmpty,
                                  boughtAt, bottledAt, bestBefore,
                              }) => (
    <div>
        <Link className={`list-item ${isOpen ? 'list-item--opened' : ''} ${isEmpty ? 'list-item--empty' : ''}`} to={`/view/${id}`}>
            <div className={'list-item__title'}>
                {title}
            </div>
            <div className={'list-item__type'}>
                {category}
            </div>
            <ul className={'list-item__params'}>
                <li className={'list-item__param__item'}>{alc}%</li>
                <li className={'list-item__param__item'}>{numeral(price/100).format('$0,0.00')}</li>
                <li className={'list-item__param__item'}>Age: {aged}</li>
                <li className={'list-item__param__item'}>{vol}L</li>
            </ul>
            <ul className={'list-item__date'}>
                <li className={'list-item__date__item'}>Bought: {moment(boughtAt).format('MMMM Do, YYYY')}</li>
                <li className={'list-item__date__item'}>Bottled: {moment(bottledAt).format('MMMM Do, YYYY')}</li>
                <li className={'list-item__date__item'}>BBF: {moment(bestBefore).format('MMMM Do, YYYY')}</li>
            </ul>
            <div className={'list-item__description'}>
                {description}
            </div>
        </Link>
    </div>
);



export default DrinkListItem;