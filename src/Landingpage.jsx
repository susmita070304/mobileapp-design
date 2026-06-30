import React from "react";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute top-[549px] left-[20px] h-[33px] w-[231px]">
        <h1 className="text-[28px] leading-[17px] font-medium text-[#1D2226] text-left">
          Welcome to PopX
        </h1>
      </div>

      <p
        className="absolute top-[592px] left-[20px] w-[232px] h-[48px] text-[18px] leading-[26px] font-normal text-[#1D2226] text-left opacity-60"
        style={{ fontFamily: "Rubik, sans-serif", letterSpacing: 0 }}
      >
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="absolute top-[669px] left-[10px] right-[10px] bg-[#6C25FF] h-[46px] flex items-center justify-center rounded-[6px] cursor-pointer"  onClick={() => navigate("/create-account")} >
        <p className="text-white text-[16px] font-medium ">Create account</p>
      </div>
     
      <div 
        className="absolute top-[725px] left-[10px] right-[10px] h-[46px] bg-[#6C25FF4B] flex items-center justify-center rounded-[6px] cursor-pointer" 
        onClick={() => navigate("/signin")}
      >
        <p className="text-[#1D2226] font-rubik font-medium text-[16px] leading-[17px]">
          Already Registered? Login
        </p>
      </div>
    </>
  );
}

export default Landingpage;