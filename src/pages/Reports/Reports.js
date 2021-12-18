import GoBackBtn from '../../components/GoBackBtn';
import Balance from '../../components/Balance';
import ChosenMonth from '../../components/ChosenMonth';
import ReportsCategories from '../../components/ReportsCategories';

import s from './Reports.module.css';

const Reports = () => {
  return (
    <div className={s.section}>
      <div className={s.balanceWrapper}>
        <GoBackBtn />
        <ChosenMonth />
        <Balance />
      </div>
      <ReportsCategories />
    </div>
  );
};

export default Reports;
