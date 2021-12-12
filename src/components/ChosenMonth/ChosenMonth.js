import { ReactComponent as Left } from '../../img/reports/arrowLeft.svg';
import { ReactComponent as Right } from '../../img/reports/arrowRight.svg';
import s from './ChosenMonth.module.css';

const ChosenMonth = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>Текущий период:</p>
      <div className={s.monthWrapper}>
        <button className={s.btn} type="button">
          <Left className={s.icon} />
        </button>
        <p className={s.month}>ноябрь 2019</p>
        <button className={s.btn} type="button">
          <Right className={s.icon} />
        </button>
      </div>
    </div>
  );
};

export default ChosenMonth;
