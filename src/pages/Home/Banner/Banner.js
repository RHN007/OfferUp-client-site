import React from 'react';
import banner from '../../../assets/Carausal.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">Buy or Sell your Bike Simply  </h1>
                    <p className="py-5 text-gray-500">We are the largest online old bike buy sell website in the world.
                    Every used bike at Offer Up gests a full professional service from our master mechanics before being shipped direct to your door. We leave the fun part to you, thinking about the next big challenge you'll do with your bike with no worries </p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;