export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const setCategoryFilter = (category = '') => ({
    type: 'SET_CATEGORY_FILTER',
    category
});

export const setStatusFilter = (status = 'Full') => ({
    type: 'SET_STATUS_FILTER',
    status
});