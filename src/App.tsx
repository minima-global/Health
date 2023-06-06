import './index.css';
import AppProvider from './AppContext';
import Home from './pages/Home';
import Splash from './components/Splash';

function App() {
  return (
    <AppProvider>
      <Splash />
      <Home />
    </AppProvider>
  );
}

export default App;
