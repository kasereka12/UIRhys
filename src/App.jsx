import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardAFC from './pages/DashboardAFC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="afs" element={<DashboardAFC />} />
        </Route>
      </Routes>
    </BrowserRouter>)
}

export default App
