import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../Layout/Firebase";
import { signOut } from "firebase/auth";

const Welcome = () => {
  console.log("enter ");

  function logOut() {
    if (confirm("Logout.........")) {
      signOut(auth)
        .then((res) => {
          window.location.href = "/";
          console.log("User signed out successfully.", res);
          // alert(res)
        })
        .catch((err) => {
          console.error("Error during sign-out:", err);
        });
    }
  }

  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center text-center welcome">
        <h1 className="text-white animate-charcter">Welcome!</h1>
        <p className="mt-3 text-white">You have successfully logged in.</p>
        {/* <NavLink to="/" className="btn btn-primary mt-3">
          Go to Home
        </NavLink> */}
        <div>
          <button className="btn btn-outline-danger" onClick={logOut}>
            logOut <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>

 

    </>
  );
};

export default Welcome;
