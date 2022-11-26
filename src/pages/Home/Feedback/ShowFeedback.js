import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Feedback from './Feedback';
import FeedbackCard from './FeedbackCard';

const ShowFeedback = () => {
    const {data: feedback= []} = useQuery({
        queryKey: ['feedback'], 
        queryFn: async() => {
            const res = await fetch('http://localhost:9000/feedback'); 
            const data = await res.json()
            return data
            
        }
    })
    return (
        <div>
            <h1 className='text-2xl text-center text-primary font-bold'>Most Recent Customer Feedback </h1>
              <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    feedback.map(review =><FeedbackCard
                        key={review._id}
                        review={review}
                    ></FeedbackCard>
                    )
                }
            </div>
        </div>
    );
};

export default ShowFeedback;