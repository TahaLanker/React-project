import { v4 as uuidv4 } from 'uuid';

//add expense
export const AddExpense = (
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
export const RemoveExpense = (
    {id} = {}) => ({
        type: 'DELETE',
        expense: {
            id
        }
});

//edit expense
export const EditExpense = ( id,
    updates) => ({
        type: 'EDIT',
        // expense: {
        //     id,
        //     amount
        // }
        id, updates
});