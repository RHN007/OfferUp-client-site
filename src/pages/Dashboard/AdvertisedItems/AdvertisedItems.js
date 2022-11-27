import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AdvertisedItems = () => {
    const {user} = useContext(AuthContext)
    const { data: advertisement , refetch, isLoading} = useQuery({
        queryKey: ['advertisements', user?.email], 
        queryFn: async () => {
            const res = await fetch(`http://localhost:9000/userAd?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })






    return (
        <div>
        <h2 className="text-2xl text-primary text-center">You have  Services Added</h2>

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
                        
                        
                        >{order}</li>)
                   }
            
                    
                   
              
                </tbody>
             
              

            </table>
        </div>
    </div>
    );
};

export default AdvertisedItems;