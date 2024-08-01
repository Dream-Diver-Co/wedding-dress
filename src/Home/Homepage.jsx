import React from 'react';
import HeroSection from './HeroSection';
import Reels from './Section/Reels';
import Navbar from './Shared/Navbar';

const Homepage = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Reels></Reels>
        </div>
    );
};

export default Homepage;