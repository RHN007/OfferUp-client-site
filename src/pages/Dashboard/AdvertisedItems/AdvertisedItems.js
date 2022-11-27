import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AdvertisedItems = () => {
    const {user} = useContext(AuthContext)
    const { data: advertisement , refetch, isLoading} = useQuery({
        queryKey: ['advertisement', user?.email], 
        queryFn: async () => {
            const res = await fetch(`http://localhost:9000/advertisement?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })


if(isLoading){
    return <Loading></Loading>
}



    return (
        <div>
        <h2 className="text-2xl text-primary text-center">You have added {advertisement.length}  used Product</h2>

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
               
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                
                   {
                    advertisement?.map( order => <li
                        key={order._id} 
                        order={order}
                        // handleDelete= {handleDelete}
                        // handleStatusUpdate= {handleStatusUpdate}
                        
                        
                        >{order.name}</li>)
                   }
            
                    
                   
              
                </tbody>
             
              

            </table>
        </div>
    </div>
    );
};

export default AdvertisedItems;