// import React, { useState } from 'react';
import Tabs from '../../components/IncomeAndExpenses/Tabs';
import Balance from '../../components/Balance';
import ToReportsBtn from '../../components/ToReportsBtn';
import BriefList from '../../components/Brief'

export default function TransactionView() {
  return (
    <div>
      <Balance />
      <ToReportsBtn />
      <Tabs />
      <BriefList />
    </div>
  );
}
