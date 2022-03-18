const bouton = document.querySelector('button')
const contenu = document.getElementById('list')
let menu = [{
        iconG: "fa-solid fa-copy",
        text: "Dashboard",
        iconInter: "",
        iconD: "fa-solid fa-angle-down"

    }, {
        iconG: "fa-solid fa-copy",
        text: "Widgets",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-down"
    }, {
        iconG: "fa-solid fa-copy",
        text: "layout options",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-down"
    }, {
        iconG: "fa-solid fa-chart-pie",
        text: "Charts",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-down"
    }, {
        iconG: "fa-solid fa-chart-pie",
        text: "Chartsjs",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-down"
    }, , {
        iconG: "fa-solid fa-chart-pie",
        text: "Flot",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-down"
    }, {
        iconG: "fa-solid fa-chart-pie",
        text: "inline",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-down"
    }, {
        iconG: "fa-solid fa-chart-pie",
        text: "uPlot",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-down"
    }, {
        iconG: "fa-solid fa-chart-pie",
        text: "UI Elements",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-down"
    }, {
        iconG: "fa-solid fa-chart-pie",
        text: "Forms",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-down"
    }, {
        iconG: "fa-solid fa-chart-pie",
        text: "Tables",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-down"
    }, {
        iconG: "",
        text: "EXEMPLES",
        iconInter: "",
        iconD: ""
    }]
    // *****************Fonction*****************
function CreationMenu(iconG, txt, iconInter, iconD) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const div = document.createElement('div')
    const a = document.createElement('a')
    const i = document.createElement('i')
    const j = document.createElement('i')
    const k = document.createElement('i')
    const span = document.createElement('span')
        // **************************************************
    ul.appendChild(li)
    li.appendChild(div)
    div.appendChild(a)
    a.appendChild(j)
    a.appendChild(span)
    div.appendChild(i)
    div.appendChild(k)

    // **********************************
    j.setAttribute('class', iconG)
    span.innerHTML = txt
    i.setAttribute('class', iconInter)
    k.setAttribute('class', iconD)
    contenu.appendChild(ul)
}


// menu
// bouton.addEventListener('click', () => {

menu.forEach(objet => {
        iconG = objet["iconG"]
        txt = objet["text"]
        console.log(txt)

        iconInter = objet["iconInter"]
        iconD = objet["iconD"]
        CreationMenu(iconG, txt, iconInter, iconD);
    })
    // document.body.appendChild(ul)
    // console.log(ul)
    // })