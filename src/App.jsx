import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { InfoProvider } from "./ContextProvider/Context";
import Loading from "./Loader/Loading";
import { IoIosLogOut } from "react-icons/io";
import "animate.css";
import "./App.css";
import { IoBagAdd, IoBagAddOutline, IoSettingsSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { PiLockersFill } from "react-icons/pi";

export default function App() {
  const navigate = useNavigate();
  const [dropdown, setDropDown] = useState(false);
  const [dashBoard, setDash] = useState(false);
  const { user, load, logoutUser } = useContext(InfoProvider);

  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <>
      <header className="w-full h-[80px] bg-navBarImg bg-no-repeat bg-cover">
        <nav className="w-[1200px] h-full mx-auto flex flex-row justify-center items-center">
          <div className="w-[20%] h-full flex flex-row items-center">
            <div className="w-[80px] h-[50px]">
              <img
                src="https://i.postimg.cc/yxkKqRXY/vecteezy-dream-butterfly-png-ai-generative-24499854.png"
                alt="logoImg"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[120px]">
              <img
                src="https://i.postimg.cc/13WLSXX8/0000.png"
                alt="logoText"
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="w-[60%]">
            <ul className="h-full w-full flex flex-row justify-between capitalize font-semibold font-mono text-white text-xl">
              <li>
                <NavLink to="/home">home</NavLink>
              </li>
              <li>
                <NavLink to="/service">service</NavLink>
              </li>
              {load ? (
                <div>
                  <Loading />
                </div>
              ) : (
                <li>
                  {user ? (
                    <span
                      className="hover:cursor-pointer"
                      onClick={() => {
                        setDash(!dashBoard);
                      }}
                    >
                      Dashboard
                    </span>
                  ) : (
                    <NavLink to="/login">login</NavLink>
                  )}
                </li>
              )}
            </ul>
          </div>
          <div className="w-[20%] flex flex-row justify-around">
            {load ? (
              <div>
                <Loading />
              </div>
            ) : (
              <div className="h-[40px] w-[40px] rounded-full">
                {user ? (
                  <img
                    src={user?.photoURL}
                    className="h-full w-full object-cover rounded-full hover:cursor-pointer"
                    onClick={() => {
                      setDropDown(!dropdown);
                    }}
                  />
                ) : (
                  ""
                )}
                <ul
                  className={`z-[1] w-40 mt-5 ${dropdown ? "block" : "hidden"}`}
                >
                  <li
                    className={`font-semibold font-mono text-bg capitalize bg-success text-white px-3 py-3 rounded-sm ${
                      dropdown
                        ? "animate__animated animate__flipInX oneFlipInX"
                        : "animate__animated animate__flipOutX"
                    }`}
                  >
                    {user?.displayName}
                  </li>
                  <li
                    className={`${
                      dropdown
                        ? "animate__animated animate__flipInX twoFlipInX"
                        : "animate__animated animate__flipOutX"
                    }`}
                    onClick={() => {
                      setDropDown(!dropdown);
                    }}
                  >
                    <button
                      className="capitalize flex flex-row items-center btn bg-black text-white mt-2 py-2 px-2 hover:text-black"
                      onClick={() => {
                        logoutUser();
                      }}
                    >
                      logout
                      <IoIosLogOut className="ml-3 text-xl" />
                    </button>
                  </li>
                </ul>
              </div>
            )}
            <div>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </nav>

        <ul className={`ml-[69%] mt-2 ${dashBoard?"block":"hidden"} z-10`}>
          <NavLink to="/addService" className={`shadow-lg shadow-blue-100 py-3 pl-4 w-[50%] rounded-lg text-lg font-serif font-semibold text-gray-600 capitalize block transition-all duration-500 hover:bg-blue-400 hover:text-white hover:cursor-pointer ${dashBoard?"animate__animated animate__flipInX dashBoard1":"animate__animated animate__flipOutX"} flex flex-row items-center justify-between`} onClick={()=>{setDash(!dashBoard)}}>
            Add Service
            <IoBagAdd className="text-xl mr-4"/>
          </NavLink>
          <NavLink to="/manage" className={`my-5 shadow-lg shadow-blue-100 py-3 pl-4 w-[50%] rounded-lg text-lg font-serif font-semibold text-gray-600 capitalize block transition-all duration-500 ease-linear hover:bg-blue-400 hover:text-white hover:cursor-pointer ${dashBoard?"animate__animated animate__flipInX dashBoard2":"animate__animated animate__flipOutX"} flex flex-row items-center justify-between`} onClick={()=>{setDash(!dashBoard)}}>
            Manage Service
            <IoSettingsSharp className="text-xl mr-4" />
          </NavLink>
          <NavLink to="/todo" className={`shadow-lg shadow-blue-100 py-3 pl-4 w-[50%] rounded-lg text-lg font-serif font-semibold text-gray-600 capitalize block transition-all duration-500 hover:bg-blue-400 hover:text-white hover:cursor-pointer ${dashBoard?"animate__animated animate__flipInX dashBoard3":"animate__animated animate__flipOutX"} flex flex-row items-center justify-between`} onClick={()=>{setDash(!dashBoard)}}>
            Service To Do
            <MdManageAccounts className="text-xl mr-4" />
          </NavLink>

          <NavLink to="/booked" className={`shadow-lg mt-5 shadow-blue-100 py-3 pl-4 w-[50%] rounded-lg text-lg font-serif font-semibold text-gray-600 capitalize block transition-all duration-500 hover:bg-blue-400 hover:text-white hover:cursor-pointer ${dashBoard?"animate__animated animate__flipInX dashBoard4":"animate__animated animate__flipOutX"} flex flex-row items-center justify-between`} onClick={()=>{setDash(!dashBoard)}}>
            Booked services
            <PiLockersFill className="text-xl mr-4"/>
          </NavLink>
        </ul>
      </header>
      <main className="w-full">
        <Outlet />
      </main>
    </>
  );
}
