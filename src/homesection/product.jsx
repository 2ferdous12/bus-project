import { useEffect, useState } from 'react';
import Showproduct from './showservicedata';

const product = () => {
    const [load, SetLoad] = useState([])
const [visibleItems, setVisibleItems] = useState(6);

useEffect(() =>{
    fetch('product.json')
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
        <p className='text-2xl font-bold text-orange-600'>Popular Products</p>
        <h1 className='text-5xl font-bold '>Browse Our Products</h1>
        <p className='w-[700px] mx-auto text-balance text-xl text-gray-500'>
        the majority have suffered alteration in some form, by injected humour, or randomised
         words which dont look even slightly believable.  </p>
        </div>
        <div className='mt-20  p-12
grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 
'>
                {load.slice(0, visibleItems).map((data, id) => (
                    <Showproduct key={id} data={data}></Showproduct>
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

        </div>
    );
};

export default product;