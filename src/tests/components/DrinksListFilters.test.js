import React from 'react';
import { shallow } from 'enzyme';

import { DrinksListFilters } from '../../components/DrinksListFilters';
import { drinksFilters } from '../fixtures/drinksFilters';

let setTextFilter, setCategoryFilter, wrapper;

beforeEach(() => {
   setTextFilter = jest.fn();
   setCategoryFilter = jest.fn();
   wrapper = shallow(
       <DrinksListFilters
           drinksFilters={drinksFilters}
           setTextFilter={setTextFilter}
           setCategoryFilter={setCategoryFilter}
       />
   )
});

test('should render empty DrinksListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle set text filter', () => {
    const value = 'whisky';
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should handle on category change filter', () => {
   const value = 'beer';
   wrapper.find('select').at(0).simulate('change', {
       target: { value }
   });

   expect(setCategoryFilter).toHaveBeenCalledWith(value);
});
