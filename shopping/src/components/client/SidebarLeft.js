import React from 'react'
import { 
    Col, 
    ListGroup, 
    ListGroupItem, 

} from 'reactstrap';
function SidebarLeft() {
    return (
        <React.Fragment>
              <Col md={3} id="sidebar-left">
                                <ListGroup>
                                            <ListGroupItem>Cras justo odio</ListGroupItem>
                                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                 </Col>
        </React.Fragment>
    )
}

export default SidebarLeft