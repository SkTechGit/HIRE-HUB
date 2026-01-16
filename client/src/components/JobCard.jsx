import { GoLocation } from "react-icons/go";
import moment from "moment";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const JobCard = ({ job, isRecruiter = false }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleViewApplicants = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/job-applicants/${job?._id}`);
  };

  const isCompanyUser = user?.accountType === "company" || isRecruiter;
  const applicantCount = job?.application?.length || 0;

=======
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
  return (
    <Link to={`/job-detail/${job?._id}`}>
      <div
        className='w-full md:w-[16rem] 2xl:w-[18rem] h-[16rem] md:h-[18rem] bg-white flex flex-col justify-between shadow-lg 
<<<<<<< HEAD
                  rounded-md px-3 py-5 hover:shadow-2xl hover:-translate-y-2 ease-in-out duration-300 relative'
=======
                rounded-md px-3 py-5 hover:bg-gray-100 hover:scale-125 ease-in-out duration-300'
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
      >
        <div className='w-full h-full flex flex-col 
        justify-between'>
        <div className='flex gap-3'>
          <img
            src={job?.logo}
            alt={job?.name}
            className='w-14 h-14'
          />

          <div className='w-full h-16 flex flex-col 
          justify-center'>
            <p className='w-full h-12 flex item-center text-lg font-semibold overflow-hidden leading-5'>{job?.jobTitle}</p>
            <span className='flex gap-2 items-center'>
              <GoLocation className='text-slate-900 text-sm' />
              {job?.location}
            </span>
          </div>
        </div>

        <div className='py-3'>
          <p className='text-sm'>
            {job?.detail[0]?.desc?.slice(0, 150) + "..."}
          </p>
        </div>

        <div className='flex items-center justify-between'>
          <p className='bg-[#1d4fd826] text-[#1d4fd8] py-0.5 px-1.5 rounded font-semibold text-sm'>
            {job?.jobType}
          </p>
          <span className='text-gray-500 text-sm'>
            {moment(job?.createdAt).fromNow()}
          </span>
        </div>
        </div>
<<<<<<< HEAD

        {/* Applicants Badge and Button for Recruiters */}
        {isCompanyUser && applicantCount > 0 && (
          <div className='absolute top-3 right-3 flex items-center gap-2'>
            <div className='bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg'>
              📋 {applicantCount}
            </div>
            <button
              onClick={handleViewApplicants}
              className='bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg transition-all duration-200 hover:scale-105'
            >
              👥 View
            </button>
          </div>
        )}
=======
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
      </div>
    </Link>
  );
};

export default JobCard;
