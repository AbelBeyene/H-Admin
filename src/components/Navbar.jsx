/* eslint-disable no-unused-vars */
import { useState,useHistory } from "react";

import { Link,useLocation } from "react-router-dom";
import Logout from "../pages/Logout";
import logo from '../assets/logo.png';
import user from '../assets/User.png';
import control from '../assets/control.png';
import dash from '../assets/dashb.png';
import settingIcon from '../assets/Setting.png';
import folderIcon from '../assets/Folder.png';



const NavBar = ({children}) => {
const location =useLocation();
  // const history = useHistory();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  
  const handleLogout = () => {
    window.location.href = "/";
    // yo Man Your logout logic here (e.g., call API, remove user data from state)
      // history.push("/Login")
    };

  const handleConfirmLogout = () => {
    handleLogout();
    setShowLogoutConfirmation(false);
  };
  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: dash, path:"/dashboard" },
    { title: "Export", src: folderIcon, path:"/export" },
    { title: "Setting", src: settingIcon ,path:"/setting"},
    // { title: "Schedule ", src: "Calendar" },
    // { title: "Search", src: "Search" },
    // { title: "Analytics", src: "Chart" },
    // { title: "Files ", src: "Folder", gap: true },
   
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-50" : "w-24 "
        } bg-dark-purple h-screen p-4 ml-1 fixed   pt-8  duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-5 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
           HULUM Admin
          </h1>
        </div>
        <ul className="pt-4  ">
          {Menus.map((Menu, index) => (
            <Link to={Menu.path} key={index}>
            <li 
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center 
              ${Menu.gap ? "mt-9" : "mt-2"} ${location.pathname==Menu.path?"bg-light-white":""
              } `}
            >
              {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200 pl-2`}>
                {Menu.title}
              </span>
            </li>
            </Link>


          ))}


           <div className="logout-button-container">
    <button
      className="flex mt-72 mx-auto rounded-md p-2 cursor-pointer hover:bg-red-500 text-gray-300 text-sm items-center"
      onClick={() => setShowLogoutConfirmation(true)}
    >
     <img src={user} />
              <span className={`${!open && "hidden"} origin-left duration-200 pl-2`}>
                 Logout
               </span>
    </button>
    {showLogoutConfirmation && (
      <Logout
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    )}
  </div>
        </ul>
      </div>
      <div className={`h-screen flex-1 duration-300  p-7 ${open?"ml-52":"ml-20"}`}>

            {children}
      </div>
    </div>
  );
  
};
export default NavBar;
