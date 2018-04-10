import {
    setTextFilter
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