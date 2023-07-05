prenom = prompt("Comment vous vous nommez ?");
var psg = prompt("Quel note donneriez vous cette saison pour le psg ?");

alert(
  "Vous vous appelez  " + prenom + " et vous avez donné comme note : " + psg
);

if (psg > 0 && psg < 5) {
  alert("Catastrophique");
} else psg > 5 && psg < 10;
{
  alert("Très moyen");
}
if (psg === 10) {
  alert("très juste");
} else if (psg > 10 && psg < 15) {
  alert("bon");
} else if (psg > 15 && psg < 17) {
  alert("très bien");
} else if (psg > 17 && psg < 20) {
  alert("Excellent");
}
// Surtout pour faire prompt le mieux est de faire 'var ' au lieur de 'let'
const slides = document.querySelectorAll(".slide");
const bullets = document.querySelectorAll(".bullet");
const sliders = document.querySelector(".slider");
let etape = 0;
let counter = 0;

let nbr__img = slides.length;

let precedent = document.querySelector(".arrowg");
let suivant = document.querySelector(".arrowd");

function enleverAcitveImages() {
  for (let i = 0; i < nbr__img; i++) {
    slides[i].classList.remove("active");
  }
}

suivant.addEventListener("click", function () {
  etape++;
  if (etape >= nbr__img) {
    etape = 0;
  }
  enleverAcitveImages();
  slides[etape].classList.add("active");
});

precedent.addEventListener("click", function () {
  etape--;
  if (etape < 0) {
    etape = nbr__img - 1;
  }
  enleverAcitveImages();
  slides[etape].classList.add("active");
});
var sliderNar = function (manual) {
  bullets.forEach((bulle) => {
    bulle.classList.remove("active");
  });
  slides.forEach((slider) => {
    slider.classList.remove("active");
  });
  bullets[manual].classList.add("active");
  slides[manual].classList.add("active");
};
bullets.forEach((bulle, i) => {
  bulle.addEventListener("click", () => {
    sliderNar(i);
  });
});
// formule pour faire descendre navbar
document.addEventListener("scroll", () => {
  const tete = document.querySelector(".head");
  if (window.scrollY > 150) {
    /* tete.style.background = linear - gradient(violet, blue);
    tete.style.transition = 2;
    tete.style.Height = "45px";*/
  } else {
    /*tete.style.background = black;
    tete.style.Height = "90px";*/
  }

  // Pour savoir nombre de pixel que fais le site internet en height il suffit de faire "console.log(document.body.offsetHeight)""
  let scrollvalue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  //image
  console.log(scrollvalue);
  //Popup
  if (scrollvalue > 0.89) {
    abonner.style.opacity = 1;
    abonner.style.transform = "translateX(600px)";
  }
});

let abonner = document.querySelector(".abonner");
