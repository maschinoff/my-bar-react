import React from 'react';
import { shallow } from 'enzyme';
import { DetailedView } from '../../components/DetailedViewPage';
import drinks from '../fixtures/drinks';

test('should render detailed view correctly with open and without empty button', () => {
   const wrapper = shallow(<DetailedView drink={drinks[1]} />);
   expect(wrapper).toMatchSnapshot();
});

test('should render detailed view correctly with empty and without open button', () => {
    const wrapper = shallow(<DetailedView drink={drinks[2]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render detailed view correctly without empty & open buttons', () => {
    const wrapper = shallow(<DetailedView drink={drinks[3]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render detailed view with incorrect id correctly', () => {
    const params = { id: 123 };
    const match = { params };
    const wrapper = shallow(<DetailedView match={match}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should handle on edit', () => {
    const wrapper = shallow(<DetailedView drink={drinks[1]} />);
    expect(wrapper.find('Link').prop('to')).toBe(`/edit/${drinks[1].id}`);
});

test('should handle on Open', () => {
    const openDrink = jest.fn();
    const wrapper = shallow(<DetailedView drink={drinks[1]} openDrink={openDrink} />);
    wrapper.find('#openDrink').simulate('click');
    expect(openDrink).toHaveBeenCalledWith(drinks[1]);
});

test('should handle on Empty', () => {
    const emptyDrink = jest.fn();
    const wrapper = shallow(<DetailedView drink={drinks[2]} emptyDrink={emptyDrink} />);
    wrapper.find('#emptyDrink').simulate('click');
    expect(emptyDrink).toHaveBeenCalledWith(drinks[2]);
});