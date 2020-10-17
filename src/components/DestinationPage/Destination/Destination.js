
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { hotelData } from '../../../fekeData/hotels';
import { placesData } from '../../../fekeData/places';
import Header from '../../Shared/Header/Header';
import DestinationMap from '../DestinationMap/DestinationMap';
import HotelDetails from '../HotelDetails/HotelDetails';

const Destination = () => {
    const {placeName} = useParams();
    const [hotels, setHotels] = useState([]);
    const [placePosition, setPlacePosition] = useState({
        lat: 0.00,
        lng: 0.00
    });

    useEffect(() => {
        const allHotelData = [...hotelData];
        const selectedHotels = allHotelData.filter(htls => htls.location === placeName);
        setHotels(selectedHotels);

        const allPlaceData = [...placesData];
        const selectedPlace = allPlaceData.filter(place => place.name === placeName)[0];
        setPlacePosition(selectedPlace.location);
    },[placeName]);

    console.log(placePosition)
    return (
        <>
            <Header></Header>
            <Container>
                <Row className="justify-content-around align-items-center">
                    <Col md={6}>
                        <HotelDetails placeName={placeName} data={hotels}></HotelDetails>
                    </Col>
                    <Col md={6} className="mx-auto">
                        <DestinationMap data={placePosition}></DestinationMap>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Destination;