import './index.css';
import AppProvider from './AppContext';
import Home from './pages/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import FullStatus from './pages/FullStatus';
import SharePeers from './pages/ShowPeers';
import ImportPeers from './pages/ImportPeers';

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/full-status" element={<FullStatus />} />
          <Route path="/share-peers" element={<SharePeers />} />
          <Route path="/import-peers" element={<ImportPeers />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}

export default App;
