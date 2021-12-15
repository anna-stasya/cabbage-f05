import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import CategoryInput from '../CategoryInput';
import CostEditor from '../CostEditor';
import CategorySelect from '../CategorySelect';
import Button from '../Button';
import * as operations from '../../../redux/transaction/transaction-operations';
import { ReactComponent as Calendar } from '../../../img/reports/calendar.svg';

import s from './TransactionForm.module.css';

export default function TransactionForm() {
  const [date, setDate] = useState(moment(new Date()).valueOf());
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState(null);
  const [cost, setCost] = useState('');

  const handleChangeDate = e => setDate(moment(e).valueOf());
  const handleChangeCost = e => setCost(e.target.value);
  const handleChangeExpense = e => setExpense(e.target.value);
  const handleChangeCategory = e => setCategory(e);

  const handleFormSubmit = e => {
    e.preventDefault();

    const transaction = { date, expense, category, cost };
    operations.addTransaction(transaction);
    console.log('transaction', transaction);
    // fetch('http://example.com', {
    //   method: 'POST',
    //   body: JSON.stringify(userData),
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log('Successful' + data);
    //   });
    // });
    setDate(moment(new Date()).valueOf());
    setExpense('');
    setCategory('');
    setCost('');
  };

  const handleClearForm = e => {
    e.preventDefault();

    setDate(new Date());
    setExpense('');
    setCategory('');
    setCost('');
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.datepickerButton} onClick={onClick} ref={ref}>
      <div className={s.wrapper}>
        <Calendar className={s.calendar} />
        {value}
      </div>
    </button>
  ));

  return (
    <div className={s.inputContainer}>
      <div className={s.innerContainer}>
        <DatePicker
          locale={ru}
          selected={date}
          onChange={handleChangeDate}
          dateFormat="dd.MM.yyyy"
          todayButton="Сегодня"
          customInput={<CustomInput />}
        />
        <form onSubmit={handleFormSubmit} className={s.form}>
          <CategoryInput expense={expense} onChange={handleChangeExpense} />
          <CategorySelect onChange={handleChangeCategory} category={category} />
          <CostEditor cost={cost} onChange={handleChangeCost} />
        </form>
      </div>
      <div>
        <Button
          type="submit"
          className={`${s.button} ${s.leftButton}`}
          onClick={handleFormSubmit}
        >
          Ввод
        </Button>
        <Button type="button" onClick={handleClearForm} className={s.button}>
          Очистить
        </Button>
      </div>
    </div>
  );
}
