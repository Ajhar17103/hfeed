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
       
      <Button    onClick={handleShow} className="serachModal">
								<FontAwesomeIcon icon={faSearch}  />
		</Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{height:'65px', backgroundColor:'#b1362f', }}  >
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
							<Button variant="light" style={{backgroundColor:'black'}}>
								<FontAwesomeIcon icon={faSearch}  />
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
