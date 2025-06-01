import React, { use } from "react";
import { Link } from "react-router";

const MyPostedJobList = ({ jobsByEmailPromise }) => {
  const jobs = use(jobsByEmailPromise);

  return (
    <div className="max-w-7xl mx-auto my-6">
      <h2 className="text-center font-bold text-xl my-6">
        My Posted Jobs: {jobs.length}
      </h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>deadline</th>
              <th>count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
           {jobs.map((job,index)=> <tr key={job._id}>
              <th>{index + 1}</th>
              <td>{job.title}</td>
              <td>{job.date}</td>
              <td>{job.application_count}</td>
              <td><Link to={`/applications/${job._id}`} className="btn">View Applications</Link></td>
            </tr>)}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobList;
