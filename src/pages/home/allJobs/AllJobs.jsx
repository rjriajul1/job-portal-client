import React, { use, useEffect, useState } from "react";
import Job from "./job";
import { motion } from "motion/react"

const AllJobs = ({ jobsPromise }) => {
  const data = use(jobsPromise);

  const [jobs, setJobs] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setJobs(data.slice(0, 8));
  }, []);

  const getData = () => {
    fetch("https://job-portal-server-seven-iota.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  };

  const handleShow = () => {
    setShow(true);
    getData();
  };

  const handleLess = () => {
    setJobs(jobs.slice(0, 8));
    setShow(false);
    return window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-11/12 mx-auto">
      <h1 className="text-3xl font-bold font-serif text-center my-8">
        Jobs of the day
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <Job key={job._id} job={job}></Job>
        ))}
      </div>
      <div className="flex justify-center">
        {show ? (
          <motion.button
           whileHover={{scale: 1.1}}
           whileTap={{scale:0.95}}
            onClick={() => {
              handleLess();
            }}
            className="btn btn-primary text-xl w-52 my-10"
          >
            show less
          </motion.button>
        ) : (
          <motion.button
           whileHover={{scale: 1.1}}
          whileTap={{scale:0.95}}
            onClick={() => {
              handleShow();
            }}
            className="btn btn-primary text-xl w-52 my-10"
          >
            show all
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
