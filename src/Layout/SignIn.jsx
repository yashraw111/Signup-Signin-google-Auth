import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "./Firebase";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function login(data) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("User login successfully", { position: "top-center" });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login failed", { position: "top-center" });
      });
  }

  function googleAuth() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        // const result =GoogleAuthProvider.credentialFromResult(res)
        const user = res.user;
        console.log(user);
        toast.success("User login successfully", { position: "top-center" });
        // console.log(result.accessToken);
        window.location.href = "/welcome";
        //     console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err);
        toast.error("Login failed", { position: "top-center" });
      });
  }

  function facebookAuth() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        console.log("f user", user);
        toast.success("User login successfully", { position: "top-center" });
        // console.log(result.accessToken);
        //     console.log(res.user);
        window.location.href = "/welcome";
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err);
        toast.error("Login failed", { position: "top-center" });
      });
  }

  return (
    <>
      <section className="vh-100 Signin p-5">
        <div className="container py-5 h-100 ">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone illustration"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit(login)}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                  )}
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* Checkbox */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <button
                  onClick={googleAuth}
                  className="btn btn-primary  btn-block"
                  type="button"
                >
                  Continue with google <i class="fa-brands fa-google"></i>
                </button>
                <button
                  onClick={facebookAuth}
                  className="btn btn-primary  btn-block ms-2"
                  type="button"
                >
                  Continue with Facebook<i className="fab fa-facebook me-2"></i>
                </button>

                <div className="mt-3 text-center">
                  <NavLink to="/SignUp" className="btn btn-secondary">
                    Create Account
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default SignIn;
