import Aboutus from "./aboutus";
import Service from "./service";
import Product from "./product";
import Meetteam from "./meetteam";
import Coustomer from "./coustomer";
import { Link } from "react-router-dom";
const home = () => {
    return (
<div className="mb-20">
<div className=" mt-10 mb-20 ">
<div className="carousel h-[700px] w-full rounded-lg">
  <div id="slide1" className="carousel-item relative w-full">
    <img 
    src="/public/img/images/banner/1.jpg"
     className="w-full " />
    <div className="absolute   flex
    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]
    transform h-full left-0 right-0 bottom-0 ">
        <div className="mt-[10%] space-y-7 ml-5 md:ml-20 lg:ml-20">
            <h3 className="text-white text-4xl md:text-6xl lg:text-6xl font-bold w-[300px] lg:w-[400px]  ">Affordable  Price For
             Car Servicing</h3>
            <p className="text-gray-200 text-xl" >There are many variations of passages of  available, but the majority 
                have suffered alteration in some form</p>
            <button className="btn bg-orange-500 text-xl text-white border-none p-2 ">Discover More</button>
            <button className=" ml-4 border-2 border-white text-xl text-white   p-3 rounded-md ">Latest Project</button>
        </div>

     <div className="mt-[40%] ml-[20%]  flex gap-6 mr-10">
     <a href="#slide6" className="btn hover:bg-orange-600 btn-circle">❮</a> 
      <a href="#slide2" className="btn bg-orange-600 border-none btn-circle">❯</a>
     </div>
    </div>

  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img 
    src="/public/img/images/banner/2.jpg"
     className="w-full object-cover bg-center" />
    <div className="absolute    flex
    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]
    transform h-full left-0 right-0 bottom-0 top-[]">
                <div className="mt-[10%] space-y-7 ml-20">
            <h3 className="text-white text-6xl font-bold w-[400px]  ">Affordable  Price For
             Car Servicing</h3>
            <p className="text-gray-200 text-xl" >There are many variations of passages of  available, but the majority 
                have suffered alteration in some form</p>
            <button className="btn bg-orange-500 text-xl text-white border-none p-2 ">Discover More</button>
            <button className=" ml-4 border-2 border-white text-xl text-white   p-3 rounded-md ">Latest Project</button>
        </div>
   <div className="mt-[40%] ml-[20%] flex gap-6 mr-10">
     <a href="#slide1" className="btn hover:bg-orange-600 btn-circle">❮</a> 
      <a href="#slide3" className="btn bg-orange-600 border-none btn-circle">❯</a>
     </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img 
    src="/public/img/images/banner/3.jpg"
     className="w-full object-cover bg-center" />
    <div className="absolute  flex
    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]
    transform h-full left-0 right-0 bottom-0 top-[]">
                <div className="mt-[10%] space-y-7 ml-20">
            <h3 className="text-white text-6xl font-bold w-[400px]  ">Affordable  Price For
             Car Servicing</h3>
            <p className="text-gray-200 text-xl" >There are many variations of passages of  available, but the majority 
                have suffered alteration in some form</p>
            <button className="btn bg-orange-500 text-xl text-white border-none p-2 ">Discover More</button>
            <button className=" ml-4 border-2 border-white text-xl text-white   p-3 rounded-md ">Latest Project</button>
        </div>
   <div className="mt-[40%] ml-[20%]  flex gap-6 mr-10">
     <a href="#slide2" className="btn hover:bg-orange-600 btn-circle">❮</a> 
      <a href="#slide4" className="btn bg-orange-600 border-none btn-circle">❯</a>
     </div>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
  <img 
    src="/public/img/images/banner/4.jpg"
     className="w-full object-cover bg-center" />
    <div className="absolute  flex
    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]
    transform h-full left-0 right-0 bottom-0 top-[]">
                <div className="mt-[10%] space-y-7 ml-20">
            <h3 className="text-white text-6xl font-bold w-[400px]  ">Affordable  Price For
             Car Servicing</h3>
            <p className="text-gray-200 text-xl" >There are many variations of passages of  available, but the majority 
                have suffered alteration in some form</p>
            <button className="btn bg-orange-500 text-xl text-white border-none p-2 ">Discover More</button>
            <button className=" ml-4 border-2 border-white text-xl text-white   p-3 rounded-md ">Latest Project</button>
        </div>
   <div className="mt-[40%] ml-[20%]  flex gap-6 mr-10">
     <a href="#slide3" className="btn hover:bg-orange-600 btn-circle">❮</a> 
      <a href="#slide5" className="btn bg-orange-600 border-none btn-circle">❯</a>
     </div>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <img 
    src="/public/img/images/banner/5.jpg"
     className="w-full object-cover bg-center" />
    <div className="absolute   flex
    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]
    transform h-full left-0 right-0 bottom-0 top-[]">
                <div className="mt-[10%] space-y-7 ml-20">
            <h3 className="text-white text-6xl font-bold w-[400px]  ">Affordable  Price For
             Car Servicing</h3>
            <p className="text-gray-200 text-xl" >There are many variations of passages of  available, but the majority 
                have suffered alteration in some form</p>
            <button className="btn bg-orange-500 text-xl text-white border-none p-2 ">Discover More</button>
            <button className=" ml-4 border-2 border-white text-xl text-white   p-3 rounded-md ">Latest Project</button>
        </div>
   <div className="mt-[40%] ml-[20%]  flex gap-6 mr-10">
     <a href="#slide4" className="btn hover:bg-orange-600 btn-circle">❮</a> 
      <a href="#slide6" className="btn bg-orange-600 border-none btn-circle">❯</a>
     </div>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
  <img 
    src="/public/img/images/banner/6.jpg"
     className="w-full object-cover bg-center" />
    <div className="absolute   flex
    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]
    transform h-full left-0 right-0 bottom-0 top-[]">
                <div className="mt-[10%] space-y-7 ml-20">
            <h3 className="text-white text-6xl font-bold w-[400px]  ">Affordable  Price For
             Car Servicing</h3>
            <p className="text-gray-200 text-xl" >There are many variations of passages of  available, but the majority 
                have suffered alteration in some form</p>
            <Link to="/discover" className="btn bg-orange-500 text-xl
             text-white border-none p-2 ">Discover More</Link>
            <Link to="/tooo"
            className=" 
            ml-4 border-2 border-white text-xl text-white  
             p-3 rounded-md ">Latest Project</Link>
        </div>
   <div className="mt-[40%] ml-[20%]  flex gap-6 mr-10">
     <a href="#slide5" className="btn hover:bg-orange-600 btn-circle">❮</a> 
      <a href="#slide1" className="btn bg-orange-600 border-none btn-circle">❯</a>
     </div>
    </div>
  </div>

</div>
    
</div>

<div className="mt-20">
<Aboutus></Aboutus>
</div>
<div className="mt-20">
<Service></Service>
</div>
<div>
  <Product></Product>
</div>
<div  className="mt-20">
  <Meetteam></Meetteam>
</div>
<div  className="mt-20">
  <Coustomer></Coustomer>
</div>

</div>
    );
};

export default home;