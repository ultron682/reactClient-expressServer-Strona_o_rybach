// import styles from "./styles.module.css";
import axios from "axios";
import React, { useState } from "react";

import Navbar from "../Navbar";

import "./pageAboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div class="content">
        <div class="about-us">
          <div class="oneColumn">
            <img src={require('./aboutus.jpg')} alt="" />
          </div>

          <div class="oneColumn">
            <h2>O nas</h2>
            <p class="text">
              Część główna podstrony "O nas" opisuje naszą misję, cele i
              filozofię działania. Przedstawiamy tutaj nasze zaangażowanie w
              rozwijanie tej dziedziny i zwiększanie świadomości na temat
              ochrony zasobów wodnych. Sekcje z trzema podpunktami obejmują
              następujące tematy: naszą historię, nasze wartości oraz zespół. W
              sekcji "Nasza historia" prezentujemy nasze doświadczenia i etapy
              rozwoju firmy, które przyczyniły się do jej sukcesu. W sekcji
              "Nasze wartości" przedstawiamy nasze najważniejsze cele i
              wartości, które są naszymi fundamentami. W ostatniej sekcji, "Nasz
              zespół", przedstawiamy naszych pracowników i opisujemy ich
              doświadczenie, umiejętności oraz role, jakie pełnią w naszej
              firmie. Inna sekcja podstrony "O nas" poświęcona jest naszym
              klientom i współpracownikom. Przedstawiamy tutaj naszą ofertę,
              jakie korzyści oferujemy naszym klientom oraz jak dbamy o naszych
              partnerów biznesowych. Opisujemy nasze zaangażowanie w tworzenie
              pozytywnych relacji z naszymi klientami i partnerami oraz podajemy
              przykłady naszych dotychczasowych sukcesów. Zapraszamy na naszą
              stronę internetową, aby poznać lepiej naszą firmę i pasję, jaką
              łączy nas z wędkarstwem.
            </p>

            <div class="choose-us">
              <h2>
                Oto trzy powody, dla których warto zdecydować się na wędkowanie:
              </h2>
              <div class="boxsContainer">
                <div class="box">
                  <div class="step">
                    <div class="circle">
                      <span class="advantage">1</span>
                    </div>
                  </div>
                  <p>
                    Relaks i odpoczynek na świeżym powietrzu - Wędkowanie
                    pozwala na spędzenie czasu na łonie natury, z dala od
                    miejskiego zgiełku i codziennych obowiązków. Jest to
                    doskonały sposób na relaks i odprężenie się, a także na
                    obcowanie z pięknymi krajobrazami i dziką przyrodą.
                  </p>
                </div>
                <div class="box">
                  <div class="step">
                    <div class="circle">
                      <span class="advantage">2</span>
                    </div>
                  </div>
                  <p>
                    Nowe wyzwania i emocje - Każda wyprawa wędkarska to nowe
                    wyzwanie i szansa na zdobycie emocji. Łowienie ryb to nie
                    tylko sposób na spędzenie czasu, ale także okazja do
                    poznania nowych gatunków ryb i technik połowowych. Udało Ci
                    się złapać wymarzonego okonia? To już jest powód do dumy i
                    radości!
                  </p>
                </div>
                <div class="box">
                  <div class="step">
                    <div class="circle">
                      <span class="advantage">3</span>
                    </div>
                  </div>
                  <p>
                    Możliwość spędzenia czasu z rodziną i przyjaciółmi -
                    Wędkowanie to doskonała forma spędzania czasu z rodziną i
                    przyjaciółmi. Można łowić ryby, rozmawiać, śmiać się i
                    cieszyć wspólnie spędzonym czasem. To także doskonała okazja
                    do uczenia się od siebie nawzajem i dzielenia się swoimi
                    doświadczeniami wędkarskimi.
                  </p>
                </div>
              </div>
            </div>

            <div class="advantages">
              <h2>Nasze zalety</h2>
              <ul>
                <li>
                  <p>
                    Relaks i odpoczynek - Wędkowanie pozwala na spędzenie czasu
                    na łonie natury, co z kolei sprzyja relaksowi i
                    odpoczynkowi.
                  </p>
                </li>
                <li>
                  <p>
                    Kontakt z naturą - Wędkarstwo pozwala na kontakt z przyrodą,
                    obserwowanie różnych gatunków ryb i ptaków, co zwiększa
                    świadomość ekologiczną i szacunek dla środowiska
                    naturalnego.
                  </p>
                </li>
                <li>
                  <p>
                    Wspólna zabawa - Wędkowanie może być świetnym sposobem na
                    spędzenie czasu z rodziną lub przyjaciółmi.
                  </p>
                </li>
                <li>
                  <p>
                    Aktywność fizyczna - Wędkowanie wymaga ruchu i aktywności
                    fizycznej, co może być korzystne dla zdrowia.
                  </p>
                </li>
                <li>
                  <p>
                    Łowienie własnej żywności - Wędkowanie może być sposobem na
                    zdobycie świeżych, zdrowych ryb do spożycia.
                  </p>
                </li>
                <li>
                  <p>
                    Poprawa umiejętności - Wędkowanie wymaga nauki i
                    doskonalenia technik, co może wpłynąć pozytywnie na rozwój
                    umiejętności i cierpliwości.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
