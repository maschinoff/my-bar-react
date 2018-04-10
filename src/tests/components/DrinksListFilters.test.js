import React from 'react';
import { shallow } from 'enzyme';

import { DrinksListFilters } from '../../components/DrinksListFilters';
import { drinksFilters } from '../fixtures/drinksFilters';

let setTextFilter, wrapper;

beforeEach(() => {
   setTextFilter = jest.fn();
   wrapper = shallow(
       <DrinksListFilters
           drinksFilters={drinksFilters}
           setTextFilter={setTextFilter}
       />
   )
});

test('should render empty DrinksListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
