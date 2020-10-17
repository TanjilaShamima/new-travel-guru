import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import CarouselItem from '../CarouselItem/CarouselItem';
import PlaceDetails from '../../Shared/PlaceDetails/PlaceDetails';
import { placesData } from '../../../fekeData/places';

const Carousel = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [places, setPlaces] = useState([]);
    
    let slider1 = [], slider2 = [], slider3 = [];

    useEffect(() => {
       setNav1(slider1);
       setNav2(slider2);
    },[slider1, slider2]);

    useEffect(() => {
        setPlaces([...placesData]);
    },[])

    const settings = {
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
      };

    const settings2 ={
        arrows: false
    }
    return (
        <Container className="my-auto">
            <Row style={{height: '100%'}} className="py-5 justify-content-between align-items-center">
                <Col md={6}>
                <Slider {...settings2} className="px-5" asNavFor={nav2} ref={slider => (slider1 = slider)}>
                        {
                            places.map(plc => <PlaceDetails data={plc} visibleFlag={true} key={plc.id}></PlaceDetails> )
                        }
                    </Slider>
                </Col>
                <Col md={6}>
                   
                    <Slider asNavFor={nav1} ref={slider => (slider2 = slider)} {...settings}>
                        {
                            places.map(plc => <CarouselItem data={plc} key={plc.id}></CarouselItem>)
                        }
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
};

export default Carousel;