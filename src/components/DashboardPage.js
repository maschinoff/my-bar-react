import React from 'react';
import BarList from '../components/BarList';
import DrinksListFilters from './DrinksListFilters';
import BarSummary from '../components/BarSummary';

export const DashboardPage = () => (
    <div>
        <BarSummary />
        <DrinksListFilters />
        <BarList />
    </div>
);

export default DashboardPage;