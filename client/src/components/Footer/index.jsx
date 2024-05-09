// import styles from "./styles.module.css";
import axios from "axios";
import React, { useState } from "react";

import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div class="footerContent">
        <p class="title">Wędkarz GURU</p>
        <div class="ad">
          <a href="https://github.com/ultron682"></a>
          <h2>
            Stworzone i rozwijane przez 
             <span class="detail"> Michała Mazura</span> z grupy 6.6
          </h2>
          <a href="https://github.com/ultron682">
            https://github.com/ultron682
          </a>
          <a href="./skadPomysl.html">Skąd pomysł na stronę?</a>
        </div>

        <div class="desc">
          <section class="social">
            <a href="#" target="_blank">
              <img alt="zdjecie" src={require("./follow_icon1.png")} />
            </a>
            <a href="#" target="_blank">
              <img alt="zdjecie" src={require("./follow_icon2.png")} />
            </a>
            <a href="#" target="_blank">
              <img alt="zdjecie" src={require("./follow_icon3.png")} />
            </a>
            <a href="#" target="_blank">
              <img alt="zdjecie" src={require("./follow_icon4.png")} />
            </a>
          </section>
          <p>Nadbystrzycka 16 Lublin 20-612</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
