import './index.css'
import AppProvider from './AppContext'
import Dashboard from './pages/Home'

function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  )
}

export default App
