import React from 'react';
import SingleHotel from '../SingleHotel/SingleHotel';

const HotelDetails = ({placeName, data}) => {
    return (
        <>
            <p className="text-secondary"><small>252 stays April 13-17 3 guests</small></p>
            <h4>Stay in {placeName}</h4>
            {
                data.map(hotel => <SingleHotel key={hotel.id} data={hotel}></SingleHotel>)
            }
        </>
    );
};

export default HotelDetails;