//Get visible drinks

export default (drinks, { text, category, sortBy }) => {
    return drinks.filter((drink) => {
        const textMatch = drink.title.trim().toLowerCase().includes(text.trim().toLowerCase()) || drink.category.trim().toLowerCase().includes(text.trim().toLowerCase());
        const categoryMatch = drink.category.trim().toLowerCase().includes(category.trim().toLowerCase());

        return textMatch && categoryMatch;
    }).sort((a, b) => {
        switch(sortBy){
            default:
                return a.createdAt < b.createdAt ? 1 : -1;
        }
    })
}
