import React from 'react';
import Header from '../../Shared/Header/Header';
import Carousel from '../Carousel/Carousel'
import backgroundImage from '../../../Image/Rectangle 28.png';
import './Home.css'
import HomeHeader from './HomeHeader/HomeHeader';

const Home = () => {
    return (
        <div className="home" id="overlay">
        
            <HomeHeader></HomeHeader>
            
            <Carousel></Carousel>
        </div>
    );
};

export default Home;