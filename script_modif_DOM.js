// Modification n°1
function changeTitles(h1, p) {
  element = document.getElementsByTagName("h1")[0];
  element.textContent = h1;
  element.nextSibling.nextSibling.textContent = p;
}
changeTitles("Ce que j'ai appris à THP", "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");

// Modification n°2
function changeCallToActions(primary, primary_href, secondary, secondary_href ) {
  primary_cta = document.getElementsByClassName("btn-primary")[0];
  primary_cta.textContent = primary;
  primary_cta.setAttribute("href", primary_href);

  secondary_cta = document.getElementsByClassName("btn-secondary")[0];
  secondary_cta.textContent = secondary;
  secondary_cta.setAttribute("href", secondary_href);
}
changeCallToActions("OK je veux tester !", "http://www.thehackingproject.org", "Non Merci", "https://www.pole-emploi.fr/accueil/")

// Modification n°3
function changeLogoName(brand, size) {
  nav_brand = document.getElementsByClassName("navbar-brand")[0].getElementsByTagName("strong")[0];
  nav_brand.textContent = brand;
  nav_brand.style.fontSize = size;
}
changeLogoName("The THP Experience", "2em");

// Modification n°4
function populateImages(imagesArray) {
  for(let index in imagesArray) {
    test = document.getElementsByClassName("card-img-top")[index];
    test.src = imagesArray[index];
  }
}
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
populateImages(imagesArray)

// Modification n°5
function deleteLastCards(number){
  cards = document.getElementsByClassName("col-md-4").length;

  var cardList = document.getElementsByClassName("col-md-4");

  for(let i = cards-1; i > cards-number-1; i--){
    cardList[i].remove()
  }
}
deleteLastCards(4)

// Modification n°6
function changeCardsText(cardsText){
  for(let index in cardsText) {
    text = document.getElementsByClassName("card-text")[index];
    text.textContent = cardsText[index];
  }
}
let cardsText = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
changeCardsText(cardsText)

// Modification n°7
function changeViewButtons(cardsText){
  let butts = document.querySelectorAll("div > button.btn-outline-secondary");

  for(let i in butts) {
    if (butts[i].innerText === "View") {
      butts[i].classList.remove("btn-outline-secondary");
      butts[i].classList.add(cardsText);
    }
  }
}
changeViewButtons("btn-success")
