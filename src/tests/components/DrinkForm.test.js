import React from 'react';
import { shallow } from 'enzyme';
import DrinkForm from '../../components/DrinkForm';

test('should render DrinkForm correctly', () => {
    const wrapper = shallow(<DrinkForm actionTitle='Test title' />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<DrinkForm actionTitle='Test title' onSubmit={onSubmit} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(onSubmit).toHaveBeenCalledWith();
});