import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { routes } from 'utils/routes';
import { paths } from '../../../config';
import { SignInGoogle } from '../SignInGoogle/SigninGoogle';
import authOperations from '../../../redux/auth/auth-operations';

import s from './RegisterAuth.module.css';
import b from '../../../components/ButtonAuth/Button.module.css';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = useCallback(values => {
    const errors = {};
    //валидация для name
    if (!values.name) {
      errors.name = 'это обязательное поле';
    } else if (values.name.length < 3) {
      errors.name =
        'Неверный формат имени. Имя должно быть больше 3х символов.';
    }
    //валидация для email
    if (!values.email) {
      errors.email = 'это обязательное поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Неверный формат электронной почты';
    }

    //валидация для password
    if (!values.password) {
      errors.password = 'это обязательное поле';
    } else if (values.password.length < 7 || values.password.length > 15) {
      errors.password =
        'Такой пароль не подходит. Пароль должен быть больше 7 и меньше 15 символов';
    }

    //валидация для confirm password
    if (!values.confirmPassword) {
      errors.confirmPassword = 'это обязательное поле';
    } else if (
      values.confirmPassword.length < 7 ||
      values.confirmPassword.length > 15
    ) {
      errors.confirmPassword =
        'Такой пароль не подходит. Пароль должен быть больше 7 и меньше 15 символов';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword =
        'Пароль не подходит. Подтверждение пароля должно совпадать с паролем';
    }
    return errors;
  }, []);

  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');

      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    [dispatch, email, name, password],
  );

  return (
    <div className={s.auth}>
      <p className={`${s.textGoogle} ${s.textAuth}`}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <SignInGoogle className={b.btnGoogle} />
      <p className={s.textAuth}>Или заполните поля ниже:</p>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className={s.form}>
            {/* =====================Name ===========================*/}
            <label htmlFor="name" className={s.label}>
              <p className={s.text}>*Имя: </p>
            </label>
            <Field
              type="text"
              name="name"
              placeholder="Имя"
              className={s.input}
            />

            <ErrorMessage
              name="name"
              component="div"
              className={s.ErrorMessage}
            />
            {/* ==============================Email=========================*/}
            <label htmlFor="email" className={s.label}>
              <p className={s.text}>*Электронная почта: </p>
            </label>
            <Field
              type="email"
              name="email"
              placeholder="your@email.com"
              className={s.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={s.ErrorMessage}
            />
            {/* ========================Password====================== */}
            <label htmlFor="password" className={s.label}>
              <p className={s.text}>*Пароль:</p>
            </label>
            <Field
              type="password"
              name="password"
              placeholder="Пароль"
              className={s.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={s.ErrorMessage}
            />
            {/* ==================Confirm passwords======================*/}
            <label htmlFor="password">
              <p className={s.text}>*Пароль:</p>
            </label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Повторите Пароль"
              className={s.input}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={s.ErrorMessage}
            />
            {/* ==================buttons======================*/}
            <button
              type="submit"
              className={b.btnAuth} 
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

            <Link to={paths.login}>
              <button
                type="submit"
                className={b.btnAuth}
                disabled={
                  isSubmitting ||
                  !(
                    Object.keys(errors).length === 0 &&
                    Object.keys(touched).length ===
                      Object.keys(INITIAL_VALUES).length
                  )
                }
              >
                Регистрация
              </button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
