import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../auth/auth-operations';
import { SignInGoogle } from './SigninGoogle';

import s from './Auth.module.css';
import b from '../../../components/ButtonAuth/Button.module.css';

const RegisterView= () => {
// export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={`${s.authRegister} ${s.auth}`}>
      <p className={`${s.textGoogle} ${s.textAuth}`}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <SignInGoogle className={`${b.btnGoogle} ${b.btn}`} />
      <p className={s.textAuth}>
        Или заполните поля:
      </p>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          <p className={s.text}>Имя: </p>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Имя"
            value={name}
            onChange={handleChange}
          />
        </label>

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
          <button className={`${b.btn} ${b.btnAuth} `} type="submit">
            Войти
          </button>
          <button className={`${b.btn} ${b.btnAuth} `} type="submit">
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterView;