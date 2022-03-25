const main = document.getElementById('main')
const alea = "https://www.themealdb.com/api/json/v1/1/random.php";
const identifiant = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const nom = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const input = document.getElementById("input");
const imgFood = "food.jpg";
const imgCoeur = "coeur.png";

// ************************************  
const popup = document.querySelector('.popup');
// console.log(popup);
// ************************************

fetch(alea)
    .then(function(donnees) {
        // console.log(donneesJson); 
        return donnees.json()
    })
    .then(function(resultat) {
        source = resultat.meals[0]["strMealThumb"];
        titre = resultat.meals[0]["strMeal"]
        newDiv(source, titre)
        main.appendChild(newDiv(source, titre))
    })

function newDiv(source, txt) {
    const div = document.createElement('div')
    div.setAttribute('class', 'list')
    const sousDiv1 = document.createElement('div')
    sousDiv1.setAttribute('class', 'ok')
    const h3 = document.createElement('h3')
    h3.setAttribute('class', 'generer ')
    h3.innerHTML = "Generer une Recettes"
    const image1 = document.createElement('img')
    image1.setAttribute('id', 'image1')
    image1.src = source
    sousDiv1.appendChild(h3)
    sousDiv1.appendChild(image1)
    div.appendChild(sousDiv1)

    const sousDiv2 = document.createElement('div')
    sousDiv2.setAttribute('class', 'coeur')
    const h1 = document.createElement('h1')
    h1.innerHTML = txt
    const image2 = document.createElement('img')
    image2.src = imgCoeur
    image2.setAttribute('class', 'iconCoeur')
    sousDiv2.appendChild(h1)
    sousDiv2.appendChild(image2)
    div.appendChild(sousDiv2)
    h3.addEventListener('click', () => {
        location.reload()

    })
    image2.addEventListener('click', () => {
        popup.classList.toggle("delete")

    })
    return div

}

input.addEventListener("input", () => {
    // recherce.innerHTML = ""
    const recherce = document.querySelector('.recherce')
    let saisi = input.value;

    fetch(identifiant + saisi)

    .then(donnees => {
        donnees.json()
            .then(resultat => {
                resultat.meals.forEach(element => {
                    source = element.strMealThumb
                    titre = element.strMeal
                    newDiv(source, titre)
                    recherce.appendChild(newDiv(source, titre))
                });
                // source = resultat.meals[0]["strMealThumb"];
                // titre = resultat.meals[0]["strMeal"]
            })
    })

})