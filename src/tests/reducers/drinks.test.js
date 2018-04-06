import drinksReducers from '../../reducers/drinks';
import drinks from '../fixtures/drinks';
import moment from 'moment';

test('should set default drinks values', () => {
    const state = drinksReducers(undefined, { type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should add a drink with values', () => {
    const drink = {
        title: 'My test new bottle',
        category: 'Beer',
        vol: 1,
        alc: 6,
        price: 660,
        aged: 12,
        description: 'The test beer',
        isEmpty: false,
        boughtAt: moment(0).subtract(1, 'year').valueOf(),
        bottledAt: moment(0).subtract(4, 'year').valueOf(),
        bestBefore: moment(0).add(4, 'months').valueOf(),
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    }

    const action = {
        type: 'ADD_DRINK',
        drink: drink
    }

    const state = drinksReducers(drinks, action);
    expect(state).toEqual([...drinks, drink]);
});

test('should set drinks correctly', () => {
    const action = {
        type: 'SET_DRINKS',
        drinks: [drinks[0]]
    }

    const state = drinksReducers(drinks, action);
    expect(state).toEqual([drinks[0]]);
});

test('should edit a drink', () => {
    const drink = {
        title: 'My edited new bottle',
        category: 'Beer',
        vol: 1,
        alc: 6,
        price: 660,
        aged: 12,
        description: 'The test beer but edited',
    }

    const action = {
        type: 'EDIT_DRINK',
        id: drinks[0].id,
        updates: drink
    }

    const state = drinksReducers(drinks, action);
    expect(state[0]).toEqual({ ...drinks[0], ...drink});
});

test('should not edit drink with invalid id', () => {
    const drink = {
        title: 'My edited bottle',
        category: 'Vodka'
    }

    const action = {
        type: 'EDIT_DRINK',
        id: '-1',
        drink
    }

    const state = drinksReducers(drinks, action);
    expect(state).toEqual(drinks);
});

test('should remove a drink by id', () => {
    const action = {
        type: 'REMOVE_DRINK',
        id: drinks[0].id
    }

    const state = drinksReducers(drinks, action);
    expect(state).toEqual([drinks[1], drinks[2], drinks[3]]);
});

test('should not remove a drink if not found', () => {
    const action = {
        type: 'REMOVE_DRINK',
        id: -1
    }

    const state = drinksReducers(drinks, action);
    expect(state).toEqual(drinks);
});