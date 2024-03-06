import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import {AddExpense} from './actions/expenses';
import {textFilter} from './actions/filters';
import getVisibleState from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(AddExpense({
    description: 'Water Bill',
    amount: '1000'
}));
store.dispatch(AddExpense({
    description: 'Rent',
    amount: '50000',
    createdAt: 100050
}));

store.dispatch(AddExpense({
    description: 'Gas Bill',
    //amount: '500',
    createdAt: 1000
}));

// store.dispatch(textFilter('gas'));

// setTimeout(function(){
//     store.dispatch(textFilter('bill'));
// }, 3000)
console.log('State--',store.getState());
let state = store.getState();
console.log('State--',store.getState());
console.log('Visible--', getVisibleState(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));