import React from 'react';
import BarList from '../components/BarList';
import BarSummary from '../components/BarSummary';

export const DashboardPage = () => (
    <div>
        <BarSummary />
        <BarList />
    </div>
);

export default DashboardPage;