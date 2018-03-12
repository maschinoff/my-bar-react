import React from 'react';
import { connect } from 'react-redux';

import DrinkListItem from '../components/DrinkListItem';

export const BarList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-desktop">Drink</div>
            <div className="show-for-desktop">Data</div>
        </div>
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
        drinks: state.drinks
    };
};

export default connect(mapStateToProps)(BarList);