// Dashboard.tsx
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Dashboard = () => {
  const [isShowSideBar, setisShowSideBar] = useState(false);
  return (
    <div className="dashboard-container flex">
      <SideBar
        setisShowSideBar={setisShowSideBar}
        isShowSideBar={isShowSideBar}
      />
      <div className="content flex-1 p-4  text-white ">
        <div className="bg-whiteTransaparent h-[4.5rem] mb-[3rem] px-[1.5rem] rounded-lg justify-between flex items-center">
          <div className="flex items-center gap-[.8rem]">
            <img
              src="/image/okryptLogo.png"
              alt="okrypt logo"
              className="w-[2.5rem] h-[2.7rem] block md:hidden"
            />
            <span className="font-bold text-[1.6rem] block md:hidden">
              Okrypt
            </span>
            <span className=" text-[1.6rem] hidden md:block">Hello, Admin</span>
          </div>
          {isShowSideBar ? (
            <IoCloseSharp
              onClick={() => setisShowSideBar((state) => !state)}
              className="w-[2.5rem] h-[2.5rem] block md:hidden"
            />
          ) : (
            <FaHamburger
              onClick={() => setisShowSideBar((state) => !state)}
              className="w-[2.5rem] h-[2.5rem] block md:hidden"
            />
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
