import React from 'react'
import {Link} from'react-router-dom'
import {Table, Container,Row,Col,Button} from 'react-bootstrap';
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";

function ViewCart() {
    return (
        <div>
            	<ContentWrapper>
				<Container fluid>
                <Row>
                        <Col md={12}>
								<SectionHeader heading="Cart" />
                                <hr/>
							</Col>
                            </Row>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Qunatity</th>
      <th>Total</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>  
          <img src='/img/product.png' alt='product' width='100px' height='100px' />
      </td>
      <td> 
     1200000
      </td>
      <td> 
          10
      </td>
      <td>1200000</td>
      <td>
         <Button type='btn btn-danger'>Cancel</Button>
     </td>
    </tr>
    <tr>
      <td>  
          <img src='/img/product.png' alt='product' width='100px' height='100px' />
      </td>
      <td> 
     1200000
      </td>
      <td> 
          10
      </td>
      <td>1200000</td>
     <td>
         <Button type='btn btn-danger'>Cancel</Button>
     </td>
    </tr>
    <tr>
      <td>  
          <img src='/img/product.png' alt='product' width='100px' height='100px' />
      </td>
      <td> 
     1200000
      </td>
      <td> 
          10
      </td>
      <td>1200000</td>
      <td>
         <Button type='btn btn-danger'>Cancel</Button>
     </td>
    </tr>
   
  </tbody>
</Table>
                 <Row >
                        <Col md={12} style={{display:'flex', justifyContent:'space-between'}} >
								  
                                <Button>Update Cart</Button>
                                <Button> <Link style={{color:'white'}} to='/checkout'> Process to checkout </Link> </Button>
							</Col>
                             
                            <hr/>
                            </Row>
                </Container>
                </ContentWrapper>
        </div>
    )
}

export default ViewCart

