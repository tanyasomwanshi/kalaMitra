import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider, { AdminContext } from './context/AdminContext.jsx'
import PotterContextProvider from './context/PotterContext.jsx'
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <PotterContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>

      </PotterContextProvider>

    </AdminContextProvider>

  </BrowserRouter>,
)
