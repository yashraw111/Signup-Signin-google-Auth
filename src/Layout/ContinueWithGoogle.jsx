import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from './Firebase'

const ContinueWithGoogle = () => {
    function googleAuth(){
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        .then((res)=>{
            // const result =GoogleAuthProvider.credentialFromResult(res)
            const user = res.user
            console.log(user);
            // console.log(result.accessToken);
            //     console.log(res.user);
        })
        .catch((err)=>{
            console.log(err.message);
            console.log(err);
        })
    }
    const[user,SetUser]=useState(null)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log(user.photoURL);
                SetUser(user)
            }
            else{
                SetUser(null)
            }
        })
        return ()=>unsubscribe()
    })

    function logOut(){
        signOut(auth)
        .then(()=>{
            alert("log Out.....")
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
  return (
    <>
    {
        user?(
            <>
           <div className="container">
            <div className="col-lg-4 shadow p-4 mx-auto">
            <h3>welcome ,{user.displayName}</h3>
            <p>{user.email}</p>
            <img className='rounded' src={user.photoURL} alt="djhjhd" />
            </div>
           </div>
            <button onClick={logOut}>logOut</button>
            </>
        ):<>
         <button
            type="button"
            className="btn btn-dark mt-3"
            onClick={googleAuth}
          >
            Sign up With Google <i className="fa-brands fa-google"></i>
          </button>
          </>
    }
    </>
  )
}

export default ContinueWithGoogle