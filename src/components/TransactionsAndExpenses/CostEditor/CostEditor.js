import './CostEditor.module.css';

export default function CostEditor({ cost, onChange }) {
  return (
    <input
      type="number"
      className="CostEditor"
      value={cost}
      onChange={onChange}
      placeholder="0,00"
    ></input>
  );
}
