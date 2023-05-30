import './index.css';
import AppProvider from './AppContext';
import Home from './pages/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import FullStatus from './pages/FullStatus';

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/full-status" element={<FullStatus />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}

export default App;
