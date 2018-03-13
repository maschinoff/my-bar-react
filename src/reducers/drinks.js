import drinks from '../tests/fixtures/drinks';
const drinksReducerDefaultState = [];

export default (state = drinks, action) => {
    switch (action.type){
        case 'ADD_DRINK':
            return [
                ...state,
                action.drink
            ];
        case 'SET_DRINKS':
            return action.drinks;
        default:
    }       return state;
}