import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M6sjdFjPzqrkDjrkcgbelCERmUXETNeWM2erbBhpt9zxFDgfcgt9gLZHnhKDald7391EL2pOL16WEV7eCPQSO9l00Af5H7uCh');



const Payment = () => {
    const booking = useLoaderData()
    // const navigation = useNavigation();
    const { name, price, brand, productName } = booking
    
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    
    
    return (
        <div>
            <h3 className='text-primary mt-10'>Payment for {productName} by {name}</h3>
            <p className='text-xl font-bold'> Please pay ${price} for your purchase of {brand} bike  </p>

            <div className='w-96 my-12 border '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    booking={booking}
                    
                    />
                </Elements>
            </div>



        </div>

    );
};

export default Payment;