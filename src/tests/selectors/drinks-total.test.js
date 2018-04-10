import {
    selectDrinksLitersTotal,
    selectDrinksCostTotal
} from '../../selectors/drinks-total.js';
import drinks from '../fixtures/drinks';

test('should calculate total liters correctly', () => {
   const result = selectDrinksLitersTotal(drinks);
   expect(result).toBe(2.65);
});

test('should calculate total cost of drinks correctly', () => {
   const result = selectDrinksCostTotal(drinks);
   expect(result).toBe(10299.12);
});