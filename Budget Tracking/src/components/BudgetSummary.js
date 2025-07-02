import React from 'react';
import { useBudget } from '../context/BudgetContext';

export default function BudgetSummary() {
  const { state } = useBudget();

  const income = state.transactions
    .filter(tx => tx.type === 'Income')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expense = state.transactions
    .filter(tx => tx.type === 'Expense')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = income - expense;

  return (
    <div className="container my-4">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-dark" style={{ fontFamily: 'Segoe UI' }}>
          Budget Expense Tracker
        </h1>
      </div>
      <div className="row justify-content-center gap-3">
        <div className="col-10 col-sm-3 bg-light p-3 rounded shadow-sm text-center border-start border-success border-4">
          <h5 className="fw-bold text-secondary">Income</h5>
          <p className="fs-5 text-success fw-bold">₹{income.toFixed(2)}</p>
        </div>
        <div className="col-10 col-sm-3 bg-light p-3 rounded shadow-sm text-center border-start border-danger border-4">
          <h5 className="fw-bold text-secondary">Expense</h5>
          <p className="fs-5 text-danger fw-bold">₹{expense.toFixed(2)}</p>
        </div>
        <div className="col-10 col-sm-3 bg-light p-3 rounded shadow-sm text-center border-start border-primary border-4">
          <h5 className="fw-bold text-secondary">Balance</h5>
          <p className="fs-5 text-primary fw-bold">₹{balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
