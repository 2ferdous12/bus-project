import { Link } from 'react-router-dom';


const navbar = () => {
    return (
        <div className="navbar bg-base-100 h-[100px] items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
            </ul>
          </div>
          <Link>
          <img src="/public/img/icons/logo.svg" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-semibold 
          menu-horizontal px-1 text-xl space-x-2">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end space-x-5">
            <img src="/public/img/icons/Frame (21).png" alt="" />
            <img src="/public/img/icons/Frame (22).png" alt="" />
          <a className="text-xl font-semibold text-orange-600 border-2 p-2 rounded-md
           border-orange-600 hover:bg-orange-400 hover:text-white
          ">Appointment</a>
        </div>
      </div>
    );
};

export default navbar;