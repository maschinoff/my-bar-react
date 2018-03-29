import moment from 'moment/moment';
import database from '../firebase/firebase';

//ADD DRINK
export const addDrink = (drink) => ({
    type: 'ADD_DRINK',
    drink
});

export const startAddDrink = (drinkData = {}) => {
    return (dispatch, getState) => {
        const {
            title = '',
            category = 'Undefined',
            vol = '',
            alc = '',
            price = '',
            aged = '',
            description = '',
            isEmpty = false,
            isOpen = false,
            boughtAt = 0,
            bottledAt = 0,
            bestBefore = 0,
            createdAt = moment().valueOf(),
            updatedAt = moment().valueOf()
        } = drinkData;

        const uid = getState().auth.uid;
        const drink = {
            title, category, vol, alc, price, aged, description, isEmpty, isOpen, boughtAt, bottledAt, bestBefore, createdAt, updatedAt
        };

        return database.ref(`users/${uid}/drinks`).push(drink).then((ref) => {
            dispatch(addDrink({
                id: ref.key,
                ...drink
            }));
        });
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
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/drinks/${id}`).update(updates).then(() => {
            dispatch(editDrink(id, updates));
        });
    }
};

//REMOVE DRINK
export const removeDrink = ( { id } = {}) => ({
    type: 'REMOVE_DRINK',
    id
});

export const startRemoveDrink = ( { id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/drinks/${id}`).remove().then(() => {
            dispatch(removeDrink({ id }))
        });
    }
};

//SET DRINKS
export const setDrinks = (drinks) => ({
    type: 'SET_DRINKS',
    drinks
});

export const startSetDrinks = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/drinks`).once('value').then((snapshot) => {
           const drinks = [];

           snapshot.forEach((childSnapshot) => {
               drinks.push({
                  id: childSnapshot.key,
                   ...childSnapshot.val()
               });
           });

           dispatch(setDrinks(drinks));
        });

    }
}