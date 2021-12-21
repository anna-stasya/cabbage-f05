import { useState } from 'react';
import { ReactComponent as Salary } from '../../img/reportsCategories/salary.svg';
import { ReactComponent as AdditionalIncome } from '../../img/reportsCategories/additional-income.svg';
import s from './Income.module.css';

export default function Income() {
  const [activeValue, setActiveValue] = useState('');

  //Имитация данных, полученных с бекенда
  const backendCategories = [
    { price: 20, name: 'ЗП' },
    { price: 50000, name: 'Доп.доход' },
  ];

  //Задает в стейт значение поля "имя"
  function onClickSetActiveValue(value) {
    setActiveValue(value);
  }

  //Принимает массив данных с бекенда и отдает массив категорий
  //с значенем price > 0 и добавляет иконки категорий
  function match(arr) {
    const incomeCategories = [
      {
        price: 5000,
        name: 'ЗП',
        img: <Salary className={activeValue === 'ЗП' ? s.activeSvg : s.svg} />,
      },
      {
        price: 5000,
        name: 'Доп.доход',
        img: (
          <AdditionalIncome
            className={activeValue === 'Доп.доход' ? s.activeSvg : s.svg}
          />
        ),
      },
    ];
    const categoriesList = [];

    arr.forEach(({ price, name }) => {
      if (price > 0) {
        incomeCategories.forEach(el => {
          if (el.name === name) {
            el.price = price;
            categoriesList.push(el);
          }
        });
      }
    });
    return categoriesList;
  }
  //Пропускаем коллекцию полученную с бекенда через функцию match
  const categoriesList = match(backendCategories);

  return (
    <ul className={s.list}>
      {categoriesList &&
        categoriesList.map(({ price, name, img }) => (
          <li key={name} className={s.item}>
            <button
              onClick={() => onClickSetActiveValue(name)}
              className={s.button}
            >
              <span className={s.price}>{price.toFixed(2)}</span>
              {img}
              <span className={s.name}>{name}</span>
            </button>
          </li>
        ))}
    </ul>
  );
}
