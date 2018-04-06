import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const user = {
        uid: 123,
        displayName: 'Mike',
        photoURL: 'https://simeimageurl'
    };
    const action = login(user);

    expect(action).toEqual({
        type: 'LOGIN',
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
    });
});

test('should generate logout action object', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
});