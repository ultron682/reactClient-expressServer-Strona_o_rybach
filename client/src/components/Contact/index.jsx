import styles from "./styles.module.css";
import React, { useState } from "react";

function ContactForm() {
  const [imie, setImie] = useState("");
  const [nazw, setNazw] = useState("");
  const [wiek, setWiek] = useState("");
  const [panstwo, setPanstwo] = useState("p");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [uwagi, setUwagi] = useState("");
  const [zainteresowania, setZainteresowania] = useState([]);

  const handleFormSubmit = (e) => {
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
    const confirmation = `Czy potwierdzasz poniższe dane?\nEmail: ${email}\nImię i nazwisko: ${imie} ${nazw}\nPaństwo: ${panstwo}\nWiek: ${wiek}\nUwagi: ${uwagi}\nZainteresowania: ${zainteresowania.join(
      ", "
    )}`;
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
    <div className="content">
      <div className="contact">
        <h2>Szybkie info</h2>
        <h3>Aktualne informacje kontaktowe zawsze znajdziesz poniżej:</h3>

        <div className="shortInfo">
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

          <div id="map">{/* tu wygeneruje się mapa */}</div>
        </div>

        <h2>Formularz zgłoszenia</h2>
        <form onSubmit={handleFormSubmit}>
          <h4>Zacznijmy od początku... Czego dotyczy zgłoszenie?</h4>
          <div className="form-check">
            <input
              className="form-check-input"
              id="fix"
              type="radio"
              name="reportType"
            />
            <label className="form-check-label" htmlFor="fix">
              Poprawa literówki/błędu na stronie
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="placement"
              type="radio"
              name="reportType"
            />
            <label className="form-check-label" htmlFor="placement">
              Lokowanie produktu
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              checked
              id="contact"
              type="radio"
              name="reportType"
            />
            <label className="form-check-label" htmlFor="contact">
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
                  className="form-control"
                  onChange="onFormElementChange()"
                  id="imie"
                  type="text"
                  maxLength="20"
                  size="30"
                />
              </td>
              <td className="error">Wpisz poprawne Imię!</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="naz">Nazwisko: </label>
              </td>
              <td>
                <input
                  className="form-control"
                  onChange="onFormElementChange()"
                  id="naz"
                  type="text"
                  maxLength="20"
                  size="30"
                />
              </td>
              <td className="error">Wpisz poprawne Nazwisko!</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="wiek">Wiek: </label>
              </td>
              <td>
                <input
                  className="form-control"
                  onChange="onFormElementChange()"
                  id="wiek"
                  type="number"
                  min="1"
                  max="150"
                />
              </td>
              <td className="error">Wpisz poprawny wiek!</td>
            </tr>
            <tr>
              <td>Państwo:</td>
              <td>
                <select className="form-control" id="panstwo" name="panstwo">
                  <option value="p">Polska</option>
                  <option value="n">Germany</option>
                  <option value="i">Italy</option>
                </select>
              </td>
              <td className="error">Wybierz swoje państwo!</td>
            </tr>
            <tr>
              <td>Telefon:</td>
              <td>
                <input
                  className="form-control"
                  onChange="onFormElementChange()"
                  type="number"
                  name="telefon"
                  id="telefon"
                />
              </td>
              <td className="error">Wpisz poprawny numer telefonu!</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Adres kontaktowy e-mail: </label>
              </td>
              <td>
                <input
                  className="form-control"
                  onChange="onFormElementChange()"
                  id="email"
                  type="email"
                  name="email"
                  maxLength="30"
                  size="30"
                  placeholder="michalmazur@pollub.edu.pl"
                />
              </td>
              <td className="error">Wpisz poprawny email!</td>
            </tr>
          </table>

          <h4>Wyjaśnij nam o co dokładniej chodzi...</h4>
          <textarea
            className="form-control"
            onChange="onFormElementChange()"
            id="uwagi"
            name="uwagi"
            cols="70"
            rows="5"
          ></textarea>
          <h4>Wybierz swoje zainteresowania dla celów statystycznych...</h4>
          <div className="zainteresowania">
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie1"
                name="zainteresowanie"
                value="Programowanie"
              />
              <label className="form-check-label" htmlFor="zainteresowanie1">
                Programowanie
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie2"
                name="zainteresowanie"
                value="Sport"
              />
              <label className="form-check-label" htmlFor="zainteresowanie2">
                Sport
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie3"
                name="zainteresowanie"
                value="Muzyka"
              />
              <label className="form-check-label" htmlFor="zainteresowanie3">
                Muzyka
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie4"
                name="zainteresowanie"
                value="Sztuka"
              />
              <label className="form-check-label" htmlFor="zainteresowanie4">
                Sztuka
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie5"
                name="zainteresowanie"
                value="Podróże"
              />
              <label className="form-check-label" htmlFor="zainteresowanie5">
                Podróże
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie6"
                name="zainteresowanie"
                value="Gotowanie"
              />
              <label className="form-check-label" htmlFor="zainteresowanie6">
                Gotowanie
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie7"
                name="zainteresowanie"
                value="Języki obce"
              />
              <label className="form-check-label" htmlFor="zainteresowanie7">
                Języki obce
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie8"
                name="zainteresowanie"
                value="Fotografia"
              />
              <label className="form-check-label" htmlFor="zainteresowanie8">
                Fotografia
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie9"
                name="zainteresowanie"
                value="Film"
              />
              <label className="form-check-label" htmlFor="zainteresowanie9">
                Film
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie10"
                name="zainteresowanie"
                value="Książki"
              />
              <label className="form-check-label" htmlFor="zainteresowanie10">
                Książki
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie11"
                name="zainteresowanie"
                value="Motoryzacja"
              />
              <label className="form-check-label" htmlFor="zainteresowanie11">
                Motoryzacja
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie12"
                name="zainteresowanie"
                value="Historia"
              />
              <label className="form-check-label" htmlFor="zainteresowanie12">
                Historia
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie13"
                name="zainteresowanie"
                value="Moda"
              />
              <label className="form-check-label" htmlFor="zainteresowanie13">
                Moda
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie14"
                name="zainteresowanie"
                value="Innowacje
                        technologiczne"
              />
              <label className="form-check-label" htmlFor="zainteresowanie14">
                Innowacje
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie15"
                name="zainteresowanie"
                value="Nauka"
              />
              <label className="form-check-label" htmlFor="zainteresowanie15">
                Nauka
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie17"
                name="zainteresowanie"
                value="Gry komputerowe"
              />
              <label className="form-check-label" htmlFor="zainteresowanie17">
                Gry
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie18"
                name="zainteresowanie"
                value="Design"
              />
              <label className="form-check-label" htmlFor="zainteresowanie18">
                Design
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie19"
                name="zainteresowanie"
                value="Polityka"
              />
              <label className="form-check-label" htmlFor="zainteresowanie19">
                Polityka
              </label>
              <br />
            </div>
            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie20"
                name="zainteresowanie"
                value="Zwierzęta"
              />
              <label className="form-check-label" htmlFor="zainteresowanie20">
                Zwierzęta
              </label>
              <br />
            </div>

            <div className="zaintereElement">
              <input
                className="form-check-input"
                type="checkbox"
                id="zainteresowanie21"
                name="zainteresowanie"
                value="Zwierzęta"
              />
              <label className="form-check-label" htmlFor="zainteresowanie21">
                Komputery
              </label>
              <br />
            </div>
          </div>

          <br />

          <div className="buttonsForm">
            <button className="btn btn-outline-primary" type="submit">
              Wyślij
            </button>
            <button className="btn btn-outline-danger" type="reset">
              Wyczyść
            </button>
          </div>
        </form>

        <div className="buttonsForm">
          <button
            className="btn btn-success"
            type="button"
            id="btnLoad"
            onClick="loadFromLocalStorage()"
          >
            Dostępna wersja robocza. Załadować?
          </button>
          <button
            className="btn btn-primary"
            type="button"
            id="btnSave"
            onClick="saveToLocalStorage()"
          >
            Zapisz wersje roboczą
          </button>
          <button
            className="btn btn-danger"
            type="button"
            id="btnClear"
            onClick="clearFromLocalStorage()"
          >
            Usuń wersje roboczą
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
