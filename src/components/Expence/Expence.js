import { useState } from 'react';
import { ReactComponent as Transport } from '../../img/reports/transport.svg';
import { ReactComponent as Products } from '../../img/reports/products.svg';
import { ReactComponent as Health } from '../../img/reports/health.svg';
import { ReactComponent as Alcohol } from '../../img/reports/alcohol.svg';
import { ReactComponent as Entertainment } from '../../img/reports/entertainment.svg';
import { ReactComponent as Housing } from '../../img/reports/housing.svg';
import { ReactComponent as Technics } from '../../img/reports/technics.svg';
import { ReactComponent as Communal } from '../../img/reports/communal.svg';
import { ReactComponent as Sport } from '../../img/reports/sport.svg';
import { ReactComponent as Education } from '../../img/reports/education.svg';
import { ReactComponent as Other } from '../../img/reports/other.svg';
import s from './Expence.module.css';

export default function Expence() {
  const [activeValue, setActiveValue] = useState('');

  //Имитация данных, полученных с бекенда
  const backendCategories = [
    { price: 50, name: 'Транспорт' },
    { price: 1500, name: 'Продукты' },
    { price: 1000, name: 'Здоровье' },
    { price: 55005, name: 'Алкоголь' },
  ];

  //Задает в стейт значение поля "имя"
  function onClickSetActiveValue(value) {
    setActiveValue(value);
  }

  //Принимает массив данных с бекенда и отдает массив категорий
  //с значенем price > 0 и добавляет иконки категорий
  function match(arr) {
    const expenceCategories = [
      {
        price: 5000,
        name: 'Транспорт',
        img: (
          <Transport
            className={activeValue === 'Транспорт' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: 5000,
        name: 'Продукты',
        img: (
          <Products
            className={activeValue === 'Продукты' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: 5000,
        name: 'Здоровье',
        img: (
          <Health
            className={activeValue === 'Здоровье' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: 5000,
        name: 'Алкоголь',
        img: (
          <Alcohol
            className={activeValue === 'Алкоголь' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: 5000,
        name: 'Развлечение',
        img: (
          <Entertainment
            className={activeValue === 'Развлечение' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: 5000,
        name: 'Все для дома',
        img: (
          <Housing
            className={activeValue === 'Все для дома' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: 5000,
        name: 'Техника',
        img: (
          <Technics
            className={activeValue === 'Техника' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: 5000,
        name: 'Коммуналка, связь',
        img: (
          <Communal
            className={
              activeValue === 'Коммуналка, связь' ? s.activeSvg : s.svg
            }
          />
        ),
      },
      {
        price: 5000,
        name: 'Спорт, хобби',
        img: (
          <Sport
            className={activeValue === 'Спорт, хобби' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: 5000,
        name: 'Образование',
        img: (
          <Education
            className={activeValue === 'Образование' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: 5000,
        name: 'Прочее',
        img: (
          <Other className={activeValue === 'Прочее' ? s.activeSvg : s.svg} />
        ),
      },
    ];
    const categoriesList = [];

    arr.forEach(({ price, name }) => {
      if (price > 0) {
        expenceCategories.forEach(el => {
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
      {/* Добавляет линии после 3, 6, 9 категорий в мобильной версии */}
      {categoriesList.length > 3 && <div className={s.line1}></div>}
      {categoriesList.length > 6 && <div className={s.line2}></div>}
      {categoriesList.length > 9 && <div className={s.line3}></div>}
    </ul>
  );
}
