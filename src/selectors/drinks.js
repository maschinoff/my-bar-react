//Get visible drinks

export default (drinks, { text, sortBy }) => {
    return drinks.filter((drink) => {
        const textMatch = drink.title.trim().toLowerCase().includes(text.trim().toLowerCase()) || drink.category.trim().toLowerCase().includes(text.trim().toLowerCase());

        return textMatch;
    }).sort((a, b) => {
        switch(sortBy){
            default:
                return a.createdAt < b.createdAt ? 1 : -1;
        }
    })
}
