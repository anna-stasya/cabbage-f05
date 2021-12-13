// import React, { useState } from 'react';
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

export default function ExpensesSelect() {
  // const [category, setCategory] = useState([
  //   'Транспорт',
  //   'Продукты',
  //   'Здоровье',
  // ]);
  // console.log('category', category);

  // const handleChange = selectedOption => {
  //   console.log('selectedOption', selectedOption);
  //   setCategory(selectedOption);
  // };

  return (
    // <select name="Item category" value="category" onChange={handleChange}>
    //   <option value="">Категория товара</option>
    //   {category.map(option => {
    //     return (
    //       <option key={option} value={option} label={option}>
    //         {option}
    //       </option>
    //     );
    //   })}
    // </select>
    <Select
      placeholder="Категория товара"
      // onChange={handleChange}
      options={options}
      // value={category}
    />
  );
}
