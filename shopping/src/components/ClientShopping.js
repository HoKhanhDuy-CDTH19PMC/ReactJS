import React from 'react'
import  '../client.scss'
import { Button, 
    Container, 
    Row, 
    Col, 
    ListGroup, 
    ListGroupItem, 
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap';
import NavClient from './NavClient';

export default function ClientShopping(props) {
 
    return (
        <React.Fragment>
           <NavClient></NavClient>
    
          <Container >
             <Row>
                 <Col md={3} id="sidebar-left">
                                <ListGroup>
                                            <ListGroupItem>Cras justo odio</ListGroupItem>
                                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                 </Col>
                 <Col md={9} id="sidebar-right">
                                    <Row>
                                    <Col md={3}>
                                     <Card>
                                    <CardImg top width="100%" src="https://kidsplaza-1.cdn.vccloud.vn/media/wysiwyg/product/thoi-trang-cho-be/quan-ao-thoi-trang-cho-be/quan-ao-thoi-trang-be-trai-in-sieu-nhan-nhen-mamago-ht19t-xanh-1.jpg" alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle tag="h5">Card title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                    </CardBody>
                                   </Card>
                                     </Col>
                                     <Col md={3}>
                                     <Card>
                                    <CardImg top width="100%" src="https://kidsplaza-1.cdn.vccloud.vn/media/wysiwyg/product/thoi-trang-cho-be/quan-ao-thoi-trang-cho-be/quan-ao-thoi-trang-be-trai-in-sieu-nhan-nhen-mamago-ht19t-xanh-1.jpg" alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle tag="h5">Card title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                    </CardBody>
                                   </Card>
                                     </Col>
                                     <Col md={3}>
                                                    <Card>
                                                    <CardImg top width="100%" src="https://kidsplaza-1.cdn.vccloud.vn/media/wysiwyg/product/thoi-trang-cho-be/quan-ao-thoi-trang-cho-be/quan-ao-thoi-trang-be-trai-in-sieu-nhan-nhen-mamago-ht19t-xanh-1.jpg" alt="Card image cap" />
                                                    <CardBody>
                                                    <CardTitle tag="h5">Card title</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                                    <Button>Button</Button>
                                                    </CardBody>
                                                </Card>
                                     </Col>
                                     <Col md={3}>
                                                    <Card>
                                                    <CardImg top width="100%" src="https://kidsplaza-1.cdn.vccloud.vn/media/wysiwyg/product/thoi-trang-cho-be/quan-ao-thoi-trang-cho-be/quan-ao-thoi-trang-be-trai-in-sieu-nhan-nhen-mamago-ht19t-xanh-1.jpg" alt="Card image cap" />
                                                    <CardBody>
                                                    <CardTitle tag="h5">Card title</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                                    <Button>Button</Button>
                                                    </CardBody>
                                                </Card>
                                     </Col>
                                     <Col md={3}>
                                                    <Card>
                                                    <CardImg top width="100%" src="https://kidsplaza-1.cdn.vccloud.vn/media/wysiwyg/product/thoi-trang-cho-be/quan-ao-thoi-trang-cho-be/quan-ao-thoi-trang-be-trai-in-sieu-nhan-nhen-mamago-ht19t-xanh-1.jpg" alt="Card image cap" />
                                                    <CardBody>
                                                    <CardTitle tag="h5">Card title</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                                    <Button>Button</Button>
                                                    </CardBody>
                                                </Card>
                                     </Col>
                                     <Col md={3}>
                                                    <Card>
                                                    <CardImg top width="100%" src="https://kidsplaza-1.cdn.vccloud.vn/media/wysiwyg/product/thoi-trang-cho-be/quan-ao-thoi-trang-cho-be/quan-ao-thoi-trang-be-trai-in-sieu-nhan-nhen-mamago-ht19t-xanh-1.jpg" alt="Card image cap" />
                                                    <CardBody>
                                                    <CardTitle tag="h5">Card title</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                                    <Button>Button</Button>
                                                    </CardBody>
                                                </Card>
                                     </Col>
                                     <Col md={3}>
                                                    <Card>
                                                    <CardImg top width="100%" src="https://kidsplaza-1.cdn.vccloud.vn/media/wysiwyg/product/thoi-trang-cho-be/quan-ao-thoi-trang-cho-be/quan-ao-thoi-trang-be-trai-in-sieu-nhan-nhen-mamago-ht19t-xanh-1.jpg" alt="Card image cap" />
                                                    <CardBody>
                                                    <CardTitle tag="h5">Card title</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                                    <Button>Button</Button>
                                                    </CardBody>
                                                </Card>
                                     </Col>
                                     <Col md={3}>
                                                    <Card>
                                                    <CardImg top width="100%" src="https://kidsplaza-1.cdn.vccloud.vn/media/wysiwyg/product/thoi-trang-cho-be/quan-ao-thoi-trang-cho-be/quan-ao-thoi-trang-be-trai-in-sieu-nhan-nhen-mamago-ht19t-xanh-1.jpg" alt="Card image cap" />
                                                    <CardBody>
                                                    <CardTitle tag="h5">Card title</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                                    <Button>Button</Button>
                                                    </CardBody>
                                                </Card>
                                     </Col>                        
                                    </Row>
                 </Col>
             </Row>
          </Container>
        </React.Fragment>
      
    )
}
