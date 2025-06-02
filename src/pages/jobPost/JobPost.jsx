import React from "react";
import AuthHook from "../../hook/AuthHook";
import axios from "axios";
import Swal from "sweetalert2";
import { motion } from "motion/react"
const JobPost = () => {
  const { user } = AuthHook();

  const handleJobPostForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = post;

    // salary data process
    const salaryRange = {
      min,
      max,
      currency,
    };
    newJob.salaryRange = salaryRange;
    // requirements data process
    const separatedReq = newJob?.requirements.split(",");
    const cutGap = separatedReq?.map((cut) => cut.trim());
    newJob.requirements = cutGap;

    // responsibilities data process
      const separatedRes= newJob.responsibilities.split(",");
    const removeGap = separatedRes?.map((cut) => cut.trim());
    newJob.responsibilities = removeGap;

    newJob.status = 'active'
    console.log(newJob);

    // job post and save data database
    
    axios.post('https://job-portal-server-seven-iota.vercel.app/jobs',newJob)
    .then(result=>{
      console.log(result.data);
      if(result.data.insertedId){
         Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your post successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
      }
    })
    .catch(error=>{
      console.log(error);
    })
  };
  return (
    <div className="max-w-7xl mx-auto my-6">
      <h1 className="text-2xl font-bold text-center my-6">Add job</h1>
      <form onSubmit={handleJobPostForm}>
        {/* basic info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend font-bold text-xl">
            Basic Info
          </legend>

          <label className="label font-bold">Title</label>
          <input
            type="text"
            required
            name="title"
            className="input w-full"
            placeholder="job title"
          />

          <label className="label font-bold">company</label>
          <input
            type="text"
            required
            name="company"
            className="input w-full "
            placeholder="company name"
          />

          <label className="label font-bold">location</label>
          <input
            type="text"
            required
            name="location"
            className="input w-full "
            placeholder="company location"
          />

          <label className="label font-bold">company_logo</label>
          <input
            type="url"
            className="input w-full"
            name="company_logo"
            placeholder="company_logo"
          />
        </fieldset>
        {/* job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend font-bold text-xl">
            Job Type
          </legend>

          <label className="label font-bold">job Type</label>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="metaframeworks"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On side"
              aria-label="On Side"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Part-Time"
              aria-label="Part-time"
            />
          </div>
        </fieldset>
        {/* category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend font-bold text-xl">
            category
          </legend>
          <select
            name="category"
            defaultValue="job category"
            className="select"
          >
            <option disabled={true}>job category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Web Development</option>
          </select>
        </fieldset>
        {/* salaryRange */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend font-bold text-xl">
            SalaryRange
          </legend>

          <label className="label font-bold">Salary Range</label>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="label font-bold">minimum Salary</label>
              <input
                type="number"
                name="min"
                className="input w-full"
                placeholder="salary min"
              />
            </div>
            <div>
              <label className="label font-bold">Maximum Salary</label>
              <input
                type="number"
                name="max"
                className="input w-full"
                placeholder="salary max"
              />
            </div>
            <div>
              <label className="label font-bold">Currency</label>
              <select
                name="currency"
                defaultValue="currency"
                className="select"
              >
                <option disabled={true}>currency</option>
                <option>BDT</option>
                <option>UDS</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend font-bold text-xl">
            Description
          </legend>

          <textarea
            name="description"
            className="textarea resize-none"
            placeholder="Bio"
          ></textarea>
        </fieldset>
        {/* requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend font-bold text-xl">
            Requirements
          </legend>

          <textarea
            name="requirements"
            className="textarea resize-none"
            placeholder="requirements (separated by comma)"
          ></textarea>
        </fieldset>
        {/* responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend font-bold text-xl">
            Responsibilities
          </legend>

          <textarea
            name="responsibilities"
            className="textarea resize-none"
            placeholder="responsibilities (separated by comma)"
          ></textarea>
        </fieldset>
        {/* hr_info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend font-bold text-xl">Hr_Info</legend>

          <label className="label font-bold">hr-email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user.email}
            required
            className="input w-full"
            placeholder="hr-email"
          />
          <label className="label font-bold">hr-name</label>
          <input
            type="text"
            name="hr_name"
            required
            className="input w-full"
            placeholder="hr-name"
          />
        </fieldset>
        {/* deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend font-bold text-xl">
            Deadline
          </legend>

          <label className="label font-bold">deadline</label>
          <input type="date" name="date" required className="input w-full" />
        </fieldset>
        <motion.input
          whileHover={{scale: 1.1}}
          whileTap={{scale:0.95}}
          className="w-full btn text-xl font-bold hover:bg-green-500"
          type="submit"
          value="Add Job"
        />
      </form>
    </div>
  );
};

export default JobPost;
