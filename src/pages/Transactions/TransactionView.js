// import React, { useState } from 'react';
import Tabs from '../../components/IncomeAndExpenses/Tabs';
import Balance from '../../components/Balance';
import ToReportsBtn from '../../components/ToReportsBtn';
import BriefList from '../../components/Brief';
import s from './TransactionView.module.css';

export default function TransactionView() {
  return (
    <>
      <div className={s.TransactionViewWrapper}>
        <div className={s.formPrimaryBar}>
          <Balance />
          <ToReportsBtn />
        </div>
        <Tabs />
        <BriefList />
      </div>
    </>
  );
}
