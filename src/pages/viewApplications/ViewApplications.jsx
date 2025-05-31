import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { id } = useParams();
  const applications = useLoaderData();

  const handleStatusUpdate = (e,id) => {
    console.log(e.target.value,id);

    axios.patch(`http://localhost:5000/applications/${id}`,{status: e.target.value})
    .then(data=> {
        console.log(data.data);
        if(data.data.modifiedCount){
              Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Your status update successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
        }
    })
    .catch(error => {
        console.log(error);
    })
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        {applications.length} Applications for: {id}
      </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Links</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}

            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.email}</td>
                <td>{application.github}</td>
                <td>
                  <select
                    onChange={e=>handleStatusUpdate(e,application._id)}
                    defaultValue={application.status}
                    className="select select-ghost"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Hired</option>
                    <option>Reject</option>
                    <option>Interview</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
