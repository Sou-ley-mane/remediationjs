// Recuperation des elemants du document HTML
const btn = document.querySelectorAll('button');
const notification = document.getElementById("affiche");
const informations = document.createElement('div')
informations.classList.add('affiche')
btn[0].addEventListener('click', (e) => {
    message(e, "Félicitation")
})
btn[2].addEventListener('click', (e) => {
    // alert("okk");
    message(e, "Merci")
})
btn[1].addEventListener('click', (e) => {
    message(e, "Attention")
})
btn[3].addEventListener('click', (e) => {
        message(e, "Sonatel")
    })
    // ***************Fonction************************************
function message(e, message) {
    const div = document.createElement('div');
    div.style.backgroundColor = getStyle('backgroundColor', e.target);
    div.classList.add('couleur')
    const p = document.createElement('p');
    p.innerHTML = message;
    div.appendChild(p);
    informations.appendChild(div);
    document.body.appendChild(informations)
    setTimeout(() => {
        informations.removeChild(div)
    }, 2000)
}

function getStyle(a, b) {
    return window.getComputedStyle(b, null)[a];
}