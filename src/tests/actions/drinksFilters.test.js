import {
    setTextFilter,
    setCategoryFilter, setStatusFilter
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

test('should generate set status filter object with default value', () => {
    const action = setStatusFilter();

    expect(action).toEqual({
        type: 'SET_STATUS_FILTER',
        status: 'Full'
    });
});

test('should generate set status filter object with provided value', () => {
    const status = 'All';
    const action = setStatusFilter(status);

    expect(action).toEqual({
        type: 'SET_STATUS_FILTER',
        status
    });
});