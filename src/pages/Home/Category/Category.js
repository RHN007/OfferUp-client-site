import React from 'react';
import CategoryProduct from './CategoryProduct';
import yamaha from '../../../assets/category/Yamaha-R15-1.webp'
import honda from '../../../assets/category/honda.jpeg'
import suzuki from '../../../assets/category/suzuki.png'


const Category = () => {
    const categoryData = [
        {
            id: 1,
            name: 'Yamaha',
            description: 'Yamaha Motor Co., Ltd. is a Japanese multinational manufacturer of motorcycles, marine products such as boats and outboard motors, and other motorized products.',
            img: yamaha
        },
        {
            id: 2,
            name: 'Honda',
            description: 'Honda was the first Japanese automobile manufacturer to release a dedicated luxury brand, Acura, in 1986. Aside from their core automobile and motorcycle businesses, Honda also manufactures garden equipment, marine engines, personal watercraft, power generators, and other products.',
            img: honda
        },
        {
            id: 3,
            name: 'Suzuki',
            description: 'Suzuki Motor Corporation is a Japanese multinational corporation headquartered in Minami-ku, Hamamatsu, Japan. Suzuki manufactures automobiles, motorcycles, all-terrain vehicles, outboard marine engines, wheelchairs and a variety of other small internal combustion engines',
            img: suzuki
        },
    ]

    return (
        <div className='mt-16'>
        <div className='text-center'>
            <h3 className='text-2xl font-bold text-primary uppercase'>Our Category Of Bikes</h3>
            <h2 className='text-2xl font-bold'>Bikes You will Get</h2>
        </div>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categoryData.map(cat => <CategoryProduct
                    key={cat.id}
                    category={cat}
                ></CategoryProduct>)
            }
        </div>
    </div>
    );
};

export default Category;