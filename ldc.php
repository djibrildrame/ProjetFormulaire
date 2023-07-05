<!DOCTYPE html>
<html lang="FR">


<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Incroyablement Parisien</title>
<link rel="shortcut icon" href="/channels4_profile.jpeg">
<link rel="stylesheet" href="./style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
    href="https://fonts.googleapis.com/css2?family=Anton&family=Cairo:wght@600&family=Kanit&family=Oswald:wght@200;400&family=Raleway:wght@100;500;700&display=swap"
    rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

<head>
    <header class="entete" style="height : 90px">
        <div>
            <a href="ldc.php">
                <p class="incroyable"><img src="./img/channels4_profile-removebg-preview-removebg-preview.png"
                        alt="picture" height="90" width="100"></p>
                <h1 class="titre"><strong>incroyab<span class="blanc">lement</span> <span
                            class="rouge">Parisien</span></strong> </h1>
            </a>
        </div>
        <div>
            <nav class="navbar">
                <a class="accueil index" href="ldc.php">Accueil</a>
                <a class="services index" href="#">Services</a>
                <a class="contact index" href="#">Contact</a>
            </nav>
        </div>
    </header>
</head>



<article class="ul">

    <a href="https://www.youtube.com/channel/UCZ04p-WG6kbtWdtB-uc0z5g"><img
            src="./img/Logo-Youtube-ohdvktk2qymab013tu993pjioyzjr081q261oaym0w.png" class="lien youtube"
            alt="youtube lien"></a>
    <h3 class="logoyoutube">YOUTUBE</h3>
    <a href="https://www.tiktok.com/@incroyablement_parisien?_t=8YpBXqmglDp&_r=1"><img src="./img/tik-tok-680x383.jpeg"
            class="lien" alt=" tiktok lien"></a>
    <h3 class="logotiktok">TIKTOK</h3>
    <a href="https://instagram.com/incroyablement_parisien?igshid=YmMyMTA2M2Y= "><img
            src="./img/darkmode-instagram-removebg-preview.png" class="lien instagram" alt="instagram lien"></a>
    <h3 class="logoinsta">INSTAGRAM</h3>



</article>



<body>

    <div class="slider">
        <div class="slide active">
            <a href="presentation.php">
                <img src="./img/presentation.jpeg" alt="Slide 1">
                <div class="text">
                    <p class="para">MA PRESENTATION<br>
                        <span class="phrase">Qui suis je ?</span>
                    </p>
            </a>
        </div>
    </div>

    <div class="slide">
        <a href="effectif.php">
            <img src="img/effectif.jpeg" alt="Slide 2">
            <div class="text">
                <p class="para">EFFECTIF<br>
                    <span class="phrase">L'effectif actuel du PSG</span>
                </p>
        </a>
    </div>
    </div>
    <div class="slide">
        <a href="trophé.php">
            <img src="img/hp-trophy-room.jpeg" alt="Slide 3">
            <div class="text">
                <p class="para">PALMARÈS<br>
                    <span class="phrase">Tous les trophées du PSG</span>
                </p>
        </a>
    </div>
    </div>
    <div class="navigation">
        <img class="arrowg" src="img/arrow_left copie.png" alt="Précedent ">
        <img class="arrowd" src="img/arrow_right copie.png" alt="Suivant">
    </div>
    </div>

    <div class="bullets-container">
        <div class="bullet active"></div>
        <div class="bullet"></div>
        <div class="bullet"></div>
    </div>

    <h3>Actualité</h3>

    <article class="principal">
        <a href="mbappe.php">
            <h4>L'attaque de Kylian Mbappe envers le PSG!</h4>
            <img class="Mbappe" src="img/Mbappe actu.jpeg" alt="Mbappe actu">
        </a>
    </article>

    <h3 class="autre">Autre rubrique</h3>


    <div class="rubrique">
        <article>
            <a href="messi.php"> <img class='messi' src="messi.jpeg" alt="messi">
                <h4 class='textmessi'>Messi depart cet été ?</h4>
            </a>
        </article>
        <article>
            <a href="galtier.php"> <img class='galtier' src="Galtier.jpeg" alt="messi">
                <h4 class='textgaltier'>Galtier accusé de racisme</h4>
            </a>
        </article>
        <article>
            <a href="nasser.php"> <img class='nasser' src="img/nasser.jpeg" alt="messi">
                <h4 class='textnasser'>Galtier accusé de racisme</h4>
            </a>
        </article>

    </div>


    <div>
        <h5 class="abonner">
            Et surtout n'oublie pas de t'abonner sur tous les reseaux!
        </h5>
    </div>



    <script src="index.js"></script>
</body>


<?php include('footer.php') ?>

</html>