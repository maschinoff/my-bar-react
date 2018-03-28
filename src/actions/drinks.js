import demoDrinks from '../tests/fixtures/drinks';

//ADD DRINK
export const addDrink = (drink) => ({
    type: 'ADD_DRINK',
    drink
});

export const startAddDrink = (drink = {}) => {
    return (dispatch, getState) => {
        drink.id = '123'+Date.now();
        dispatch(addDrink(drink));
    }
};

//EDIT DRINK
export const editDrink = (id, updates) => ({
    type: 'EDIT_DRINK',
    id,
    updates
});

export const startEditDrink = (id, updates) => {
    return (dispatch, getState) => {
        dispatch(editDrink(id, updates));
    }
};

//REMOVE DRINK
export const removeDrink = ( { id } = {}) => ({
    type: 'REMOVE_DRINK',
    id
});

export const startRemoveDrink = ( { id } = {}) => {
    return (dispatch, getState) => {
        dispatch(removeDrink({ id }));
    }
};

//SET DRINKS
export const setDrinks = (drinks) => ({
    type: 'SET_DRINKS',
    drinks
});

export const startSetDrinks = () => {
    return (dispatch, getState) => {
        dispatch(setDrinks(demoDrinks));
    }
}