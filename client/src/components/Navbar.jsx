import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { users } from "../utils/data";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../redux/userSlice";

function MenuList({ user, onClick }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
    window.location.replace("/");
  };

  return (
    <div>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 border border-gray-200 transition-all duration-200'>
            <div className='flex flex-col items-start'>
              <p className='text-xs font-semibold text-gray-900'>
                {user?.firstName ?? user?.name}
              </p>
              <span className='text-xs text-blue-600'>
                {user?.jobTitle ?? user?.email}
              </span>
            </div>

            <img
              src={user?.profileUrl || "https://api.dicebear.com/7.x/avataaars/svg?seed=" + user?.firstName}
              alt='user profile'
              className='w-9 h-9 rounded-full object-cover flex-shrink-0'
            />
            <BiChevronDown
              className='h-5 w-5 text-slate-600 flex-shrink-0'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-xl focus:outline-none border border-gray-200 z-50'>
            <div className='p-1'>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`${
                      user?.accountType ? "user-profile" : "company-profile"
                    }`}
                    className={`${
                      active ? "bg-blue-600 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors`}
                    onClick={onClick}
                  >
                    <CgProfile
                      className={`${
                        active ? "text-white" : "text-gray-500"
                      } mr-2 h-4 w-4 flex-shrink-0`}
                      aria-hidden='true'
                    />
                    {user?.accountType ? "User Profile" : "Company Profile"}
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleLogout()}
                    className={`${
                      active ? "bg-red-600 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors`}
                  >
                    <AiOutlineLogout
                      className={`${
                        active ? "text-white" : "text-gray-500"
                      } mr-2 h-4 w-4 flex-shrink-0`}
                      aria-hidden='true'
                    />
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
const Navbar = () => {
  const {user} = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const isSeekerAccount = user?.accountType === "seeker";
  
  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className='relative bg-[#f7fdfd] z-50'>
        <nav className='container mx-auto flex items-center justify-between p-5'>
          <div>
            <Link to='/' className='text-blue-600 font-bold text-xl'>
              HIRE<span className='text-[#1ADFA6]'>-HUB</span>
            </Link>
          </div>

          <ul className='hidden lg:flex gap-10 text-base'>
            {isSeekerAccount && (
              <>
                <li>
                  <Link to='/'>Find Job</Link>
                </li>
                <li>
                  <Link to='/companies'>Companies</Link>
                </li>
              </>
            )}
            {user?.token && (
              <>
                <li>
                  <Link to={user?.accountType === "seeker" ? "/applications" : '/upload-job'}>{user?.accountType === "seeker" ? "Applications" : "Upload Jobs"}</Link>
                </li>
                <li>
                  <Link to='/about-us'>About</Link>
                </li>
              </>
            )}
          </ul>

          <div className='hidden lg:block'>
            {!user?.token ? (
              <Link to='/'>
                <CustomButton
                  title='Sign Up / Login'
                  containerStyles='text-white py-1.5 px-5 focus:outline-none bg-[#1ADFA6] hover:text-blue-600 hover:scale-125 ease-in-out duration-300 rounded-full text-base border border-white'
                />
              </Link>
            ) : (
              <div>
                <MenuList user={user} />
              </div>
            )}
          </div>

          <button
            className='block lg:hidden text-slate-900'
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`${
            isOpen ? "absolute bg-[#f7fdfd] " : "hidden"
          } container lg:hidden flex-col pl-8 gap-3 py-5`}
        >
          {isSeekerAccount && (
            <>
              <Link to='/' onClick={handleCloseNavbar}>
                Find Job
              </Link>
              <Link to='/companies' onClick={handleCloseNavbar}>
                Companies
              </Link>
            </>
          )}
          {user?.token && (
            <>
              <Link
                onClick={handleCloseNavbar}
                to={
                  user?.accountType === "seeker" ? "applly-gistory" : "upload-job"
                }
              >
                {user?.accountType === "seeker" ? "Applications" : "Upload Job"}
              </Link>
              <Link to='/about-us' onClick={handleCloseNavbar}>
                About
              </Link>
            </>
          )}

          <div className='w-full py-10'>
            {!user?.token ? (
              <a href='/user-auth'>
                <CustomButton
                  title='Sign Up / Login'
                  containerStyles={`text-[#1ADFA6] py-1.5 px-5 focus:outline-none hover:bg-[#1ADFA6] hover:text-white rounded-full text-base border border-[#1ADFA6]`}
                />
              </a>
            ) : (
              <div>
                <MenuList user={user} onClick={handleCloseNavbar} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
