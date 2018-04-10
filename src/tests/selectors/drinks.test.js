import selectDrinks from '../../selectors/drinks';
import drinks from '../fixtures/drinks';

test('should filter by text value', () => {
    const filters = {
        text: 'Laphroaig  '
    };

    const result = selectDrinks(drinks, filters);

    expect(result).toEqual([drinks[1]]);
});

test('should filter by category/text value', () => {
   const filters = {
       text: 'whisky'
   };

   const result = selectDrinks(drinks, filters);

   expect(result).toEqual([drinks[0], drinks[1], drinks[3]]);
});