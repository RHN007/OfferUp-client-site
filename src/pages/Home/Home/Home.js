import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import Feedback from '../Feedback/Feedback';
import Testimonial from '../Tesmonial/Testimonial';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <DeliveryInfo></DeliveryInfo>
            <Testimonial></Testimonial>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;