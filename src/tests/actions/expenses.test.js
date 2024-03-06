import {AddExpense, EditExpense, RemoveExpense} from './../../actions/expenses';

test('Remove Expense Test', () => {
    const action = RemoveExpense({id: '123'});

    expect(action).toEqual({
        type: 'DELETE',
        expense:{id: '123'}
    })
})

test('Edit Expense Test', () => {
    const action = EditExpense({id: '123'}, {note: 'Edit Note'});

    expect(action).toEqual({
        type: 'EDIT',
        id: {id: '123'},
        updates: {note: 'Edit Note'}
    })
})

test('Add Expense Test', () => {
    const expenseData = {
       // id: '321',
        description: 'Add Desc',
        note: 'Add Note',
        amount: 10,
        createdAt: 1000
    }
    const action = AddExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Add Default Expense Test', () => {
    const action = AddExpense();

    expect(action).toEqual({
        type: 'ADD',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})