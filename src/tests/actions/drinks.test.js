import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import drinks from '../fixtures/drinks';
import database from '../../firebase/firebase';
import {
    addDrink,
    startAddDrink,
    editDrink,
    startEditDrink,
    removeDrink,
    startRemoveDrink,
    openDrink,
    emptyDrink,
    setDrinks,
    startSetDrinks,
} from '../../actions/drinks';
import moment from 'moment';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

//Before each test we write some test data to DB
beforeEach((done) => {
    const drinksData = {};

    drinks.forEach(({ id, ...drink }) => {
            drinksData[id] = { ...drink };
    });

    database.ref(`users/${uid}/drinks`).set(drinksData).then(() => done());
});

test('should generate add drink action object', () => {
    const action = addDrink(drinks[0]);

    expect(action).toEqual({
        type: 'ADD_DRINK',
        drink: drinks[0]
    });
});

test('should add drink object to database and store', (done) => {
    const store = createMockStore(defaultAuthState);

    const drinkData = {
        title: 'Beeers like duff',
        category: 'beer',
        description: 'Test bottle of beer',
        price: 122,
        vol: '0.7',
        alc: '6.6',
        aged: '12',
        isEmpty: false,
        isOpen: false,
        boughtAt: 0,
        bottledAt: 0,
        bestBefore: 0,
        createdAt: 0,
        updatedAt:  0
    };

    store.dispatch(startAddDrink(drinkData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_DRINK',
            drink: {
                id: expect.any(String),
                ...drinkData
            }
        });

        return database.ref(`users/${uid}/drinks/${actions[0].drink.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(drinkData);
            done();
        });
    });
});

test('should add drink object to database and store with defaults', (done) => {
    const store = createMockStore(defaultAuthState);

    const drinkData = {
        title: '',
        category: 'Undefined',
        vol: '',
        alc: '',
        price: '',
        aged: '',
        description: '',
        isEmpty: false,
        isOpen: false,
        boughtAt: 0,
        bottledAt: 0,
        bestBefore: 0,
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    };

    store.dispatch(startAddDrink({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_DRINK',
            drink: {
                id: expect.any(String),
                ...drinkData
            }
        });

        return database.ref(`users/${uid}/drinks/${actions[0].drink.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(drinkData);
            done();
        });
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

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = drinks[1].id;
    const updates = {
        title: 'Edited title',
        price: 1234,
        category: 'wine',
    };

    store.dispatch(startEditDrink(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_DRINK',
            id,
            updates
        });

        return database.ref(`users/${uid}/drinks/${actions[0].id}`).once('value').then((snapshot) => {
            expect({
                id: expect.any(String),
                ...snapshot.val()
            }).toEqual({
                ...drinks[1],
                ...updates
            });

            done();
        });
    });
});

test('should generate remove drink action object', () => {
    const action = removeDrink({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_DRINK',
        id: '123abc'
    })
});

test('should delete record from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = drinks[1].id;

    store.dispatch(startRemoveDrink({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_DRINK',
            id
        });

        return database.ref(`users/${uid}/drinks/${actions[0].id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
    });
});

test('should open drink in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = drinks[0].id;
    const updates = { isOpen: true, openedAt: expect.any(Number) };

    store.dispatch(openDrink({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_DRINK',
            id,
            updates
        });

        return database.ref(`users/${uid}/drinks/${actions[0].id}`).once('value').then((snapshot) => {
            expect({
                id: expect.any(String),
                ...snapshot.val(),
            }).toEqual({
                ...drinks[0],
                ...updates
            });
            done();
        });
    });
});

test('should empty bottle in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = drinks[2].id;
    const updates = { isEmpty: true, emptiedAt: expect.any(Number) };

    store.dispatch(emptyDrink( { id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
           type: 'EDIT_DRINK',
           id,
           updates
        });

        return database.ref(`users/${uid}/drinks/${actions[0].id}`).once('value').then((snapshot) => {
           expect({
               id: expect.any(String),
               ...snapshot.val(),
           }).toEqual({
               ...drinks[2],
               ...updates
           })
        });
        done();
    });
});


test('should generate set drinks action object', () => {
    const action = setDrinks(drinks);

    expect(action).toEqual({
        type: 'SET_DRINKS',
        drinks
    });
});

test('should fetch drinks from firebase', (done) => {
    const store = createMockStore(defaultAuthState);

    store.dispatch(startSetDrinks()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_DRINKS',
            drinks
        });

        done();
    });
});