import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { Link } from 'react-router-dom';
import authOperations from '../../auth/auth-operations';
import { SignInGoogle } from './SigninGoogle';
//import { routes } from 'utils/routes';

import s from './Auth.module.css';
import b from '../../../components/ButtonAuth/Button.module.css';

const LoginViews = () => {
  // export default function LoginViews() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [actionType, setActionType] = useState('');

    
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div className={s.auth}>
      <p className={`${s.textGoogle} ${s.textAuth}`}>
        Вы можете авторизоваться с помощью Google Account:
          </p>
          
          <SignInGoogle className={`${b.btnGoogle} ${b.btn}`} />
      {/* <button className={`${b.btnGoogle} ${b.btn}`} type="submit">
        Google
          </button> */}

      <p className={s.textAuth}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          <p className={s.text}>Электронная почта: </p>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          <p className={s.text}>Пароль:</p>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <div className={b.btn}>
          <button className={`${b.btn} ${b.btnAuth} `} type="submit" onClick={() => setActionType('login')}>
            Войти
          </button>
          <button className={`${b.btn} ${b.btnAuth} `} type="submit" onClick={() => setActionType('register')}>
            Регистрация
          </button>
        </div>
        {/* <button className={b.btn} type="submit">
            <Link to={routes.register}>
                Регистрация
            </Link>
        </button> */}
      </form>
    </div>
  );
};

export default LoginViews;
