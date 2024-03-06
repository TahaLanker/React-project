import { TestWatcher } from 'jest';
import {getVisibleState} from '../../selectors/expenses';

const expenses = [
    {
        id: '1',
        description: 'Rent',
        note: 'Rent note',
        amount: 10000,
        createdAt: -1111
    },
    {
        id: '2',
        description: 'Gum',
        note: '',
        amount: 10,
        createdAt: 0
    },
    {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 15000,
        createdAt: -10909
    }
]
test('Should filter by text value', () => {
    const result = getVisibleState(expense, {} )
});
