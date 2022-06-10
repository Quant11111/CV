export const portfolioData = [
  {
    id: 1,
    name: "This CV",
    languages: ["javascript", "html/css", "react"],
    languagesIcons: ["fab fa-js", "fab fa-css3-alt", "fab fa-react"],
    source: "http://www.github.com",
    info: "As a new devellper who started using github efficiently only weaks ago, I dont have many shiny project saved from my studies. Thats why I include this CV as a tiny project showing my ability to build a simple reactive application on my own.",
    infofr:
      "Petit projet react faisant ofice de CV. J'espère que vous trouvez votre navigation agréable !",
    picture: "./media/cv.png",
  },
  {
    id: 2,
    name: "Blochain Lottery",
    languages: ["solidity"],
    languagesIcons: ["fab fa-ethereum"],
    source: "http://www.github.com",
    info: "Contracts of a classic blockchain lottery.",
    infofr: "Contract d'une lotterie blockchain classique",
    picture: "./media/lotterie.jpg",
  },
  {
    id: 3,
    name: "Escrow Transaction Factory",
    languages: ["solidity"],
    languagesIcons: ["fab fa-ethereum"],
    source: "http://www.github.com",
    info: "Factory generating Escrow Transactions. Here, any disagreement can lead to a trial solved by different juges who vote to solve the situation and share the tryal fees. THis system use a merkle proof to verifie that a juge is a member of our juge list (added after filling a KYC in order to avoid a single persone to vote several times for the same trial). The merkle proof is frequently use to avoid storing a large array into the blockchain but still keeping a short proof able to verrifie if an element (address) was part of the array (ex: for whitelists). This way, the verrification is gaz efficient even if the list is massive",
    infofr:
      "Usine à transaction escrow. Ici, tout litige donne lieu à un procès, lui même résolu par différents juges qui votent pour une solution. Les juges votant pour la solution choisie partagent les frais de transaction. Les juges sont ajoutés à la jugeList par notre team suite à leur demande et un KYC rempli afin d'éviter qu'une même personne possède plusieurs voix. La verrification  d'appartenance à la jugeList se fait au moyen d'un arbre de merkle dont seule la root est stockée onchain.",
    picture: "./media/escrow.png",
  },
  {
    id: 4,
    name: "2D VSFightingGame ",
    languages: ["javascript"],
    languagesIcons: ["fab fa-js"],
    source: "http://www.github.com",
    info: "This project is a 2d fighting game which you can already try on your pc by donloading it through the github link. It was all about understanding key listener in videogames and training my Js developer skills.",
    infofr:
      "Ce projet est un jeu de combat 2d assez basique. J'étais intéressé par le processus de création d'un jeu vidéo et la mise en place de listeners en js.",
    picture: "./media/game.png",
  },
  {
    id: 5,
    name: "BlockSwanFamily",
    languages: ["javascript", "html/css"],
    languagesIcons: ["fab fa-js", "fab fa-css3-alt"],
    source: "http://www.github.com",
    info: "A decentralized application where you can find freelances able to help building decentralised applications (graphist, dev, com,...). The real use of the application is to provide safe decentralized escrow contracts for their transactions. In the end, our purpose is to make this application fully decentralized by allowing users to join a Juge list by filling a QWC. This way, anyone will ve able so solve any disagreement by voting for the best solution. In the end of the trial, the juges who voted for the choosen solution share the transaction feez. If the transaction require no trial, the feez will then be almost inexistant.",
    infofr:
      "A decentralized application where you can find freelances able to help building decentralised applications (graphist, dev, com,...). The real use of the application is to provide safe decentralized escrow contracts for their transactions. In the end, our purpose is to make this application fully decentralized by allowing users to join a Juge list by filling a QWC. This way, anyone will ve able so solve any disagreement by voting for the best solution. In the end of the trial, the juges who voted for the choosen solution share the transaction feez. If the transaction require no trial, the feez will then be almost inexistant.",
    picture: "./media/blockswanFamily.png",
  },
  {
    id: 6,
    name: "test.io",
    languages: ["javascript", "react", "html/css", "solidity"],
    languagesIcons: [
      "fab fa-js",
      "fab fa-react",
      "fab fa-css3-alt",
      "fab fa-ethereum",
    ],
    source: "http://www.github.com",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    infofr:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: "./media/project1.JPG",
  },
];
