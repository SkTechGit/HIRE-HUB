import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Office } from "../assets";
import { SignUp } from "../components";

const Auth = () => {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(true);
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  if (user.token) {
    return window.location.replace(from);
  }
  return (
<<<<<<< HEAD
    <div className='w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden'>
      {/* Decorative Elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-[#1ADFA6] opacity-5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-[#1676CC] opacity-5 rounded-full blur-3xl'></div>
      
      <div className='relative z-10 flex items-center justify-between min-h-screen'>
        {/* Left Side - Image */}
        <div className='hidden lg:flex lg:w-1/2 items-center justify-center p-8'>
          <div className='w-full max-w-lg'>
            <img src={Office} alt='Office' className='w-full h-auto object-contain drop-shadow-2xl' />
          </div>
        </div>

        {/* Right Side - SignUp Modal */}
        <div className='w-full lg:w-1/2 flex items-center justify-center p-4'>
          <SignUp open={open} setOpen={setOpen} />
        </div>
      </div>
=======
    <div className='w-full '>
      <img src={Office} alt='Office' className='object-contain ' />

      <SignUp open={open} setOpen={setOpen} />
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
    </div>
  );
};

export default Auth;
