import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import ContextShare from './context/ContextShare.jsx'
import AuthContext from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
 
      <StrictMode>
       <AuthContext>
          <ContextShare>
            <BrowserRouter><App /></BrowserRouter>
          </ContextShare>
       </AuthContext>
      </StrictMode>,
   
)
