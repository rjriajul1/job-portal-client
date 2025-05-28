import React, { Suspense } from 'react';
import Banner from './banner/Banner';
import AllJobs from './allJobs/AllJobs';

const jobsPromise = fetch('http://localhost:5000/jobs').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Banner/>
           <Suspense>
             <AllJobs jobsPromise={jobsPromise}/>
           </Suspense>
        </div>
    );
};

export default Home;