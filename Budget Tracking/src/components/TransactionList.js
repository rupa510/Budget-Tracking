import React from 'react';
import { useBudget } from '../context/BudgetContext';

export default function TransactionList() {
  const { state, dispatch } = useBudget();

  const handleEdit = (tx) => {
    const updatedDescription = prompt('Edit description:', tx.description);
    if (updatedDescription !== null) {
      dispatch({
        type: 'EDIT_TRANSACTION',
        payload: { ...tx, description: updatedDescription }
      });
    }
  };

  return (
    <div className="transaction-list mt-4">
      <h3>Transactions</h3>
      {state.transactions.map((tx) => (
        <div key={tx.id} className={`transaction ${tx.type} d-flex justify-content-between align-items-start p-2 border rounded mb-2`}>
          <div>
            <div className="fw-bold">{tx.date} | {tx.category} | ₹{tx.amount.toFixed(2)}</div>
            <div className="text-muted">{tx.description}</div>
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => handleEdit(tx)}
            >
              <i className="bi bi-pencil-square"></i>
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => dispatch({ type: 'DELETE_TRANSACTION', payload: tx.id })}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
