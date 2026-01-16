import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  createJob,
  deleteJobPost,
  getJobById,
  getJobPosts,
  updateJob,
  applyJob,
  getJobApplicants,
} from "../controllers/jobController.js";
import { getMatchedJobs, matchJobsByResume } from "../controllers/matchController.js";

const router = express.Router();

// POST JOB
router.post("/upload-job", userAuth, createJob);

// IPDATE JOB
router.put("/update-job/:jobId", userAuth, updateJob);

// GET JOB POST
router.get("/find-jobs", getJobPosts);
router.get("/get-job-detail/:id", getJobById);
router.post("/matched-jobs", userAuth, getMatchedJobs);
router.post("/match-resume", userAuth, matchJobsByResume);

// APPLY TO JOB
router.post("/apply-job", userAuth, applyJob);

// GET JOB APPLICANTS
router.get("/get-applicants/:jobId", userAuth, getJobApplicants);

// DELETE JOB POST
router.delete("/delete-job/:id", userAuth, deleteJobPost);

export default router;
