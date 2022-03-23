// **********************************************************
let menu = [{
        iconG: "fa-solid fa-gauge-high fa-2x",
        text: "Dashboard",
        iconInter: "",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: [{
                iconG: "fa-regular fa-circle",
                text: "Souleymane",
                iconInter: "",
                iconD: "",
                niveau: 2,
                sousMenu: []
            }

        ]

    },
    {
        // "fa-solid fa-table-cells"
        iconG: "fa-solid fa-table-cells fa-2x",
        text: "Widgets",
        iconInter: "New",
        iconD: "",
        niveau: 1,
        sousMenu: [{
            class: "sousMenu",
            iconG: "fa-solid fa-copy fa-2px",
            text: "Dashboard",
            iconInter: "",
            iconD: "",
            niveau: 2,
            sousMenu: [

            ]
        }]

    },
    {
        iconG: "fa-solid fa-copy fa-2x",
        text: "layout options",
        iconInter: "6",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: [{
            iconG: "fa-solid fa-copy fa-2px",
            text: "Dashboard",
            iconInter: "",
            iconD: "",
            niveau: 2,
            sousMenu: []
        }]
    }, {


        iconG: "fa-solid fa-chart-pie fa-2x",
        text: "Charts",
        iconInter: "",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: [{

                iconG: "fa-regular fa-circle",
                text: "Chartsjs",
                iconInter: "",
                iconD: "",

            },

            {
                iconG: "fa-regular fa-circle ",
                text: "Flot",
                iconInter: "",
                iconD: "",
                niveau: 1,

            }, {
                iconG: "fa-regular fa-circle",
                text: "inline",
                iconInter: "",
                iconD: "",
                niveau: 1,

            }, {
                iconG: "fa-regular fa-circle",
                text: "uPlot",
                iconInter: "",
                iconD: "",
                niveau: 1,

            }
        ]

    },

    {
        // "fa-solid fa-tree"
        iconG: "fa-solid fa-tree fa-2x",
        text: "UI Elements",
        iconInter: "",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: []
    }, {
        // "fa-solid fa-pen-to-square"
        iconG: "fa-solid fa-pen-to-square fa-2x",
        text: "Forms",
        iconInter: "",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: []
    }, {
        // "fa-solid fa-table"
        iconG: "fa-solid fa-table fa-2x",
        text: "Tables",
        iconInter: "",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: []
    }
]

// ****************************ELEMENTS*************************
const sideBar = document.querySelector('.menu')

function newUl(iconG, txt, txt1, iconD) {
    const ul = document.createElement('ul')
    ul.classList.add('nav_list')
    const li = document.createElement('li')
    const div1 = document.createElement('div')
    div1.classList.add('p1')
    const a = document.createElement('a')
    const i = document.createElement('i')
    i.setAttribute('class', iconG)
    a.appendChild(i)
    div1.appendChild(a)
    li.appendChild(div1)
        // ************************************
    const div2 = document.createElement('div')
    div2.classList.add('p2')
        // li.appendChild(div2)
        // **********************************************
    const sousDiv = document.createElement('div')
    sousDiv.classList.add('p22')
    const span = document.createElement('span')
    span.innerHTML = txt
    span.classList.add('links_name')
    sousDiv.appendChild(span)
    div2.appendChild(sousDiv)
        // ************************************************
    const sousDiv2 = document.createElement("div")
    sousDiv2.classList.add('p23')
    const i1 = document.createElement("i")
    i1.setAttribute("class", "new")
    i1.innerHTML = txt1

    // i1.setAttribute('class', iconInter)
    const a1 = document.createElement('a')

    // a1.setAttribute('id', 'a_' + i)

    a1.appendChild(i1)
    sousDiv2.appendChild(a1)
    div2.appendChild(sousDiv2)
        // *************************************************

    const sousDiv3 = document.createElement("div")
    sousDiv3.classList.add('p23')
    const i2 = document.createElement("i")
    i2.setAttribute('class', iconD)
        // i2.id = "iconD"
    const a2 = document.createElement("a")
    a2.appendChild(i2)
    i2.addEventListener('click', () => {
        i2.classList.toggle("rotation")
        listSousMenu = i2.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling
        listSousMenu.classList.toggle("masquer")

    })
    sousDiv3.appendChild(a2)
    div2.appendChild(sousDiv3)
        // *************************************************************
    li.appendChild(div2)

    ul.appendChild(li)
    return ul;



}


function CreationMenu(iconG, txt, iconInter, iconD, parent) {
    parent.appendChild(newUl(iconG, txt, iconInter, iconD))

}

menu.forEach((objet) => {
    iconG = objet["iconG"]
    txt = objet["text"]
    iconInter = objet["iconInter"]
    iconD = objet["iconD"]
    sous = objet["sousMenu"]

    CreationMenu(iconG, txt, iconInter, iconD, sideBar)
    if (sous.length != 0) {
        const div = document.createElement('div')
        div.classList.add("parDefaut")
        Affiche(div)
        sideBar.appendChild(div)
    }

})


const nom = document.getElementsByClassName('logo_name')
const input = document.getElementById("input")
const exemple = document.querySelector(".exemple")
const icon = document.querySelector("#toggle ")
    // console.log(exemple);

btn.addEventListener('click', () => {
    sideBar.classList.toggle("show")
    const div = document.getElementsByTagName('p2')
        // div.classList.toggle("show")
        // nom.classList.toggle("show")
    input.classList.toggle("show")
    exemple.classList.toggle("delete")
    icon.classList.toggle("delete")



})

function Affiche(div) {
    sous.forEach((objet) => {
        iconG = objet["iconG"]
        txt = objet["text"]
        iconInter = objet["iconInter"]
        iconD = objet["iconD"]
        CreationMenu(iconG, txt, iconInter, iconD, div);
    })
}

// // const listSousMenu = document.getElementsByClassName(iconD)
// console.log(listSousMenu);
// // listSousMenu.addEventListener('click', () => {
// //     alert("bonjour")
// // })

for (let i = 0; i < menu.length; i++) {
    menu[i].classList.add("id_" + i)

}