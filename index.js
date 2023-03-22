var nom = document.querySelector("#surname");
var form = document.querySelector(".inscription");

form.addEventListener("submit", (e) => {
  if (cgv.checked) {
  } else {
    alert("Veuillez accepter les conditions en cochant");
  }
});

var nom = prompt("Comment vous vous nommez ?");
var psg = prompt("Quel note donneriez vous cette saison pour le psg ?");

alert(
  "Vous vous appelez  " +
    nom +
    " et vous avez donné comme note : " +
    psg +
    " et il est tant d'en finir"
);

if (psg > 0 && psg < 5) {
  alert("Catastrophique");
} else psg > 5 && psg < 10;
{
  alert("Très moyen");
}
if (psg === 10) {
  alert("La moyenne");
} else if (psg > 10 && psg < 15) {
  alert("bon");
} else if (psg > 15 && psg < 17) {
  alert("très bien");
} else if (psg > 17 && psg < 20) {
  alert("Excellent");
}
// Surtout pour faire prompt le mieux est de faire 'var ' au lieur de 'let'
