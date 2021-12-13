import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../auth/auth-operations';

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
    <div>
      <h1>Регистрация</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Имя
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

        <button className={b.btn} type="submit">
          Реристрация
        </button>
        <button className={b.btn} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default RegisterView;