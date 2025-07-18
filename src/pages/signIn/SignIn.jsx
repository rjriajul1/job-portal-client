import Lottie from "lottie-react";
import React, { use, useState } from "react";
import SignInLottie from "../../assets/lotties/signIn.json";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [error, setError] = useState("");
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    // sign in user with firebase
    signInUser(email, password)
      .then((result) => {
        if (result?.user) {
          navigate(location?.state || "/");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account sign in successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        setError(error.message);
      });

    };

    const handleGoogle = () => {
      signInWithGoogle()
      .then(result => {
        console.log(result);
        navigate(location?.state || "/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account sign in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(error => {
        setError(error.message)
      })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>sign In</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={SignInLottie}
            style={{ width: "350px" }}
            loop={true}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign In now!</h1>
            <div className='flex justify-center my-3'>
              <button onClick={handleGoogle} className='btn btn-primary'><FcGoogle size={24}/>Sign In With Google</button>
            </div>
            <div className="divider">OR</div>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <button>Forget Password ? </button>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Sign In
                </button>
              </fieldset>
            </form>
            <div>
              <p className="text-center text-red-500">{error}</p>
            </div>
            <p className="text-center">
              Don't have an account ? Please{" "}
              <Link to="/register" className="text-blue-600 underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
