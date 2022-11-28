import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyBookings = () => {
    const {user} = useContext(AuthContext)
    const [deletedWish, setDeletedWish] = useState(null)
    const closeModal = () => {
        setDeletedWish(null)
    }
    const url = `https://server-sooty-five.vercel.app/bookings?email=${user?.email}`; 
    // const url = `https://server-sooty-five.vercel.app/bookings`; 

    const {data:bookings= [], refetch} = useQuery({
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
    const handleDeleteWishlist = ad => {
        console.log(ad)
        fetch(`https://server-sooty-five.vercel.app/bookings/${ad._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                refetch()
                toast.success(`Advertisement ${ad.name} deleted Successfully`)
            }
            else {
                toast.error( 'Sorry You cannot delete'
                )
            }
        })
    }



    return (
        <div>
        <h3 className="text-3xl mb-5">My Bookings</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>image</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Action</th>
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
                            <td>
                                <label onClick={() =>setDeletedWish(booking)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        {
            deletedWish && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletedWish.name}. It cannot be undone.`}
                successAction = {handleDeleteWishlist}
                successButtonName="Delete"
                modalData = {deletedWish}
                closeModal = {closeModal}
            >
            </ConfirmationModal>
        }
    </div>
    );
};

export default MyBookings;
