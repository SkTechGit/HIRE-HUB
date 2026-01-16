import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { apiRequest } from "../utils";
import { Loading, CustomButton } from "../components";
import { MdArrowBack, MdVerifiedUser } from "react-icons/md";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const JobApplicants = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [jobData, setJobData] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const fetchApplicants = async () => {
    setIsLoading(true);
    try {
      const res = await apiRequest({
        url: `/jobs/get-applicants/${jobId}`,
        method: "GET",
        token: user?.token,
      });

      if (res?.success) {
        setJobData(res?.data?.job);
        setApplicants(res?.data?.applicants || []);
      } else {
        alert(res?.message || "Failed to fetch applicants");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (jobId && user?.token) {
      fetchApplicants();
    }
  }, [jobId, user?.token]);

  if (isLoading) {
    return <Loading />;
  }

  if (!jobData) {
    return (
      <div className='container mx-auto p-5 text-center'>
        <p className='text-gray-600'>No job data found</p>
        <CustomButton
          onClick={() => navigate("/company-profile")}
          title='Go Back'
          containerStyles='mt-4 py-2 px-5 bg-blue-600 text-white rounded hover:bg-blue-700'
        />
      </div>
    );
  }

  return (
    <div className='container mx-auto p-5'>
      {/* Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-4 mb-6'>
          <button
            onClick={() => navigate("/company-profile")}
            className='flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold'
          >
            <MdArrowBack size={24} /> Back
          </button>
        </div>

        <div className='bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200'>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>{jobData?.jobTitle}</h1>
          
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='bg-white rounded-lg p-4 shadow-sm'>
              <p className='text-sm text-gray-600'>Location</p>
              <p className='text-lg font-semibold text-gray-900'>{jobData?.location}</p>
            </div>
            
            <div className='bg-white rounded-lg p-4 shadow-sm'>
              <p className='text-sm text-gray-600'>Salary</p>
              <p className='text-lg font-semibold text-gray-900'>${jobData?.salary}</p>
            </div>
            
            <div className='bg-white rounded-lg p-4 shadow-sm'>
              <p className='text-sm text-gray-600'>Job Type</p>
              <p className='text-lg font-semibold text-gray-900'>{jobData?.jobType}</p>
            </div>
            
            <div className='bg-white rounded-lg p-4 shadow-sm'>
              <p className='text-sm text-gray-600'>Vacancies</p>
              <p className='text-lg font-semibold text-gray-900'>{jobData?.vacancies}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Applicants Section */}
      <div>
        <div className='flex items-center gap-3 mb-6'>
          <h2 className='text-2xl font-bold text-gray-900'>
            📋 Applicants
          </h2>
          <span className='bg-blue-600 text-white px-4 py-1 rounded-full text-lg font-semibold'>
            {applicants.length}
          </span>
        </div>

        {applicants.length === 0 ? (
          <div className='bg-gray-50 rounded-lg p-8 text-center border-2 border-dashed border-gray-300'>
            <p className='text-gray-500 text-lg'>No applicants yet</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {applicants.map((applicant) => (
              <div
                key={applicant._id}
                className='bg-white rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-200'
              >
                {/* Applicant Header */}
                <div className='bg-gradient-to-r from-blue-600 to-green-500 p-4 text-white'>
                  <div className='flex items-center gap-3 mb-4'>
                    <img
                      src={
                        applicant?.profileUrl ||
                        `https://api.dicebear.com/7.x/avataaars/svg?seed=${applicant?.firstName}`
                      }
                      alt={applicant?.firstName}
                      className='w-16 h-16 rounded-full object-cover border-3 border-white'
                    />
                    <div className='flex-1'>
                      <h3 className='text-lg font-bold'>
                        {applicant?.firstName} {applicant?.lastName}
                      </h3>
                      <p className='text-sm text-gray-100'>
                        {applicant?.jobTitle || "Job Seeker"}
                      </p>
                    </div>
                    <MdVerifiedUser size={24} className='text-yellow-300' />
                  </div>
                </div>

                {/* Applicant Details */}
                <div className='p-5'>
                  <div className='space-y-3'>
                    {/* Email */}
                    <div className='flex items-center gap-3'>
                      <AiOutlineMail className='text-blue-600 text-xl flex-shrink-0' />
                      <div className='flex-1 min-w-0'>
                        <p className='text-xs text-gray-500'>Email</p>
                        <a
                          href={`mailto:${applicant?.email}`}
                          className='text-sm font-medium text-blue-600 hover:underline truncate'
                        >
                          {applicant?.email}
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    {applicant?.location && (
                      <div className='flex items-center gap-3'>
                        <HiLocationMarker className='text-red-600 text-xl flex-shrink-0' />
                        <div className='flex-1'>
                          <p className='text-xs text-gray-500'>Location</p>
                          <p className='text-sm font-medium text-gray-700'>
                            {applicant?.location}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className='mt-5 pt-5 border-t border-gray-200 space-y-2'>
                    <a href={`mailto:${applicant?.email}`}>
                      <CustomButton
                        title='📧 Send Email'
                        containerStyles='w-full py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold transition-all'
                      />
                    </a>
                    
                    <button
                      onClick={() => setSelectedApplicant(applicant)}
                      className='w-full py-2 px-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-semibold transition-all'
                    >
                      👁️ View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Applicant Detail Modal */}
      {selectedApplicant && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='sticky top-0 bg-gradient-to-r from-blue-600 to-green-500 p-6 text-white flex justify-between items-center'>
              <h2 className='text-2xl font-bold'>
                {selectedApplicant?.firstName} {selectedApplicant?.lastName}
              </h2>
              <button
                onClick={() => setSelectedApplicant(null)}
                className='text-2xl hover:scale-110'
              >
                ✕
              </button>
            </div>

            <div className='p-6 space-y-6'>
              {/* Profile Section */}
              <div className='text-center'>
                <img
                  src={
                    selectedApplicant?.profileUrl ||
                    `https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedApplicant?.firstName}`
                  }
                  alt={selectedApplicant?.firstName}
                  className='w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-600'
                />
              </div>

              {/* Details Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='bg-blue-50 rounded-lg p-4'>
                  <p className='text-sm text-gray-600 font-semibold mb-1'>First Name</p>
                  <p className='text-lg text-gray-900'>{selectedApplicant?.firstName}</p>
                </div>
                
                <div className='bg-blue-50 rounded-lg p-4'>
                  <p className='text-sm text-gray-600 font-semibold mb-1'>Last Name</p>
                  <p className='text-lg text-gray-900'>{selectedApplicant?.lastName}</p>
                </div>
                
                <div className='bg-green-50 rounded-lg p-4'>
                  <p className='text-sm text-gray-600 font-semibold mb-1'>Email</p>
                  <a
                    href={`mailto:${selectedApplicant?.email}`}
                    className='text-lg text-blue-600 hover:underline'
                  >
                    {selectedApplicant?.email}
                  </a>
                </div>
                
                <div className='bg-green-50 rounded-lg p-4'>
                  <p className='text-sm text-gray-600 font-semibold mb-1'>Job Title</p>
                  <p className='text-lg text-gray-900'>
                    {selectedApplicant?.jobTitle || "Not specified"}
                  </p>
                </div>
                
                <div className='bg-yellow-50 rounded-lg p-4 md:col-span-2'>
                  <p className='text-sm text-gray-600 font-semibold mb-1'>Location</p>
                  <p className='text-lg text-gray-900'>
                    {selectedApplicant?.location || "Not specified"}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-3 pt-4 border-t border-gray-200'>
                <a href={`mailto:${selectedApplicant?.email}`} className='flex-1'>
                  <CustomButton
                    title='📧 Send Email'
                    containerStyles='w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold'
                  />
                </a>
                
                <button
                  onClick={() => setSelectedApplicant(null)}
                  className='flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicants;
