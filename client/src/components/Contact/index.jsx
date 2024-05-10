import styles from "./styles.module.css";
import React, { useState } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    country: "Polska",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Walidacja pól (możesz dostosować warunki walidacji)
    if (name === "firstName" && value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "Pole wymagane",
      }));
    } else if (name === "lastName" && value.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "Pole wymagane" }));
    } else if (name === "age" && (value < 18 || value > 100)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: "Wiek musi być między 18 a 100",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Sprawdzenie czy nie ma błędów walidacji przed wysłaniem formularza
    if (Object.keys(errors).some((key) => errors[key])) {
      console.log("Formularz zawiera błędy");
      return;
    }
    try {
      // Wysłanie danych na serwer za pomocą Axios w formie POST
      const response = await axios.post("adres_twojego_serwera", formData);
      console.log("Dane zostały wysłane pomyślnie!", response.data);
      // Tutaj możesz dodać logikę po pomyślnym wysłaniu danych
    } catch (error) {
      console.error("Wystąpił błąd podczas wysyłania danych:", error);
      // Tutaj możesz dodać obsługę błędu
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div className={styles["content"]}>
          <div className={styles["contact"]}>
            <h2>Szybkie info</h2>
            <h3>Aktualne informacje kontaktowe zawsze znajdziesz poniżej:</h3>

            <div className={styles["shortInfo"]}>
              <ul>
                <li>Email: wedka@wedkarstwo.com</li>
                <li>Numer kontaktowy: 491413370</li>
                <li>FAX: wedka@wedka.wedka.pl</li>
                <li>Adres siedziby: Nadbystrzycka 16 Lublin 20-612</li>
                <li>
                  Twoja aktualna pozycja:
                  <div id="geo"></div>
                </li>
              </ul>
            </div>

            <h2>Formularz zgłoszenia</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Imię:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
              {errors.firstName && (
                <span style={{ color: "red" }}>{errors.firstName}</span>
              )}
              <br />
              <label>
                Nazwisko:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
              {errors.lastName && (
                <span style={{ color: "red" }}>{errors.lastName}</span>
              )}
              <br />
              <label>
                Wiek:
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </label>
              {errors.age && <span style={{ color: "red" }}>{errors.age}</span>}
              <br />
              <label>
                Państwo:
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="Polska">Polska</option>
                  <option value="Niemcy">Niemcy</option>
                  <option value="Francja">Francja</option>
                </select>
              </label>
              <br />
              <label>
                Telefon:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Adres kontaktowy e-mail:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button type="submit">Wyślij</button>
            </form>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default ContactForm;
