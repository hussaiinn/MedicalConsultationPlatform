import React from "react";
import style from "@styles/adminPage.module.css";
import Image from "next/image";
// import admin from "@public/images/admin.png";

const Sidebar = () => {
  return (
    <div className=" bg-[#52aca3] h-screen w-[10%] lg:w-1/6 ">
      <div className="container flex gap-y-4">
        <Image
          src="/images/admin.png"
          width={55}
          height={30}
          alt="Admin"
          className=" rounded-full mt-3"
        />
        <span className="mt-4 ml-3 font-bold text-[24px]">DocCare</span>
      </div>
      <div
        className={`${style.admin} container flex  justify-center mt-8 ml-8 border-t-2 w-[72%]`}
      >
        <span className="mt-2 text-white text-[24px] font-semibold">
          Dashboard
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
