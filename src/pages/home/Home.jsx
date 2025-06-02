import React, { Suspense } from 'react';
import Banner from './banner/Banner';
import AllJobs from './allJobs/AllJobs';

const jobsPromise = fetch('https://job-portal-server-seven-iota.vercel.app/jobs').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Banner/>
           <Suspense fallback={<p>loading.....</p>}>
             <AllJobs jobsPromise={jobsPromise}/>
           </Suspense>
        </div>
    );
};

export default Home;