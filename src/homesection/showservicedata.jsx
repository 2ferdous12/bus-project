import { Link, NavLink } from "react-router-dom";


const showservicedata = ({data}) => {
    const {id, name, imgurl, price} = data;
    return (
<div className="card w-full bg-base-100 hover:bg-fuchsia-100 shadow-xl">
  <figure className="px-10 pt-10">
  <img src={imgurl} alt="" />
  </figure>
  <div className="card-body  ">
    <h2 className="text-2xl  card-title">{name}</h2>
<div className="justify-between flex">
<p className="text-xl text-red-500 font-semibold">Price:{price}</p>
<Link to={`/detailsService/:${id}`} >
<img src="/img/icons/Frame (23).png" alt="" />
</Link>
</div>

  </div>
</div>
    );
};

export default showservicedata;