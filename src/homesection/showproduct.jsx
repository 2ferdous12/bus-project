

const showproduct = ({data}) => {
    const {name, imgurl, price} = data;
    return (
<div className="card  h-[100px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <div className="h-[50px]">
  <img className="" src={imgurl} alt="" />
  </div>
  </figure>
  <div className="card-body  ">
    <h2 className="text-2xl   card-title">{name}</h2>
<div className="justify-between flex ">
<p className="text-xl text-red-500 font-semibold">Price:{price}</p>
<img src="/public/img/icons/Frame (23).png" alt="" />
</div>

  </div>
</div>
    );
};

export default showproduct;