import React, { useState, useEffect, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import CategoryInput from '../CategoryInput';
import CostEditor from '../CostEditor';
import CategorySelect from '../CategorySelect';
import Button from '../Button';
import {
  transactionsOperations,
  transactionsActions,
} from '../../../redux/transaction';
import { ReactComponent as Calendar } from '../../../img/reports/calendar.svg';

import s from './TransactionForm.module.css';

export default function TransactionForm({
  options,
  income,
  onSubmit,
  placeholder,
}) {
  const [date, setDate] = useState(moment(new Date()).valueOf());
  const [product, setProduct] = useState('');
  const [category, setCategory] = useState(null);
  const [cost, setCost] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!income) {
      const formatDate = moment(new Date(date)).valueOf();
      dispatch(transactionsOperations.getExpenseByDate(formatDate));
    }
    if (income) {
      const momentDate = moment(new Date(date)).valueOf();
      dispatch(transactionsOperations.getIncomeByDate(momentDate));
    }
  }, [dispatch, date, income]);

  useEffect(() => {
    handleClearForm();
  }, [income]);

  // const handleChangeDate = e => setDate(moment(e).valueOf());
  const handleChangeCost = e => setCost(e.target.value);
  const handleChangeProduct = e => setProduct(e.target.value);
  const handleChangeCategory = e => setCategory(e);

  const handleChangeDate = date => {
    const momentDate = moment(new Date(date)).valueOf();
    setDate(momentDate);
    dispatch(transactionsActions.setDate(momentDate));
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const transaction = { date, product, category, cost };
    // operations.addTransaction(transaction);
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
    setProduct('');
    setCategory('');
    setCost('');
  };

  const handleClearForm = e => {
    setDate(new Date());
    setProduct('');
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
        <form className={s.form}>
          <CategoryInput value={product} onChange={handleChangeProduct} />
          <CategorySelect
            onChange={handleChangeCategory}
            category={category}
            options={options}
            income={income}
            placeholder={placeholder}
          />
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
