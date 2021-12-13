import GoBackBtn from '../../components/GoBackBtn';
import Balance from '../../components/Balance';
import ChosenMonth from '../../components/ChosenMonth';
import s from './Reports.module.css';

const Reports = () => {
  return (
    <div className={s.section}>
      <div className={s.balanceWrapper}>
        <GoBackBtn />
        <ChosenMonth />
        <Balance />
      </div>
    </div>
  );
};

export default Reports;
