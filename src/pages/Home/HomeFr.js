import React from "react";
import NavigationFr from "../../components/NavigationFr";
import EnglishButton from "../../components/EnglishButton";

const HomeFr = () => {
  return (
    <div className="home">
      <NavigationFr />
      <EnglishButton />
      <div className="homeContent">
        <div className="content">
          <h1>
            {" "}
            Quentin <br /> LAMAGNERE
          </h1>
          <h2>
            Dévelopeur Cursus Ingénieur <br /> niveau licence
          </h2>
          <div className="pdf">
            <a href="/ViewPdfFr" target="_blank">
              Mon CV pdf
            </a>
          </div>
          <div className="arrow">
            <a href="#mon_ancre">
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>

          <div id="mon_ancre" className="info">
            <h3>Actuellement à la recherche d'un Stage (5-6 mois)</h3>
            <p>
              <br />
              Je recherche un stage à partir d'août-septembre, pour une durée
              d'environ 5-6 mois. Je dois reprendre mes études à partir de début
              féfrier, c'est pourquoi je ne pourrais pas considérer d'offre pour
              un stage qui devrait durer jusqu'à février(inclu). <br />
              <br />
              <br />
            </p>
            <h3> Missions recherchées</h3>
            <p>
              <br />
              En tant que jeune développeur ayant fait ses début dans le
              développement onchain il y a environ un an, je serais enchanté de
              trouver un stage/mission en lien avec la programmation solidity
              et/ou l'intégration de smart-contracts.
              <br />
              <br />
              Je suis également disposé à accepter des offres liées au
              développement d'applications plus traditionnelles en
              react(typeScript ou non), html/css (scss ou non) et javascript.
              <br />
              <br />
              Plus que motivé pour en apprendre plus sur le développement
              d'applications en ligne, j'ai déjà hâte de travailler avec vous
              sur de nouveaux projets !
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFr;
