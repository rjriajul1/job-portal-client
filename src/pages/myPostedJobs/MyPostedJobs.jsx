import React, { Suspense } from 'react';
import MyPostedJobList from './MyPostedJobList';
import AuthHook from '../../hook/AuthHook';
import { jobsByEmailPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {
    const {user} = AuthHook()
    return (
        <div>
            <Suspense fallback={'loading...'}>
                <MyPostedJobList jobsByEmailPromise={jobsByEmailPromise(user.email)}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;