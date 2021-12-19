import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { paths } from './config';
import Container from './components/Container';
//Auth
import Registration from './pages/Auth/Registration/Registration';
import Login from './pages/Auth/Login/Login';

//Transactions
import TransactionView from './pages/Transactions/TransactionView';
import AppBar from './components/Header/appBar';
import UserMenu from './components/Header/userMenu';
import { useSelector } from 'react-redux';
import authSelectors from './redux/auth/auth-selectors';

import './App.css';
import styles from './components/Header/Header.module.css';

const Example = lazy(() =>
  import('./pages/Example' /* webpackChunkName: "Example" */),
);
//Auth
//const {Login, Registration} = lazy(() => import('../pages/Auth'));
// const Login = lazy(() => import('./pages/Auth/Login'));
// const Registration = lazy(() => import('./pages/Auth/Registration'));

const Reports = lazy(() =>
  import('./pages/Reports' /* webpackChunkName: "Reports" */),
);

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <header className={styles.headerContainer}>
        <AppBar></AppBar>
        {isLoggedIn ? <UserMenu /> : <Login />}
      </header>

      <Container>
        <Suspense fallback={<div>Downloading...</div>}>
          <Routes>
            <Route end path={paths.reports} element={<Reports />} />
            <Route path={paths.register} element={<Registration />} />
            <Route path={paths.login} exact element={<Login />} />
            <Route path="/transactions" exact element={<TransactionView />} />
            <Route end path="/" element={<Example />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
