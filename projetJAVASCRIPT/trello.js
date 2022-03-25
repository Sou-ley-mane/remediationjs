const contenu = document.querySelector('.contenu')
const ajouter = document.querySelector('.ajoutCol')
const tab = ["", "Black", "Pink", "Violet", "White", "Grey"]
let i = 0;


function createCol(array) {
    i++;

    const div = document.createElement('div')
    div.setAttribute('class', 'colonne')
    const sousDiv = document.createElement('div')
    sousDiv.setAttribute('class', 'titre')
    sousDiv.innerHTML = "Colonne" + "" + `${i}`
    const section = document.createElement('section')
    div.append(sousDiv, section)
    div.style.backgroundColor = array[i]
    return div
}

ajouter.addEventListener('click', () => {

    if (i <= 4) {
        contenu.appendChild(createCol(tab))
    }

})