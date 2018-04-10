import drinkFiltersReducer from '../../reducers/drinksFilters';

test('should setup default filter value', () => {
    const state = drinkFiltersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'dateBought',
    });
});

test('should setup text filter value correctly', () => {
    const text = 'Text filter value';
    const state = drinkFiltersReducer(undefined, { type: 'SET_TEXT_FILTER', text});

    expect(state.text).toBe(text);
});

