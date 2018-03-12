const drinksReducerDefaultState = [
    {
        id: 'sdfsdf',
        title: 'My bottle',
        category: 'Beer',
        vol: 0.5,
        alc: 5.6,
        price: 450,
        aged: 12,
        boughtAt: 123123,
        bottledAt: 12312312,
        bestBefore: 12312312,

    },
    {
        id: 'sdfsdf',
        title: 'My bottle',
        category: 'Beer',
        vol: 0.5,
        alc: 5.6,
        price: 450,
        aged: 12,
        boughtAt: 123123,
        bottledAt: 12312312,
        bestBefore: 12312312,

    }
];

export default (state = drinksReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_DRINKS':
            return action.drinks;
        default:
    }       return state;
}