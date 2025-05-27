import React from "react";
import team1 from '../../../assets/team/team_1.jpg'
import team2 from '../../../assets/team/team_2.jpg'
import { motion } from "motion/react"
const Banner = () => {
  return (
    <div className="hero max-w-10/12 mx-auto  bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 ">
            <motion.img
            animate={{y:[70,120,70]}}
            transition={{duration:8, repeat:Infinity}}
          src={team1}
          className=" w-72 md:w-80 lg:w-96 xl:w-[450px] rounded-t-4xl border-l-8 border-b-8 border-blue-500 shadow-2xl"
        />
            <motion.img
            animate={{x:[-20,70,-20]}}
            transition={{duration:12, delay:2, repeat:Infinity}}
          src={team2}
          className="rounded-t-4xl w-72 md:w-80 lg:w-96 xl:w-[450px] border-l-8 border-b-8 border-blue-500 shadow-2xl"
        />
        </div>
        <div className="flex-1">
          <motion.h1 
          initial={{scale:-1}}
           animate={{scale:1}}
           transition={{duration:5}}
            className=" text-2xl font-bold"><motion.span 
            animate={{color:['#333446','#337cff','#33ffa2','#71C0BB','#F2F2F2']}}
            transition={{duration:10,delay:3, repeat:Infinity }}
            >Find Your Next Great Opportunity!</motion.span></motion.h1>
          <p className="py-6 text-white dark:text-black">
           Explore thousands of job listings from top companies. Connect with employers, build your profile, and take the next step in your career today.
          </p>
          <motion.button
          whileHover={{scale: 1.1}}
          whileTap={{scale:0.95}}
           className="btn btn-primary">Get Started</motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
