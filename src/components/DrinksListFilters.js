import React from 'react';
import { connect } from 'react-redux';
import {
    setTextFilter,
    setCategoryFilter,
    setStatusFilter
} from '../actions/drinksFilters';


export class DrinksListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onCategoryChange = (e) => {
        this.props.setCategoryFilter(e.target.value);
    }
    onStatusChange = (e) => {
        this.props.setStatusFilter(e.target.value);
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item search">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search drinks"
                            value={this.props.drinksFilters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.drinksFilters.category}
                            onChange={e => this.onCategoryChange(e, 'category')}
                        >
                            <option value=''>-- All --</option>
                            {this.props.categories.map((category) =>
                                <option
                                    key={category}
                                    value={category}>
                                        {category}
                                </option>)}
                        </select>
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.drinksFilters.status}
                            onChange={this.onStatusChange}
                        >
                            <option value=''>-- All --</option>
                            {this.props.statuses.map((status) =>
                                <option
                                    key={status}
                                    value={status}>
                                    {status}
                                </option>)}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

DrinksListFilters.defaultProps = {
    categories: [
        'Absinthe',
        'Beer',
        'Brandy',
        'Cider',
        'Gin',
        'Horilka',
        'Liqueurs',
        'Mastika',
        'Ouzo',
        'Rakia',
        'Slivovitz',
        'Rum',
        'Sparkling Wine',
        'Tequila',
        'Vodka',
        'Vermouth',
        'Wine',
        'Whisky',
    ],
    statuses: [
        'Full',
        'Opened',
        'Emptied',
    ]
}

const mapStateToProps = (state) => {
    return {
        drinksFilters: state.drinksFilters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setCategoryFilter: (value) => dispatch(setCategoryFilter(value)),
    setStatusFilter: (value) => dispatch(setStatusFilter(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksListFilters);