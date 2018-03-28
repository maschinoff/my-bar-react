const drinksReducerDefaultState = [];

export default (state = drinksReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_DRINK':
            return [
                ...state,
                action.drink
            ];
        case 'EDIT_DRINK':
            return state.map((drink) => {
               if(drink.id === action.id){
                   return {
                       ...drink,
                       ...action.updates
                   }
               }
               else{
                   return drink;
                }
            });
        case 'REMOVE_DRINK':
            return state.filter(({ id }) => { return id !== action.id })
        case 'SET_DRINKS':
            return action.drinks;
        default:
    }       return state;
}