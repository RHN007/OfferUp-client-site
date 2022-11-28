import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import AddCart from './AddCart';

const Advertisements = () => {
  

    const {data:advertisement, isLoading, refetch} = useQuery({
        queryKey: ['advertisement', ],
        queryFn: async () => {
            try {
                    const res = await fetch(`http://localhost:9000/advertisement`,{
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                    const data = await res.json()
                    console.log(data)
                    return data 
            }
            catch(error) {

            }
        }
    })
    if(isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <h1 className='text-center text-primary font-bold text-2xl'>Saleable Motorcycle</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            
            {
               advertisement.map(ad => <AddCart key={ad._id} ad={ad} refetch={refetch}></AddCart> ) 
            }
        </div>


        </div>
       
    );
};

export default Advertisements;