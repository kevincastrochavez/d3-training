import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import CircleWrapper from './elements/circle/CircleWrapper';
import BasicChartWrapper from './elements/basicChart/BasicChartWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/circle' element={<CircleWrapper />} />
        <Route path='/basicChart' element={<BasicChartWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
