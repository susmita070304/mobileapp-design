import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Createaccountpage() {
  const navigate = useNavigate();

  const [isAgency, setIsAgency] = useState("yes");
  const [name, setName] = useState("Marry Doe");
  const [phoneNumber, setPhoneNumber] = useState("123456"); 
  const [email, setEmail] = useState("Marry Doe");
  const [password, setPassword] = useState("123456");
  const [companyName, setCompanyName] = useState("Marry Doe");
  return (
    
    <div className="w-full h-full bg-white px-5 py-8 flex flex-col justify-between box-border font-rubik select-none">
      <div className="absolute top-[40px] left-[20px] w-[188px] h-[69px] text-left">
        <h1 className="text-[28px] leading-[36px] font-medium font-rubik tracking-[0px] text-[#1D2226];">
          Create your PopX account
        </h1>
      </div>

      <div>
        <label className="absolute top-[131px] left-[34px] w-[65px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik tracking-[0px] text-[#6C25FF] z-10 bg-white">
          Full Name
          <span className="absolute top-[0px] left-[60px] w-[6px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik tracking-[0px] text-[#DD4A3D]">
            *
          </span>
        </label>

        <input
          type="text"
          defaultValue="Marry Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="absolute top-[140px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 bg-white
             text-[#1D2226] text-[13px] font-normal font-rubik tracking-[0px]
             pl-[17px] pt-[15px] pb-[13px] box-border"
        />
      </div>

      <div>
        <label className="absolute top-[200px] left-[34px] w-[95px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik tracking-[0px] text-[#6C25FF] z-10 bg-white">
          Phone Number
          <span className="absolute top-[0px] left-[89px] w-[6px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik tracking-[0px] text-[#DD4A3D]">
            *
          </span>
        </label>

        <input
          type="number"
          defaultValue="123456"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="absolute top-[209px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 bg-white
             text-[#1D2226] text-[13px] font-normal font-rubik tracking-[0px]
             pl-[17px] pt-[15px] pb-[13px] box-border"
        />
      </div>

      <div>
        <label className="absolute top-[269px] left-[34px] w-[90px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik tracking-[0px] text-[#6C25FF] z-10 bg-white">
          Email address
          <span className="absolute top-[0px] left-[84px] w-[6px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik tracking-[0px] text-[#DD4A3D]">
            *
          </span>
        </label>

        <input
          type="email"
          defaultValue="Marry Doe"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="absolute top-[278px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 bg-white
             text-[#1D2226] text-[13px] font-normal font-rubik tracking-[0px]
             pl-[17px] pt-[15px] pb-[13px] box-border"
        />
      </div>

      <div>
        <label className="absolute top-[338px] left-[34px] w-[65px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik tracking-[0px] text-[#6C25FF] z-10 bg-white">
          Password
          <span className="absolute top-[0px] left-[62px] w-[6px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik tracking-[0px] text-[#DD4A3D]">
            *
          </span>
        </label>

        <input
          type="password"
          defaultValue="Marry Doe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="absolute top-[347px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 bg-white
             text-[#1D2226] text-[13px] font-normal font-rubik tracking-[0px]
             pl-[17px] pt-[15px] pb-[13px] box-border"
        />
      </div>

      <div>
        <label className="absolute top-[407px] left-[34px] w-[94px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik tracking-[0px] text-[#6C25FF] z-10 bg-white">
          Company Name
          <span className="absolute top-[0px] left-[95px] w-[6px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik tracking-[0px] text-[#DD4A3D]">
            *
          </span>
        </label>

        <input
          type="text"
          defaultValue="Marry Doe"
           value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="absolute top-[416px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 bg-white
             text-[#1D2226] text-[13px] font-normal font-rubik tracking-[0px]
             pl-[17px] pt-[15px] pb-[13px] box-border"
        />
      </div>

      <div className="top-[474px] left-[20px] w-[132px] h-[47px]">
        <p className="absolute top-[474px] left-[20px] w-[125px] h-[15px] text-left font-normal text-[13px] leading-[17px] font-rubik tracking-[0px] opacity-100">
          Are you an Agency?
          <span className="absolute top-0 left-[120px] w-[6px] h-[15px] text-left font-normal text-[13px] leading-[17px] font-rubik tracking-[0px] text-[#DD4A3D]">
            *
          </span>
        </p>

        <div>
          <label className=" text-[14px] text-[#1D2226] cursor-pointer">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={isAgency === "yes"}
              onChange={() => setIsAgency("yes")}
              className="absolute top-[499px] left-[20px] w-[22px] h-[22px] border border-[#642AF5] opacity-100 accent-[#6C25FF] cursor-pointer "
            />
            <span className="absolute top-[502px] left-[54px] w-[23px] h-[17px] text-left font-normal text-[14px] leading-[17px] font-rubik tracking-[0px] text-[#1D2226] opacity-100">
              Yes
            </span>
          </label>

          <label className="flex items-center gap-2 text-[14px] text-[#1D2226] cursor-pointer">
            <input
              type="radio"
              name="agency"
              value="no"
              checked={isAgency === "no"}
              onChange={() => setIsAgency("no")}
              className="absolute top-[499px] left-[100px] w-[22px] h-[22px] border border-[#919191] opacity-100 accent-[#6C25FF] cursor-pointer"
            />
            <span className="absolute top-[502px] left-[134px] w-[18px] h-[17px] text-left font-normal text-[14px] leading-[17px] font-rubik tracking-[0px] text-[#1D2226] opacity-100">
              No
            </span>
          </label>
        </div>
      </div>

      <button
     onClick={(e) => {
          e.preventDefault();
          const userAccount = {
            name: name.trim(),
            phone: phoneNumber.trim(),
            email: email.trim().toLowerCase(),
            password: password.trim(),
            company: companyName.trim(),
            isAgency: isAgency
          };
          
          localStorage.setItem("registeredUser", JSON.stringify(userAccount));
        navigate("/signin");
        }}
        
        className="absolute top-[736px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] opacity-100"
      >
        <span className="top-[750px] left-[128px] w-[120px] h-[19px] text-center font-medium text-[16px] leading-[17px] font-rubik tracking-[0px] text-[#FFFFFF] opacity-100 ">
          Create Account
        </span>
      </button>
    </div>
  );
}

export default Createaccountpage;
