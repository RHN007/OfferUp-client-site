import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyBookings = () => {
    const {user} = useContext(AuthContext)
    const url = `https://server-sooty-five.vercel.app/bookings?email=${user?.email}`; 
    // const url = `https://server-sooty-five.vercel.app/bookings`; 

    const {data:bookings= []} = useQuery({
        queryKey: ['bookings', user?.email], 
        queryFn: async() => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            })
            const data = await res.json()
            return data ; 

        }
    })


    return (
        <div>
        <h3 className="text-3xl mb-5">My Appointments</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>image</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {   bookings.length &&
                        bookings?.map((booking, i) => <tr key={booking._id}>
                            <th>{i+1}</th>
                            <td><div className="avatar">
                                <div className="w-24 ">
                                    <img src={booking.image} alt="" />
                                </div>
                            </div></td>
                            <td>{booking.name}</td>
                            <td>{booking.brand}</td>
                            <td>
                                ${booking.price}
                                {
                                    booking.price && !booking.paid && 
                                    
                                <Link to={`/dashboard/payment/${booking._id}`}>    <button className='btn btn-primary btn-sm'
                                    
                                >Pay</button></Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-green-500 '>Paid</span>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyBookings;
