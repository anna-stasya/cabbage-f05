import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { paths } from './config';
import Container from './components/Container';
//Auth
import RegisterView from './redux/views/auth/RegisterView';
import LoginViews from './redux/views/auth/LoginViews';

//Transactions
import TransactionView from './pages/Transactions/TransactionView';
import Header from './pages/Header/Header';

import './App.css';

const Example = lazy(() =>
  import('./pages/Example' /* webpackChunkName: "Example" */),
);
//Auth
//const {LoginViews, RegisterView} = lazy(() => import('./redux/views/auth'));
// const LoginViews = lazy(() => import('./redux/views/auth'));
// const RegisterView = lazy(() => import('./redux/views/auth'));

const Reports = lazy(() =>
  import('./pages/Reports' /* webpackChunkName: "Reports" */),
);

function App() {
  return (
    <>
      <Header isLogedIn />
      <Container>
        <Suspense fallback={<div>Downloading...</div>}>
          <Routes>
            <Route end path={paths.reports} element={<Reports />} />
            <Route path={paths.register} element={<RegisterView />} />
            <Route path={paths.login} exact element={<LoginViews />} />
            <Route path="/transactions" exact element={<TransactionView />} />
            <Route end path="/" element={<Example />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
