import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

//add expense
const AddExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0 
    } = {}) => ({
        type: 'ADD',
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt}
});

//remove expense
const RemoveExpense = (
    {id} = {}) => ({
        type: 'DELETE',
        expense: {
            id
        }
});

//edit expense
const EditExpense = ( id,
    {amount} = {}) => ({
        type: 'EDIT',
        expense: {
            id,
            amount
        }
});

//set text filter
const textFilter = (text = '') => ({
        type: 'TEXT_FILTER',
        text
});

//sort
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//set start and end date
const setStartDate = ( startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
const setEndDate = ( endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

//Expense Reducer
const defaultExpenseReducerState = [];
const expensesReducer = (state = defaultExpenseReducerState, action) => {
    switch (action.type){
        case 'ADD':
            //return state.concat(action.expense);
            return [...state, action.expense];
        case 'DELETE':
            //return state.filter(({id}) => id !== action.expense.id);
            return state.filter(({id}) => id !== action.id);
        case 'EDIT':
            return state.map((expense) => {
                //if(expense.id === action.expense.id){
                if(expense.id === action.id){
                    console.log('in', expense);
                    //return {... expenseTwo, amount: action.expense.amount}
                    return {...expense, ...action.update}
                }
                else{
                    return expense;
                }
            });
        default: 
            return state;
    }
};

//Filter Reducer
const defaultFilterReducerState = {
    text: '',
    sortBy: 'date', //amount or date
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = defaultFilterReducerState, action) => {
    switch (action.type){
        case 'TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE': 
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT': 
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE': 
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state;
    }
};

//store creation
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date')
            return a.createdAt < b.createdAt ? 1 : -1
        else if(sortBy === 'amount')
            return a.amount < b.amount ? 1 : -1
    });
}
//console.log(store.getState());
store.subscribe(() => {
   const state = store.getState();
    const visibleData = getVisibleExpenses(state.expenses, state.filters);
    console.log('state Data: ', state)
    console.log('Visible Data: ', visibleData)
});

const expenseOne = store.dispatch(AddExpense({
    description: 'Rent description',
    amount: 1000,
    createdAt: '1000'
}));
const expenseTwo = store.dispatch(AddExpense({
    description: 'Coffee description',
    amount: 100,
    createdAt: '-1000'
}));
//delete expense
// store.dispatch(RemoveExpense({
//     id: expenseTwo.expense.id
//}));
//edit expense
// store.dispatch(EditExpense(
//     expenseOne.expense.id,
//     { amount : 5000}
//));

//text filter
store.dispatch(textFilter('rent'));
//store.dispatch(textFilter());

//sort
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//set startDate and endDate
// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(200));

//console.log('get',store.getState());

const demoState = {
    expenses: [{
        id: '1',
        descripton: 'Rent Description',
        amount: 1000,
        note: 'This is optional rent note',
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined
    }
};