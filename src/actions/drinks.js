//ADD DRINK
export const addDrink = (drink) => ({
    type: 'ADD_DRINK',
    drink
});

export const startAddDrink = (drink = {}) => {
    return (dispatch, getState) => {
        dispatch(addDrink(drink));
    }
};