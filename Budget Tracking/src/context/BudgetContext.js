import React, { createContext, useReducer, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BudgetContext = createContext();

const initialState = {
  transactions: [],
  viewMode: 'monthly'
};

function budgetReducer(state, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [...state.transactions, { ...action.payload, id: uuidv4() }] };
    case 'DELETE_TRANSACTION':
      return { ...state, transactions: state.transactions.filter(tx => tx.id !== action.payload) };
    case 'EDIT_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.map(tx => tx.id === action.payload.id ? action.payload : tx)
      };
    case 'SET_VIEW_MODE':
      return { ...state, viewMode: action.payload };

      case 'EDIT_TRANSACTION':
  return {
    ...state,
    transactions: state.transactions.map(tx =>
      tx.id === action.payload.id ? action.payload : tx
    )
  };

  case 'SET_FILTER':
  return { ...state, filter: action.payload };

    default:
      return state;
  }
}

export function BudgetProvider({ children }) {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  return <BudgetContext.Provider value={{ state, dispatch }}>{children}</BudgetContext.Provider>;
}

export function useBudget() {
  return useContext(BudgetContext);
}
