//import styles from "./styles.module.css";
import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

import Users from "../Users"; // Import the 'Users' component
import UserInfo from "../UserInfo";
import "./navbar.css";

export default class Navbar extends React.Component {
  state = {
    showMenu: false,
    dane: [],
    daneUser: [],
    token: null,
  };

  componentDidMount() {
    this.setState({ token: localStorage.getItem("token") });
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  closeMenuOnMobile = () => {
    this.setState({ showMenu: false });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ token: null });
    window.location = "/";
  };

  handleGetUserInfo = (e) => {
    e.preventDefault();

    //jeśli jest token w localStorage to:
    if (this.state.token !== null) {
      try {
        //konfiguracja zapytania asynchronicznego z tokenem w nagłówku:
        const config = {
          method: "get",
          url: "http://localhost:8080/api/users/me",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": this.state.token,
          },
        };
        //wysłanie żądania o dane:
        const { data: res } = axios(config);
        //ustaw dane w komponencie za pomocą hooka useState na listę z danymi przesłanymi
        //z serwera – jeśli został poprawnie zweryfikowany token
        this.state.daneUser = res.data;
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

  handleDeleteUser = async (e) => {
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

  render() {
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
        <nav className="navigation main_container title">
          <p className="nav__logo">Wędkarz GURU</p>

          <div
            className={`nav__menu ${this.state.showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className="nav__link"
                  onClick={this.closeMenuOnMobile}
                >
                  STRONA GŁÓWNA
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/aboutus"
                  className="nav__link"
                  onClick={this.closeMenuOnMobile}
                >
                  O NAS
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/tools"
                  className="nav__link"
                  onClick={this.closeMenuOnMobile}
                >
                  POLECANE NARZĘDZIA
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/faq"
                  className="nav__link"
                  onClick={this.closeMenuOnMobile}
                >
                  CZĘSTE PYTANIA
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className="nav__link"
                  onClick={this.closeMenuOnMobile}
                >
                  KONTAKT
                </NavLink>
              </li>

              {this.state.token !== null ? (
                <>
                  <li className="nav__item">
                    <NavLink
                      to="/admin"
                      className="nav__link"
                      onClick={this.closeMenuOnMobile}
                    >
                      Panel administratora
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink className="nav__link" onClick={this.handleLogout}>
                      Wyloguj się
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav__item">
                  <NavLink
                    to="/account/login"
                    className="nav__link"
                    onClick={this.closeMenuOnMobile}
                  >
                    Logowanie
                  </NavLink>
                </li>
              )}
            </ul>
            <div
              className="nav__close"
              id="nav-close"
              onClick={this.toggleMenu}
            >
              <IoClose />
            </div>
          </div>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={this.toggleMenu}
          >
            <IoMenu />
          </div>
        </nav>
      </header>
    );
  }
}
