import React from "react";
import { Link, useLoaderData } from "react-router";
import cardBG from '../../assets/image/card_bg.jpg'
import { FaMapMarkerAlt, FaRegHandPointRight } from "react-icons/fa";
import { p } from "motion/react-client";

const JobDetails = () => {
  const job = useLoaderData();
  const {title,company,company_logo,_id,location,responsibilities,description,jobType, category,salaryRange,requirements} = job
 
  return (
    <div className="mt-6">
      <title>Job Details Page</title>
      <div className="card bg-base-100 w-96 md:w-2xl xl:w-4xl mx-auto image-full shadow-sm">
        <figure>
          <img
            src={cardBG}
            className="w-full"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
            <div className="flex gap-3">
                <figure>
                    <img className="w-20 h-20 rounded-full" src={company_logo} alt="" />
                </figure>
                <div className="mt-2">
                     <h2 className="font-bold text-xl">{company}</h2>
                     <p className="flex items-center gap-1 text-xs"><FaMapMarkerAlt/>{location}</p>
                </div>
            </div>
            <div className="flex items-center gap-20">
               <div>
                  <h3 className="text-xl ">{category}</h3>
                 <p className="text-xs">{jobType}</p>
               </div>
               <div>
                <p>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
               </div>
            </div>
          <h2 className="card-title">{title}</h2>
          <p>
           {description}
          </p>
          <div>
            <div>
              <h3 className="text-xl my-3 text-blue-500">Responsibility</h3>
             {responsibilities.map((res,index)=><div key={index}>
              <h4 className="flex items-center gap-2"><FaRegHandPointRight color="green" size={20}/>{res}</h4>
             </div>)}
            </div>
            <div>
              <h2 className="text-xl my-3 text-blue-500">Skill</h2>
                {requirements.map((skill, index) => (
              <div key={index} className="badge badge-outline">
                {skill}
              </div>
            ))}
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/apply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
