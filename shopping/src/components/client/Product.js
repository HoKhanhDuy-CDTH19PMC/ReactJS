import React from 'react'
import { Button, 
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';
function Product(props) {
    const {name,image,price}=props
    return (
        <React.Fragment>
             <Col md={3}>
                                     <Card>
                                    <CardImg top width="100%" src={image} />
                                    <CardBody>
                                    <CardTitle tag="h5">{name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
                                    <Button>Button</Button>
                                    </CardBody>
                                   </Card>
                                     </Col>
        </React.Fragment>
    )
}

export default Product
