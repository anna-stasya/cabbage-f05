import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from './components/Container';
//Auth
import RegisterView from './redux/views/auth/RegisterView';
import LoginViews from './redux/views/auth/LoginViews';

import './App.css';

const Example = lazy(() =>
  import('./pages/Example' /* webpackChunkName: "Example" */),
);
//Auth
//const {LoginViews, RegisterView} = lazy(() => import('./redux/views/auth'));
// const LoginViews = lazy(() => import('./redux/views/auth'));
// const RegisterView = lazy(() => import('./redux/views/auth'));

function App() {
  return (
    <Container>
      <Suspense fallback={<div>Downloading...</div>}>
        
        <Routes>
          <Route path="/register"  element={<RegisterView/>} />
          <Route path="/login" exact element={<LoginViews/>}/> 
            
          <Route end path="/" element={<Example />} />
        </Routes>
      </Suspense>

      <div>React App</div>
    </Container>
  );
}

export default App;
