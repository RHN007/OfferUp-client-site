import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyWishList = () => {
    const {user} = useContext(AuthContext)
    const [deletedWish, setDeletedWish] = useState(null)
    const closeModal = () => {
        setDeletedWish(null)
    }
    const { data: wishlist , refetch, isLoading} = useQuery({
        queryKey: ['wishlist', user?.email], 
        queryFn: async () => {
            const res = await fetch(`http://localhost:9000/wishlist?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    const handleDeleteWishlist = ad => {
        console.log(ad)
        fetch(`http://localhost:9000/wishlist/${ad._id}`, {
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
        })
    }
if(isLoading){
    return <Loading></Loading>
}



    return (
        <div>
             <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Picture</th>
                        <th>Product</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishlist?.map((ad, i) => <tr key={ad._id} >
                            <th>{i + 1}</th>
                            <td><div className="avatar">
                                <div className="w-24 ">
                                    <img src={ad.image} alt="" />
                                </div>
                            </div></td>
                            <td>{ad.productName}</td>
                            <td>{ad.brand}</td>
                            <td>{ad.price}</td>
                             <td>
                                <label onClick={() =>setDeletedWish(ad)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
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

export default MyWishList;