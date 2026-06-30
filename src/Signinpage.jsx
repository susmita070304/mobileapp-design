import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateAndLogin } from "./authManage";

function Signinpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); 

    
    const result = validateAndLogin(email, password);

    if (result.success) {
   
      navigate("/loggedin");
    } else {
      
      navigate("/create-account");
    }
  };

  return (
    <>   <div className="relative w-full min-h-screen bg-white">
      {error && (
        <div className="absolute top-[10px] left-[20px] w-[335px] text-red-500 font-rubik text-sm z-50">
          {error}
        </div>
      )}
      <div>
        <h1 className="absolute top-[40px] left-[20px] w-[188px] h-[69px] text-left font-rubik text-[28px] font-medium leading-[36px] tracking-normal text-[#1D2226] opacity-100">
          Signin to your PopX account
        </h1>
        <span class="absolute top-[123px] left-[20px] w-[232px] h-[48px] text-left font-rubik text-[18px] font-normal leading-[26px] tracking-normal text-[#1D2226] opacity-60">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>

      <div>
        <label className="absolute top-[195px] left-[34px] w-[85px] h-[15px] text-left font-rubik text-[13px] font-normal leading-[17px] tracking-normal text-[#6C25FF] opacity-100 bg-white z-10">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="absolute top-[204px] left-[10px] right-[10px] h-[40px] border border-solid border-[#CBCBCB] rounded-[6px] opacity-100 placeholder:text-left placeholder:font-rubik placeholder:text-[14px] placeholder:font-normal placeholder:pl-[16px] placeholder:leading-[17px] placeholder:tracking-normal placeholder:text-[#919191] placeholder:opacity-100"
        ></input>
      </div>

      <div>
        <label className="absolute top-[258px] left-[34px] w-[59px] h-[15px] text-left font-rubik text-[13px] font-normal leading-[17px] tracking-normal text-[#6C25FF] opacity-100 bg-white z-10">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="absolute top-[267px] left-[10px] right-[10px] h-[40px] border border-solid border-[#CBCBCB] rounded-[6px] opacity-100 placeholder:text-left placeholder:font-rubik placeholder:text-[14px] placeholder:font-normal placeholder:pl-[16px] placeholder:leading-[17px] placeholder:tracking-normal placeholder:text-[#919191] placeholder:opacity-100"
        ></input>
      </div>

      <button
        onClick={handleLogin}
        type="submit"
        className="absolute cursor-pointer top-[321px] left-[10px] right-[10px] h-[46px] bg-[#CBCBCB] rounded-[6px] opacity-100 flex items-center justify-center text-center font-rubik text-[16px] font-medium leading-[17px] tracking-normal text-white"
      >
        Login
      </button>
      </div>
    </>
  );
}

export default Signinpage;
