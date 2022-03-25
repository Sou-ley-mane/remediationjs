const main = document.getElementById("main")
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// **************************************************************************
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// *************************************************************************
const input = document.querySelector('input')
fetch(APIURL)
    .then(function(donnees) {
        donneesEnJson = donnees.json();
        console.log(donneesEnJson);
        return donneesEnJson;
    })
    .then(function(resultat) {
        resultat.results.forEach(element => {
            textH3 = element.title
            textSpan = element.vote_average
            src = IMGPATH + element.backdrop_path
            description = element.overview;
            main.appendChild(newDiv(src, textH3, textSpan, "Overview", description))
        });
    })

// ***************************************************
function Newh3(txt) {
    const h3 = document.createElement("h3")
    h3.innerHTML = txt
    return h3;
}

function NewSpan(txt) {
    const span = document.createElement("span")
    span.classList.add("green")
    span.innerHTML = txt
    return span
}

function sousDiv1(textH3, textSpan) {
    const div = document.createElement("div")
    Newh3(textH3)
    NewSpan(textSpan)
    div.classList.add("movie-info")
    div.appendChild(Newh3(textH3))
    div.appendChild(NewSpan(textSpan))
    return div;
}

function sousDiv2(textH33, dscription) {
    const div = document.createElement("div")
    div.classList.add("overview")
    Newh3(textH33)
    const p = document.createElement("p")
    p.innerHTML = dscription
    div.appendChild(Newh3(textH33))
    div.appendChild(p)
    return div;


}


// ******************************************
function newDiv(src, textH3, textSpan, textH33, dscription) {
    const div = document.createElement("div")
    div.classList.add("movie")
    const img = document.createElement("img")
    img.src = src
    div.appendChild(img)
    div.appendChild(sousDiv1(textH3, textSpan))
    div.appendChild(sousDiv2(textH33, dscription))
    return div;
}



// ****************Recherch
input.addEventListener('input', () => {
    main.innerHTML = ""
    let saisi = input.value
    fetch(SEARCHAPI + saisi)
        .then(function(donnees) {
            donneesEnJson = donnees.json();
            return donneesEnJson;
        })
        .then(function(resultat) {
            resultat.results.forEach(element => {
                textH3 = element.title
                textSpan = element.vote_average
                src = IMGPATH + element.backdrop_path
                description = element.overview;
                main.appendChild(newDiv(src, textH3, textSpan, "Overview", description))
            });



        })
})