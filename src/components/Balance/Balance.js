import s from './Balance.module.css';

const Balance = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>Баланс:</p>
      <div className={s.balanceWrapper}>
        <p className={s.balance}>55 000.00 uah</p>
      </div>
      <button className={s.btn} type="button">
        Подтвердить
      </button>
    </div>
  );
};

export default Balance;
