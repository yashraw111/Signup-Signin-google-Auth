import { BrowserRouter as Routers,Routes,Route, Navigate } from "react-router-dom"
// import SignIn from "./Layout/SignIn"
import 'bootstrap/dist/css/bootstrap.css'
import SignUp from "./Layout/SignUp"
import SignIn from "./Layout/SignIn"
import ContinueWithGoogle from "./Layout/ContinueWithGoogle"
import { useEffect, useState } from "react"
import { auth } from "./Layout/Firebase"
import './assets/css/style.css'
import Welcome from "./pages/welcome"
import ForgotPassword from "./Layout/ForgotPassword"

function App() {
  const[user,SetUser]=useState()
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      SetUser(user)
    })
  })

  return (
    <>
     <Routers>
      <Routes>
        <Route path="/" element={ user? <Navigate to='/welcome'></Navigate> : <SignIn></SignIn>} ></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>} ></Route>
        <Route path="/Signwithgoogle" element={<ContinueWithGoogle></ContinueWithGoogle>} ></Route>
        <Route path="/welcome" element={<Welcome></Welcome>} ></Route>
        <Route path="/forgot" element={<ForgotPassword></ForgotPassword>} ></Route>
      </Routes>
     </Routers>
    </>
  )
}

export default App
