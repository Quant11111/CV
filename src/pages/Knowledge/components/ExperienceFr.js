import React from "react";

const ExperienceFr = () => {
  return (
    <div className="experience">
      <div className="experienceContent">
        <div>
          <h3>ISEP (Institut electronique de paris)</h3>
          <p>
            Etudiant de 4e année à l'ISEP (Institut Electronique Supérieur de
            Paris) spécialité Inovation et création d'entreprise. Mes études
            m'ont orientées vers le monde du développement et j'ai rapidement vu
            grandir mon intérêt pour la technologie blockchain et les
            revolutions technologiques qui en découlent.
          </p>
        </div>
        <br />
        <div>
          <h3>Contributeur BlockSwan</h3>
          <p>
            Je fais partie d'une entité numérique créée dans le but d'aider à
            l'acquisition de connaissances et à la compréhension des concepts
            touchant de près ou de loin à l'écosystème blockchain. Nous Avons
            développé un{" "}
            <a
              className="blockswan"
              href="https://blockswan.finance/"
              title="Come check it out !"
            >
              site web
            </a>{" "}
            que vous pouvez d'ores et déjà visiter, et serions ravis de vous
            ajouter à notre discord si vous souhaitez en apprendre plus sur la
            l'ecosystem onchain.
          </p>
        </div>
        <br />
        <div>
          <h3>Stage de developpement sinaps</h3>
          <p>
            J'ai aidé au développement d'une plateforme de partenariat qui
            souhaitait se décentraliser progressivement en implémentant
            certaines de leurs features onchain. Ce stage m'a permit de me
            plonger plus sérieusement dans le développement solidity, le testing
            de smart contracts, et l'implementation via des bibiothèques tel que
            ethers.js ou web3.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceFr;
