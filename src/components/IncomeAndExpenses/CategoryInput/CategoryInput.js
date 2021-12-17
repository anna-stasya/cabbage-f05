import s from './CategoryInput.module.css';

export default function CategoryInput({ value, onChange }) {
  return (
    <input
      type="text"
      className={s.categoryInput}
      value={value}
      onChange={onChange}
      placeholder="Описание расхода"
    ></input>
  );
}
