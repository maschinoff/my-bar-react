import React from 'react';
import { connect } from 'react-redux';

import selectDrinks from '../selectors/drinks';
import DrinkListItem from '../components/DrinkListItem';

export const BarList = (props) => (
    <div className="content-container">
        <div className="list-body">
            {
                props.drinks.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>Your bar is totally empty!</span>
                    </div>
                ) : (
                    props.drinks.map((drink) => (
                       <DrinkListItem key={drink.id} {...drink} />
                    ))
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        drinks: selectDrinks(state.drinks, state.drinksFilters)
    };
};

export default connect(mapStateToProps)(BarList);