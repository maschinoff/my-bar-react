import React from 'react';
import { shallow } from 'enzyme';
import DrinkListItem from '../../components/DrinkListItem';
import drinks from '../fixtures/drinks';

test('should render single item correctly', () => {
    const wrapper = shallow(<DrinkListItem key={drinks[1].id} {...drinks[1]}/>);
    expect(wrapper).toMatchSnapshot();
});