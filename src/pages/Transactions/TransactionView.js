import React, { Component, useState } from 'react';
// import Container from '../components/Container';
// import TodoList from '../components/TodoList';
import ExpensesEditor from '../../components/TransactionsAndExpenses/ExpensesEditor';
import CostEditor from '../../components/TransactionsAndExpenses/CostEditor';
import ExpensesSelect from '../../components/TransactionsAndExpenses/ExpensesSelect';
import Button from '../../components/TransactionsAndExpenses/Button';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';

export default function TransactionView() {
  const [date, setDate] = useState(new Date());
  const [expense, setExpense] = useState('');

  const [category, setCategory] = useState('');
  const [cost, setCost] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    let userData = this.state.newUser;

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

    // setDate(new Date());
    // setExpense('');
    // setCategory('');
    // setCost('');
  };

  return (
    <div>
      <form>
        <input type="date"></input>
        <ExpensesEditor expense={expense} />
        <ExpensesSelect />
        <CostEditor cost={cost} />
        <Button onClick={handleFormSubmit}>Ввод</Button>
        <Button onClick={handleClearForm}>Очистить</Button>
      </form>
    </div>
  );
  //(
  // <Container>
  //   <div style={barStyles}>
  //     <Filter />
  //     <Stats />
  //     <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
  //       <AddIcon width="40" height="40" fill="#fff" />
  //     </IconButton>
  //   </div>

  //   <TodoList />

  //   {showModal && (
  //     <Modal onClose={this.toggleModal}>
  //       <TodoEditor onSave={this.toggleModal} />
  //     </Modal>
  //   )}
  // </Container>
  //);
}
