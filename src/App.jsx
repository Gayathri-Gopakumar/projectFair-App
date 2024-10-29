
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { useContext } from 'react'
import { tokenAuthContext } from './context/AuthContext'


function App() {

  const {isAuthorized,setIsAuthorized}= useContext(tokenAuthContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path='/register' element={<Auth insideRegister={true}/>}></Route>
        <Route path='/projects' element={isAuthorized?<Projects/>:<Navigate to={'/login'}/>}></Route>
        <Route path='/dashboard' element={isAuthorized?<Dashboard/>:<Navigate to={'/login'}/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
