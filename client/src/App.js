import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Account/Signup";
import Login from "./components/Account/Login";

import NoPage from "./components/NoPage";
import ContactForm from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import Tools from "./components/Tools";
import AdminPanel from "./components/AdminPanel/Main";
import AddModifyDeleteTool from "./components/AdminPanel/AddModifyDeleteTool";

export default function App() {
  const userToken = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/contact" exact  element={<ContactForm />} />
      <Route path="/aboutus" exact  element={<AboutUs />} />
      <Route path="/faq" exact  element={<Faq />} />
      <Route path="/tools" exact  element={<Tools />} />

      <Route path="/account/signup" exact element={<Signup />} />
      <Route path="/account/login" exact element={<Login />} />
      
      {userToken && <Route path="/admin" exact element={<AdminPanel />} />}
      {userToken && <Route path="/admin/addmodifydeletetool/:id" exact element={<AddModifyDeleteTool />} />}
      
      <Route path="/account" element={<Navigate replace to="/account/login" />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
