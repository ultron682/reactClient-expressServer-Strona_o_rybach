import styles from "./styles.module.css";
import React, { useState } from "react";

import Navbar from "../Navbar";


const ContactForm = () => {
  const [imie, setImie] = useState("");
  const [nazw, setNazw] = useState("");
  const [wiek, setWiek] = useState("");
  const [panstwo, setPanstwo] = useState("p");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [uwagi, setUwagi] = useState("");
  const [zainteresowania, setZainteresowania] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      imie,
      nazw,
      wiek,
      panstwo,
      telefon,
      uwagi,
      zainteresowania: zainteresowania.join(", "),
    };
    const confirmation = `Czy potwierdzasz poniższe dane?\nEmail: 
    ${email}\nImię i nazwisko: ${imie} ${nazw}\nPaństwo: 
    ${panstwo}\nWiek: ${wiek}\nUwagi: 
    ${uwagi}\nZainteresowania: ${zainteresowania.join(", ")}`;
    if (window.confirm(confirmation)) {
      // Tutaj możesz dodać kod obsługujący wysłanie danych formularza, np. za pomocą fetch lub Axios
      console.log("Dane formularza:", formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "imie":
        setImie(value);
        break;
      case "nazw":
        setNazw(value);
        break;
      case "wiek":
        setWiek(value);
        break;
      case "panstwo":
        setPanstwo(value);
        break;
      case "telefon":
        setTelefon(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "uwagi":
        setUwagi(value);
        break;
      case "zainteresowanie":
        if (e.target.checked) {
          setZainteresowania([...zainteresowania, value]);
        } else {
          setZainteresowania(zainteresowania.filter((item) => item !== value));
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar></Navbar>

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
          <form onSubmit={handleFormSubmit}>
            <h4>Zacznijmy od początku... Czego dotyczy zgłoszenie?</h4>
            <div class="form-check">
              <input
                class="form-check-input"
                id="fix"
                type="radio"
                name="reportType"
              />
              <label class="form-check-label" htmlFor="fix">
                Poprawa literówki/błędu na stronie
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                id="placement"
                type="radio"
                name="reportType"
              />
              <label class="form-check-label" htmlFor="placement">
                Lokowanie produktu
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                checked
                id="contact"
                type="radio"
                name="reportType"
              />
              <label class="form-check-label" htmlFor="contact">
                Inne
              </label>
            </div>

            <h4>Twoje podstawowe dane</h4>
            <table>
              <tr>
                <td>
                  <label htmlFor="imie">Imię: </label>
                </td>
                <td>
                  <input
                    class="form-control"
                    onChange="onFormElementChange()"
                    id="imie"
                    type="text"
                    maxLength="20"
                    size="30"
                  />
                </td>
                <td className={styles["error"]}>Wpisz poprawne Imię!</td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="naz">Nazwisko: </label>
                </td>
                <td>
                  <input
                    class="form-control"
                    onChange="onFormElementChange()"
                    id="naz"
                    type="text"
                    maxLength="20"
                    size="30"
                  />
                </td>
                <td className={styles["error"]}>Wpisz poprawne Nazwisko!</td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="wiek">Wiek: </label>
                </td>
                <td>
                  <input
                    class="form-control"
                    onChange="onFormElementChange()"
                    id="wiek"
                    type="number"
                    min="1"
                    max="150"
                  />
                </td>
                <td className={styles["error"]}>Wpisz poprawny wiek!</td>
              </tr>
              <tr>
                <td>Państwo:</td>
                <td>
                  <select class="form-control" id="panstwo" name="panstwo">
                    <option value="p">Polska</option>
                    <option value="n">Germany</option>
                    <option value="i">Italy</option>
                  </select>
                </td>
                <td className={styles["error"]}>Wybierz swoje państwo!</td>
              </tr>
              <tr>
                <td>Telefon:</td>
                <td>
                  <input
                    class="form-control"
                    onChange="onFormElementChange()"
                    type="number"
                    name="telefon"
                    id="telefon"
                  />
                </td>
                <td className={styles["error"]}>
                  Wpisz poprawny numer telefonu!
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Adres kontaktowy e-mail: </label>
                </td>
                <td>
                  <input
                    class="form-control"
                    onChange="onFormElementChange()"
                    id="email"
                    type="email"
                    name="email"
                    maxLength="30"
                    size="30"
                    placeholder="michalmazur@pollub.edu.pl"
                  />
                </td>
                <td className={styles["error"]}>Wpisz poprawny email!</td>
              </tr>
            </table>

            <h4>Wyjaśnij nam o co dokładniej chodzi...</h4>
            <textarea
              class="form-control"
              onChange="onFormElementChange()"
              id="uwagi"
              name="uwagi"
              cols="70"
              rows="5"
            ></textarea>

            <br />

            <div className={styles["buttonsForm"]}>
              <button class="btn btn-outline-primary" type="submit">
                Wyślij
              </button>
              <button class="btn btn-outline-danger" type="reset">
                Wyczyść
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
