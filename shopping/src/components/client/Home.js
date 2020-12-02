import React, { Component, useState } from 'react'
import NavClient from './NavClient'
import {
    Container, Row, Col, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
const items = [
    {
        src:'https://cms.yame.vn/uploads/29661e70-3512-44c6-9620-49f542b11e3f-MOBAN412.jpg',
       
    },
    {
        src:'https://cms.yame.vn/uploads/c1e47f69-be21-48ff-bec8-cc87426bbe18-Thum%20blog%2002.jpg',
        
    },
    {
        src:'https://cms.yame.vn/uploads/0b6bed15-b174-423c-b52f-0d1138d1ea49-Thum%20web%20MB%2020.11%20fix.jpg',
       
    }
];
const imgsRow = [
    {
        src:'https://cdn2.yame.vn/pimg/ao-thun-tn-tc-lybi-ver3-0019930/c7a2b0d0-d008-0100-5331-0017707ad8c7.jpg?w=540&h=756&c=true',
       
    },
    {
        src:'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-bd-b26-0019841/69ffdac2-7483-0300-b661-00176e43b668.jpg?w=540&h=756&c=true',
        
    },
    {
        src:'https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-basic-bf01-0019691/f6645405-cc2b-1600-68ba-001742e826e7.jpg?w=540&h=756&c=true',
       
    },
    {
        src:'https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-basic-ai05-0019492/21382671-ade6-1400-b185-00171620db3e.jpg?w=540&h=756&c=true'
    }
];
function Home(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src}  />
                <CarouselCaption  />
            </CarouselItem>
        );
    });
 
    return (
        <React.Fragment>
            <NavClient>

            </NavClient>
            <Container>
                <Row className="Row-Product p-0">
                    <Col  className="Product-Img" md={3}><img src="https://cdn2.yame.vn/pimg/ao-thun-tn-tc-lybi-ver3-0019930/c7a2b0d0-d008-0100-5331-0017707ad8c7.jpg?w=540&h=756&c=true"></img></Col>
                    <Col className="Product-Img" md={3}><img src="https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-bd-b26-0019841/69ffdac2-7483-0300-b661-00176e43b668.jpg?w=540&h=756&c=true"></img></Col>
                    <Col className="Product-Img" md={3}><img src="https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-basic-bf01-0019691/f6645405-cc2b-1600-68ba-001742e826e7.jpg?w=540&h=756&c=true"></img></Col>
                    <Col className="Product-Img" md={3}><img src="https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-basic-ai05-0019492/21382671-ade6-1400-b185-00171620db3e.jpg?w=540&h=756&c=true"></img></Col>
                </Row>
                <Row className="content">Sự kiện nổi bật</Row>
                <Row>
                      <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
                </Row>
                <Row className="content">Các sản phẩm được bán chạy trong tháng này</Row>
                <Row className="Row-Product p-0">
                    <Col  className="Product-Img" md={3}><img src="https://cdn2.yame.vn/pimg/ao-thun-tn-tc-lybi-ver3-0019930/c7a2b0d0-d008-0100-5331-0017707ad8c7.jpg?w=540&h=756&c=true"></img></Col>
                    <Col className="Product-Img" md={3}><img src="https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-bd-b26-0019841/69ffdac2-7483-0300-b661-00176e43b668.jpg?w=540&h=756&c=true"></img></Col>
                    <Col className="Product-Img" md={3}><img src="https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-basic-bf01-0019691/f6645405-cc2b-1600-68ba-001742e826e7.jpg?w=540&h=756&c=true"></img></Col>
                    <Col className="Product-Img" md={3}><img src="https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-basic-ai05-0019492/21382671-ade6-1400-b185-00171620db3e.jpg?w=540&h=756&c=true"></img></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default Home
