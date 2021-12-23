import s from './TransactionsPerMonth.module.css';
import { useSelector } from 'react-redux';
import chosenMonthSelectors from '../../redux/chosenMonth/chosenMonth-selectors';

const TransactionsPerMonth = () => {
    const expensePerMonth = useSelector(chosenMonthSelectors.getExponsePerDesiredMonth);
    const incomePerMonth = useSelector(chosenMonthSelectors.getIncomePerDesiredMonth);
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <div className={s.itemWrapper}>
          <span className={s.itemName}>Расходы:</span>
          <div className={s.itemExponses}>
            <span>- {expensePerMonth.totalSum}</span>
            <span> грн.</span>
          </div>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.itemWrapper}>
          <span className={s.itemName}>Доходы:</span>
          <div className={s.itemIncome}>
            <span>+ {incomePerMonth.totalIncome}</span>
            <span> грн.</span>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default TransactionsPerMonth;
