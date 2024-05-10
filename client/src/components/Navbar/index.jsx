//import styles from "./styles.module.css";
import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

import Users from "../Users"; // Import the 'Users' component
import UserInfo from "../UserInfo";
import "./navbar.css";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [dane, ustawDane] = useState([]);
  const [daneUser, ustawDaneUser] = useState([]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleGetUsers = async (e) => {
    e.preventDefault();

    ustawDaneUser([]);

    //pobierz token z localStorage:
    const token = localStorage.getItem("token");
    //jeśli jest token w localStorage to:
    if (token) {
      try {
        //konfiguracja zapytania asynchronicznego z tokenem w nagłówku:
        const config = {
          method: "get",
          url: "http://localhost:8080/api/users",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        };
        //wysłanie żądania o dane:

        const { data: res } = await axios(config);
        //ustaw dane w komponencie za pomocą hooka useState na listę z danymi przesłanymi
        //z serwera – jeśli został poprawnie zweryfikowany token
        ustawDane(res.data); // `res.data` - zawiera sparsowane dane – listę
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          localStorage.removeItem("token");
          window.location.reload();
        }
      }
    }
  };

  const handleGetUserInfo = async (e) => {
    e.preventDefault();

    ustawDane([]);

    //pobierz token z localStorage:
    const token = localStorage.getItem("token");
    //jeśli jest token w localStorage to:
    if (token) {
      try {
        //konfiguracja zapytania asynchronicznego z tokenem w nagłówku:
        const config = {
          method: "get",
          url: "http://localhost:8080/api/users/me",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        };
        //wysłanie żądania o dane:
        const { data: res } = await axios(config);
        //ustaw dane w komponencie za pomocą hooka useState na listę z danymi przesłanymi
        //z serwera – jeśli został poprawnie zweryfikowany token
        ustawDaneUser(res.data); // `res.data` - zawiera sparsowane dane – listę
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          //localStorage.removeItem("token");
          // window.location.reload();
        }
      }
    }
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    //pobierz token z localStorage:
    const token = localStorage.getItem("token");
    //jeśli jest token w localStorage to:
    if (token) {
      try {
        //konfiguracja zapytania asynchronicznego z tokenem w nagłówku:
        const config = {
          method: "get",
          url: "http://localhost:8080/api/users/delete",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        };
        //wysłanie żądania o dane:
        await axios(config);

        window.location = "/login";
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          localStorage.removeItem("token");
          window.location.reload();
        }
      }
    }
  };

  return (
    // <div className={styles.main_container}>
    //   <nav className={styles.navbar}>
    //     <h1>Strona</h1>
    //     <button className={styles.white_btn} onClick={handleGetUsers}>
    //       Użytkownicy
    //     </button>

    //     <button className={styles.white_btn} onClick={handleGetUserInfo}>
    //       Szczegóły konta
    //     </button>

    //     <button className={styles.white_btn} onClick={handleDeleteUser}>
    //       Usuwanie konta
    //     </button>

    //     <button className={styles.white_btn} onClick={handleLogout}>
    //       Wyloguj się
    //     </button>
    //   </nav>
    // </div>
    <header className="header">
      <nav className="navigation container title">
        <p className="nav__logo">
          Wędkarz GURU
        </p>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                STRONA GŁÓWNA
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/aboutus"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                O NAS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/tools"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                POLECANE NARZĘDZIA
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/faq"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                CZĘSTE PYTANIA
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                KONTAKT
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
