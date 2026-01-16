import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
  JobApplicants,
} from "./pages";
import { useSelector } from "react-redux";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/user-auth' state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);
  const isSeekerAccount = user?.accountType === "seeker";

  return (
    <main className='bg-[#f7fdfd]'>
      <Navbar />

      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<Navigate to={isSeekerAccount ? '/find-jobs' : '/company-profile'} replace={true} />}
          />
          {/* Only show for job seekers */}
          {isSeekerAccount && (
            <>
              <Route path='/find-jobs' element={<FindJobs />} />
              <Route path='/companies' element={<Companies />} />
            </>
          )}
          
          <Route
            path={
              isSeekerAccount
                ? "/user-profile"
                : "/user-profile/:id"
            }
            element={<UserProfile />}
          />

          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
          <Route path={"/job-applicants/:jobId"} element={<JobApplicants />} />
        </Route>

        <Route path='/about-us' element={<About />} />
        <Route path='/user-auth' element={<AuthPage />} />
      </Routes>
      {user && <Footer />}
    </main>
  );
}

export default App;
