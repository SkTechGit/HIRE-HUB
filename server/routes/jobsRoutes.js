import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  createJob,
  deleteJobPost,
  getJobById,
  getJobPosts,
  updateJob,
<<<<<<< HEAD
  applyJob,
  getJobApplicants,
} from "../controllers/jobController.js";
import { getMatchedJobs, matchJobsByResume } from "../controllers/matchController.js";
=======
} from "../controllers/jobController.js";
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89

const router = express.Router();

// POST JOB
router.post("/upload-job", userAuth, createJob);

// IPDATE JOB
router.put("/update-job/:jobId", userAuth, updateJob);

// GET JOB POST
router.get("/find-jobs", getJobPosts);
router.get("/get-job-detail/:id", getJobById);
<<<<<<< HEAD
router.post("/matched-jobs", userAuth, getMatchedJobs);
router.post("/match-resume", userAuth, matchJobsByResume);

// APPLY TO JOB
router.post("/apply-job", userAuth, applyJob);

// GET JOB APPLICANTS
router.get("/get-applicants/:jobId", userAuth, getJobApplicants);
=======
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89

// DELETE JOB POST
router.delete("/delete-job/:id", userAuth, deleteJobPost);

export default router;
