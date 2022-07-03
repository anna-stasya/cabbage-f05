// import React, { useState } from 'react';
import Tabs from '../../components/IncomeAndExpenses/Tabs';
import Balance from '../../components/Balance';
import ToReportsBtn from '../../components/ToReportsBtn';
// import BriefList from '../../components/Brief';

// import HomeMain from '../../components/HomeMain/HomeMain';
// import Wrapper from '../../components/Wrapper/Wrapper';


// import s from './TransactionView.module.css';

export default function TransactionView() {
  return (

    <div>
      <Balance />
      <ToReportsBtn />
      <Tabs />
      {/* <BriefList /> */}
    </div>
  );
}