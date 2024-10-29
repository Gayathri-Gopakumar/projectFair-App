import React, { useContext, useState } from 'react'
import img2 from '../assets/img2.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import {loginAPI, registerAPI} from '../services/allAPI'
import { tokenAuthContext } from '../context/AuthContext';

const Auth = ({insideRegister}) => {
  const{isAuthorized,setIsAuthorized}=useContext(tokenAuthContext)

  const navigate=useNavigate()

  const [isLoading,setisLoading]=useState(false)

  const [userData,setUserData]=useState({
    username:'',email:'',password:''
  })

  console.log(userData);
  const handleRegister= async (e)=>{
    e.preventDefault()
    if(userData.username&&userData.email&&userData.password){
      alert("proceeds to api call")
      try{
          const result=await registerAPI(userData)
          if (result.status==200){
            alert(`wlcome ${result?.data?.username}...Please login to explore our site.`)
            setUserData({username:"",email:"",password:""})
            navigate('/login')
          }
          else{
            if(result.response.status==406){
              alert(result.response.data)
              setUserData({username:"",email:"",password:""})
            }
          }
      }catch{

      }
    }
    else{
      alert("fill completely")
    }
  }

  const handleLogin=async(e)=>{
    e.preventDefault()
    if(userData.email&&userData.password){
      // api call
      try{
        const result=await loginAPI(userData)
        console.log(result);
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setIsAuthorized(true)
          setisLoading(true)
          setTimeout(() => {
            setUserData({username:'',email:'',password:''})
            navigate('/')
            setisLoading(false)
          }, 2000);
        }else{
          if(result.response.status==404){
            alert(result.response.data)
          }
        }
        
      }catch(err){
        console.log(err);
        
      }
    }else{
      alert("Please fill completely!")
    }
  }
  
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <div className="card shadow p-2">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <img className='w-100' src={img2}alt="" />
                </div>
                <div className="col-lg-6">
                <h1 style={{fontSize:'60px'}}><i className="fa-solid fa-skull me-3"></i>PROJECT FAIR</h1>
                <h5 className='fw-bolder mt-2'>
                 Sign {insideRegister? "Up" : "In" } to your Account
                </h5>
               <Form>
                 {insideRegister && 
                  <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control  value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} type="text" placeholder="Username" />
                </FloatingLabel>
                 }
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} type="password" placeholder="Password" />
                  </FloatingLabel>
                  {
                    insideRegister?
                    <div className="mt-3">
                      <button onClick={handleRegister} className="btn btn-primary mb-2">Register</button>
                      <p>Already have an account? <Link to={'/login'}>LOGIN</Link> </p>
                    </div>
                    :
                    <div className="mt-3">
                      <button onClick={handleLogin} className="btn btn-primary mb-2">Login
                      {isLoading && <Spinner animation="border" variant="light"  className='ms-1'/>}
                      </button>
                      <p>New User? <Link to={'/register'}>REGISTER</Link> </p>
                    </div>

                  }
               </Form>
                </div>
              </div>
        </div>
      </div>
      
    </div>
  )
}

export default Auth