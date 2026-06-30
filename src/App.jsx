import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './Landingpage';
import CreateAccountPage from './Createaccountpage'; 
import SigninPage from './Signinpage';
import Loggedin from "./Loggedin";

function App() {
  return (

    <div className="min-h-screen md:bg-zinc-900 md:flex md:items-center md:justify-center">
      
   
      <div className="w-full min-h-screen bg-white relative overflow-hidden flex flex-col md:w-[375px] md:h-[812px] md:min-h-0 md:rounded-[32px] md:border-[8px] md:border-zinc-800 md:shadow-2xl">
        
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/loggedin" element={<Loggedin />} />
          </Routes>
        </BrowserRouter>

      </div> 
    </div> 
  );
}

export default App;