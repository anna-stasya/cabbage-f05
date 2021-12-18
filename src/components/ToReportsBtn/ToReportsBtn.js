import { Link } from 'react-router-dom';

import { paths } from '../../config/index';
import { ReactComponent as BarChart } from '../../img/reports/barChart.png';

import s from './ToReportsBtn.module.css';

export default function ToReportsBtn() {
  return (
    <div className={s.btnContainer}>
      <Link to={paths.reports}>
        <p className={s.btnText}>Перейти к отчетам</p>
        <BarChart className={s.btnIcon} />
      </Link>
    </div>
  );
}
