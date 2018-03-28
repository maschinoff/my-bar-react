import drinks from '../fixtures/drinks';
import {
    addDrink,
    editDrink,
    removeDrink,
    setDrinks,
} from '../../actions/drinks';

test('should generate add drink action object', () => {
    const action = addDrink(drinks[0]);

    expect(action).toEqual({
        type: 'ADD_DRINK',
        drink: drinks[0]
    });
});

test('should generate edit drink action object', () => {
    const action = editDrink('123abc', drinks[0]);

    expect(action).toEqual({
        type: 'EDIT_DRINK',
        id: '123abc',
        updates: drinks[0]
    });
});

test('should generate remove drink action object', () => {
    const action = removeDrink({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_DRINK',
        id: '123abc'
    })
});

test('should generate set drinks action object', () => {
    const action = setDrinks(drinks);

    expect(action).toEqual({
        type: 'SET_DRINKS',
        drinks
    });
});