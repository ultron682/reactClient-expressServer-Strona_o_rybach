import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";

import NoPage from "./components/NoPage";
import ContactForm from "./components/Contact";

export default function App() {
  const userToken = localStorage.getItem("token");
  return (
    <Routes>
      {userToken && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
