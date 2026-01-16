import Jobs from "../models/jobsModel.js";
import Users from "../models/userModel.js";

// Extract skills from user profile (job title, about section, etc.)
const extractUserSkills = (user) => {
  const skills = [];
  
  if (user?.jobTitle) {
    skills.push(...user.jobTitle.toLowerCase().split(" "));
  }
  
  if (user?.about) {
    const words = user.about.toLowerCase().split(/\s+/);
    // Common tech keywords
    const techKeywords = [
      "react", "nodejs", "python", "java", "javascript", "typescript", 
      "sql", "mongodb", "aws", "docker", "kubernetes", "frontend", 
      "backend", "fullstack", "web", "mobile", "android", "ios",
      "html", "css", "bootstrap", "tailwind", "angular", "vue",
      "express", "django", "spring", "mysql", "postgresql",
      "git", "github", "gitlab", "api", "rest", "graphql"
    ];
    
    words.forEach(word => {
      if (techKeywords.includes(word)) {
        skills.push(word);
      }
    });
  }
  
  return [...new Set(skills)]; // Remove duplicates
};

// Extract requirements from job
const extractJobRequirements = (job) => {
  const requirements = [];
  
  if (job?.detail?.[0]?.requirements) {
    const text = job.detail[0].requirements.toLowerCase();
    const techKeywords = [
      "react", "nodejs", "python", "java", "javascript", "typescript",
      "sql", "mongodb", "aws", "docker", "kubernetes", "frontend",
      "backend", "fullstack", "web", "mobile", "android", "ios",
      "html", "css", "bootstrap", "tailwind", "angular", "vue",
      "express", "django", "spring", "mysql", "postgresql",
      "git", "github", "gitlab", "api", "rest", "graphql"
    ];
    
    techKeywords.forEach(keyword => {
      if (text.includes(keyword)) {
        requirements.push(keyword);
      }
    });
  }
  
  return requirements;
};

// Calculate match score between user and job
const calculateMatchScore = (userSkills, jobRequirements, user, job) => {
  let score = 0;
  let maxScore = 100;
  
  // Skill matching (40 points)
  const matchingSkills = userSkills.filter(skill => 
    jobRequirements.includes(skill)
  );
  const skillScore = (matchingSkills.length / Math.max(jobRequirements.length, 1)) * 40;
  score += skillScore;
  
  // Experience matching (30 points)
  const jobExperience = job?.experience || 0;
  const userExperience = user?.experience || 0;
  if (userExperience >= jobExperience) {
    score += 30;
  } else if (userExperience >= jobExperience - 1) {
    score += 20;
  } else if (userExperience >= jobExperience - 2) {
    score += 10;
  }
  
  // Location flexibility (20 points) - could be improved with actual location matching
  score += 20;
  
  // Job type match (10 points)
  if (job?.jobType === "Remote" || job?.jobType === "Hybrid") {
    score += 10;
  }
  
  return Math.min(Math.round(score), 100);
};

export const getMatchedJobs = async (req, res, next) => {
  try {
    const userId = req.body.user?.userId;
    
    if (!userId) {
      return res.status(400).json({ 
        success: false, 
        message: "User not authenticated" 
      });
    }
    
    // Get user data
    const user = await Users.findById(userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found" 
      });
    }
    
    // Get all jobs
    const allJobs = await Jobs.find().populate("company", "name location");
    
    // Extract user skills
    const userSkills = extractUserSkills(user);
    
    // Calculate match score for each job
    const jobsWithScores = allJobs.map(job => {
      const jobRequirements = extractJobRequirements(job);
      const matchScore = calculateMatchScore(userSkills, jobRequirements, user, job);
      
      return {
        ...job.toObject(),
        matchScore,
        matchedSkills: userSkills.filter(skill => 
          jobRequirements.includes(skill)
        )
      };
    });
    
    // Filter jobs with score >= 40 and sort by score
    const recommendedJobs = jobsWithScores
      .filter(job => job.matchScore >= 40)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 10); // Return top 10 matches
    
    res.status(200).json({
      success: true,
      message: "Matched jobs retrieved successfully",
      data: recommendedJobs,
      total: recommendedJobs.length
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

export const matchJobsByResume = async (req, res, next) => {
  try {
    const userId = req.body.user?.userId;
    const { resumeUrl } = req.body;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    // Get user profile
    const user = await Users.findById(userId);

    // Build resume text from user profile and uploaded resume
    let resumeText = `${user?.jobTitle || ""} ${user?.about || ""} ${
      user?.location || ""
    }`.toLowerCase();

    // Fetch all available jobs
    const allJobs = await Jobs.find().populate("company");

    // Match jobs based on resume content
    const matchedJobs = allJobs
      .map((job) => {
        const jobTitle = job?.jobTitle || "";
        const jobRequirements = job?.detail?.requirements || "";
        const jobDesc = job?.detail?.desc || "";

        // Calculate match score
        const resumeWords = resumeText.split(/\s+/);
        const requiredWords = (jobRequirements + " " + jobTitle)
          .toLowerCase()
          .split(/\s+/);

        let matches = 0;
        requiredWords.forEach((word) => {
          if (word.length > 3 && resumeWords.includes(word)) {
            matches++;
          }
        });

        const matchScore = Math.min(
          Math.round((matches / Math.max(requiredWords.length, 1)) * 100),
          100
        );

        return {
          ...job.toObject(),
          matchScore: matchScore,
        };
      })
      .filter((job) => job.matchScore >= 25) // Return jobs with 25% or higher match
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 15); // Limit to top 15 matches

    res.status(200).json({
      success: true,
      data: matchedJobs,
      message: `Found ${matchedJobs.length} matching jobs based on your resume`,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: error.message,
      success: false,
    });
  }
};
