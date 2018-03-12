import React from 'react';
import { shallow } from 'enzyme';
import { BarSummary } from '../../components/BarSummary';

let wrapper;

test('should render BarSummary with one record correctly', () => {
    wrapper = shallow(<BarSummary bottlesCount={1} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render BarSummary with multiple records correctly', () => {
   wrapper = shallow(<BarSummary bottlesCount={123} />);
   expect(wrapper).toMatchSnapshot();
});

