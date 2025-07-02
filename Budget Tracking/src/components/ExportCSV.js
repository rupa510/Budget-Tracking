import { useBudget } from '../context/BudgetContext';

export default function ExportCSV() {
  const { state } = useBudget();

  const handleExport = () => {
    const csv = state.transactions.map(tx =>
      `${tx.type},${tx.amount},${tx.category},${tx.date}`
    ).join("\n");

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };

  return (
  <div className="text-center my-4">
    <button onClick={handleExport} className="btn btn-primary px-5">
      Export CSV
    </button>
  </div>
);

}
