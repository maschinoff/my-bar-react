import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveDrink } from '../actions/drinks';

export class DetailedView extends React.Component {
    onRemove = () => {
        this.props.startRemoveDrink(this.props.drink);
        this.props.history.push('/');
    }
    render(){
        return(
            <div className="content-container">
                {
                    this.props.drink ? (
                        <div>
                            <h1>{ this.props.drink.title }</h1>
                            <div className="page-header__actions">
                                <Link className="button" to={`/edit/${this.props.drink.id}`}>Edit</Link>
                                <button className="button" onClick={this.onRemove}>Delete</button>
                            </div>
                        </div>
                    ) : (
                        <h1 className="page-header__title">Record with <span>id:{this.props.match.params.id}</span> not found!</h1>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        drink: state.drinks.find((drink) => (drink.id === props.match.params.id))
    }
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveDrink: (data) => dispatch(startRemoveDrink(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailedView);