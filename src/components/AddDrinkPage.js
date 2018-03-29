import React from 'react';
import { connect } from 'react-redux';

import DrinkForm from '../components/DrinkForm';
import { startAddDrink } from '../actions/drinks';

export class AddDrinkPage extends React.Component {
    onSubmit = (drink) => {
        this.props.startAddDrink(drink);
        this.props.history.push('/');
    };
    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Bottle</h1>
                    </div>
                </div>
                <div className="content-container">
                    <DrinkForm
                        actionTitle='Add Bottle'
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddDrink: (drink) => dispatch(startAddDrink(drink))
});

export default connect(undefined, mapDispatchToProps)(AddDrinkPage);