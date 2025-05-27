import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);
    return (
        <div>
            
        </div>
    );
};

export default JobDetails;