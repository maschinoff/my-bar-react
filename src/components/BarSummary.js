import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const BarSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">
                Here is your Bar
            </h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Drink</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        drinks: state.drinks
    };
};

export default connect(mapStateToProps)(BarSummary);