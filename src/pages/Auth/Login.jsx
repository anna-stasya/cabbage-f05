import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
// import { routes } from 'utils/routes';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const Login = () => {
  const validate = useCallback(values => {
    const errors = {};

    //валидация для email
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
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
    <div>
          {/* <h1>Login form</h1> */}
          <>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</>
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Электронная почта: </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            {errors.email && touched.email && errors.email}
            <br />
            <br />
            <label htmlFor="password">Пароль: </label>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <br />
            <br />
            <button
              type="submit"
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
          </form>
        )}
      </Formik>
      <Link to='/register'>Регистрация</Link>
      {/* <Link to={routes.register}>
        Doesn't have any account? Please, register!
      </Link> */}
    </div>
  );
};

export default Login;
