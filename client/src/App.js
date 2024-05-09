import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Account/Signup";
import Login from "./components/Account/Login";

import NoPage from "./components/NoPage";
import ContactForm from "./components/Contact";
import AboutUs from "./components/AboutUs";


export default function App() {
  const userToken = localStorage.getItem("token");
  return (
    <Routes>
      {/* {userToken && <Route path="/" exact element={<Main />} />} */}
      <Route path="/" exact element={<Main />} />
      <Route path="/contact" exact  element={<ContactForm />} />
      <Route path="/aboutus" exact  element={<AboutUs />} />


      <Route path="/account/signup" exact element={<Signup />} />
      <Route path="/account/login" exact element={<Login />} />
      

      
      <Route path="/account" element={<Navigate replace to="/account/login" />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
