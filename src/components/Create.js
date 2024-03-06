import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { AddExpense } from '../actions/expenses';

const CreatePage = (props) => (
    <div>
        <p>Add Expense!</p>
        <ExpenseForm onSubmit={(expense) => {
            console.log('new expense--', expense);
            props.dispatch(AddExpense(expense));
            props.history.push('/')
        }}/>
    </div>
);
export default connect()(CreatePage);