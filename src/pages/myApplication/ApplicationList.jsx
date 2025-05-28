import React, { use } from "react";
import ApplicationTable from "./ApplicationTable";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
 

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">
        jobs applied so far: {applications.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Name</th>
              <th>links</th>
            
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application,index) => (
              <ApplicationTable 
              key={application._id} 
              application={application}
              index={index}
              >
                
              </ApplicationTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
