import { useEffect, useState } from 'react';
import Mainproduct from '../component/mainproduct';

const product = () => {
    const [load22, SetLoad22] = useState([])
const [visibleItems, setVisibleItems] = useState(6);

useEffect(() =>{
    fetch('/makingData.json')
    .then(res => res.json())
    .then(data => SetLoad22(data));
})




const handleLoadMore1 = () => {
    setVisibleItems(prev => prev + 3);
};

    return (
        <div>
       <div className='text-center space-y-6'>
        <p className='text-2xl font-bold text-orange-600'>Popular Products</p>
        <h1 className='text-5xl font-bold '>Browse Our Products</h1>
        <p className='w-[350px] md:w-[700px] lg:w-[700px]  mx-auto text-balance text-xl text-gray-500'>
        the majority have suffered alteration in some form, by injected humour, or randomised
         words which dont look even slightly believable.  </p>
        </div>
        <div className='mt-10 md:mt-20 lg:mt-20  p-0 md:p-12 lg:p-12
grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 
'>
    {
load22.map((items, id__) => <Mainproduct key={id__} items={items}></Mainproduct>)
    }
  
            </div>
    <div className='text-center mt-10'>
    {visibleItems < load22.length && (
 <button className=' font-semibold
 text-2xl  border-2 
  border-orange-600 p-2 text-orange-600 rounded-md
  ' onClick={handleLoadMore1}>
                        More Service
                    </button>
                )}
    </div>

        </div>
    );
};

export default product;