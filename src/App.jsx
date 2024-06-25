import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import CircleWrapper from './elements/circle/CircleWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CircleWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
