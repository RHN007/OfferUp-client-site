import React from 'react';

const CategoryProduct = ({ category }) => {
    const { name, description, img } = category;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="bikes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center ">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    );
};

export default CategoryProduct;