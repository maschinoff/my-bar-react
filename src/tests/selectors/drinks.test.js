import selectDrinks from '../../selectors/drinks';
import drinks from '../fixtures/drinks';

test('should filter by text value', () => {
    const filters = {
        text: 'Laphroaig  ',
        category: '',
        status: ''
    };

    const result = selectDrinks(drinks, filters);

    expect(result).toEqual([drinks[1]]);
});

test('should filter by category/text value', () => {
   const filters = {
       text: 'whisky',
       category: '',
       status: ''
   };

   const result = selectDrinks(drinks, filters);

   expect(result).toEqual([drinks[0], drinks[1], drinks[3]]);
});

test('should filter by category', () => {
    const filters = {
        text: '',
        category: 'beer',
        status: ''
    };

    const result = selectDrinks(drinks, filters);

    expect(result).toEqual([drinks[2]]);
});

test('should show full drinks', () => {
    const filters = {
        text: '',
        category: '',
        status: 'full'
    };

    const result = selectDrinks(drinks, filters);

    expect(result).toEqual([drinks[0], drinks[1], drinks[2]]);
});

test('should show opened drinks', () => {
    const filters = {
        text: '',
        category: '',
        status: 'opened'
    };

    const result = selectDrinks(drinks, filters);

    expect(result).toEqual([drinks[2]]);
});

test('should show emptied drinks', () => {
    const filters = {
        text: '',
        category: '',
        status: 'emptied'
    };

    const result = selectDrinks(drinks, filters);

    expect(result).toEqual([drinks[3]]);
});

test('should show all drinks', () => {
    const filters = {
        text: '',
        category: '',
        status: ''
    };

    const result = selectDrinks(drinks, filters);

    expect(result).toEqual([drinks[0], drinks[1], drinks[2], drinks[3]]);
});