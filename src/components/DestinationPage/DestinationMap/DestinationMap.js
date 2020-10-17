import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const DestinationMap = ({data}) => {
    const containerStyle = {
        width: '400px',
        height: '600px',
        borderRadius: '20px'
      };
      
      const center = {
        lat: data.lat,
        lng: data.lng
      };
    return (
        <>
        <LoadScript
            googleMapsApiKey="AIzaSyAqxPga4_7XKKv9sOHq8S43Y5VOPqUgUjA"
            >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker
                    position={center}
                />
            </GoogleMap>
        </LoadScript>  
        </>
    );
};

export default DestinationMap;