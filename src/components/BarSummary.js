import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectDrinks from '../selectors/drinks';
import {
    selectDrinksLitersTotal,
    selectDrinksCostTotal
} from '../selectors/drinks-total';

export const BarSummary = ({ bottlesCount, litersTotal, costTotal }) => {
    const bottlesWord = bottlesCount === 1 ? 'bottle' : 'bottles';
    const formattedLitersTotal = numeral(litersTotal).format('0.00');
    const formattedCostTotal = numeral(costTotal / 100).format('$0,00.00');

    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    You have total <span>{bottlesCount}</span> {bottlesWord} in your bar.
                </h1>
                <div>It's total {formattedLitersTotal} liters of drinks. Total cost is {formattedCostTotal}.</div>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Drink</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const viewedDrinks = selectDrinks(state.drinks, state.drinksFilters);
    const litersTotal = selectDrinksLitersTotal(viewedDrinks);
    const costTotal = selectDrinksCostTotal(viewedDrinks);

    return {
        drinks: viewedDrinks,
        bottlesCount: viewedDrinks.length,
        litersTotal: litersTotal,
        costTotal: costTotal
    };
};

export default connect(mapStateToProps)(BarSummary);