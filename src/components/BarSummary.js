import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    return {
        drinks: state.drinks,
        bottlesCount: state.drinks.length
    };
};

export default connect(mapStateToProps)(BarSummary);