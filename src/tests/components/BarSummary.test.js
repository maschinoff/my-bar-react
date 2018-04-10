import React from 'react';
import { shallow } from 'enzyme';
import { BarSummary } from '../../components/BarSummary';

let wrapper;

test('should render BarSummary with one record correctly', () => {
    wrapper = shallow(<BarSummary bottlesCount={1} litersTotal={1} costTotal={100}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render BarSummary with multiple records correctly', () => {
   wrapper = shallow(<BarSummary bottlesCount={123} litersTotal={99.9} costTotal={678999} />);
   expect(wrapper).toMatchSnapshot();
});

