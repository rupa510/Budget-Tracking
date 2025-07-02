import React from 'react';
import { useBudget } from '../context/BudgetContext';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#4e73df', '#f6c23e', '#36b9cc', '#e74a3b', '#1cc88a', '#858796'];

export default function CategoryChart() {
  const { state } = useBudget();

  const expenseByCategory = state.transactions
    .filter(tx => tx.type === 'Expense')
    .reduce((acc, tx) => {
      const category = tx.category || 'Uncategorized';
      acc[category] = (acc[category] || 0) + tx.amount;
      return acc;
    }, {});

  const chartData = Object.entries(expenseByCategory).map(([name, value]) => ({ name, value }));

  if (chartData.length === 0) {
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <h4 className="mb-3">Spending by Category</h4>
        <p className="text-muted">No expense data available.</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h4 className="mb-3 text-center">Spending by Category</h4>
      <div style={{ width: '100%', maxWidth: '400px', height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
