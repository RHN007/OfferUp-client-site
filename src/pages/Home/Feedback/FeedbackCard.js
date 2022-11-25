import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FeedbackCard = ({review}) => {
    const starArray = [...Array(5).keys()].map(i => i + 1);
    const {name,message, rating, email} = review
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p className='text-secondary font-bold text-2xl'>Name: {name}</p>
                <div >
                    <div className="avatar mr-6">
                       <p>Email:{email}</p>
                    </div>
                    <div>
                        <p>{message}</p>
                        {/* <h5 className="text-lg">{rating}</h5> */}
                {
                    starArray.map (i => (<FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        color={rating >= i ? "orange" : "lightgrey"}
                    
                    ></FontAwesomeIcon>))
                }


 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;