import React from 'react';
import { connect } from 'react-redux';
import DrinkForm from '../components/DrinkForm';
import { startEditDrink } from '../actions/drinks';

export class EditDrinkPage extends React.Component {
    onSubmit = (drink) => {
        this.props.startEditDrink(this.props.drink.id, drink);
        this.props.history.push(`/view/${this.props.drink.id}`);
    };
    render(){
        return (
            <div>
                {
                    this.props.drink ? (
                        <div>
                            <div className="page-header">
                                <div className="content-container">
                                    <h1 className="page-header__title">Edit Drink</h1>
                                </div>
                            </div>
                            <div className="content-container">
                                <DrinkForm
                                    actionTitle='Save'
                                    onSubmit={this.onSubmit}
                                    options={{validate: false}}
                                    drink={this.props.drink}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="content-container">
                            <h1 className="page-header__title">Record with <span>id:{this.props.match.params.id}</span> not found!</h1>
                        </div>
                    )}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startEditDrink: (id, updates) => dispatch(startEditDrink(id, updates))
});

const mapStateToProps = (state, props) => ({
    drink: state.drinks.find((drink) => (drink.id === props.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDrinkPage);