import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from './components/Container';

import './App.css';

const Example = lazy(() =>
  import('./pages/Example' /* webpackChunkName: "Example" */),
);

function App() {
  return (
    <Container>
      <Suspense fallback={<div>Downloading...</div>}>
        <Routes>
          <Route end path="/" element={<Example />} />
        </Routes>
      </Suspense>

      <div>React App</div>
    </Container>
  );
}

export default App;
