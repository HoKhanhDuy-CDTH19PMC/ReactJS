import React from 'react'
import {

  NavbarBrand,
 Navbar,
  Container
  , Row,
  Col,
  CardBody,
  CardTitle,
Button,
Image
  
} from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ProductBuy(props) {
  const collapsed = true;
  return (
    <React.Fragment>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrapss</NavbarBrand>
        <FontAwesomeIcon icon={['fa', 'plus']} />  Gio hang
      </Navbar>
      <hr />
      <Container>
        <Row>
          <Col md={8} className="Product-Card">
          <Row>
          <Col md={3}>
          <img src="https://cf.shopee.vn/file/dad2a7f435f27c7cd50495476216af2f"></img>
          
            </Col>
            <Col md={5}>
          <CardTitle tag="h4" color="secondary">Price</CardTitle>
            </Col>
          </Row>
            </Col>
          <Col md={3} className="Product-Total">
            <CardBody>
          <CardTitle tag="h4">Quantity</CardTitle>
          <CardTitle tag="h4" color="secondary">Price</CardTitle>
          <Button>Button</Button>
        </CardBody>
            </Col>

        </Row>
      </Container>

    </React.Fragment>
  )
}

export default ProductBuy
