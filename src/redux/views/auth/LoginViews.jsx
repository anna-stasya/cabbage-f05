import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { Link } from 'react-router-dom';
import authOperations from '../../auth/auth-operations';
//import { routes } from 'utils/routes';

import s from './Auth.module.css';
import b from '../../../components/ButtonAuth/Button.module.css';

const LoginViews = () => {
// export default function LoginViews() {
     const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <div>
        <span>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</span>
        <button className={b.btn} type="submit">
          Google
        </button>
      <span>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</span>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Электронная почта:
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
          Пароль:
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <button className={b.btnEnter} type="submit">
          Войти
                </button>
                 <button className={b.btnEnter} type="submit">
          регистрация
        </button>
                
        {/* <button className={b.btn} type="submit">
            <Link to={routes.register}>
                Регистрация
            </Link>
        </button> */}
      </form>
    </div>
  );
}

export default LoginViews;