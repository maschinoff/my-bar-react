import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import DrinkForm from '../../components/DrinkForm';
import drinks from '../fixtures/drinks';

test('should render empty DrinkForm correctly', () => {
    const buttonTitle = 'Test title';
    const wrapper = shallow(<DrinkForm actionTitle={buttonTitle} />);
    expect(wrapper.find('.button').text()).toEqual(buttonTitle);
    expect(wrapper).toMatchSnapshot();
});

test('should render DrinkForm with data', () => {
    const wrapper = shallow(<DrinkForm drink={drinks[0]} />);
    expect(wrapper).toMatchSnapshot();
});


test('should handle onSubmit with empty form', () => {
    const wrapper = shallow(<DrinkForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errors').length).toBeGreaterThan(0);
});

test('should handle onSubmit with correct filled form', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<DrinkForm drink={drinks[0]} onSubmit={onSubmit} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errors').length).toEqual(0);
    expect(onSubmit).toHaveBeenCalledWith({
        title: drinks[0].title,
        category: drinks[0].category,
        vol: drinks[0].vol,
        alc: drinks[0].alc,
        price: drinks[0].price,
        aged: drinks[0].aged,
        description: drinks[0].description,
        isEmpty: drinks[0].isEmpty,
        boughtAt: drinks[0].boughtAt,
        bottledAt: drinks[0].bottledAt,
        bestBefore: drinks[0].bestBefore,
        createdAt: drinks[0].createdAt,
        updatedAt: moment().valueOf()
    });
});

test('should set title on input change', () => {

});

test('should set category on select change', () => {

});

test('should set state on select change', () => {
    const value = 'whisky';
    const wrapper = shallow(<DrinkForm />);
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('category')).toBe(value);
});

test('should set price if valid input', () => {
    const value = '123.55';
    const wrapper = shallow(<DrinkForm />);
    wrapper.find('input#price').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('price')).toBe(value);
});

test('should not set price if invalid input', () => {
   const value = '12.555';
   const wrapper = shallow(<DrinkForm />);
   wrapper.find('input#price').simulate('change', {
        target: { value }
   });
   expect(wrapper.state('price')).toBe('');
});