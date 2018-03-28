import React from 'react';
import { shallow } from 'enzyme';
import { DetailedView } from '../../components/DetailedViewPage';
import drinks from '../fixtures/drinks';

test('should render detailed view correctly', () => {
   const wrapper = shallow(<DetailedView drink={drinks[1]} />);
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

test('should handle on delete', () => {
    const startRemoveDrink = jest.fn();
    const history = { push: jest.fn()};
    const wrapper = shallow(<DetailedView drink={drinks[1]} startRemoveDrink={startRemoveDrink} history={history} />);
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startRemoveDrink).toHaveBeenCalledWith(drinks[1]);
});