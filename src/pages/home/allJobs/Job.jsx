import React from "react";
import { motion } from "motion/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";
const Job = ({ job }) => {
  const {
    title,
    _id,
    location,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job || {};
  
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="card bg-base-100 border grid">
      <div className="card bg-base-100">
        <div className="flex items-start gap-5">
          <figure>
            <img className="w-16 h-16 rounded-full" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h2 className="font-bold text-xl">{company}</h2>
            <p className="text-xs font-bold flex items-center gap-1">
              <FaMapMarkerAlt />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body  ">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <p>{description}</p>
          <div className="card-actions">
            {requirements.map((skill, index) => (
              <div key={index} className="badge badge-outline">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="card-actions mr-2 mb-2 justify-end">
          <Link to={`/jobDetails/${_id}`} ><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Job;
