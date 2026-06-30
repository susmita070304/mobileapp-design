import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './Landingpage';
import CreateAccountPage from './Createaccountpage'; 
import SigninPage from './Signinpage';
import Loggedin from "./Loggedin";

function App() {
  return (

    <div className="min-h-screen bg-zinc-900 md:flex md:items-center md:justify-center">
      
   
      <div className="w-[375px] h-[812px] bg-white relative overflow-hidden shadow-2xl md:rounded-[32px] md:border-[8px] md:border-zinc-800 flex flex-col">
        
      
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