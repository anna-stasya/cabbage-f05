import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { ReactComponent as Transport } from '../../img/reportsCategories/transport.svg';
import { ReactComponent as Products } from '../../img/reportsCategories/products.svg';
import { ReactComponent as Health } from '../../img/reportsCategories/health.svg';
import { ReactComponent as Alcohol } from '../../img/reportsCategories/alcohol.svg';
import { ReactComponent as Entertainment } from '../../img/reportsCategories/entertainment.svg';
import { ReactComponent as Housing } from '../../img/reportsCategories/housing.svg';
import { ReactComponent as Technics } from '../../img/reportsCategories/technics.svg';
import { ReactComponent as Communal } from '../../img/reportsCategories/communal.svg';
import { ReactComponent as Sport } from '../../img/reportsCategories/sport.svg';
import { ReactComponent as Education } from '../../img/reportsCategories/education.svg';
import { ReactComponent as Other } from '../../img/reportsCategories/other.svg';
import Charts from '../Charts';
import s from './Expence.module.css';

export default function Expence() {
  const [activeValue, setActiveValue] = useState('');

  //Получаем данные расходов из редакса
  // const expenceData = useSelector(
  //   state => state.desiredMonth.ExponsePerDesiredMonth,
  // );

  // console.log('ExpenceData:');
  // console.log(expenceData);

  //Имитация данных, полученных из редакса
  const backendCategories = [
    { price: 100, category: 'Транспорт', description: 'Taxi' },
    { price: 100, category: 'Транспорт', description: 'Bus' },
    { price: 100, category: 'Транспорт', description: 'Air' },
    { price: 100, category: 'Продукты', description: 'Bananas' },
    { price: 100, category: 'Здоровье', description: 'Hospital' },
    { price: 100, category: 'Алкоголь', description: 'Beer' },
  ];

  //Задает в стейт значение поля "имя"
  function onClickSetActiveValue(value) {
    setActiveValue(value);
  }

  //Принимает массив данных из редакса и отдает массив категорий
  //с значенем price > 0 и добавляет иконки категорий
  function match(arr) {
    const expenceCategories = [
      {
        price: null,
        category: 'Транспорт',
        img: (
          <Transport
            className={activeValue === 'Транспорт' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: null,
        category: 'Продукты',
        img: (
          <Products
            className={activeValue === 'Продукты' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: null,
        category: 'Здоровье',
        img: (
          <Health
            className={activeValue === 'Здоровье' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: null,
        category: 'Алкоголь',
        img: (
          <Alcohol
            className={activeValue === 'Алкоголь' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: null,
        category: 'Развлечение',
        img: (
          <Entertainment
            className={activeValue === 'Развлечение' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: null,
        category: 'Все для дома',
        img: (
          <Housing
            className={activeValue === 'Все для дома' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: null,
        category: 'Техника',
        img: (
          <Technics
            className={activeValue === 'Техника' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: null,
        category: 'Коммуналка, связь',
        img: (
          <Communal
            className={
              activeValue === 'Коммуналка, связь' ? s.activeSvg : s.svg
            }
          />
        ),
      },
      {
        price: null,
        category: 'Спорт, хобби',
        img: (
          <Sport
            className={activeValue === 'Спорт, хобби' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: null,
        category: 'Образование',
        img: (
          <Education
            className={activeValue === 'Образование' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        price: null,
        category: 'Прочее',
        img: (
          <Other className={activeValue === 'Прочее' ? s.activeSvg : s.svg} />
        ),
      },
    ];

    arr.forEach(({ price, category }) => {
      if (price > 0) {
        expenceCategories.forEach(el => {
          if (el.category === category) {
            el.price = el.price + price;
          }
        });
      }
    });

    const categorieslist = expenceCategories.filter(el => el.price > 0);

    return categorieslist;
  }

  //Пропускаем коллекцию полученную из редакса через функцию match
  const categoriesList = match(backendCategories);

  return (
    <>
      <ul className={s.list}>
        {categoriesList &&
          categoriesList.map(({ price, category, img }) => (
            <li key={category} className={s.item}>
              <button
                onClick={() => onClickSetActiveValue(category)}
                className={s.button}
              >
                <span className={s.price}>{price.toFixed(2)}</span>
                {img}
                <span className={s.category}>{category}</span>
              </button>
            </li>
          ))}
        {/* Добавляет линии после 3, 6, 9 категорий в мобильной версии */}
        {categoriesList.length > 3 && <div className={s.line1}></div>}
        {categoriesList.length > 6 && <div className={s.line2}></div>}
        {categoriesList.length > 9 && <div className={s.line3}></div>}
      </ul>
      <Charts />
    </>
  );
}
