import Select from 'react-select';
import './ExpensesSelect.module.css';

const options = [
  { value: 'транспорт', label: 'Транспорт' },
  { value: 'продукты', label: 'Продукты' },
  { value: 'здоровье', label: 'Здоровье' },
  { value: 'алкоголь', label: 'Алкоголь' },
  { value: 'развлечение', label: 'Развлечение' },
  { value: 'все для дома', label: 'Все для дома' },
  { value: 'техника', label: 'Техника' },
  { value: 'коммуналка, связь', label: 'Коммуналка, связь' },
  { value: 'спорт, хобби', label: 'Спорт, хобби' },
  { value: 'образование', label: 'Образование' },
  { value: 'прочее', label: 'Прочее' },
];

export default function ExpensesSelect({ onChange, category }) {
  return (
    <Select
      placeholder="Категория товара"
      onChange={onChange}
      value={category}
      options={options}
    />
  );
}
