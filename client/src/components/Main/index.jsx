import styles from "./styles.module.css";
import axios from "axios";
import React, { useState } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";

const Main = () => {
  const images = [img1, img2, img3];

  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div class="content">
          <div class="PageMain">
            <h2>Wędkarstwo</h2>

            <div className="slide-container">
              <Zoom scale={0.4}>
                {images.map((each, index) => (
                  <img key={index} style={{ width: "100%" }} src={each} />
                ))}
              </Zoom>
            </div>

            <h3>
              Wędkarstwo to nie tylko pasja, ale także styl życia. Nasza strona
              poświęcona jest temu pięknemu hobby i zawiera wiele cennych
              informacji dla początkujących i doświadczonych wędkarzy.
            </h3>
            <h3>
              Znajdziesz tu poradniki dotyczące wyboru odpowiedniego sprzętu
              wędkarskiego, technik połowu różnych gatunków ryb oraz informacje
              na temat najpiękniejszych miejsc do wędkowania w Polsce i na
              świecie. Omawiamy podstawowe techniki połowu, wyjaśniamy różnice
              między różnymi typami wędek i rozwiewamy najczęstsze wątpliwości
              dotyczące wyboru odpowiedniego sprzętu.
            </h3>
            <h3>
              Doświadczonych wędkarzy zachęcamy do zapoznania się z naszymi
              poradnikami poświęconymi technikom połowu konkretnych gatunków
              ryb, takich jak karp, szczupak czy sandacz. Przygotowaliśmy
              również wiele szybkich odpowiedzi dotyczących wędkarskich pytań.
            </h3>
            <h3>
              Na naszej stronie znajdziesz również wiele cennych uwag dla
              wędkarzy, gdzie można poznać porady i informację na temat
              najnowszych trendów w wędkarstwie.
            </h3>
            <h3>
              Zapraszamy na naszą stronę, aby odkryć świat wędkarstwa i cieszyć
              się pięknem natury podczas wspaniałych wędkarskich wypraw!
            </h3>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Main;
