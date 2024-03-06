import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { EditExpense, RemoveExpense} from '../actions/expenses';

const EditPage = (props) => {
    console.log('edit props--',props);
    return (
    <div>
        <p>This is Edit page with id '{props.match.params.id}'!</p>
        <div>
            <p>Edit Expense!</p>
            <ExpenseForm expense={props.expense} onSubmit={(expense) => {
                console.log('new expense--', expense);
                props.dispatch(EditExpense(props.expense.id,expense));
                props.history.push('/');
            }}/>
            <button onClick={() => {
                props.dispatch(RemoveExpense({id: props.match.params.id}));
                props.history.push('/');
            }}>Remove Item</button>
        </div>
    </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(EditPage);
