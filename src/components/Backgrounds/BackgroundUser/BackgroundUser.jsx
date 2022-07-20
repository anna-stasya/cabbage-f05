import s from './BackgroundUser.module.css';

export default function BackgroundUser({ children }) {
  return (
    <div className={s.backgroundPage}>
      <div className={s.background}>
        <div className={s.coles}></div>
        {children}
      </div>
    </div>
  );
}