export default (state = {}, action) => {
    switch (action.type){
        case 'LOGIN':
            return {
                uid: action.uid,
                name: action.displayName,
                photoURL: action.photoURL
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};