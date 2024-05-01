import { useEffect, useState } from 'react';
import Showservicedata from './showservicedata';
const service = () => {

const [load, SetLoad] = useState([])
const [visibleItems, setVisibleItems] = useState(6);

useEffect(() =>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => SetLoad(data));
})
console.log(load)

const handleLoadMore = () => {
    setVisibleItems(prev => prev + 3);
};

    return (
        <div>
        <div className='text-center space-y-6'>
        <p className='text-2xl font-bold text-orange-600'>Service</p>
        <h1 className='text-5xl font-bold '>Our Service Area</h1>
        <p className='w-[700px] mx-auto text-balance text-xl text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont
             look even slightly believable. </p>
        </div>
<div className='mt-20  p-12
grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 
'>
                {load.slice(0, visibleItems).map((data, id) => (
                    <Showservicedata key={id} data={data}></Showservicedata>
                ))}
            </div>
    <div className='text-center mt-10'>
    {visibleItems < load.length && (
 <button className=' font-semibold
 text-2xl  border-2 
  border-orange-600 p-2 text-orange-600 rounded-md
  ' onClick={handleLoadMore}>
                        More Service
                    </button>
                )}
    </div>

    <div className='mt-20 mb-20 h-[200px] flex  flex-col md:flex-row lg:flex-row justify-around rounded-md bg-black'>

    <div className='flex gap-5 items-center'>
    <div>
<img className='w-[60px] h-[60px]' src="/public/img/icons/Group 32.png" alt="" />
    </div>
    <div className='space-y-3'>
    <p className='text-xl text-gray-300'>We are open monday-friday</p>
    <p className='text-2xl font-semibold text-white'>7:00 am - 9:00 pm</p>
    </div>
    </div>
    <div className='flex  gap-5 items-center'>
    <div>
<img className='w-[60px] h-[60px]' src="/public/img/icons/Group.png" alt="" />
    </div>
    <div className='space-y-3'>
    <p className='text-xl text-gray-300'>Have a question?</p>
    <p className='text-2xl font-semibold text-white'>+2546 251 2658</p>
    </div>
    </div>
    <div className='flex gap-5 items-center'>
    <div>
<img className='w-[60px] h-[60px]' src="/public/img/icons/Group 35.png" alt="" />
    </div>
    <div className='space-y-3'>
    <p className='text-xl text-gray-300'>Need a repair? our address</p>
    <p className='text-2xl font-semibold text-white'>Liza Street, New York</p>
    </div>
    </div>

    </div>
        </div>
    );
};

export default service;