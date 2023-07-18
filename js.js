const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
const PSEUDO = document.querySelector("#pseudo");
let pseudo, email, password, confirmPass;
const progressBar = document.querySelector(".progressbar");
const pourcentage = document.querySelector(".mdp");
const passwordInput = document.getElementById("motdepasse");
const form = document.querySelector("form");

const errorDisplay = (tag, message, valid) => {
  const Container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    Container.classList.add("error");
    span.textContent = message;
  } else {
    Container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    PSEUDO.style.border = "3px solid red";
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "le pseudo ne doit pas contenir de caractère spéciaux"
    );
    PSEUDO.style.border = "3px solid red";
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    PSEUDO.style.border = "3px solid green";
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@.]+$/)) {
    errorDisplay("email", "L'email n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};
const passwordChecker = (value) => {
  if (!value.match(/(?=.*[A-Z])(?=.*[@$!%*?&-_])(?=.*\d).{8,}/)) {
    errorDisplay(
      "password",
      "Minimum de 8 caractères, une majuscule,un chiffre,et un caractère spécial"
    );
    progressBar.classList.add("progressred");
  } else if (value.length < 12) {
    errorDisplay("password", "70%", true);
    progressBar.classList.add("progressblue");
    pourcentage.classList.add("change");
    password = value;
  } else {
    errorDisplay("password", "100%", true);
    progressBar.classList.add("progressgreen");
    pourcentage.classList.add("change1");
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "motdepasse":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;

      default:
        null;
    }
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo: pseudo,
      email: email,
      password: password,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    progressBar.classList = "";
    pourcentage.style.opacity = 0;

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Inscription Validée");
  } else {
    alert("Veuillez remplir correctement les champs");
  }
});

setInterval(() => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r},${g},${b})`;
  document.body.style.background = color;
}, 1000);
