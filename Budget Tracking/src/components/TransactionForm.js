import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import { v4 as uuidv4 } from 'uuid';

export default function TransactionForm() {
  const { dispatch } = useBudget();


  const [type, setType] = useState('Income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !date) {
      alert("Amount, Category, and Date are required.");
      return;
    }

    const newTransaction = {
      id: uuidv4(),
      type,
      amount: parseFloat(amount),
      category,
      description,
      date,
    };

    dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });


    setType('Income');
    setAmount('');
    setCategory('');
    setDescription('');
    setDate('');
  };

  return (
   <form className="form row g-3" onSubmit={handleSubmit}>
  <div className="col-12 d-md-flex gap-3 align-items-start flex-wrap">
    <div className="col-md">
      <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </div>

    <div className="col-md input-group">
      <span className="input-group-text">
        <i className="bi bi-currency-rupee"></i>
      </span>
      <input
        type="number"
        className="form-control"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>

    <div className="col-md input-group">
      <span className="input-group-text">
        <i className="bi bi-tags"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
    </div>

    <div className="col-md input-group">
      <span className="input-group-text">
        <i className="bi bi-card-text"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>

    <div className="col-md">
      <input
        type="date"
        className="form-control"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  </div>

  <div className="col-12 text-center">
    <button type="submit" className="btn btn-primary px-5">
      Add
    </button>
  </div>
</form>

  );
}
