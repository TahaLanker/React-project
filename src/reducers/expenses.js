//Expense Reducer
const defaultExpenseReducerState = [];
const expensesReducer = (state = defaultExpenseReducerState, action) => {
    console.log('reducer action.id---', action)
    switch (action.type){
        case 'ADD':
            //return state.concat(action.expense);
            return [...state, action.expense];
        case 'DELETE':
            return state.filter(({id}) => id !== action.expense.id);
            //return state.filter(({id}) => id !== action.id);
        case 'EDIT':
            return state.map((expense) => {
                console.log('edit expense>>>>',expense)
                console.log('action>>>>',action)

                //if(expense.id === action.expense.id){
                    console.log('innn')
                if(expense.id === action.id){
                    console.log('in', expense);
                    //return {... expenseTwo, amount: action.expense.amount}
                    return {...expense, ...action.updates}
                }
                else{
                    return expense;
                }
            });
    //         case 'EDIT_EXPENSE':
    //   return state.map((expense) => {
    //     if (expense.id === action.id) {
    //       return {
    //         ...expense,
    //         ...action.updates
    //       };
    //     } else {
    //       return expense;
    //     };
    //   });
        default: 
            return state;
    }
};

export default expensesReducer;