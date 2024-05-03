import { Link } from "react-router-dom";

const mainproduct = ({items}) => {
    const {id__, name, imgurl, price} = items;

    return (
        <div className="card w-full hover:bg-fuchsia-200 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <img src={imgurl} alt="" />
  </figure>
  <div className="card-body  ">
    <h2 className="text-2xl  card-title">{name}</h2>
<div className="justify-between flex">
<p className="text-xl text-red-500 font-semibold">Price:{price}</p>
<Link to={`/detailsProduct/:${id__}`} >
<img src="/img/icons/Frame (23).png" alt="" />
</Link>
</div>

  </div>
</div>
        // <div>
        //     babes i am runing
        //     <h1>{name}</h1>
        //     <Link to="/ferdous">
        //     <button className="btn">pp</button>
        //     </Link>
        // </div>
    );
};

export default mainproduct;