import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/reviewedPerson/player1.webp';
import people2 from '../../../assets/reviewedPerson/player2.webp';
import people3 from '../../../assets/reviewedPerson/player3.jpeg';
import Review from './Review';



const Testimonial = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Messi',
            img: people1,
            review: 'OfferUp is great because it facilitates communication for buying and selling. The chat has premade responses and questions so you can quickly .',
            location: 'Argentina'
        },
        {
            _id: 2, 
            name: 'Luka',
            img: people2,
            review: 'Brilliant service,lovely pair of guys. Very helpful and honest. Part exchanged my old bike with no issues at all. Definitely recommend using them',
            location: 'Spain'
        },
        {
            _id: 3, 
            name: 'Marica',
            img: people3,
            review: 'Amazing bike for sort riders, Cruze bike so goa for long ride easily.Oldest company so trusted.',
            location: 'Spain'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div >
                    <h4 className="text-xl text-primary font-bold">Recommendation</h4>
                    <h2 className="text-4xl font-bold">What Our Mentors Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;