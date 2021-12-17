import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import s from './Tabs.module.css';
import TransactionForm from '../TransactionForm';
import Button from '../Button';
import { transactionsOperations } from '../../../redux/transaction';

const optionsExpense = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Развлечения' },
  { value: 'home', label: 'Всё для дома' },
  { value: 'technics', label: 'Техника' },
  { value: 'bill', label: 'Комуналка, связь' },
  { value: 'sport', label: 'Спорт, хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

const optionsIncome = [
  { value: 'salary', label: 'ЗП' },
  { value: 'additional', label: 'Доп. доход' },
];

export default function Tabs() {
  const [expense, setExpense] = useState(true);
  const [income, setIncome] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const momentDate = moment(new Date()).valueOf();
    dispatch(transactionsOperations.getExpenseByDate(momentDate));
  }, [dispatch]);

  const clickExpense = () => {
    if (expense) return;
    setIncome(false);
    setExpense(true);
    const momentDate = moment(new Date()).valueOf();
    dispatch(transactionsOperations.getExpenseByDate(momentDate));
  };

  const clickIncome = () => {
    if (income) return;
    setIncome(true);
    setExpense(false);
    const momentDate = moment(new Date()).valueOf();
    dispatch(transactionsOperations.getIncomeByDate(momentDate));
  };

  const handleSubmit = data => {
    if (income) {
      dispatch(transactionsOperations.addIncome(data));
    }
    if (expense) {
      dispatch(transactionsOperations.addExpense(data));
    }
  };

  return (
    <div>
      <div>
        <Button
          onClick={clickExpense}
          className={
            expense ? `${s.tabButton} ${s.activeButton}` : `${s.tabButton}`
          }
        >
          Расход
        </Button>
        <Button
          type="button"
          onClick={clickIncome}
          className={
            income ? `${s.tabButton} ${s.activeButton}` : `${s.tabButton}`
          }
        >
          Доход
        </Button>
      </div>
      {expense ? (
        <TransactionForm
          options={optionsExpense}
          onSubmit={handleSubmit}
          placeholder="Категория товара"
        />
      ) : (
        <TransactionForm
          options={optionsIncome}
          income={income}
          onSubmit={handleSubmit}
          placeholder="Категория дохода"
        />
      )}
      {/* <TransactionForm options={optionsExpense} /> */}
    </div>
  );
}
