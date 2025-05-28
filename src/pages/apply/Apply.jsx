import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import AuthHook from "../../hook/AuthHook";
import applyNow from '../../assets/lotties/apply.json'
import Lottie from "lottie-react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Apply = () => {
  const { id: jobId } = useParams();
  const { user } = AuthHook();
  const navigate = useNavigate()

  const handleApply = (e) => {
    e.preventDefault()

    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

   const application = {
  email: user.email,
  jobId,
  linkedin,
  github,
  resume
};
    // push data database
    axios.post('http://localhost:5000/apply', 
        application
    )
    .then(result=>{
        
        if(result.data.insertedId){
             Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Your application successful",
                      showConfirmButton: false,
                      timer: 3000,
                    });
                    form.reset();
                    navigate('/')
        }
    })
    .catch(error=>{
        toast.error(error);
    })

  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          
          <Lottie style={{width: '400px'}} animationData={applyNow} loop={true}/>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center">Apply Now for this job: <Link className="text-blue-500 underline" to={`/jobDetails/${jobId}`}>details</Link></h1>
            <form onSubmit={handleApply} className="fieldset">
              <label className="label">Linkedin</label>
              <input type="url" name="linkedin" required className="input" placeholder="Linkedin URL" />

              <label className="label">GitHub</label>
              <input type="url" name="github" required className="input" placeholder="GitHub URL" />

              <label className="label">Resume</label>
              <input type="url" name="resume" required className="input" placeholder="Resume URL" />
              
              <button type="submit" className="btn btn-neutral mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
