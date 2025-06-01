import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import AuthHook from '../../hook/AuthHook';
import { myApplicationPromise } from '../../api/ApplicaitonApi';


const MyApplication = () => {
    const {user} = AuthHook();

    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={<p>loading...</p>}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user.email , user.accessToken)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;