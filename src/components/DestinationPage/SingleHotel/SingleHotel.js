import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

const SingleHotel = ({data}) => {
    const {name, isAirKitchen, isCancellable, photo} = data;
    const { guests, bedrooms, beds, bathrooms} = data.specs;
    const { point, totalReviews} = data.review;
    const { perNight, total} = data.price;

    return (
        <>
            <Card style={{minWidth: 500}} className="mt-3 p-2 shadow rounded">
                <Row className="justify-content-between align-items-center">
                    <Col md={4} className="overflow-hidden rounded">
                        <Image width={200} className="rounded" src={photo} alt="Placeholder image." />
                    </Col>
                    <Col md={8}>
                        <h6 className="font-weight-bold">{name}</h6>
                        <Row>
                            <Col md={3}><h6><small>{guests} guests</small></h6></Col>
                            <Col md={3}><h6><small>{bedrooms} rooms</small></h6></Col>
                            <Col md={3}><h6><small>{beds} beds</small></h6></Col>
                            <Col md={3}><h6><small>{bathrooms} baths</small></h6></Col>
                        </Row>
                        {isAirKitchen ? <h6 className="text-muted" ><small>Wifi Air Conditioning Kitchen</small></h6> : <p className="text-muted"><small>No Air Conditioning Kitchen</small></p>}
                        {isCancellable ? <h6 className="text-muted"><small>Cancellation flexibility avialble</small></h6> : <p className="text-muted"><small>Cancellation not avialble</small></p>}
                        <Row>
                            <Col md={4}>
                                <div className="d-flex align-items-center">
                                    <img width={16} src="/Images/Icon/star_1_.png" alt="star" />
                                    <h6><small>{point} <span>({totalReviews})</span></small></h6>
                                </div>
                            </Col>
                            <Col md={4}><h6><small>${perNight}<span className="text-muted">/night</span></small></h6></Col>
                            <Col md={4}><h6 className="text-muted"><small>${total}/total</small></h6></Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default SingleHotel;