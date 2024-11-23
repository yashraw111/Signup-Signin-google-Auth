import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function Signup(data) {
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("User registered successfully", {
          position: "top-center",
        });
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Error: ${err.message}`, { position: "top-center" });
      });
  }

  return (
    <>
      <section className="vh-100 signup">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-12 col-md-8 col-lg-7 col-xl-6 mb-4 mb-md-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid w-100"
                alt="Sign Up illustration"
              />
            </div>
            <div className="col-12 col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit(Signup)}>
                <h3 className="text-center mb-4">Sign Up</h3>

                {/* Email input */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="emailInput">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="passwordInput">
                    Password
                  </label>
                  <input
                    type="password"
                    id="passwordInput"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                  )}
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-center gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Sign Up
                  </button>
                  <NavLink className="btn btn-dark btn-lg btn-block" to="/">
                    Login
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

export default SignUp;
