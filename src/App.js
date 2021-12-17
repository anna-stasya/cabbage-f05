import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { paths } from './config';
import Container from './components/Container';
//Auth
import Registration from './pages/Auth/Registration/Registration';
import Login from './pages/Auth/Login/Login';

//Transactions
import TransactionView from './pages/Transactions/TransactionView';

import './App.css';

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
  return (
    <Container>
      <Suspense fallback={<div>Downloading...</div>}>
        <Routes>
          <Route end path={paths.reports} element={<Reports />} />
          <Route path={paths.register} exact element={<Registration />} />
          <Route path={paths.login} exact element={<Login />} />
          <Route path="/transactions" exact element={<TransactionView />} />

          <Route end path="/" element={<Example />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
