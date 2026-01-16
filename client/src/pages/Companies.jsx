import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CompanyCard, CustomButton, Header, ListBox, Loading } from "../components";
import { companies } from "../utils/data";
import { apiRequest, updateURL} from "../utils";

const Companies = () => {
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordsCount, setRecordsCount] = useState(0);
  const [data, setData] = useState(companies ?? []);
  const [searchQuery, setSearchQuery] = useState("");
  const [cmpLocation, setCmpLocation] = useState("");
  const [sort, setSort] = useState("Newest");
  const [isFetching, setIsFetching] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const fetchCompanies = async() => {
    setIsFetching(true);

    const newURL = updateURL({
      pageNum: page,
      query: searchQuery,
      cmpLoc: cmpLocation,
      sort: sort,
      navigate: navigate,
      location: location,
    });

      try{
        const res = await apiRequest({
          url: newURL,
          method: "GET",
        });

        setNumPage(res?.numOfPage);
        setRecordsCount(res?.total);
        // Filter companies to show only those with job openings
        const companiesWithOpenings = res?.data?.filter(cmp => cmp?.jobPosts?.length > 0) || [];
        setData(companiesWithOpenings);

        setIsFetching(false);
      } catch (e) {
        console.log(e);
      }
  };
  const handleSearchSubmit = async(e) => {
    e.preventDefault()
    await fetchCompanies();
  };
  const handleShowMore = () => {};

  useEffect(() => {
    fetchCompanies();
  }, []);
  return (
    <div className='w-full'>
      <Header
        title='Find Your Dream Company'
        handleClick={handleSearchSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={cmpLocation}
        setLocation={setCmpLocation}
      />

      <div className='container mx-auto flex flex-col gap-5 2xl:gap-10 px-5 py-6 bg-[#f7fdfd]'>
        <div className='flex items-center justify-between mb-4'>
          <p className='text-sm md:text-base'>
            Showing: <span className='font-semibold'>{data?.length}</span> Companies
            With Job Openings
          </p>

          <div className='flex flex-col md:flex-row gap-0 md:gap-2 md:items-center'>
            <p className='text-sm md:text-base'>Sort By:</p>

            <ListBox sort={sort} setSort={setSort} />
          </div>
        </div>

        <div className='w-full flex flex-col gap-6'>
          {data?.length > 0 ? (
            data?.map((cmp, index) => (
              <CompanyCard cmp={cmp} key={index} />
            ))
          ) : (
            <div className='text-center py-10'>
              <p className='text-gray-500 text-lg'>No companies with job openings found</p>
            </div>
          )}

          {isFetching && (
            <div className='mt-10'>
              <Loading />
            </div>
          )}

          <p className='text-sm text-right'>
            {data?.length} records out of {recordsCount}
          </p>
        </div>

        {numPage > page && !isFetching && (
          <div className='w-full flex items-center justify-center pt-16'>
            <CustomButton
              onClick={handleShowMore}
              title='Load More'
              containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Companies;
