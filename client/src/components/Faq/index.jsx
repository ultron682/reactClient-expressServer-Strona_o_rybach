// import styles from "./styles.module.css";
import axios from "axios";
import React, { useState } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

const Faq = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div class="content">
          <div class="faq">
            <h2>Częste pytania</h2>
            <article id="faq">
              <h3>Jakie są najlepsze miejsca do wędkowania?</h3>
              <p>
                Najlepsze miejsca do wędkowania zależą od preferencji rybaka i
                gatunków ryb, które chce złowić. Najlepiej szukać miejsc, gdzie
                jest dobra widoczność pod wodą i dużo roślinności, ponieważ
                przyciąga to wiele ryb. Można również pytać wędkarzy w lokalnym
                sklepie wędkarskim o rekomendacje.
              </p>
              <h3>Jakie sprzęty i narzędzia są potrzebne do wędkowania?</h3>
              <p>
                Podstawowym sprzętem potrzebnym do wędkowania jest wędka,
                kołowrotek, żyłka, haczyk oraz przynęta. Istnieją różne typy
                wędek, kołowrotków i haczyków, które są odpowiednie do różnych
                gatunków ryb i stylów wędkowania.
              </p>

              <h3>Jakie przynęty są najlepsze?</h3>
              <p>
                Najlepsze przynęty zależą od gatunku ryby, która ma być
                złowiona, pory roku i warunków wodnych. Zazwyczaj najlepiej
                sprawdzają się przynęty, które przypominają naturalną zdobycz
                ryby, np. robaki, robaki mączne, żywe przynęty, mięso, czy
                sztuczne przynęty.
              </p>
              <h3>Jak dobierać rozmiar haczyka do przynęty?</h3>
              <p>
                Rozmiar haczyka zależy od wielkości przynęty oraz gatunku ryby,
                którą chcemy złowić. Zbyt mały haczyk może nie utrzymać dużej
                ryby, a zbyt duży haczyk może przeszkadzać w połowach mniejszych
                ryb. Zazwyczaj wybieramy haczyk, który jest odpowiedni do
                wielkości przynęty.{" "}
              </p>

              <h3>Jak dobierać grubość żyłki?</h3>
              <p>
                Grubość żyłki zależy od gatunku ryby oraz stylu wędkowania.
                Zazwyczaj stosuje się cieńsze żyłki do łowienia mniejszych ryb,
                a grubsze do łowienia większych ryb. Im cieńsza żyłka, tym
                trudniej jest złowić dużą rybę, ale łatwiej jest uniknąć
                wystraszenia mniejszych ryb.{" "}
              </p>

              <h3>Czy można łowić ryby przez cały rok?</h3>
              <ul>
                <li>
                  <p>
                    Tak, ale niektóre gatunki ryb nie są aktywne przez cały rok.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    Ważne jest, aby dostosować swoje połowy do pory roku i
                    warunków pogodowych. W okresie zimowym ryby są mniej
                    aktywne, więc warto stosować przynęty, które są bardziej
                    atrakcyjne dla ryb w tej porze roku.{" "}
                  </p>
                </li>
              </ul>

              <h3>Czy potrzebne jest pozwolenie na wędkowanie?</h3>
              <p>
                Tak, w większości przypadków potrzebne jest pozwolenie na
                wędkowanie. W każdym kraju i regionie mogą obowiązywać różne
                zasady, więc warto sprawdzić lokalne przepisy dotyczące
                pozwolenia na wędkowanie. Nielegalne wędkowanie może grozić karą
                pieniężną lub innymi sankcjami.{" "}
              </p>

              <h3>Jak dbać o sprzęt wędkarski?</h3>
              <p>
                Aby sprzęt wędkarski służył przez długi czas, należy dbać o jego
                czystość i konserwację. Po każdym łowieniu warto czyścić wędkę i
                kołowrotek z piasku, błota i zanieczyszczeń. Warto również
                regularnie smarować elementy ruchome i sprawdzać stan żyłki.
              </p>

              <h3>Czy można łowić ryby w każdym typie wody?</h3>
              <p>
                Tak, ale różne gatunki ryb preferują różne typy wody. Na
                przykład, niektóre ryby preferują stojące wody, podczas gdy inne
                preferują szybko płynące rzeki. Warto zapoznać się z
                preferencjami ryb i dopasować swoje połowy do typu wody.{" "}
              </p>

              <h3>
                Czy wędkowanie jest dobrym sposobem na spędzanie czasu z
                rodziną?
              </h3>
              <p>
                Tak, wędkowanie jest świetnym sposobem na spędzanie czasu z
                rodziną lub przyjaciółmi na świeżym powietrzu. Można łowić ryby,
                rozmawiać, cieszyć się piękną scenerią i jednocześnie uczyć się
                od siebie nawzajem. To także dobra okazja do nauki cierpliwości
                i odpoczynku od codziennych obowiązków.{" "}
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Faq;
