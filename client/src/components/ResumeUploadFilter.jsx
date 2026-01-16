import React, { useState } from "react";
import { HiDocumentDownload } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { CustomButton } from "./index";
import { handleFileUpload, apiRequest } from "../utils";

const ResumeUploadFilter = ({ onJobsMatched, user }) => {
  const [uploadResume, setUploadResume] = useState("");
  const [isMatching, setIsMatching] = useState(false);
  const [matchMessage, setMatchMessage] = useState("");

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadResume(file);
      setMatchMessage("");
    }
  };

  const handleMatchJobs = async () => {
    if (!uploadResume) {
      setMatchMessage("Please select a resume file");
      return;
    }

    setIsMatching(true);
    setMatchMessage("Analyzing your resume...");

    try {
      // Upload resume to get URL
      const formData = new FormData();
      formData.append("file", uploadResume);
      formData.append("upload_preset", "jobfinder");

      const uploadRes = await fetch(
        "https://api.cloudinary.com/v1_1/dp3jfcino/auto/upload/",
        {
          method: "POST",
          body: formData,
        }
      );

      const uploadData = await uploadRes.json();
      const resumeUrl = uploadData.secure_url;

      // Send to backend for job matching
      const res = await apiRequest({
        url: "/jobs/match-resume",
        method: "POST",
        token: user?.token,
        data: {
          resumeUrl: resumeUrl,
          jobTitle: user?.jobTitle,
          location: user?.location,
        },
      });

      if (res?.success) {
        setMatchMessage(`Found ${res?.data?.length} matching jobs!`);
        onJobsMatched(res?.data || []);
      } else {
        setMatchMessage("No matching jobs found. Try updating your profile.");
      }
    } catch (error) {
      console.log(error);
      setMatchMessage("Error matching jobs. Please try again.");
    } finally {
      setIsMatching(false);
    }
  };

  return (
    <div className='w-full bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-8 shadow-md border-2 border-blue-200'>
      <div className='flex items-center gap-3 mb-4'>
        <BsStars className='text-blue-600 text-2xl' />
        <h3 className='text-xl font-bold text-gray-800'>Smart Job Matching</h3>
      </div>

      <p className='text-gray-600 mb-4'>
        Upload your resume to get AI-powered job recommendations tailored to your skills and experience.
      </p>

      <div className='flex flex-col md:flex-row gap-4 items-center'>
        <div className='flex-1'>
          <label className='flex items-center gap-2 cursor-pointer'>
            <HiDocumentDownload className='text-2xl text-blue-600' />
            <input
              type='file'
              accept='.pdf,.doc,.docx,.txt'
              onChange={handleResumeUpload}
              className='hidden'
            />
            <span className='text-sm text-gray-700 font-semibold'>
              {uploadResume ? uploadResume.name : "Click to upload your resume"}
            </span>
          </label>
          <p className='text-xs text-gray-500 mt-1'>
            Supported: PDF, DOC, DOCX, TXT (Max 10MB)
          </p>
        </div>

        <CustomButton
          title={isMatching ? "Matching..." : "Find Matching Jobs"}
          onClick={handleMatchJobs}
          containerStyles={`${
            isMatching
              ? "bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300`}
          disabled={isMatching}
        />
      </div>

      {matchMessage && (
        <p
          className={`mt-3 text-sm font-semibold ${
            matchMessage.includes("Found") || matchMessage.includes("matching")
              ? "text-green-600"
              : matchMessage.includes("Error") || matchMessage.includes("No")
              ? "text-red-600"
              : "text-blue-600"
          }`}
        >
          {matchMessage}
        </p>
      )}
    </div>
  );
};

export default ResumeUploadFilter;
