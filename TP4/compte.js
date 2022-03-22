// Recuperation des objets
let bodyEl = document.getElementsByTagName("body")[0]
let titreEl = document.getElementById("titre")
let tempsEl = document.getElementById("temps")
let jour = document.getElementById("j")
let heure = document.getElementById("h")
let minute = document.getElementById("m")
let seconde = document.getElementById("s")
    // ***************intervale de temps***********:***
let now = new Date();
const dateOffsetEnMinute = now.getTimezoneOffset();
// **************Declaration des constante
const jourEnMs = 1000 * 60 * 60 * 24;
const heureEnMs = 1000 * 60 * 60;
const minuteEnMs = 1000 * 60;
// const newYear = new Date("2023");
const newYear = Date.now() - dateOffsetEnMinute * minuteEnMs + 7000;
// ******************Fonction pour compter le temps restant
const gererTemps = () => {
        // date actuelle
        let DateActu = Date.now()
            // // temps restant en Ms
        let tempsRestantMs = newYear - DateActu + dateOffsetEnMinute * minuteEnMs
            //     // temps restant en jour
        let nbrJour = Math.floor(tempsRestantMs / jourEnMs);
        // //    heures restant
        let tempsRestantSansJourEnMs = tempsRestantMs - nbrJour * jourEnMs;
        let nbrHeures = Math.floor(tempsRestantSansJourEnMs / heureEnMs)
            // // les minutes
        let tempsRestantSansHeurEnMs = tempsRestantSansJourEnMs - nbrHeures * heureEnMs;
        let nbrMinute = Math.floor(tempsRestantSansHeurEnMs / minuteEnMs)
            // // les secondes
        let tempsRestantSansMinutesEnMs = tempsRestantSansHeurEnMs - nbrMinute * minuteEnMs;
        let nbrSeconde = Math.floor(tempsRestantSansMinutesEnMs / 1000)
            // *******************************
        jour.textContent = nbrJour;
        heure.textContent = nbrHeures;
        minute.textContent = nbrMinute;
        seconde.textContent = nbrSeconde;
        // ********************************
        if (tempsRestantMs <= 0) {
            clearInterval(actualisation)
            bodyEl.style.backgroundImage = 'url("fireworks-gf6ebee281_640.jpg")'
            jour.textContent = 0;
            heure.textContent = 0;
            minute.textContent = 0;
            seconde.textContent = 0;
            titreEl.innerHTML = "BONNE ET HEUREUSE ANNÉE "
        }
    }
    // Appel de la fonction chaque mseconde
let actualisation = setInterval(gererTemps, 1000)
gererTemps();