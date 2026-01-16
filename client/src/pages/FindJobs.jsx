import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
<<<<<<< HEAD
import { useSelector } from "react-redux";

import Header from "../components/Header";
import { experience, jobTypes, jobs } from "../utils/data";
import { CustomButton, JobCard, ListBox, Loading, ResumeUploadFilter } from "../components";
import { apiRequest, updateURL } from "../utils";

const FindJobs = () => {
  const { user } = useSelector((state) => state.user);
  
=======

import Header from "../components/Header";
import { experience, jobTypes, jobs } from "../utils/data";
import { CustomButton, JobCard, ListBox, Loading } from "../components";
import { apiRequest, updateURL } from "../utils";

const FindJobs = () => {
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordCount, setRecordCount] = useState(0);
  const [data, setData] = useState([]);
<<<<<<< HEAD
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [showRecommended, setShowRecommended] = useState(false);
  const [matchedResume, setMatchedResume] = useState([]);
=======
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89

  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [filterJobTypes, setFilterJobTypes] = useState([]);
  const [filterExp, setFilterExp] = useState([]);
  const [expVal, setExpVal] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const fetchJobs = async() => {
    setIsFetching(true);
      const newURL = updateURL({
        pageNum: page,
        query: searchQuery,
        cmpLoc: jobLocation,
        sort: sort,
        navigate: navigate,
        location: location,
        jType: filterJobTypes,
        exp: filterExp,
      });

      try {
        const res = await apiRequest({
          url: "/jobs" + newURL,
          method: "GET",
        });

          setNumPage(res?.numOfPage);
          setRecordCount(res?.totalJobs);
          setData(res?.data);

          setIsFetching(false);

      } catch (error) {}
  };
<<<<<<< HEAD

  const fetchRecommendedJobs = async () => {
    try {
      const res = await apiRequest({
        url: "/jobs/matched-jobs",
        method: "POST",
        token: user?.token,
      });

      if (res?.success) {
        setRecommendedJobs(res?.data || []);
        setShowRecommended(true);
      }
    } catch (error) {
      console.log("Error fetching recommended jobs:", error);
    }
  };

=======
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
  const filterJobs = (val) => {
    if (filterJobTypes?.includes(val)) {
      setFilterJobTypes(filterJobTypes.filter((el) => el != val));
    } else {
      setFilterJobTypes([...filterJobTypes, val]);
    }
  };

  const filterExperience = async (e) => {
    setFilterExp(e);
  };

    const handleSearchSubmit = async (e) => {
      e.preventDefault(); 
      await fetchJobs();
    };

    const handleShowMore = async (e) => {
      e.preventDefault();
      setPage((prev) => prev + 1);
    };

  useEffect(() => {
    if(expVal.length > 0){
      let newExpVal = [];

      expVal?.map((el) => {
        const newEl = el?.split("-");
        newExpVal.push(Number(newExpVal[0]), Number(newEl[1]))
      });

      newExpVal?.sort((a,b) => a-b);
      setFilterExp(`${newExpVal[0]}-${newExpVal[newExpVal?.length]}`)
    }
  },[expVal]);

    useEffect(() => {
      fetchJobs();
<<<<<<< HEAD
      if (user?.token) {
        fetchRecommendedJobs();
      }
=======
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
    },[sort, filterJobTypes, filterExp, page]);

  return (
    <div>
      <Header
        title='Find Your Dream Job with Ease'
        type='home'
        handleClick={handleSearchSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={jobLocation}
        setLocation={setJobLocation}
      />

<<<<<<< HEAD
      <div className='container mx-auto w-full flex gap-6 lg:gap-8 2xl:gap-10 px-4 lg:px-6 py-6 md:py-8 bg-[#f7fdfd]'>
        <div className='hidden lg:flex flex-col w-full lg:w-1/5 h-fit bg-white rounded-lg shadow-md p-6 sticky top-20'>
          <p className='text-lg font-bold text-gray-900 mb-6'>🔍 Filter Search</p>

          <div className='py-4 border-b border-gray-200'>
            <div className='flex justify-between items-center mb-4'>
              <p className='flex items-center gap-2 font-semibold text-gray-800'>
                <BiBriefcaseAlt2 className='text-lg' />
=======
      <div className='container mx-auto flex gap-6 2xl:gap-10 md:px-5 py-0 md:py-6 bg-[#f7fdfd]'>
        <div className='hidden md:flex flex-col w-1/6 h-fit bg-white shadow-sm'>
          <p className='text-lg font-semibold text-slate-600'>Filter Search</p>

          <div className='py-2'>
            <div className='flex justify-between mb-3'>
              <p className='flex items-center gap-2 font-semibold'>
                <BiBriefcaseAlt2 />
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
                Job Type
              </p>

              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>

<<<<<<< HEAD
            <div className='flex flex-col gap-3'>
              {jobTypes.map((jtype, index) => (
                <div key={index} className='flex items-center gap-2 text-sm lg:text-base'>
                  <input
                    type='checkbox'
                    value={jtype}
                    className='w-4 h-4 cursor-pointer'
                    onChange={(e) => filterJobs(e.target.value)}
                  />
                  <span className='text-gray-700'>{jtype}</span>
=======
            <div className='flex flex-col gap-2'>
              {jobTypes.map((jtype, index) => (
                <div key={index} className='flex gap-2 text-sm md:text-base '>
                  <input
                    type='checkbox'
                    value={jtype}
                    className='w-4 h-4'
                    onChange={(e) => filterJobs(e.target.value)}
                  />
                  <span>{jtype}</span>
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          <div className='py-4'>
            <div className='flex justify-between items-center mb-4'>
              <p className='flex items-center gap-2 font-semibold text-gray-800'>
                <BsStars className='text-lg' />
=======
          <div className='py-2 mt-4'>
            <div className='flex justify-between mb-3'>
              <p className='flex items-center gap-2 font-semibold'>
                <BsStars />
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
                Experience
              </p>

              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>

<<<<<<< HEAD
            <div className='flex flex-col gap-3'>
              {experience.map((exp) => (
                <div key={exp.title} className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    value={exp?.value}
                    className='w-4 h-4 cursor-pointer'
                    onChange={(e) => filterExperience(e.target.value)}
                  />
                  <span className='text-gray-700 text-sm lg:text-base'>{exp.title}</span>
=======
            <div className='flex flex-col gap-2'>
              {experience.map((exp) => (
                <div key={exp.title} className='flex gap-3'>
                  <input
                    type='checkbox'
                    value={exp?.value}
                    className='w-4 h-4'
                    onChange={(e) => filterExperience(e.target.value)}
                  />
                  <span>{exp.title}</span>
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
                </div>
              ))}
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className='w-full lg:w-4/5 px-0'>
          {/* Resume Upload Filter Section */}
          {user?.token && (
            <ResumeUploadFilter user={user} onJobsMatched={setMatchedResume} />
          )}

          {/* Matched Resume Jobs Section */}
          {matchedResume.length > 0 && (
            <div className='mb-8 bg-white rounded-xl p-6 lg:p-8 shadow-md border-l-4 border-green-500'>
              <div className='flex items-center gap-3 mb-6'>
                <BsStars className='text-green-600 text-2xl' />
                <h3 className='text-xl lg:text-2xl font-bold text-green-600'>
                  ✨ Jobs Matching Your Resume
                </h3>
              </div>
              <p className='text-sm lg:text-base text-gray-600 mb-6 leading-relaxed'>
                Based on your uploaded resume, here are the most relevant opportunities for you:
              </p>
              
              <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6'>
                {matchedResume.map((job, index) => {
                  const newJob = {
                    name: job?.company?.name,
                    logo: job?.company?.profileUrl,
                    matchScore: job?.matchScore,
                    ...job,
                  };
                  return (
                    <div key={index} className='relative'>
                      <div className='absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg'>
                        {job?.matchScore}% Match
                      </div>
                      <JobCard job={newJob} />
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Recommended Jobs Section */}
          {showRecommended && recommendedJobs?.length > 0 && (
            <div className='mb-8 p-6 lg:p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-l-4 border-blue-500 shadow-sm'>
              <div className='flex items-center gap-3 mb-6'>
                <BsStars className='text-blue-600 text-2xl' />
                <h3 className='text-xl lg:text-2xl font-bold text-blue-600'>
                  👋 Jobs Recommended for You
                </h3>
              </div>
              <p className='text-sm lg:text-base text-gray-700 mb-6 leading-relaxed'>
                Based on your profile and skills, here are the best matching opportunities:
              </p>
              
              <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6'>
                {recommendedJobs.slice(0, 3).map((job, index) => {
                  const newJob = {
                    name: job?.company?.name,
                    logo: job?.company?.profileUrl,
                    matchScore: job?.matchScore,
                    ...job,
                  };
                  return (
                    <div key={index} className='relative'>
                      <div className='absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold'>
                        {job?.matchScore}% Match
                      </div>
                      <JobCard job={newJob} />
                    </div>
                  )
                })}
              </div>
              
              {recommendedJobs.length > 3 && (
                <p className='text-sm text-gray-600 mt-4'>
                  + {recommendedJobs.length - 3} more matching jobs
                </p>
              )}
            </div>
          )}

          {/* All Jobs Section */}
          <div className='mb-8'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6'>
              <p className='text-base lg:text-lg font-semibold text-gray-900'>
                📋 Found <span className='text-green-600 font-bold text-lg'>{recordCount}</span> Jobs Available
              </p>

              <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center w-full sm:w-auto'>
                <p className='text-base text-gray-700 font-medium'>Sort By:</p>

                <ListBox sort={sort} setSort={setSort} />
              </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6'>
              {data?.map((job, index) => {
                const newJob = {
                  name: job?.company?.name,
                  logo: job?.company?.profileUrl,
                  ...job,
                };
                return <JobCard job={newJob} key={index} />
              })}
            </div>

            {isFetching &&(
              <div className="py-16 flex justify-center">
                <Loading/>
              </div>
            )}

            {numPage > page && !isFetching && (
              <div className='w-full flex items-center justify-center pt-16'>
                <CustomButton
                onClick={handleShowMore}
                  title='📂 Load More Jobs'
                  containerStyles={`text-blue-600 py-2.5 px-8 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base font-semibold border-2 border-blue-600 transition-all duration-300`}
                />
              </div>
            )}
          </div>
=======
        <div className='w-full md:w-5/6 px-5 md:px-0'>
          <div className='flex items-center justify-between mb-4'>
            <p className='text-sm md:text-base'>
              Showing: <span className='font-semibold'>{recordCount}</span> Jobs
              Available
            </p>

            <div className='flex flex-col md:flex-row gap-0 md:gap-2 md:items-center'>
              <p className='text-sm md:text-base'>Sort By:</p>

              <ListBox sort={sort} setSort={setSort} />
            </div>
          </div>

          <div className='w-full flex flex-wrap gap-4'>
            {data?.map((job, index) => {
              const newJob = {
                name: job?.company?.name,
                logo: job?.company?.profileUrl,
                ...job,
              };
              return <JobCard job={newJob} key={index} />
            })}
          </div>

          {isFetching &&(
            <div className="py-10">
              <Loading/>
            </div>
          )}

          {numPage > page && !isFetching && (
            <div className='w-full flex items-center justify-center pt-16'>
              <CustomButton
              onClick={handleShowMore}
                title='Load More'
                containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
              />
            </div>
          )}
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
