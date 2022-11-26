import  { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(true);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:9000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;