import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PlaceDetails = ({data, visibleFlag}) => {
    const {name, description, id} = data;
    return (
        <>
            <h1>{name}</h1>
            <p className="w-75">{description}</p>
            {
                visibleFlag && 
                <Link to={`/places/${id}`}>
                    <Button className="align-items-center px-4" variant="warning" type="submit">Booking <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
                </Link>
            }
        </>
    );
};

export default PlaceDetails;