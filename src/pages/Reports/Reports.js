import GoBackBtn from '../../components/GoBackBtn';
import Balance from '../../components/Balance';
import ChosenMonth from '../../components/ChosenMonth';
import ExponsesAndIncome from '../../components/ExponsesAndIncome';
import s from './Reports.module.css';

const Reports = () => {
  return (
    <div className={s.section}>
      <div className={s.balanceWrapper}>
        <GoBackBtn />
        <Balance />
        <ChosenMonth />
      </div>
      <ExponsesAndIncome/>
    </div>
  );
};

export default Reports;
