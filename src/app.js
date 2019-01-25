console.log('app.js is running hot!');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { startSetDrinks } from './actions/drinks';
import LoadingPage from './components/LoadingPage';

import { library } from  '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';

import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';

library.add(fas, fal);

const store = configureStore();

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user));
        store.dispatch(startSetDrinks());
        renderApp();
        if(history.location.pathname === '/'){
                history.push('/dashboard');
        };
    }
    else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});