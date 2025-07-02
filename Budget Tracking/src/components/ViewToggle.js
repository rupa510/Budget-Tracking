// components/ViewToggle.jsx
import React from 'react';
import { useBudget } from '../context/BudgetContext';

export default function ViewToggle() {
  const { state, dispatch } = useBudget();

  return (
    <div className="view-toggle d-flex justify-content-center gap-2 my-3">
      <button
        className={`btn ${state.view === 'monthly' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => dispatch({ type: 'SET_VIEW', payload: 'monthly' })}
      >
        Monthly
      </button>
      <button
        className={`btn ${state.view === 'weekly' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => dispatch({ type: 'SET_VIEW', payload: 'weekly' })}
      >
        Weekly
      </button>
    </div>
  );
}
