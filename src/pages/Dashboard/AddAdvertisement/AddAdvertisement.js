import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import DatePicker from 'react-datepicker'

const AddAdvertisement = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [Cdate, setDate] = useState(new Date().toLocaleDateString('fr-FR'));
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imageHostKey;
    console.log(imageHostKey)

    const { data: categoryList, isLoading } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:9000/categoryList`)
            const data = await res.json()
            return data
        }
    })

    const handleAddAdvertisement = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const advertisement = {
                        name: data.name,
                        brand: data.brand,
                        image: imgData.data.url,
                        price: data.price,
                        mobileNumber: data.mobileNumber,
                        description: data.description,
                        condition: data.condition,
                        purchaseDate: data.dateSelection

                    }
                    //Save Information to the database : 
                    fetch(`http://localhost:9000/advertisement`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(advertisement)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Your ${data.name} is advertised successfully`)
                            navigate('/dashboard/manageAd')
                        })
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Fill in the details</h2>
            <form onSubmit={handleSubmit(handleAddAdvertisement)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Brand</span></label>
                    <select
                        {...register('brand')}
                        className="select input-bordered w-full max-w-xs">
                        {
                            categoryList.map(category => <option
                                key={category._id}
                                value={category.category_name}
                            >{category.category_name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="number" {...register("price", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select
                        {...register('condition')}
                        className="select input-bordered w-full max-w-xs">
                        <option>Excellent</option>
                        <option >Good</option>
                        <option >Fair</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Advertised Date </span></label>
                    <div {...register('dateSelection')}
                        className=" border input-bordered  max-w-xs">
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            value={Cdate}
                            onChange={(date) => {
                                const d = new Date(date).toLocaleDateString('fr-FR');
                                console.log(d);
                                setDate(d);
                            }}
                        />
                    </div>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile Number</span></label>
                    <input type="text" {...register("mobileNumber", {
                        required: "Mobile Number is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.mobileNumber && <p className='text-red-500'>{errors.mobileNumber.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>

                    <textarea className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: "Description is Mandatory"
                        })} >
                    </textarea>
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Post ad" type="submit" />
            </form>
        </div>
    );
};

export default AddAdvertisement;