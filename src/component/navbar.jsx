import { Link, NavLink } from 'react-router-dom';


const navbar = () => {
    return (
        <div className="navbar bg-base-100 h-[100px] items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 space-y-4 rounded-box w-52 h-[200px]">
            <NavLink className={({isActive}) => isActive  ? 'pt-2 pl-3 pr-3 pb-2 border-4 text-2xl bg-orange-500 text-white  border-orange-600 rounded-lg' 
           : 'hover:p-2 hover:pb-2 hover:pl-3 hover:pr-3  text-2xl rounded-lg' }
             to="/">Home</NavLink>

            <NavLink className={({isActive}) => isActive  ? 'pt-2 pl-3 pr-3 pb-2 border-4 text-2xl bg-orange-500 text-white  border-orange-600 rounded-lg' 
           : 'hover:p-2 hover:pb-2 hover:pl-3 hover:pr-3 text-2xl rounded-lg' }
            to="/serviceses">Services</NavLink>

            <NavLink className={({isActive}) => isActive  ? 'pt-2 pl-3 pr-3 pb-2 border-4 text-2xl bg-orange-500 text-white  border-orange-600 rounded-lg' 
           : 'hover:p-2 hover:pb-2 hover:pl-3 hover:pr-3  text-2xl rounded-lg' }
            to="/contact">Contact</NavLink>
            </ul>
          </div>
          <Link>
          <img src="/public/img/icons/logo.svg" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu items-center font-semibold 
          menu-horizontal px-1 text-xl space-x-5">
           <NavLink className={({isActive}) => isActive  ? 'pt-2 pl-3 pr-3 pb-2 border-4 text-2xl bg-orange-500 text-white  border-orange-600 rounded-lg' 
           : 'hover:p-2 hover:pb-2 hover:pl-3 hover:pr-3  text-2xl rounded-lg' }
             to="/">Home</NavLink>

            <NavLink className={({isActive}) => isActive  ? 'pt-2 pl-3 pr-3 pb-2 border-4 text-2xl bg-orange-500 text-white  border-orange-600 rounded-lg' 
           : 'hover:p-2 hover:pb-2 hover:pl-3 hover:pr-3 text-2xl rounded-lg' }
            to="/serviceses">Services</NavLink>

            <NavLink className={({isActive}) => isActive  ? 'pt-2 pl-3 pr-3 pb-2 border-4 text-2xl bg-orange-500 text-white  border-orange-600 rounded-lg' 
           : 'hover:p-2 hover:pb-2 hover:pl-3 hover:pr-3  text-2xl rounded-lg' }
            to="/contact">Contact</NavLink>

          </ul>
        </div>
        <div className="navbar-end space-x-5">
            {/* <img src="/public/img/icons/Frame (21).png" alt="" />
            <img src="/public/img/icons/Frame (22).png" alt="" /> */}
          <a className="text-xl font-semibold text-orange-600 border-2 p-2 rounded-md
           border-orange-600 hover:bg-orange-400 hover:text-white
          ">Appointment</a>
        </div>
      </div>
    );
};

export default navbar;