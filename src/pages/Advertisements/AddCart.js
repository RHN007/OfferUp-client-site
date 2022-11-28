import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaCheckCircle } from "react-icons/fa";

const AddCart = ({ ad, refetch }) => {
   
    const {user} = useContext(AuthContext)
    // console.log(ad)
    const {_id, brand, condition, description, image, price, location, name, mobileNumber, status, sellerName,sellerStatus } = ad
    
    const handleBookingButton = (event) => {
        const bookings = {
            productName:name,
            name: user.displayName, 
            price, 
            brand, 
            image, 
            mobileNumber,
            email:user.email,
            condition, 
            location,
            status
        }
        fetch('http://localhost:9000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('Booking Confirmed')
                refetch()
            }
            else {
                toast.error(data.message)
            }
            
        })

    }

    const handleWishList = (event) => {
        const wishlist = {
            productName:name,
            name: user.displayName, 
            price, 
            brand, 
            image, 
            mobileNumber,
            email:user.email,
            condition, 
            location,
            status
        }
        fetch('http://localhost:9000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlist)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('Added to Your wishlist')
                refetch()
            }
            else {
                toast.error(data.message)
            }
            
        })

    }
    
    
    return (
        <div className="card card-side bg-base-100 shadow-xl">
           <div className='w-2/5 p-4 mt-20'>
           <img src={image}  alt="Movie" />
           </div>
            <div className="card-body">
                <h2 className="card-title text-primary font-bold">{name}</h2>
                <p>Brand:{brand}</p>
                <p className='font-bold'>Price: BDT{price}</p>
                <p >Condition: {condition}</p>
                <p className='text-blue-800 font-bold'>Status:  {status?status:'Available'}</p>
                <p >Phone: {mobileNumber}</p>
                <p >Location:{location?location:' Not Found'}</p>
                <p className=' font-bold flex justify-between '>Seller:  {sellerName?<>{sellerName}</>:'Not Available'}    <span >{sellerStatus === 'Verified'? <span className='text-blue-500 flex justify-center align-middle'>  Verified<FaCheckCircle></FaCheckCircle></span> : 'Not Verified'}</span>  </p>
                <p>{description.length>100? <p>{description.slice(0,20) + '....'}<Link to={`/category/${_id}`}>Read More</Link> </p> : <p>{description}</p> }</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBookingButton(_id)} className="btn btn-primary w-full">Booking</button>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleWishList(_id)} className="btn btn-accent w-full">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default AddCart;