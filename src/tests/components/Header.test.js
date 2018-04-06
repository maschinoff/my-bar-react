import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout, wrapper;

beforeEach (() => {
    const userData = {
        name: 'Mike',
        photoURL: 'https://imgsome'
    };
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} userData={userData} />);
});

test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});


