import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';

import { SignInGoogle } from '../SignInGoogle/SigninGoogle';
import authOperations from '../../../redux/auth/auth-operations';
import authSelectors from '../../../redux/auth/auth-selectors';

import LogoName from '../../../components/Backgrounds/LogoName';

import s from './loginAuth.module.css';
import b from '../../../components/ButtonAuth/Button.module.css';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};



const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const validate = useCallback(values => {
    const errors = {};
    //валидация для email
    if (!values.email) {
      errors.email = 'это обязательное поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Логин или пароль не верный';
    }

    //валидация для password
    if (!values.password) {
      errors.password = 'это обязательное поле';
    } else if (values.password.length < 6 || values.password.length > 12) {
      errors.password = 'Логин или пароль не верный';
    }

    return errors;
  }, []);

  const handleSubmit = e => {
    console.log('submit');
    const name = e.name;
    const email = e.email;
    const password = e.password;
    dispatch(authOperations.logIn({ name, email, password }));
  };

  // const showHidePassword = target => {
  //   var input = document.getElementById('password-input');
  //   if (input.getAttribute('type') === 'password') {
  //     target.classList.add('view');
  //     input.setAttribute('type', 'text');
  //   } else {
  //     target.classList.remove('view');
  //     input.setAttribute('type', 'password');
  //   }
  //   return false;
  // };

  return (
    <div>
      <LogoName></LogoName>
      {!isLoggedIn && (
        <div className={s.auth}>
          <p className={`${s.textGoogle} ${s.textAuth}`}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <SignInGoogle className={b.btnGoogle} />
          <p className={s.textAuth}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
          <Formik
            initialValues={INITIAL_VALUES}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit} className={s.form}>
                <label htmlFor="email" className={s.label}>
                  <p className={s.text}>Электронная почта: </p>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={s.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.ErrorMessage}
                />

                <label htmlFor="password" className={s.label}>
                  <p className={s.text}>Пароль:</p>
                </label>
                <div className={s.password}>
                  <input
                    // autoComplete="on"
                    type="password"
                    name="password"
                    id="password-input"
                    placeholder="Пароль"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={s.input}
                  />
                  {/* <span
                  title="Показать/Скрыть пароль"
                    className={s.passwordControl}
                    onClick={showHidePassword}
                  ></span> */}
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.ErrorMessage}
                />

                <button type="submit" className={b.btnAuth}>
                  Войти
                </button>

                <Link to="/register">
                  <button type="button" className={b.btnAuth}>
                    Регистрация
                  </button>
                </Link>
              </form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default Login;
