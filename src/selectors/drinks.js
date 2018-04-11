//Get visible drinks

export default (drinks, { text, category, status, sortBy }) => {
    return drinks.filter((drink) => {
        const textMatch = drink.title.trim().toLowerCase().includes(text.trim().toLowerCase()) || drink.category.trim().toLowerCase().includes(text.trim().toLowerCase());
        const categoryMatch = drink.category.trim().toLowerCase().includes(category.trim().toLowerCase());

        let statusMatch;
        switch (status.toUpperCase()) {
            case 'FULL':
                statusMatch = !drink.isEmpty;
                break;
            case 'OPENED':
                statusMatch = drink.isOpen && !drink.isEmpty;
                break;
            case 'EMPTIED':
                statusMatch = drink.isEmpty;
                break;
            default:
                statusMatch = true;
                break;
        }

        return textMatch && categoryMatch && statusMatch;
    }).sort((a, b) => {
        switch(sortBy){
            default:
                return a.createdAt < b.createdAt ? 1 : -1;
        }
    })
}
