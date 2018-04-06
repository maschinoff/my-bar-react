import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    openDrink,
    emptyDrink
} from '../actions/drinks';

export class DetailedView extends React.Component {
    onOpen = () => {
        this.props.openDrink(this.props.drink);
    }
    onMakeEmpty = () => {
        this.props.emptyDrink(this.props.drink);
    }
    render(){
        return(
            <div>
                {
                    this.props.drink ? (
                        <div>
                            <div className="page-header">
                                <div className="content-container">
                                    <div className="page-header__actions">
                                        <Link className="button" to={`/edit/${this.props.drink.id}`}>Edit</Link>
                                        { !this.props.drink.isOpen ? (
                                            <button id="openDrink" className="button" onClick={this.onOpen}>Open</button>
                                        ) : (

                                            !this.props.drink.isEmpty && <button id="emptyDrink" className="button" onClick={this.onMakeEmpty}>Empty</button>

                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="content-container">
                                <h1>{ this.props.drink.title }</h1>
                                <ul>
                                    <li>{ this.props.drink.category }</li>
                                    <li>{ this.props.drink.vol } L</li>
                                    <li>{ this.props.drink.alc } %</li>
                                    <li>{ this.props.drink.price }</li>
                                </ul>
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
        openDrink: (drink) => dispatch(openDrink(drink)),
        emptyDrink: (drink) => dispatch(emptyDrink(drink))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailedView);