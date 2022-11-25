import React from 'react';
import { Link } from 'react-router-dom';
import imgDelivery from '../../../assets/Delivery address.gif'

const DeliveryInfo = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <img src={imgDelivery} className="max-w-sm rounded-lg shadow-2xl" alt='delivery' />
                <div>
                    <h1 className="text-5xl font-bold">Get items delivered to you with Doorstop delivery</h1>
                    <p className="py-6">Choose from over Hundreds of Motorcycle that can be delivered to your doorstep. Order online and enjoy our Buyer Protection program, which means that we’ll replace the item for FREE if it’s not as described in the ad!</p>
                   <Link to='/products'><p className='text-center'><button className="btn btn-primary">Shop Now</button></p> </Link>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;