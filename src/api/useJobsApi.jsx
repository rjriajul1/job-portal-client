import React from 'react';
import useAxiosSecure from '../hook/useAxiosSecure';

const useJobsApi = () => {
    const axiosSecure = useAxiosSecure();
    const jobsByEmailPromise = email => {
        return axiosSecure.get(`jobs/applications?email=${email}`).then(res => res.data);
    }
    return {
        jobsByEmailPromise
    };
};

export default useJobsApi;