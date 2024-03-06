import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selecetdExpense from '../selectors/expenses';

const ExpenseList = (props) => {
    console.log('props----',props)

    return (
        <div>
            <h3>Expense List</h3>
            {/* {
                props.expenses.map((item) => (
                    <ExpenseListItem key={item.id}
                    description={item.description}
                    amount={item.amount}
                    createdAt={item.createdAt}/>
                ))
            } */}
            {
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense}/>;
                })
            }
            {/* {props.filters.text} */}
        </div>
)}

const mapStateToProps = (state) => {
    return {
        // expenses: state.expenses,
        // filters: state.filters
        expenses: selecetdExpense(state.expenses, state.filters)
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;