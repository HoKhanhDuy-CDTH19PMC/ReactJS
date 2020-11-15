import React from 'react'
import { 
    Row, 
    Col, 
} from 'reactstrap';
function CommonQuantityInput() {
    return (
        <React.Fragment>
            <Row className="quantityInput">
                <Col md={4} className="minus">-</Col>
                <Col md={4} className="quantity"></Col>
                <Col md={4} className="plus">+</Col>
            </Row>
        </React.Fragment>
    )
}

export default CommonQuantityInput
