import './ExpensesEditor.module.css';

export default function ExpensesEditor({ expense, onChange }) {
  return (
    <input
      type="text"
      className="ExpensesCreator"
      value={expense}
      onChange={onChange}
      placeholder="Описание расхода"
    ></input>
  );
}
