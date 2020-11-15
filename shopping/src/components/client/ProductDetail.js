import React from 'react'
import { Button, Container } from 'reactstrap'
import { 
    Col, 
    Row

} from 'reactstrap';
import CommonQuantityInput from './CommonQuantityInput';

export default  class ProductDetail extends React.Component {
   render()
   {
    return (
        <React.Fragment>
            <Container id="productDetail">
                <Row>
                    <Col md={5} id="left">
                    <img src="https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-basic-bk01-0019751/258c6c51-28e6-2f01-9f63-00175ea8012b.jpg?w=540&h=756&c=true&ntf=false"></img>
                    </Col>
                    <Col md={7} id="right">
                        <Row className="productDetail-Name">
                        Product Name
                        </Row>
                        <Button>Them vao gio hang</Button>
                        <CommonQuantityInput></CommonQuantityInput>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
   }
    }
 
