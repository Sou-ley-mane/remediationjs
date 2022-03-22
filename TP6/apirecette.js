let btn = document.getElementById('btn')
    // btn.addEventListener('click', () => {
    //     alert("Merci");
    // })

// **********************************************************
let menu = [{
        iconG: "fa-solid fa-copy",
        text: "Dashboard",
        iconInter: "",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: [{
                iconG: "fa-solid fa-copy fa-2px",
                text: "Dashboard",
                iconInter: "",
                iconD: "",
                niveau: 2,
                sousMenu: [

                ]
            }

        ]

    },
    {
        iconG: "fa-solid fa-copy",
        text: "Widgets",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-left",
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
        iconG: "fa-solid fa-copy",
        text: "layout options",
        iconInter: "fa-solid fa-chart-pie",
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
        iconG: "fa-solid fa-chart-pie",
        text: "Charts",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: [{
                iconG: "fa-solid fa-chart-pie",
                text: "Chartsjs",
                iconInter: "fa-solid fa-chart-pie",
                iconD: "",

            },

            {
                iconG: "fa-solid fa-chart-pie",
                text: "Flot",
                iconInter: "fa-solid fa-chart-pie",
                iconD: "",
                niveau: 1,
                sousMenu: []
            }, {
                iconG: "fa-solid fa-chart-pie",
                text: "inline",
                iconInter: "fa-solid fa-chart-pie",
                iconD: "",
                niveau: 1,
                sousMenu: []
            }, {
                iconG: "fa-solid fa-chart-pie",
                text: "uPlot",
                iconInter: "fa-solid fa-chart-pie",
                iconD: "",
                niveau: 1,
                sousMenu: []
            }
        ]

    },

    {
        iconG: "fa-solid fa-chart-pie",
        text: "UI Elements",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: [{

        }]
    }, {
        iconG: "fa-solid fa-chart-pie",
        text: "Forms",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: [{

        }]
    }, {
        iconG: "fa-solid fa-chart-pie",
        text: "Tables",
        iconInter: "fa-solid fa-chart-pie",
        iconD: "fa-solid fa-angle-left",
        niveau: 1,
        sousMenu: [{

        }]
    }
]

// ****************************ELEMENTS*************************
const sideBar = document.querySelector('.menu')

function newUl(iconG, txt, iconInter, iconD) {
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
    i1.setAttribute('class', iconInter)
    const a1 = document.createElement('a')
    a1.appendChild(i1)
    sousDiv2.appendChild(a1)
    div2.appendChild(sousDiv2)
        // *************************************************

    const sousDiv3 = document.createElement("div")
    sousDiv3.classList.add('p23')
    const i2 = document.createElement("i")
    i2.setAttribute('class', iconD)
    const a2 = document.createElement("a")
    a2.appendChild(i2)
    sousDiv3.appendChild(a2)
    div2.appendChild(sousDiv3)
        // *************************************************************
    li.appendChild(div2)

    ul.appendChild(li)
        // return ul;
    sideBar.appendChild(ul)

}


function CreationMenu(iconG, txt, iconInter, iconD) {
    newUl(iconG, txt, iconInter, iconD)
}

menu.forEach((objet, position) => {
        iconG = objet["iconG"]
        txt = objet["text"]
        iconInter = objet["iconInter"]
        iconD = objet["iconD"]
        sous = objet["sousMenu"]
        CreationMenu(iconG, txt, iconInter, iconD)
    })
    // ***************************************************
    // *****************Fonction*****************
    // function CreationMenu(iconG, txt, iconInter, iconD) {
    //     const i = document.createElement('i')
    //     const span = document.createElement('span')
    //     const j = document.createElement('i')
    //     const k = document.createElement('i')
    //         // *******************************************
    //     j.setAttribute('class', iconG)
    //     j.id = "iconG"
    //     span.innerHTML = txt
    //     span.id = "text"
    //     i.setAttribute('class', iconInter)
    //     i.id = "iconInter"
    //     k.setAttribute('class', iconD)
    //     k.id = "iconD"
    //         // k.classList.toggle("genererSousMenu")

//     // contenu.appendChild(div)
//     // ***************************************
//     const case1 = document.createElement('div')
//     case1.id = "case1"
//     const case2 = document.createElement('div')
//     case2.id = "case2"
//     const case3 = document.createElement('div')
//     case3.id = "case"
//     const case4 = document.createElement('div')
//     case4.id = "case"
//         // ***********************************
//     case1.appendChild(j)
//     case2.appendChild(span)
//     case3.appendChild(i)
//     case4.appendChild(k)
//         // *********************************************
//         // console.log(contenu)

//     const div = document.createElement('div')
//     div.id = "merci"
//         // div.className('hidden')
//         // **********************************
//         // CreationMenu(iconG, txt, iconInter, iconD);
//     div.appendChild(case1)
//     div.appendChild(case2)
//     div.appendChild(case3)
//     div.appendChild(case4)
//         // ****************************
//         // case4.addEventListener('click', (e) => {
//         //     alert("list sous menu")
//         // })

//     // ******************************
//     contenu.appendChild(div)
//     k.addEventListener('click', () => {
//         sousMenu = k.parentElement.parentElement.nextElementSibling;
//         k.classList.toggle("rotation")
//         if (sousMenu.style.display == "none") {
//             sousMenu.style.display = "flex"
//         } else {
//             sousMenu.style.display = "none"

//         }
//         // Affiche()
//         // sous.classList.toggle('masquer')
//         // alert(e.target)
//     })

// }

// toggle.addEventListener('click', () => {

//     // sideBar.classList.toggle("show-nav")
//     // sideBar.classList.toggle("show-a")


//     // .classList.add('show-nav')
//     // alert('azerty')
// })
const nom = document.getElementsByClassName('logo_name')
const input = document.getElementById("input")
btn.addEventListener('click', () => {
    sideBar.classList.toggle("show")
    const div = document.getElementsByTagName('p2')
    div.classList.toggle("show")
    nom.classList.toggle("show")
    input.classList.toggle("show")


})