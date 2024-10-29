import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadImg from '../assets/upload.png'
import { addProjectAPI } from '../services/allAPI';
import { addResponseContext } from '../context/ContextShare';

const Add = () => {
  const {addResponse,setAddResponse}=useContext(addResponseContext)
  const[imageFileStatus,setImageFileStatus]=useState(false)
  const[preview,setPreview]=useState(uploadImg)

  const [projectData,setProjectData]=useState({
    title:"",
    languages:"",
    overview:"",
    github:"",
    website:"",
    projectImg:""
  })
  console.log(projectData);
  
  const [show, setShow] = useState(false);
  
  useEffect(()=>{
    if(projectData.projectImg.type=="image/png" || projectData.projectImg.type=="image/jpeg" || projectData.projectImg.type=="image/jpg"){
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(projectData.projectImg))
    }
    else{
      setImageFileStatus(false)
      setPreview(uploadImg)
      setProjectData({...projectData,projectImg:""})
    }
  },[projectData.projectImg])

  const handleClose = () =>{
    setShow(false);
    setProjectData({title:"",
      languages:"",
      overview:"",
      github:"",
      website:"",
      projectImg:""})
  } 
  const handleShow = () => setShow(true);

  const handleSaveProject=async ()=>{
    const{title,languages,overview,github,website,projectImg}=projectData
    if(title && languages && overview && github && website && projectImg){
      
      // req body must be in form-data type sine it contains files
      const reqBody=new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImg",projectImg)

      const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        // api call-POST req
        try{
          const result=await addProjectAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            handleClose()
            // alert("Project added successfully")
            // share result via context
            setAddResponse(result)
          }else{
            alert(result.response.data)
          }
          
        }
        catch(err){
          console.log(err);
          
        }
      }
    }
    else{
      alert("Please fill form completely!!!")
    }

  }

  return (
    <>
    <button onClick={handleShow} className="btn btn-primary"><i className='fa-solid fa-plus me-2 '></i>New Project</button>
    <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
              <div className="col-lg-4">
                <label >
                  <input onChange={e=>setProjectData({...projectData,projectImg:e.target.files[0]})} style={{display:'none'}} type="file" />
                  <img height={'200px'} className='img-fluid'  src={preview} alt="" />
                 { !imageFileStatus && <div className="text-warning fw-bolder my-2">Upload only the following file types(jpeg,jpg,png) here!</div>}
                </label>
              </div>
              <div className="col-lg-8">
                <div className='mb-2'>
                  <input value={projectData.title} onChange={e=>setProjectData({...projectData,title:e.target.value})} placeholder='Project Title' type="text" className='form-control'/>
                </div>
                <div className='mb-2'>
                  <input value={projectData.languages} onChange={e=>setProjectData({...projectData,languages:e.target.value})} placeholder='Languages used in Project' type="text" className='form-control' />
                </div>
                <div className='mb-2'>
                  <input value={projectData.overview} onChange={e=>setProjectData({...projectData,overview:e.target.value})} placeholder='Project Overview' type="text" className='form-control' />
                </div>
                <div className='mb-2'>
                  <input value={projectData.github} onChange={e=>setProjectData({...projectData,github:e.target.value})} placeholder='Project GitHub Link' type="text" className='form-control' />
                </div>
                <div className='mb-2'>
                  <input value={projectData.website} onChange={e=>setProjectData({...projectData,website:e.target.value})} placeholder='Project website link' type="text" className='form-control' />
                </div>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSaveProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add