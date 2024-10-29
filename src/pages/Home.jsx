import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img1 from '../assets/pf-img.avif'
import ProjectCard from '../components/ProjectCard'
import Card from 'react-bootstrap/Card'
import { homeProjectsAPI } from '../services/allAPI'

const Home = () => {
 
 const[allHomeProjects,setallHomeProjects]=useState([])

 const navigate=useNavigate()

 console.log(allHomeProjects);

 useEffect(()=>{
    getAllHomeProjects()
 },[])
 

 const getAllHomeProjects=async ()=>{
    try{
        const result=await homeProjectsAPI()
        if(result.status==200){
            setallHomeProjects(result.data)
        }
    }catch(err){
        console.log(err);
        
    }
 }

 const handleProjects=()=>{
    if(sessionStorage.getItem("token")){
        navigate('/projects')
    }
    else{
        alert('Please login to get access to our projects!')
    }
 }

  return (
    <>
    <div style={{minHeight:'100vh',width:'100%'}} className="d-flex justify-content-center align-items-center rounded shadow">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h1 style={{fontSize:'60px'}}><i className="fa-solid fa-skull me-3"></i>PROJECT FAIR</h1>
                    <p style={{textAlign:'justify'}}>One stop destination for all software development projects.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quia veniam ullam! Facere earum, illo commodi nostrum quis et maiores, corrupti, accusantium magnam possimus quasi provident nulla! Omnis, veritatis voluptas!</p>
                   {sessionStorage.getItem("token")?
                    <Link className='btn btn-warning' to={'/dashboard'}>Manage your projects</Link>
                    :
                    <Link className='btn btn-warning' to={'/login'}>Start to Explore</Link>
                    }
                </div>
                <div className="col-lg-6">
                    <img className='img-fluid rounded shadow' src={img1} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="my-5 text-center">
        <h1  className='mb-5'>EXPLORE OUR PROJECTS</h1>
        <marquee >
           <div className='d-flex'> 
                {
                    allHomeProjects?.length>0 && 
                    allHomeProjects?.map(project=>(
                        <div key={project?._id} className='me-5'>
                            <ProjectCard displayData={project}/>
                        </div>
                    ))
                }
            </div>
        </marquee>
        <button onClick={handleProjects} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS...</button>
    </div>
    <div className="d-flex justify-content-center align-items-center flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center  mt-3 w-100">
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-center align-items-center flex-column ">
                            <img width={'60px'} height={'60px'} className='rounded circle img-fluid' src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="" />
                            <span className='mt-2'>MAX MILLER</span>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center align-items-center mb-2"> 
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            </div>
                            <p style={{textAlign:'justify'}}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-center align-items-center flex-column ">
                            <img width={'60px'} height={'60px'} className='rounded circle img-fluid' src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" alt="" />
                            <span className='mt-2'>ALEXIA JENNER</span>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center align-items-center mb-2"> 
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            </div>
                            <p style={{textAlign:'justify'}}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-center align-items-center flex-column">
                            <img width={'60px'} height={'60px'} className='rounded circle img-fluid' src="https://www.shareicon.net/data/512x512/2016/09/15/829472_man_512x512.png" alt="" />
                            <span className='mt-2'>CHANDLER BING</span>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center align-items-center mb-2 "> 
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            <i className="fa-solid fa-star text-warning"></i>
                            </div>
                            <p style={{textAlign:'justify'}}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    </div>
    
    </>
  )
}

export default Home