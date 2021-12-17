import React, { useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';

import { SignInGoogle } from '../SignInGoogle/SigninGoogle';
import { paths } from '../../../config';

import s from './loginAuth.module.css';
import b from '../../../components/ButtonAuth/Button.module.css';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const Login = () => {
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
    } else if (values.password.length < 7 || values.password.length > 15) {
      errors.password = 'Логин или пароль не верный';
    }

    return errors;
  }, []);

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }, []);

  return (
    <div className={s.auth}>
      <p className={`${s.textGoogle} ${s.textAuth}`}>
        Вы можете авторизоваться с помощью Google Account:
      </p>

      <SignInGoogle
        className={`${b.btnGoogle} ${b.btn} {borderRadius: '26px'}`}
      />

      <p className={s.textAuth}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
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
            {/* {errors.email && touched.email && errors.email} */}

            <label htmlFor="password" className={s.label}>
              <p className={s.text}>Пароль:</p>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={s.input}
            />

            <ErrorMessage
              name="password"
              component="div"
              className={s.ErrorMessage}
            />
            {/* {errors.password && touched.password && errors.password} */}

            <button
              type="submit"
              className={`${b.btn} ${b.btnAuth} `}
              disabled={
                isSubmitting ||
                !(
                  Object.keys(errors).length === 0 &&
                  Object.keys(touched).length ===
                    Object.keys(INITIAL_VALUES).length
                )
              }
            >
              Войти
            </button>

            <button
              type="submit"
              className={`${b.btn} ${b.btnAuth} `}
              disabled={
                isSubmitting ||
                !(
                  Object.keys(errors).length === 0 &&
                  Object.keys(touched).length ===
                    Object.keys(INITIAL_VALUES).length
                )
              }
            >
              {/* 
              <NavLink
                to="/register"
                style={{ textDecoration: 'none', color: '#52555F', }}
                activeClassName={b.activeLink}
              >
                <p>Регистрация</p>
              </NavLink> */}
              <Link
                to="/register"
                style={{ textDecoration: 'none', color: '#52555F' }}
              >
                <p>Регистрация</p>
              </Link>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
