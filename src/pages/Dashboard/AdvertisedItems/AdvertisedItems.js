import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AdvertisedItems = () => {
    useTitle('My Ads')
    const {user} = useContext(AuthContext)
    const [myAd, setMyAd] = useState([])
    // const [statusUpdate, setStatusUpdate] = useState(null)
    const [deleteAdd, setDeleteAdd] = useState(null)
    const closeModal = () => {
        setDeleteAdd(null)
    }
    // const closeModal2 = () => {
    //     setStatusUpdate(null)
    // }

    const { data: advertisement , refetch, isLoading} = useQuery({
        queryKey: ['advertisement', user?.email], 
        queryFn: async () => {
            const res = await fetch(`https://server-sooty-five.vercel.app/advertisements?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    const handleDeleteAdvertisement = ad => {
        console.log(ad)
        fetch(`https://server-sooty-five.vercel.app/advertisement/${ad._id}`, {
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
    const handleStatusUpdate = id => {
        fetch(`https://server-sooty-five.vercel.app/advertisements/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'Sold'})
        })
        .then(res => res.json())
        .then(data => {console.log(data)
                if(data.modifiedCount>0){
                        const remaining = myAd.filter(odr => odr._id !== id)
                        const approving = myAd.find(odr => odr._id ===id)
                        // approving.status = 'Sold'
                        const newOrders = [ approving , ...remaining]
                        setMyAd(newOrders)
                        refetch()
                        toast.success('Product Status Updated Successfully ')
  
                }}
        )
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
                        <th>Status</th>
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
                <label 
                onClick={() => handleStatusUpdate(ad._id)}
                className="btn  btn-secondary btn-xs" htmlFor="confirmation-modal" >{ad.status ? ad.status : 'Available'}</label>
            </td>
                            <td>
                                <label onClick={() =>setDeleteAdd(ad)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        {/* {
            statusUpdate && <ConfirmationModal
            title={`Are you sure you want to Update?`}
                message={`If you delete  It cannot be undone.`}
                successAction = {handleStatusUpdate}
                successButtonName="Status"
                modalData = {statusUpdate}
                closeModal = {closeModal2}>
            

            </ConfirmationModal>
        } */}
         
        
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