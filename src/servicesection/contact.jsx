

const contact = () => {
    return (
        <div>
         <div className="">
            <img className="rounded-lg h-[400px] w-full" src="/public/img/images/services/4.jpg" alt="" />
         </div>

<div className="bg-gray-100 p-5 md:p-5  lg:p-20  mt-10 mb-10 rounded-md">
<form >

<div className="flex flex-col md:flex-col lg:flex-row gap-2 justify-between">
<div className="space-y-5">
<input className="h-[50px] text-xl  p-4 w-full md:w-full lg:w-[600px]" type="name"
placeholder="Service Name...." />
</div>
<div className="space-y-5">
<input className="h-[50px] text-xl mt-5 md:mt-5 lg:mt-0 p-4 w-full md:w-full lg:w-[600px]" type="name"
placeholder="Service Price...." />
</div>
</div>

<div className="flex  flex-col md:flex-col lg:flex-row gap-2  justify-between">
<div className="space-y-5">
<input className="h-[50px] text-xl mt-5 p-4 w-full md:w-full lg:w-[600px]" type="name"
placeholder="Text here...." />
</div>
<div className="space-y-5">
<input className="h-[50px] text-xl  mt-5 p-4 w-full md:w-full lg:w-[600px]" type="name"
placeholder="Service Type...." />
</div>
</div>

<textarea  className="mt-10 w-full
 text-xl p-5 rounded-lg"
placeholder="Product Discription"
name="" id="" cols="30" rows="10">


</textarea>
<button className=" h-[60px] rounded-lg mt-10
w-full text-2xl bg-orange-600 text-white
font-semibold
">Submit</button>

</form>

</div>

        </div>
    );
};

export default contact;