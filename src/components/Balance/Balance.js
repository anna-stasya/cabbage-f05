import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './Balance.module.css';
import {
  transactionsSelectors,
  transactionsOperations,
} from '../../redux/transaction';

import { balanceSelectors, balanceOperations } from '../../redux/balance';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

import Notification from '../Notification';

const Balance = ({ hide, mobile }) => {
  // const balance = useSelector(balanceSelectors.balanceCurrent);
  const balance = useSelector(authSelectors.getBalance);
  console.log('balance', balance);
  const dispatch = useDispatch();

  const [sum, setSum] = useState('');

  const [inputBalance, setInputBalance] = useState(true);
  const toggleWindow = () => {
    setInputBalance(inputBalance => !inputBalance);
  };

  useEffect(() => {
    console.log('получили баланс');
    dispatch(authOperations.getBalance());
  }, [dispatch]);

  useEffect(() => {
    setSum(balance);
  }, [balance]);

  const handleChangeBalance = e => setSum(e.currentTarget.value);

  const handleSubmitForm = e => {
    e.preventDefault();
    console.log('записали баланс');
    // dispatch(transactionsOperations.setBalance(sum));
    dispatch(authOperations.setBalance(sum));
  };
  return (
    <form onSubmit={handleSubmitForm} className={s.reportBalance}>
      <label htmlFor="balans" className={s.balanceLabel}>
        Баланс:
        <div className={s.buttonsGroup}>
          {balance === null || balance === 0 || balance === undefined ? (
            <>
              {inputBalance && <Notification onClose={toggleWindow} />}
              <input
                type="number"
                maxLength="10"
                placeholder="00.00"
                onChange={handleChangeBalance}
                className={
                  mobile
                    ? `${s.balanceInputReport} ${s.balanceInput}`
                    : `${s.balanceInput}`
                }
                autoComplete="off"
              />
              <button
                className={
                  mobile
                    ? `${s.balanceInputReport} ${s.balanceButton}`
                    : `${s.balanceButton} `
                }
                type="submit"
              >
                ПОДТВЕРДИТЬ
              </button>
            </>
          ) : (
            <>
              <p
                className={
                  mobile
                    ? `${s.balanceInput} ${s.balanceInputReport}`
                    : `${s.balanceInput}`
                }
              >
                {`${balance.toLocaleString('ru')}.00`} UAH
              </p>
              <button className={`${s.balanceButton} ${hide}`} disabled>
                ПОДТВЕРДИТЬ
              </button>
            </>
          )}
        </div>
      </label>
    </form>
  );
};

export default Balance;
