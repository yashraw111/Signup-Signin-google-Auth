import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./Firebase"; // Firebase configuration file
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    if (!email) {
      toast.error("Please enter your email!", { position: "top-center" });
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent successfully!", {
          position: "top-center",
        });
        setEmail(""); // Clear email input
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`, { position: "top-center" });
      });
  };

  return (
    <div className="container mt-5 col-6 shadow p-5">
      <h3 className="text-center">Forgot Password</h3>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Enter your email address
        </label>
        <input
          type="email"
          id="emailInput"
          className="form-control"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-around">
      <button className="btn btn-primary" onClick={handlePasswordReset}>
        Send Reset Email
      </button>
      <NavLink to='/' className='btn btn-dark'>LogIn</NavLink>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
