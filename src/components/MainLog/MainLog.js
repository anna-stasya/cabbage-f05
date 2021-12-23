import Login from '../../pages/Auth/Login/Login';
import LogoHero from '../Header/LogoHero';

import s from './MainLog.module.css';

export default function MainLog() {
  return (
    <div className={s.main__container}>
      <div className={s.hero}>
        <LogoHero />
        <h1 className={s.hero__title}>Smart Finance</h1>
        <div className={s.coles}></div>
      </div>
      <div className={s.main}></div>
      {/* <Login /> */}
    </div>
  );
}
