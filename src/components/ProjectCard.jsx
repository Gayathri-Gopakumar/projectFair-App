import React from 'react'
import { Card,Modal } from 'react-bootstrap'
import { useState } from 'react';
import SERVERURL from '../services/serverUrl'

const ProjectCard = ({displayData}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Card onClick={handleShow} className='shadow btn'>
      <Card.Img height={'200px'} width={'200px'} variant="top" src={`${SERVERURL}/uploads/${displayData?.projectImg}`} />
      <Card.Body>
        <Card.Title>{displayData?.title}</Card.Title>
     
      </Card.Body>
     </Card>

     <Modal size='lg'centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PROJECT details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
                <img height={'200px'} width={'200px'} src={`${SERVERURL}/uploads/${displayData?.projectImg}`} alt="" />
            </div>
            <div className="col-lg-6">
                  <h3>{displayData?.title}</h3>
                  <h5><span className='fw-bolder'>Languages used:</span><span className='text-danger'>{displayData?.languages}</span></h5>
                  <p style={{textAlign:'justify'}}><span className='fw-bolder'>Project Overview:</span> {displayData?.overview}</p>
              
            </div>
          </div>
          <div className='float-start '>
                <a className='btn btn-secondary me-2' href={displayData?.github} target='_blank'><i className='fa-brands fa-github'></i></a>
                <a className='btn btn-secondary' href={displayData?.website} target='_blank'><i className='fa-solid fa-link'></i></a>
          </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard