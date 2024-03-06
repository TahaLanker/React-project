import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const DashboardPage = () => (
    <div>
        <p>This is Dashboard page!</p>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);
export default DashboardPage;