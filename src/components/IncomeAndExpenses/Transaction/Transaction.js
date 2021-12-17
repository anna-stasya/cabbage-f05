import moment from 'moment';
import { ReactComponent as DeleteButton } from '../../../img/reports/deleteBtn.svg';
import Button from '../Button';

import s from './Transaction.module.css';

const Transaction = ({ item, income, onDelete }) => {
  const currCost = income ? item.cost : -item.cost;
  const currClass = income ? `${s.tableAmountIncome}` : `${s.tableAmount}`;

  return (
    <tr className={s.tableTr}>
      <td className={s.tableDate}>
        {moment(new Date(item.date)).format('dd.MM.yyyy')}
      </td>
      <td className={s.tableProduct}>{item.product}</td>
      <td className={s.tableCategory}>{item.category}</td>
      <td className={currClass}>{`${currCost} грн.`}</td>
      <td className={s.tableDelete}>
        <Button
          type="button"
          className={s.deleteBtn}
          onClick={() => onDelete(item._id)}
        >
          <DeleteButton />
        </Button>
      </td>
    </tr>
  );
};

export default Transaction;
