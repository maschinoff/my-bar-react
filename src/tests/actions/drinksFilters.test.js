import {
    setTextFilter,
    setCategoryFilter
} from '../../actions/drinksFilters';

test('should generate set text filter object with default value', () => {
   const action = setTextFilter();

   expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text: ''
   })
});

test('should generate set text filter object with provided value', () => {
    const text = 'search query string';
    const action = setTextFilter(text);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

test('should generate set category filter object with provided value', () => {
    const category = 'beer';
    const action = setCategoryFilter(category);

    expect(action).toEqual({
       type: 'SET_CATEGORY_FILTER',
       category
    });
});