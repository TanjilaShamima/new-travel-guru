import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { placesData } from '../../../fekeData/places';
import Header from '../../Shared/Header/Header';
import PlaceDetails from '../../Shared/PlaceDetails/PlaceDetails';
import BookingForm from '../BookingForm/BookingForm';

const Booking = () => {
    const {placeId} = useParams();
    const selectedPlace = placesData.filter(place => place.id === placeId)[0];
    return (
        <>
            <Header></Header>
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col md={6}>
                        <BookingForm placeName={selectedPlace.name}></BookingForm>
                    </Col>
                    <Col md={6}>
                        <PlaceDetails data={selectedPlace} visibleFlag={false}></PlaceDetails>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
};

export default Booking;