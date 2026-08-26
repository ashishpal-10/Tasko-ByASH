import "./index.css"
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/signup/Signup.jsx";
import Login from './pages/login/Login.jsx';
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Landing from "./pages/Landing/Landing.jsx";

const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
