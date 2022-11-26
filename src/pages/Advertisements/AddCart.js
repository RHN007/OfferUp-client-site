import React from 'react';
import { Link } from 'react-router-dom';

const AddCart = ({ ad }) => {
    // console.log(ad)
    const {_id, brand, condition, description, image, price, location, name } = ad
    return (
        <div className="card card-side bg-base-100 shadow-xl">
           <div className='w-2/5 p-4 mt-20'>
           <img src={image}  alt="Movie" />
           </div>
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>Brand:{brand}</p>
                <p className='font-bold'>Price: BDT{price}</p>
                <p>Location:{location?location:' Not Found'}</p>
                <p className='text-green-800'>Condition: {condition}</p>
                <p>{description.length>100? <p>{description.slice(0,20) + '....'}<Link to={`/category/${_id}`}>Read More</Link> </p> : <p>{description}</p> }</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default AddCart;