import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const [myAd, setMyAd] = useState([])
    const { data: users = [],isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://server-sooty-five.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://server-sooty-five.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successful')
                    refetch()
                }
            })
    }
    
    const handleUserStatusUpdate = (id) => {
        fetch(`https://server-sooty-five.vercel.app/user/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'Verified'})
        })
        .then(res => res.json())
        .then(data => {console.log(data)
                if(data.modifiedCount>0){
                        const remaining = myAd.filter(odr => odr._id !== id)
                        const approving = myAd.find(odr => odr._id ===id)
                        // approving.status = 'verified'
                        const newOrders = [ approving , ...remaining]
                        setMyAd(newOrders)
                        toast.success('Verification Successful')
                        refetch()
  
                }}
        )
    }






    const handleUserDelete = (user) => {
        fetch(`https://server-sooty-five.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                refetch()
                toast.success(` ${user.name} deleted Successfully`)
            }
        })
    }
    if(isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Verification</th>
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='font-bold text-primary'>{user.userType}</td>
                                <td>
                <label 
                onClick={() => handleUserStatusUpdate(user._id)}
                className="btn  btn-accent btn-xs" htmlFor="confirmation-modal" >{user.status ? user.status : 'Not Verified'}</label>
            </td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><button onClick={()=>handleUserDelete(user)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;