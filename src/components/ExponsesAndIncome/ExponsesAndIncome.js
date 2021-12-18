import s from './ExponsesAndIncome.module.css';

const ExponsesAndIncome = () => {

    return (
        <ul className={s.list}>
             <li className={s.item}>
                 <p className={s.itemName}>Расходы:<span className={s.itemExponses}> -18000</span></p>
             </li>
             <li className={s.item}>
                 <p className={s.itemName}>Доходы:<span className={s.itemIncome}> +18000</span></p>
             </li>
         </ul>
  );
};


export default ExponsesAndIncome;

