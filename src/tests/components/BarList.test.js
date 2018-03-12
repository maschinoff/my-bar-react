import React from 'react';
import { shallow } from 'enzyme';
import { BarList } from '../../components/BarList';
import drinks from '../fixtures/drinks';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<BarList drinks={drinks} />);

});

test('should render barList with empty drinks correctly', () => {
    wrapper = shallow(<BarList drinks={[]}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should render barList with data correctly', () => {
    expect(wrapper).toMatchSnapshot();
});