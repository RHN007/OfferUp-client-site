import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AdvertisedItems = () => {
    const {user} = useContext(AuthContext)
    const [deleteAdd, setDeleteAdd] = useState(null)
    const closeModal = () => {
        setDeleteAdd(null)
    }

    const { data: advertisement , refetch, isLoading} = useQuery({
        queryKey: ['advertisement', user?.email], 
        queryFn: async () => {
            const res = await fetch(`http://localhost:9000/advertisements?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    const handleDeleteAdvertisement = ad => {
        console.log(ad)
        fetch(`http://localhost:9000/advertisement/${ad._id}`, {
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
        <h2 className="text-3xl text-center mt-5 text-primary">You Have Added total {advertisement?.length} Products</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Picture</th>
                        <th>Product</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Advertised date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        advertisement.map((ad, i) => <tr key={ad._id}>
                            <th>{i + 1}</th>
                            <td><div className="avatar">
                                <div className="w-24 ">
                                    <img src={ad.image} alt="" />
                                </div>
                            </div></td>
                            <td>{ad.name}</td>
                            <td>{ad.brand}</td>
                            <td>{ad.price}</td>
                            <td>{ad.purchaseDate}</td>
                            <td>
                                <label onClick={() =>setDeleteAdd(ad)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        {
            deleteAdd && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deleteAdd.name}. It cannot be undone.`}
                successAction = {handleDeleteAdvertisement}
                successButtonName="Delete"
                modalData = {deleteAdd}
                closeModal = {closeModal}
            >
            </ConfirmationModal>
        }
    </div>
    );

};

export default AdvertisedItems;