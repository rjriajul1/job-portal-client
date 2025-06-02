import React from 'react';
import useAxiosSecure from '../hook/useAxiosSecure';

const useApplicationApi = () => {
    const axiosSecure = useAxiosSecure();

    const myApplicationPromise = email => {
        return axiosSecure.get(`currentUserApplication?email=${email}`)
        .then(res => res.data)
    }
    return {
        myApplicationPromise
    }
};

export default useApplicationApi;