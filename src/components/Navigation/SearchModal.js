import React, { useState} from 'react'
import {Button,Form,FormControl,InputGroup,Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navigation.css'

function SearchModal({faSearch}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
       
 
								<FontAwesomeIcon icon={faSearch} style={{color:'#ffc502', fontSize:'20px'}}  onClick={handleShow}/>
	 

      <Modal show={show} onHide={handleClose} >
        <Modal.Header   style={{height:'65px', backgroundColor:'rgb(255, 197, 2)',}}  >
          <Modal.Title> 
          <Form
					inline
					className=" d-md-inline ml-auto  my-2 my-md-0 osahan-navbar-search modalHeader"
				>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="  Search"
							className=""
						/>
						<InputGroup.Append>
							<Button variant="light" style={{backgroundColor:'#0e202f'}}>
								<FontAwesomeIcon icon={faSearch} style={{color:'#f2e30e'}}  />
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form>
          </Modal.Title>
        </Modal.Header>
        
        
      </Modal>
    </>
    )
}

export default SearchModal
