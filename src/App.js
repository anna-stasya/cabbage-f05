import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { paths } from './config';
//components
import Container from './components/Container';
import AppBar from './components/Header/appBar';
import UserMenu from './components/Header/userMenu';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';
//Transactions
import TransactionView from './pages/Transactions/TransactionView';


import authSelectors from './redux/auth/auth-selectors';
import './App.css';
import back from './App.module.css';
import styles from './components/Header/Header.module.css';
//import s from './TransactionView.module.css';


//Auth
const Login = lazy(() => import('./pages/Auth/Login/Login'));
const Registration = lazy(() =>
  import('./pages/Auth/Registration/Registration'),
);
const Reports = lazy(() =>
  import('./pages/Reports' /* webpackChunkName: "Reports" */),

);

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header className={styles.headerContainer}>
        <AppBar></AppBar>
        {isLoggedIn ? <UserMenu /> : null}
      </header>
      <Container>
        <Suspense fallback={<div>Downloading...</div>}>
          <Routes>
            {/* ---------------------PublicRoute -------------------------------*/}
            <Route
              path={paths.register}
              element={
                //  <PublicRoute restricted redirectTo={paths.login}>

                <PublicRoute restricted>
                  {/* <div className={back.backgroundAuth}> */}
                    <Registration />
                  {/* </div> */}
                </PublicRoute>
              }
            />
            <Route
              path={paths.login}
              element={
                //  <PublicRoute restricted redirectTo={paths.home}>

                <PublicRoute restricted>
                  {/* <div className={back.backgroundAuth}> */}
                    <Login />
                  {/* </div> */}
                </PublicRoute>
              }
            />
            {/*---------------------- PrivateRoute ------------------------------*/}
            <Route
              path={paths.transactions}
              element={
                <PrivateRoute>
                  <div
                    // className={back.backgroundWrapper}
                  >
                    <TransactionView />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              end
              path={paths.reports}
              element={
                <div className={back.backgroundWrapper}>
                  <PrivateRoute>
                    <Reports />
                  </PrivateRoute>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </Container>
    </>

  );

  // return (
  //   <>
  //     <header className={styles.headerContainer}>
  //       <AppBar></AppBar>
  //       {isLoggedIn ? <UserMenu /> : null}
  //     </header>
  //    <Container>
  //     <Suspense fallback={<div>Downloading...</div>}>
  //       <Routes>
  //         <Route end path={paths.reports} element={<Reports />} />
  //         <Route path={paths.register} exact element={<Registration />} />
  //         <Route path={paths.login} exact element={<Login />} />
  //         <Route path="/transactions" exact element={<TransactionView />} />
  //       </Routes>
  //     </Suspense>
  //   </Container>
  //   </>
  // );
}

export default App;
