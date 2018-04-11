import React from 'react';
import { shallow } from 'enzyme';

import { DrinksListFilters } from '../../components/DrinksListFilters';
import { drinksFilters } from '../fixtures/drinksFilters';

let setTextFilter, setCategoryFilter, setStatusFilter, wrapper;

beforeEach(() => {
   setTextFilter = jest.fn();
   setCategoryFilter = jest.fn();
   setStatusFilter = jest.fn();
   wrapper = shallow(
       <DrinksListFilters
           drinksFilters={drinksFilters}
           setTextFilter={setTextFilter}
           setCategoryFilter={setCategoryFilter}
           setStatusFilter={setStatusFilter}
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

test('should handle on status change filter', () => {
   const value = 'Opened';
   wrapper.find('select').at(1).simulate('change', {
       target: { value }
   });

   expect(setStatusFilter).toHaveBeenCalledWith(value);
});