import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { paths } from './config';
import Container from './components/Container';

import './App.css';

const Example = lazy(() =>
  import('./pages/Example' /* webpackChunkName: "Example" */),
);

const Reports = lazy(() =>
  import('./pages/Reports' /* webpackChunkName: "Reports" */),
);

function App() {
  return (
    <Container>
      <Suspense fallback={<div>Downloading...</div>}>
        <Routes>
          <Route end path={paths.home} element={<Example />} />
        </Routes>
        <Routes>
          <Route end path={paths.reports} element={<Reports />} />
        </Routes>
      </Suspense>

      <div>React App</div>
    </Container>
  );
}

export default App;
