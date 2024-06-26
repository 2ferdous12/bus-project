import { Link } from "react-router-dom";


const aboutus = () => {
    return (
        <div className='flex p-3 flex-col md:flex-row lg:flex-row  gap-10 md:justify-between lg:justify-between'>
  <div className='relative w-[350px] md:w-[40%] lg:w-[40%]'>
        <img className='w-full h-[400px]' src="/public/img/images/about_us/person.jpg" alt="" />
<div className='w-[350px] absolute top-[50%] md:top-[30%] lg:top-[30%] md:left-[40%] lg:left-[60%]'>
<img className='border-8 
 border-white  h-[350px]' 
 src="/public/img/images/about_us/parts.jpg" alt="" />
</div>
        </div>

 <div className=' w-[90%] md:w-[40%] lg:w-[40%] mt-[120px] md:mt-[0px] lg:mt-[120px]   space-y-8'>
<p className='text-xl font-bold text-orange-500'>About us</p>
<h3 className='text-3xl md:text-5xl lg:text-5xl font-bold '>We are qualified <br /> & of experience  in <br />this field</h3>
<p className='text-xl text-gray-500 text-balance'>There are many variations of passages of Lorem Ipsum 
 available, but the majority have suffered alteration in some  form, by
 injected humour, or randomised words which dont  look even slightly believable. </p>
<p className='text-balance text-xl text-gray-500'> the majority have suffered alteration in some form,by injected 
 humour, or randomised words which dont look even slightly
 believable. </p>
<Link
 to="/moreinfo"
className='btn bg-orange-600 text-xl text-white'>Get More Info</Link>
        </div>
        </div>
    );
};

export default aboutus;