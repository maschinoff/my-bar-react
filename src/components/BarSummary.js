import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectDrinks from '../selectors/drinks';

export const BarSummary = ({ bottlesCount }) => {
    const bottlesWord = bottlesCount === 1 ? 'bottle' : 'bottles';

    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    You have total <span>{bottlesCount}</span> {bottlesWord} in your bar.
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Drink</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const viewedDrinks = selectDrinks(state.drinks, state.drinksFilters);
    return {
        drinks: viewedDrinks,
        bottlesCount: viewedDrinks.length
    };
};

export default connect(mapStateToProps)(BarSummary);