import React from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { EditExpense, RemoveExpense } from '../actions/expenses';

const ExpenseListItem = ({description, amount, createdAt, dispatch, id}) => {
    return (
        <div>
            <h4>{description} </h4>
            <span>{amount} - {createdAt}</span>
            {' '}<Link to={`/edit/${id}`}>Edit Expense</Link>
            {/*<button onClick={() => {*/}
                {/*dispatch(RemoveExpense({id}))*/}
            {/*}}>Remove Item</button>*/}
        </div>
    )
};

/*
const mapActionToProps = (state) => {
    return {
        expenses: state.expenses
    }
}
*/

//export default connect(mapActionToProps)(ExpenseListItem)
export default ExpenseListItem

