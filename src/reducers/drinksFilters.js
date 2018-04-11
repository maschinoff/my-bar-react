const drinksFiltersReducerDefaultState = {
    text: '',
    category: '',
    status: 'Full',
    sortBy: 'dateBought',
}

export default (state = drinksFiltersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_CATEGORY_FILTER':
            return {
                ...state,
                category: action.category
            };
        case 'SET_STATUS_FILTER':
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}