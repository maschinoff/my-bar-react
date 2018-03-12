import React from 'react';
import { shallow } from 'enzyme';
import { AddDrinkPage } from '../../components/AddDrinkPage';
import drinks from '../fixtures/drinks';

let wrapper, history, startAddDrink;

beforeEach(() => {
    startAddDrink = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddDrinkPage startAddDrink={startAddDrink} history={history} />);
});

test('should render AddDrinkPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
    wrapper.find('DrinkForm').prop('onSubmit')(drinks[1]);
    expect(startAddDrink).toHaveBeenCalledWith(drinks[1]);
    expect(history.push).toHaveBeenCalledWith('/');
});