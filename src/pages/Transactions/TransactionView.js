// import React, { useState } from 'react';
import Tabs from '../../components/IncomeAndExpenses/Tabs';
import Balance from '../../components/Balance';
import ToReportsBtn from '../../components/ToReportsBtn';
import BriefList from '../../components/Brief';

// import HomeMain from '../../components/HomeMain/HomeMain';
// import Wrapper from '../../components/Wrapper/Wrapper';
// import s from './TransactionView.module.css';

export default function TransactionView() {
  return (
    <div
    // className={s.main_container}
    >
      {/* <HomeMain> */}
      {/* <Wrapper> */}
      {/* <div className={s.home_container}> */}
      {/* <div className={s.table_container}>. */}
      <ToReportsBtn />
      <Tabs />
      {/* </div> */}
      {/* </div> */}
      {/* <div className={s.balance}> */}
      <Balance />
      {/* </div> */}
      {/* <div className={s.reports}> */}
      <BriefList />
      {/* </div> */}
      {/* </Wrapper> */}
      {/* </HomeMain> */}
    </div>
  );
}
