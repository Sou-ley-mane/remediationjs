const toggle = document.getElementById('toggle')
const menuEl = document.getElementById('menu')
const contenu = document.getElementById('list')
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
                sousMenu: []
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
                    iconD: ""
                },

                {
                    iconG: "fa-solid fa-chart-pie",
                    text: "Flot",
                    iconInter: "fa-solid fa-chart-pie",
                    iconD: ""
                }, {
                    iconG: "fa-solid fa-chart-pie",
                    text: "inline",
                    iconInter: "fa-solid fa-chart-pie",
                    iconD: ""
                }, {
                    iconG: "fa-solid fa-chart-pie",
                    text: "uPlot",
                    iconInter: "fa-solid fa-chart-pie",
                    iconD: "",
                    niveau: 2,
                    sousMenu: []
                }
            ]

        },
        // {
        //     iconG: "fa-solid fa-chart-pie",
        //     text: "Chartsjs",
        //     iconInter: "fa-solid fa-chart-pie",
        //     iconD: ""
        // }, 
        // {
        //     iconG: "fa-solid fa-chart-pie",
        //     text: "Flot",
        //     iconInter: "fa-solid fa-chart-pie",
        //     iconD: "fa-solid fa-angle-down"
        // },
        // {
        //     iconG: "fa-solid fa-chart-pie",
        //     text: "inline",
        //     iconInter: "fa-solid fa-chart-pie",
        //     iconD: "fa-solid fa-angle-down"
        // },
        // {
        //     iconG: "fa-solid fa-chart-pie",
        //     text: "uPlot",
        //     iconInter: "fa-solid fa-chart-pie",
        //     iconD: "fa-solid fa-angle-down"
        // },
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
    // ************************************
    // sous = [{
    //             iconG: "fa-solid fa-chart-pie",
    //             text: "Chartsjs",
    //             iconInter: "fa-solid fa-chart-pie",
    //             iconD: "fa-solid fa-angle-down"
    //         },

//         {
//             iconG: "fa-solid fa-chart-pie",
//             text: "Flot",
//             iconInter: "fa-solid fa-chart-pie",
//             iconD: "fa-solid fa-angle-down"
//         }, {
//             iconG: "fa-solid fa-chart-pie",
//             text: "inline",
//             iconInter: "fa-solid fa-chart-pie",
//             iconD: "fa-solid fa-angle-down"
//         }, {
//             iconG: "fa-solid fa-chart-pie",
//             text: "uPlot",
//             iconInter: "fa-solid fa-chart-pie",
//             iconD: "fa-solid fa-angle-down"
//         }
//     ]
// *****************Fonction*****************
function CreationMenu(iconG, txt, iconInter, iconD) {
    const i = document.createElement('i')
    const span = document.createElement('span')
    const j = document.createElement('i')
    const k = document.createElement('i')
        // *******************************************
    j.setAttribute('class', iconG)
    j.id = "iconG"
    span.innerHTML = txt
    span.id = "text"
    i.setAttribute('class', iconInter)
    i.id = "iconInter"
    k.setAttribute('class', iconD)
    k.id = "iconD"
    k.classList.toggle("genererSousMenu")

    // contenu.appendChild(div)
    // ***************************************
    const case1 = document.createElement('div')
    case1.id = "case1"
    const case2 = document.createElement('div')
    case2.id = "case2"
    const case3 = document.createElement('div')
    case3.id = "case"
    const case4 = document.createElement('div')
    case4.id = "case"
        // ***********************************
    case1.appendChild(j)
    case2.appendChild(span)
    case3.appendChild(i)
    case4.appendChild(k)
        // *********************************************
        // console.log(contenu)

    const div = document.createElement('div')
    div.id = "merci"
        // div.className('hidden')
        // **********************************
        // CreationMenu(iconG, txt, iconInter, iconD);
    div.appendChild(case1)
    div.appendChild(case2)
    div.appendChild(case3)
    div.appendChild(case4)
        // ****************************
        // case4.addEventListener('click', (e) => {
        //     alert("list sous menu")
        // })

    // ******************************
    contenu.appendChild(div)
    k.addEventListener('click', () => {
        sousMenu = k.parentElement.parentElement.nextElementSibling;
        k.classList.toggle("rotation")
        if (sousMenu.style.display == "none") {
            sousMenu.style.display = "flex"
        } else {
            sousMenu.style.display = "none"
        }
    })

}
// menu
// bouton.addEventListener('click', () => {
menu.forEach((objet) => {
    iconG = objet["iconG"]
    txt = objet["text"]
    iconInter = objet["iconInter"]
    iconD = objet["iconD"]
    sous = objet["sousMenu"]
        // ************************************************
    CreationMenu(iconG, txt, iconInter, iconD)
    if (menu.sous.length != 0) {
        Affiche()
    }




})




toggle.addEventListener('click', () => {

    menuEl.classList.toggle("show")
    menuEl.classList.toggle("show-nav")
    menuEl.classList.toggle("show-a")


    // .classList.add('show-nav')
    // alert('azerty')
})

// btn.addEventListener('click', () => {

// })

function Affiche() {
    sous.forEach((objet) => {
        iconG = objet["iconG"]
        txt = objet["text"]
        iconInter = objet["iconInter"]
        iconD = objet["iconD"]
        CreationMenu(iconG, txt, iconInter, iconD);


    })
}