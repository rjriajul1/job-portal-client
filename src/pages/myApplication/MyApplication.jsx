import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import AuthHook from '../../hook/AuthHook';
import useApplicationApi from '../../api/useApplicationApi';



const MyApplication = () => {
    const {user} = AuthHook();
    const {myApplicationPromise} = useApplicationApi();

    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={<p>loading...</p>}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;