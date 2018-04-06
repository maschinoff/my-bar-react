import React from 'react';
import { shallow } from 'enzyme';
import { EditDrinkPage } from '../../components/EditDrinkPage';
import drinks from '../fixtures/drinks';

let wrapper, history, startEditDrink;

beforeEach(() => {
    startEditDrink = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditDrinkPage
            drink={drinks[1]}
            startEditDrink={startEditDrink}
            history={history}
        />
    );
});

test('should render edit page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render edit page with invalid id correctly', () => {
    const params = { id: 123 };
    const match = { params };
    wrapper = shallow(<EditDrinkPage match={ match } />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
    wrapper.find('DrinkForm').prop('onSubmit')(drinks[1]);
    expect(startEditDrink).toHaveBeenCalledWith(drinks[1].id, drinks[1]);
    expect(history.push).toHaveBeenCalledWith(`/view/${drinks[1].id}`);
});

test('should handle on delete', () => {
    const startRemoveDrink = jest.fn();
    const history = { push: jest.fn()};
    const wrapper = shallow(<EditDrinkPage drink={drinks[1]} startRemoveDrink={startRemoveDrink} history={history} />);
    wrapper.find('#remove').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startRemoveDrink).toHaveBeenCalledWith(drinks[1]);
});
