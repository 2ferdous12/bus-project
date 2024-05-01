

const coustomer = () => {
    return (
        <div>
       <div className='text-center space-y-6'>
        <p className='text-2xl font-bold text-orange-600'>Testimonial Products</p>
        <h1 className='text-5xl font-bold '>What Customer Says</h1>
        <p className='w-[700px] mx-auto text-balance text-xl text-gray-500'>
        the majority have suffered alteration in some form, by injected humour, or randomised
         words which dont look even slightly believable.  </p>
        </div>
        <div className="mt-20">
<div className="carousel w-full">
  <div id="slide10" className="carousel-item relative w-full">
   <div className="flex items-center justify-between">

    <div className="w-[45%] p-10 mt-10 space-y-5 bg-amber-50 border-2  h-[400px] rounded-lg">
    <div>
    <p className="text-2xl font-bold">Awlad Hossain</p>
    <p className="text-xl font-semibold">Businessman</p>
    </div>
    <p className="text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or 
        randomised words which dont look even slightly believable. </p>
     <img src="/public/img/images/checkout/Group 46.png" alt="" />
    </div>


    <div className="w-[45%] p-10 mt-10 space-y-5 bg-amber-50 border-2 h-[400px] rounded-lg">
    <div>
    <p className="text-2xl font-bold">Awlad Hossain</p>
    <p className="text-xl font-semibold">Businessman</p>
    </div>
    <p className="text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or 
        randomised words which dont look even slightly believable. </p>
     <img src="/public/img/images/checkout/Group 46.png" alt="" />
    </div>
   </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide11" className="btn btn-circle">❮</a> 
      <a href="#slide11" className="btn bg-orange-500 btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide11" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide10" className="btn bg-orange-400 btn-circle">❮</a> 
      <a href="#slide10" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
        </div>
    );
};

export default coustomer;