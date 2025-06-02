import React, { Suspense } from 'react';
import MyPostedJobList from './MyPostedJobList';
import AuthHook from '../../hook/AuthHook';
import useJobsApi from '../../api/useJobsApi';

const MyPostedJobs = () => {
    const {user} = AuthHook()
    const {jobsByEmailPromise} = useJobsApi()
  
    return (
        <div>
            <Suspense fallback={'loading...'}>
                <MyPostedJobList jobsByEmailPromise={jobsByEmailPromise(user.email)}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;