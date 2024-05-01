import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
const route = () => {
    return (
        <div >
    <div>
    <Navbar></Navbar>
    </div>
    <Outlet></Outlet>
    <Footer></Footer>
   </div>
    );
};

export default route;