import React, { use, useEffect, useState } from 'react';
import Job from './job';

const AllJobs = ({jobsPromise}) => {
    const data = use(jobsPromise);

    const [jobs,setJobs] = useState([]);
    const [show,setShow] = useState(false)

    useEffect(()=>{
      if(show){
        setJobs(data)
      }else{
        setJobs(data.slice(0,8))
      }
    },[setJobs,show,data])
    
    return (
        <div className='max-w-11/12 mx-auto'>
              <h1 className='text-3xl font-bold font-serif text-center my-8'>Jobs of the day</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {jobs.map(job=><Job key={job._id} job={job}></Job>)}
              </div>
              <div className='flex justify-center'>
                <button onClick={()=>{
                setShow(!show)
                if(show){
                   return window.scrollTo({
                    top:300,
                    behavior:'smooth'
                   })
                }
              }} className='btn btn-primary text-xl w-52 my-10'>{show ? 'Show Less' : 'Show All'}</button>
              </div>
        </div>
    );
};

export default AllJobs;
