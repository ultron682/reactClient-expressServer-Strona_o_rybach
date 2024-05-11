import styles from "./styles.module.css";
import React, { useState } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    country: "Polska",
    phone: "",
    email: "",
    desc: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // W czasie zmiany wartości pola resetujemy błąd
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Walidacja formularza przed wysłaniem
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Formularz jest poprawny, można wysłać dane do serwera
      // axios
      console.log(formData);


      axios
        .post("http://localhost:8080/api/contact", formData)
        .then((response) => {
          if (response.status !== 201) {
            console.log(response);
            throw new Error("Wystąpił problem z wysłaniem formularza");
          }
          // Tutaj możesz obsłużyć odpowiedź z serwera
          console.log("Formularz został wysłany pomyślnie");
          alert("Formularz został wysłany pomyślnie");

          setFormData({
            firstName: "",
            lastName: "",
            age: "",
            country: "Polska",
            phone: "",
            email: "",
            desc: "",
          });
        })
        .catch((error) => {
          console.error("Błąd:", error);
        });
    } else {
      // Jeśli są błędy walidacji, ustawiamy je w stanie
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};
  
    if (!formData.firstName.trim()) {
      errors.firstName = "Pole Imię jest wymagane";
    } else if (!/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+$/u.test(formData.firstName)) {
      errors.firstName = "Niepoprawny format Imienia";
    }
  
    if (!formData.lastName.trim()) {
      errors.lastName = "Pole Nazwisko jest wymagane";
    } else if (!/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+$/u.test(formData.lastName)) {
      errors.lastName = "Niepoprawny format Nazwiska";
    }
  
    if (!formData.age.trim()) {
      errors.age = "Pole Wiek jest wymagane";
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0 || !Number.isInteger(parseFloat(formData.age))) {
      errors.age = "Wiek musi być dodatnią liczbą całkowitą";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Pole Telefon jest wymagane";
    } else if (!/^\+?[0-9\-]+$/.test(formData.phone)) {
      errors.phone = "Niepoprawny format Telefonu";
    } else if (formData.phone.trim().length < 9) {
      errors.phone = "Numer telefonu musi mieć co najmniej 9 znaków";
    }
    
  
    if (!formData.email.trim()) {
      errors.email = "Pole Adres e-mail jest wymagane";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Niepoprawny format Adresu e-mail";
    }
  
    if (!formData.desc.trim()) {
      errors.desc = "Pole opisu problemu jest wymagane";
    }
  
    return errors;
  };

  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div className={styles["content"]}>
          <div className={styles["contact"]}>
            <h3>Aktualne informacje kontaktowe zawsze znajdziesz poniżej:</h3>

            <div className={styles["shortInfo"]}>
              <ul>
                <li>Email: wedka@wedkarstwo.com</li>
                <li>Numer kontaktowy: 491413370</li>
                <li>FAX: wedka@wedka.wedka.pl</li>
                <li>Adres siedziby: Nadbystrzycka 16 Lublin 20-612</li>
              </ul>
            </div>

            <h2>Formularz zgłoszenia</h2>
            <form onSubmit={handleSubmit}>
  <table>
    <tbody>
      <tr>
        <td>
          <label htmlFor="firstName">Imię:</label>
        </td>
        <td>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span style={{ color: "red" }}>{errors.firstName}</span>
          )}
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="lastName">Nazwisko:</label>
        </td>
        <td>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span style={{ color: "red" }}>{errors.lastName}</span>
          )}
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="age">Wiek:</label>
        </td>
        <td>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && (
            <span style={{ color: "red" }}>{errors.age}</span>
          )}
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="country">Państwo:</label>
        </td>
        <td>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="Polska">Polska</option>
            <option value="Niemcy">Niemcy</option>
            <option value="Francja">Francja</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="phone">Telefon:</label>
        </td>
        <td>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <span style={{ color: "red" }}>{errors.phone}</span>
          )}
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="email">Adres e-mail:</label>
        </td>
        <td>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email}</span>
          )}
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="desc">Opis problemu:</label>
        </td>
        <td>
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />
          {errors.desc && (
            <span style={{ color: "red" }}>{errors.desc}</span>
          )}
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button type="submit">Wyślij</button>
        </td>
      </tr>
    </tbody>
  </table>
</form>

          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default ContactForm;
