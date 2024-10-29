import React from 'react'
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { tokenAuthContext } from '../context/AuthContext';

const Header = ({insideDashboard}) => {

  const{isAuthorized,setIsAuthorized}=useContext(tokenAuthContext)
  const navigate=useNavigate()

  const handleLogout=()=>{
    sessionStorage.clear()
    setIsAuthorized(false)
    navigate('/')
  }
  return (
    <div>
      <Navbar style={{zIndex:'1'}} className="position-fixed w-100 top-0 border rounded">
        <Container>
          <Navbar.Brand>
          <Link to={'/'}><h3 ><i className="fa-solid fa-skull me-3"></i>PROJECT FAIR</h3></Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <div className='ms-auto'>
              <button onClick={handleLogout} className='btn btn-link fw-bolder '>Logout <i className='fa-solid fa-right-from-bracket'></i>
              </button>
            </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header