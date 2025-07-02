import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BudgetProvider } from './context/BudgetContext';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import BudgetSummary from './components/BudgetSummary';
import CategoryChart from './components/CategoryChart';
import ViewToggle from './components/ViewToggle';
import ExportCSV from './components/ExportCSV';

export default function App() {
  return (
    <BudgetProvider>
      <div className="app-container">
        
        <BudgetSummary />
        <ViewToggle />
        <TransactionForm />
        <TransactionList />
        <CategoryChart />
        <ExportCSV />
      </div>
    </BudgetProvider>
  );
}