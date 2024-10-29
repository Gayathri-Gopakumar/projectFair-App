import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container w-100 mt-5 '>
     <div className='d-flex justify-content-between'>
       <div className="intro">
        <h5><i className="fa-solid fa-skull me-3"></i>PROJECT FAIR</h5>
        <p>Designed and built with allthe love in the world <br /> by the Luminar team with the help of our contributors.</p>
        <p>Code Licensed Luminar,docs CC by 3.0</p>
        <p>Currently v5.3.2</p>
      </div>
       <div className="links">
       <h5>Links</h5>
       <Link to={'/'} style={{textDecoration:'none',display:'block',color:'white'}}>HOME</Link>
       <Link to={'/login'} style={{textDecoration:'none',display:'block',color:'white'}}>LOGIN</Link>
       <Link to={'/projects'} style={{textDecoration:'none',display:'block',color:'white'}}>PROJECTS</Link>
       
       </div>

       <div className="guides">
       <h5>Guides</h5>
       <p>React</p>
       <p>React Bootstrap</p>
        <p>React Router</p>
       </div>
       <div className="contacts">
       <h5>Contact Us</h5>
       <div className='d-flex justify-content-between'>
      {/* <label for="exampleInputEmail1" class="form-label mt-4">Email address</label> */}
      <input type="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email here"/>
      {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
      <button style={{height:'50px',width:'60px',marginTop:'20px'}} type="button" className="btn btn-info ms-2 "><i className="fa-solid fa-arrow-right"></i></button>
       </div>
       <div className="d-flex justify-content-evenly align-items-center mt-3">
       <i className="fa-brands fa-x-twitter"></i>
       <i className="fa-brands fa-instagram"></i>
       <i className="fa-brands fa-facebook"></i>
       <i className="fa-brands fa-linkedin"></i>
       <i className="fa-brands fa-github"></i>
       <i className="fa-solid fa-phone"></i>
       </div>
       </div>
     </div>
     <p className='text-center mt-5'>Copyrigth ©  2024 MERN Project. PROJECT FAIR. Built with React.</p>
    </div>
  )
}

export default Footer