import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import CustomButton from "./CustomButton";
import { popularSearch } from "../utils/data";
import { HeroImage } from "../assets";
import { BiFontSize } from "react-icons/bi";

const SearchInput = ({ placeholder, icon, value, setValue, styles }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clearInput = () => setValue("");

  return (
<<<<<<< HEAD
    <div className={`flex md:w-auto items-center flex-1 ${styles}`}>
      {icon && <span className='text-blue-600 text-lg lg:text-xl mr-2'>{icon}</span>}
=======
    <div className={`flex md:w-1/2 items-center ${styles}`}>
      {icon}
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89

      <input
        value={value}
        onChange={(e) => handleChange(e)}
        type='text'
<<<<<<< HEAD
        className='w-full p-1.5 lg:p-2 outline-none bg-transparent text-sm lg:text-base text-gray-800 placeholder-gray-400'
        placeholder={placeholder}
      />

      {value && (
        <AiOutlineCloseCircle
          className='text-gray-400 text-lg cursor-pointer hover:text-gray-600 transition'
          onClick={clearInput}
        />
      )}
=======
        className='w-full md:w-60 p-1 outline-none bg-transparent text-base'
        placeholder={placeholder}
      />

      <AiOutlineCloseCircle
        className='hidden md:flex text-gray-600 text-xl cursor-pointer'
        onClick={clearInput}
      />
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
    </div>
  );
};

const Header = ({
  title,
  type,
  handleClick,
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
}) => {
  return (
<<<<<<< HEAD
    <div className='bg-gradient-to-b from-blue-50 to-[#f7fdfd]'>
      <div
        className={`container mx-auto px-4 lg:px-6 ${
          type ? "min-h-[520px] lg:min-h-[550px]" : "min-h-[300px] lg:min-h-[350px]"
        } flex items-center relative`}
      >
        <div className='p-6 lg:p-8 z-10 w-full lg:w-2/5 flex flex-col justify-center h-full'>
          <div className='mb-6 lg:mb-8'>
            <h1 className='text-left text-gray-900 font-bold text-2xl sm:text-3xl lg:text-4xl drop-shadow-lg leading-snug'>{title}</h1>
          </div>

          <div className='h-14 lg:h-16 flex items-center justify-between gap-2 lg:gap-3 bg-white px-3 lg:px-5 py-2 lg:py-3 shadow-xl rounded-2xl border-2 border-blue-100 hover:shadow-2xl transition-all duration-300'>
            <SearchInput
              placeholder='Job Title or Keywords'
              icon={<AiOutlineSearch className='text-blue-600 text-lg lg:text-xl' />}
              value={searchQuery}
              setValue={setSearchQuery}
            />
            <div className='hidden md:block h-6 w-[1.5px] bg-gray-300'></div>
            <SearchInput
              placeholder='Add Country or City'
              icon={<CiLocationOn className='text-blue-600 text-lg lg:text-xl' />}
=======
    <div className='bg-[#f7fdfd]'>
      <div
        className={`container mx-auto px-5 ${
          type ? "h-[500px]" : "h-[350px]"
        } flex items-center relative`}
      >
        <div className='p-10 z-10'>
          <div className='mb-8'>
            <p className='mr-[300px] text-center text-black-700 font-bold text-4xl'>{title}</p>
          </div>

          <div className='h-[60px] w-[70%] flex items-center justify-around bg-white px-2 md:px-5 py-2 md:py-6 shadow-2xl rounded-full'>
            <SearchInput
              placeholder='Job Title or Keywords'
              icon={<AiOutlineSearch className='text-gray-600 text-xl' />}
              value={searchQuery}
              setValue={setSearchQuery}
            />
            <SearchInput
              placeholder='Add Country or City'
              icon={<CiLocationOn className='text-gray-600 text-xl' />}
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
              value={location}
              setValue={setLocation}
              styles={"hidden md:flex"}
            />

<<<<<<< HEAD
            <button
              onClick={handleClick}
              className='ml-2 lg:ml-3 text-white font-semibold py-2 px-5 lg:py-2.5 lg:px-7 focus:outline-none bg-gradient-to-r from-[#1ADFA6] to-green-500 hover:from-green-500 hover:to-[#1ADFA6] rounded-xl text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 whitespace-nowrap'
            >
              🔍 Search
            </button>
          </div>

          {type && (
            <div className='mt-6 flex flex-wrap gap-2 lg:gap-3 md:py-0'>
              {popularSearch.map((search, index) => (
                <span
                  key={index}
                  className='bg-gradient-to-r from-[#1ADFA6] to-green-400 text-white py-1.5 lg:py-2 px-3 lg:px-4 hover:scale-110 ease-in-out duration-200 rounded-full text-xs lg:text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap'
=======
            <div>
              <CustomButton
                onClick={handleClick}
                title='Search'
                containerStyles={
                  "text-white py-2 md:px-3 focus:outline-none bg-[#1ADFA6] hover:scale-125 duration-500 ease-in-out rounded-full md:rounded-md text-sm md:text-base"
                }
              />
            </div>
          </div>

          {type && (
            <div className='w-full lg:1/2 flex flex-wrap md:gap-5 md:py-10'>
              {popularSearch.map((search, index) => (
                <span
                  key={index}
                  className='bg-[#1ADFA6] text-black py-1 px-2 hover:scale-125 ease-in-out duration-200 rounded-full text-sm md:text-base'
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
                >
                  {search}
                </span>
              ))}
            </div>
          )}
        </div>

<<<<<<< HEAD
        <div className='hidden lg:flex w-3/5 absolute right-0 top-0 h-full items-center justify-end pr-8'>
          <img src={HeroImage} className='object-contain h-full max-h-[500px] drop-shadow-xl' />
=======
        <div className='w-1/3  mr-[120px] absolute top-24 md:-top-6 lg:-top-14 right-16 2xl:right-[18rem]'>
          <img src={HeroImage} className='object-contain h-[22pc]' />
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
        </div>
      </div>
    </div>
  );
};

export default Header;
