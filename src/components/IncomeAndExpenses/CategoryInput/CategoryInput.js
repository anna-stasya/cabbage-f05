import s from './CategoryInput.module.css';

export default function CategoryInput({ expense, onChange }) {
  return (
    <input
      type="text"
      className={s.categoryInput}
      value={expense}
      onChange={onChange}
      placeholder="Описание расхода"
    ></input>
  );
}
