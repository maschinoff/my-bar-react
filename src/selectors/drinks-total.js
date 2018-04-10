export const selectDrinksLitersTotal = (drinks) => {
    return drinks
        .map((drink) => drink.vol)
        .reduce((sum, vol) => parseFloat(sum) + parseFloat(vol), 0);
}
export const selectDrinksCostTotal = (drinks) => {
    return drinks
        .map((drink) => drink.price)
        .reduce((sum, price) => sum + price, 0);
}
