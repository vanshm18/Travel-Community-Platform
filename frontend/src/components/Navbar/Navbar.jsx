import { FaRoute } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { RiBrain4Line } from "react-icons/ri";

import { Link } from "react-router-dom"
import "./Navbar.css";
import logo from "../../assets/new-logo-black.png";

const Navbar = () => {
  return (
    <nav className="h-14 sm:h-14 md:h-16 bg-white flex justify-between md:px-4 items-center text-black font-medium">

        {/* Logo */}
        <div className="w-48 md:w-60 h-full ml-1 md:ml-0">
          <img
            src={logo}
            className="w-full h-full object-contain object-left"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex justify-evenly w-full text-xs min-[900px]:text-base" >
          <a href="#" className="hover:text-blue-800">
            Plan with AI
            <RiBrain4Line className="scale-110"/>
          </a>
          <a href="#" className="hover:text-blue-800">
            Explore
            <RiCompassDiscoverLine className="scale-110"/>
          </a>
          <a href="#" className="hover:text-blue-800">
            Communities
            <FaUsers/>
          </a>
          <a href="#" className="hover:text-blue-800">
            Track My Journey
            <FaRoute className="scale-90"/>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-evenly w-full sm:hidden">
          <RiBrain4Line className="scale-125"/>
          <RiCompassDiscoverLine className="scale-125"/>
          <FaUsers className="scale-110"/>
          <FaRoute/>
        </div>

        {/* Sign In */}      
        <div className="flex w-48 justify-center mr-4">
          <Link to = {"/sign-in"}>
            <button className="h-8 md:h-9 flex items-center text-xs sm:text-sm px-4 py-2 font-medium rounded-lg border bg-green-500 hover:bg-green-400">
              Sign in
            </button>
          </Link>
        </div>
       

        <div className="w-16">
          
        </div>
    </nav>
  );
};

export default Navbar;
