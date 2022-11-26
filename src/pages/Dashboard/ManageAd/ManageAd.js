import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageAd = () => {
    const [deleteAdd, setDeleteAdd] = useState(null)
    const closeModal = () => {
        setDeleteAdd(null)
    }

    const {data:advertisement, isLoading, refetch} = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            try {
                    const res = await fetch(`http://localhost:9000/advertisement`,{
                        // headers: {
                        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                        // }
                    })
                    const data = await res.json()
                    return data 
            }
            catch(error) {

            }
        }
    })

    const handleDeleteAdvertisement = ad => {
        console.log(ad)
        fetch(`http://localhost:9000/advertisement/${ad._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                refetch()
                toast.success(`Advertisement ${ad.name} deleted Successfully`)
            }
        })
    }
    if(isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>
        <h2 className="text-3xl text-center mt-5 text-primary">Manage Advertisement: {advertisement?.length}</h2>
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

export default ManageAd;