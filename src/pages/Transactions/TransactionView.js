import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ExpensesEditor from '../../components/TransactionsAndExpenses/ExpensesEditor';
import CostEditor from '../../components/TransactionsAndExpenses/CostEditor';
import ExpensesSelect from '../../components/TransactionsAndExpenses/ExpensesSelect';
import Button from '../../components/TransactionsAndExpenses/Button';
import * as operations from '../../redux/transaction/transaction-operations';

export default function TransactionView() {
  const [date, setDate] = useState(new Date());
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState(null);
  const [cost, setCost] = useState('');

  const handleChangeDate = e => setDate(e);
  const handleChangeCost = e => setCost(e.target.value);
  const handleChangeExpense = e => setExpense(e.target.value);
  const handleChangeCategory = e => setCategory(e);

  const handleFormSubmit = e => {
    e.preventDefault();

    const transaction = { date, expense, category, cost };
    operations.addTransaction(transaction);
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
    setDate(new Date());
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

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <DatePicker selected={date} onChange={handleChangeDate} />
        <ExpensesEditor expense={expense} onChange={handleChangeExpense} />
        <ExpensesSelect onChange={handleChangeCategory} category={category} />
        <CostEditor cost={cost} onChange={handleChangeCost} />
        <Button type="submit">Ввод</Button>
        <Button onClick={handleClearForm}>Очистить</Button>
      </form>
    </div>
  );
}
