import React from "react";

function Loggedin() {
  const savedUserData = localStorage.getItem("registeredUser");
  
  const user = savedUserData ? JSON.parse(savedUserData) : { email: "Marry@Gmail.Com" };

  return (
    <>
   <div className="relative w-full min-h-screen bg-white">
<div className="w-full min-h-screen bg-white">
 
      <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] overflow-hidden">
      <div className="absolute top-0 left-0 w-[375px] h-[68px] bg-white bg-no-repeat box-border shadow-[0_3px_6px_rgba(0,0,0,0.027)] opacity-100">
        <p className="absolute top-[27px] left-[15px] w-[146px] h-[22px] text-left font-rubik font-normal text-[18px] leading-[21px] tracking-[0px] text-[#1D2226] capitalize opacity-100">
          Account Settings
        </p>
      </div>

      {/* Profile Image Frame */}
      <div className="absolute top-[98px] left-[20px] w-[76px] h-[76px] rounded-full bg-transparent bg-no-repeat box-border opacity-100">
        <img 
          src="/Ellipse_114.png" 
          alt="Profile" 
          className="w-full h-full rounded-full object-cover"
        />
        
      </div>
      
         <img 
          src="/Group_1585.png" 
          alt="Camera" 
          className="absolute top-[147px] left-[79px] w-[21px] h-[23px] bg-[0%_0%] bg-no-repeat bg-origin-padding opacity-100 z-10"
        />
      

     
      <div className="absolute top-[112px] left-[111px] flex flex-col font-rubik">
        
        <p className=" top-[98px] left-[116px] w-[150px] h-[18px] text-left font-rubik font-medium text-[15px] leading-[19px] tracking-[0px] text-[#1D2226] capitalize opacity-100">
          {user.name || "Marry Doe"}
        </p>
        <p className=" top-[122px] left-[116px] w-[118px] h-[17px] text-left font-rubik font-normal text-[14px] leading-[19px] tracking-[0px] text-[#1D2226] capitalize opacity-100">
          {user.email}
        </p>
      </div>

      <div>
        <p className="absolute top-[204px] left-[20px] w-[337px] h-[63px] text-left font-rubik font-normal text-[14px] leading-[22px] tracking-[0px] text-[#1D2226] capitalize opacity-100">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
      <div className="absolute top-[290px] w-[400px] border-b-2 border-dashed border-gray-300" />
      <div className="absolute top-[750px] w-[400px] border-b-2 border-dashed border-gray-300" />
      </div>
      
</div>
</div>
    </>
  );
}

export default Loggedin;