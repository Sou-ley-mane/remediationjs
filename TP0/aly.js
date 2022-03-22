const bouton = document.querySelector('button')
const contenu = document.querySelector('div')
    // console.log(contenu)










function newP() {
    const para = document.createElement('p')
    const text = document.createElement('span')
    text.innerText = "Ajout" + i
    const span = document.createElement('span')
    span.innerText = "x"
    span.addEventListener('click', (e) => {
        e.target.parentElement.remove()
        actualiser()
    })
    para.appendChild(text)
    para.appendChild(span)
    return para;
}


//  ******************Actualisation***************
function actualiser() {
    const listP = document.querySelectorAll('p')
    listP.forEach((p, i) => {
        p.firstChild.innerText = "Ajout" + (i + 1)
        p.id = "id_" + (i + 1)
    });
}

// *****************Evenement sur le bouton**********************
let i = 0
bouton.addEventListener('click', () => {
    i++
    paragraphe = newP();
    contenu.appendChild(paragraphe)

})