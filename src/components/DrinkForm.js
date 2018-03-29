import React from 'react';
import moment from 'moment';
import drinks from '../tests/fixtures/drinks';
import {SingleDatePicker} from 'react-dates';

export class DrinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.drink ? props.drink.title : '',
            category: props.drink ? props.drink.category : '',
            vol: props.drink ? props.drink.vol : '',
            alc: props.drink ? props.drink.alc : '',
            price: props.drink ? (props.drink.price / 100).toString() : '',
            aged: props.drink ? props.drink.aged : '',
            description: props.drink ? props.drink.description : '',
            isEmpty: props.drink ? props.drink.isEmpty : false,
            isOpen: props.drink ? props.drink.isEmpty : false,
            boughtAt: props.drink ? moment(props.drink.boughtAt) : null,
            bottledAt: props.drink ? moment(props.drink.bottledAt) : null,
            bestBefore: props.drink ? moment(props.drink.bestBefore) : null,
            createdAt: props.drink ? moment(props.drink.createdAt) : moment(),
            updatedAt: props.drink ? moment(props.drink.updatedAt) : null,
            errors: []
        };
    };
    onFieldChange = (e, field) => {
        const value = e.target.value;
        switch(field){
            case 'price':
                this.onPriceChange(e);
                break;
            default:
                this.setState({[field]: value});
                break;
        }
    };
    onPriceChange = (e) => {
        const price = e.target.value;
        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({price}));
        }
    };
    onCalendarDateChange = (date, field) => {
        this.setState({[field]: date});
    };
    onCalendarFocusChange = (focused, field) => {
        field = `calendar${field}Focused`;
        this.setState(() => ({[field]: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (this.validate()) {
            this.props.onSubmit({
                title: this.state.title,
                category: this.state.category,
                vol: this.state.vol,
                alc: this.state.alc,
                price: this.state.price ? parseFloat(this.state.price, 10) * 100 : '',
                aged: this.state.aged,
                description: this.state.description,
                isEmpty: this.state.isEmpty,
                isOpen: this.state.isOpen,
                boughtAt: this.state.boughtAt.valueOf(),
                bottledAt: this.state.bottledAt.valueOf(),
                bestBefore: this.state.bestBefore.valueOf(),
                createdAt: this.state.createdAt.valueOf(),
                updatedAt: moment().valueOf()
            });
            console.log(this.state.price);
        }
    };
    validate = () => {
        let errors = [];

        if(this.props.options.validate) {

            if (!this.state.title) {
                errors.push('Please provide a title');
            }

            if (!this.state.category) {
                errors.push('Please provide a category');
            }

            if (!this.state.vol) {
                errors.push('Please provide a volume');
            }

            if (!this.state.alc) {
                errors.push('Please provide a alcohol in %');
            }

            if (!this.state.price) {
                errors.push('Please provide a price');
            }
        }

        if (!errors.length)
            return true;
        else
            this.setState({errors})
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {
                    this.state.errors.length !== 0 && this.state.errors.map((error) => (
                        <p className="form__error" key={error}>{error}</p>
                    ))
                }
                <input
                    type="text"
                    className="text-input"
                    placeholder="Title"
                    autoFocus
                    value={this.state.title}
                    onChange={e => this.onFieldChange(e, 'title')}
                />
                <select
                    className="select"
                    value={this.state.category}
                    onChange={e => this.onFieldChange(e, 'category')}
                >
                    <option value=''>-- Please select --</option>
                    {this.props.categories.map((category) => <option key={category}
                                                                     value={category}>
                        {category}
                        </option>)}
                </select>
                <select
                    className="select"
                    value={this.state.vol}
                    onChange={e => this.onFieldChange(e, 'vol')}
                >
                    <option value=''>-- Please select --</option>
                    {this.props.vol.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <input
                    type="text"
                    className="text-input"
                    placeholder="Alcohol"
                    value={this.state.alc}
                    onChange={e => this.onFieldChange(e, 'alc')}
                />
                <input
                    type="text"
                    id="price"
                    className="text-input"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={e => this.onFieldChange(e, 'price')}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Specify aged of drink (optional)"
                    value={this.state.aged}
                    onChange={e => this.onFieldChange(e, 'aged')}
                />
                <textarea
                    className="text-area"
                    placeholder="Description for your drink (optional)"
                    value={this.state.description}
                    onChange={e => this.onFieldChange(e, 'description')}
                >
                </textarea>
                <SingleDatePicker
                    date={this.state.boughtAt}
                    required={true}
                    placeholder="Bought date"
                    onDateChange={date => this.onCalendarDateChange(date, 'boughtAt')}
                    focused={this.state.calendarBoughtAtFocused}
                    onFocusChange={({focused}) => this.onCalendarFocusChange(focused, 'BoughtAt')}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <SingleDatePicker
                    date={this.state.bottledAt}
                    required={true}
                    placeholder="Bottled date"
                    onDateChange={date => this.onCalendarDateChange(date, 'bottledAt')}
                    focused={this.state.calendarBottledAtFocused}
                    onFocusChange={({focused}) => this.onCalendarFocusChange(focused, 'BottledAt')}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <SingleDatePicker
                    date={this.state.bestBefore}
                    placeholder="Best before"
                    required={true}
                    onDateChange={date => this.onCalendarDateChange(date, 'bestBefore')}
                    focused={this.state.calendarBestBeforeFocused}
                    onFocusChange={({focused}) => this.onCalendarFocusChange(focused, 'BestBefore')}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <div>
                    <button className="button">{this.props.actionTitle}</button>
                </div>
            </form>
        );
    }
}

export default DrinkForm;

DrinkForm.defaultProps = {
    options: { validate: true },
    categories: ['Beer', 'Whisky'],
    vol: [0.33, 0.5, 0.7, 1]
};