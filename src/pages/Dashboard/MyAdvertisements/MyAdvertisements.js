// import { useQuery } from '@tanstack/react-query';
// import React, { useContext } from 'react';
// import { AuthContext } from '../../../contexts/AuthProvider';

const MyAdvertisements = () => {
    // const {user} = useContext(AuthContext)
    // const { data: advertisement , refetch, isLoading} = useQuery({
    //     queryKey: ['advertisement', user?.email], 
    //     queryFn: async () => {
    //         const res = await fetch(`https://server-sooty-five.vercel.app/advertisement?email=${user?.email}`)
    //         const data = await res.json()
    //         return data
    //     }
    // })

    return (
        <div>
            <h1> My Advertisement comming soon</h1>
        </div>
    );
};

export default MyAdvertisements;