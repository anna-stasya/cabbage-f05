import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './Balance.module.css';
import {
  transactionsSelectors,
  transactionsOperations,
} from '../../redux/transaction';

import Notification from '../Notification';

const Balance = ({ hide, mobile }) => {
  // const balance = useSelector(transactionsSelectors.getTotalBalance);
  const dispatch = useDispatch();

  const [sum, setSum] = useState('');
  const [inputBalance, setInputBalance] = useState(true);
  const toggleWindow = () => {
    setInputBalance(inputBalance => !inputBalance);
  };

  const handleChangeBalance = e => setSum(e.currentTarget.value);
  // useEffect(() => {
  //   setSum(balance);
  // }, [balance]);

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(transactionsOperations.setBalance(sum));
  };
  return (
    <form onSubmit={handleSubmitForm} className={s.reportBalance}>
      <label htmlFor="balans" className={s.balanceLabel}>
        Баланс:
        <div className={s.buttonsGroup}>
          {!sum ? (
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
                {`${sum.toLocaleString('ru')}.00`} UAH
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
