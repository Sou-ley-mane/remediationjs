 const contenu = document.querySelector('.contenu')
 const ajouter = document.querySelector('.ajoutCol')
 const AjoutModal = document.querySelector('.ajoutModal')
 const corbeille = document.querySelector('.corbeille')
 const boiteCorbeil = document.querySelector('.voirCorbeil')
 const notification = document.querySelector('.notification')
 const ok = document.querySelector('.notifOk')
     //  *************************************
 const confirModal = document.getElementById("modal-confirm")
     //  let enfants = contenu.childElementCount
 const tab = ["linear-gradient(#eecda3,#ef629f)", "linear-gradient(#4ac29a, #bdfff3 )", "linear-gradient(#b2fefa,#0ed2f7)", "linear-gradient(#200122,#6f0000)", "linear-gradient(#4568dc,#b06ab3)"]
 let k = 0;
 //  *****************Save automatique**********************
 const save = document.querySelector('.save')
 save.addEventListener('click', () => {
         save.classList.toggle('color')

     })
     //  ******************Modale de notification*************************
 function modalNotif(message) {
     const notification = document.createElement('div')
     notification.setAttribute('class', 'notification')
     const h3 = document.createElement('h3')
     const h4 = document.createElement('h4')
     h3.setAttribute('class', 'notifTxt')
     h3.innerHTML = message
     h4.setAttribute('class', 'notifOk')
     h4.innerHTML = "Ok"
     h4.addEventListener('click', () => {
         notification.classList.remove('sup')
     })
     notification.append(h3, h4)
     return notification
 }
 //  **************Valider formulaire******************
 function ValiderFormulaire(textInput1, textInput2, textInput3, txt) {
     createCol(tab)
     const section = document.getElementById("section_1")
     const divEl = document.createElement('div')
     divEl.setAttribute('class', 'tache')
         //  *********************Creation des zones d'affichage*************************
     const divTexarea = document.createElement('div')
     divTexarea.setAttribute('class', 'note')
     const divtextInput1 = document.createElement('div')
     divtextInput1.setAttribute('class', 'date')
     const divtextInput2 = document.createElement('div')
     divtextInput2.setAttribute('class', 'tempsDebut')
     const divtextInput3 = document.createElement('div')
     divtextInput3.setAttribute('class', 'tempsFin')
     const divInfoDate = document.createElement('div')
     divInfoDate.setAttribute('class', 'info')
         //  ******************Affectation des valeurs aux champs***************************
     divTexarea.innerHTML = txt
     divtextInput1.innerHTML = textInput1
     divtextInput2.innerHTML = textInput2
     divtextInput3.innerHTML = textInput3
     divInfoDate.append(divtextInput1, divtextInput2, divtextInput3)
     divEl.append(divTexarea, divInfoDate)
         // *****************Creation de la div contenu Tache***************************************
     const div = document.createElement('div')
     div.setAttribute('class', 'flecheContent animate__animated animate__bounceInDown')
         //  div.id = a
     const restaure = document.createElement('i')
     restaure.setAttribute('class', 'fa-solid fa-eraser ')
     restaure.id = "restaure"
     div.setAttribute("data-idCol", "1")
         //  console.log(div.id);
     const iconSupprim = document.createElement('i')
     iconSupprim.setAttribute('class', 'fa-solid fa-trash-arrow-up  ')
     iconSupprim.id = "efface"
         //  ********************Evenement sue la div contenu tache***************************
     div.addEventListener('mouseover', () => {
             //  divInfoDate.classList.toggle("infoDur")
             iconSupprim.classList.add('infoDur')
         })
         //  **********************Creation des fleches********************
     const fleche1 = document.createElement('i')
     const fleche2 = document.createElement('i')
         //  fleche1.innerHTML = "&#xab"
         //  fleche2.innerHTML = "&#xbb"
     fleche1.setAttribute('class', 'fa-solid fa-angles-left ')
     fleche1.setAttribute('id', 'left')
     fleche2.setAttribute('class', 'fa-solid fa-angles-right ')
     fleche2.setAttribute('id', 'right')
         // **************************Tache stocké dans la div contenu*****************************************
     div.append(restaure, fleche1, divEl, fleche2, iconSupprim)
         //  **************************Evenement sur las fles de direction****************************************
     fleche2.addEventListener('click', (e) => {
         const elementParent = e.target.parentElement.parentElement.parentElement
             //  console.log(elementParent);
         const jul = elementParent.id.split("_", 2)
         const idEntier = parseInt(jul[1])
             //   const idEntier = parseInt(elementParent.id)
         const suivant = document.getElementById("col_" + (idEntier + 1))
             //  console.log(suivant);
         suivant.lastChild.appendChild(div)
         let idSuiv = suivant.id.split("_", 2)
             //  console.log(idSuiv[1]);
         div.setAttribute("data-idCol", idSuiv[1])
     })
     fleche1.addEventListener('click', (e) => {
             const elementParent = e.target.parentElement.parentElement.parentElement
                 //  console.log(elementParent.id);
             const jul = elementParent.id.split("_", 2)
             const idEntier = parseInt(jul[1])
                 //   const idEntier = parseInt(elementParent.id)
             const precedent = document.getElementById("col_" + (idEntier - 1))
                 //  console.log(suivant);
             precedent.lastChild.appendChild(div)
                 //  div.setAttribute("data-idCol", suivant.id)
             let idSuiv = suivant.id.split("_", 2)
                 //  console.log(idSuiv[1]);
             div.setAttribute("data-idCol", idSuiv[1])

         })
         //  **************************Appel de la tache sur la premire  colonne***********************************
     section.appendChild(div)
         //  *********************Evenement sur l'icone supprime tache********************************
     iconSupprim.addEventListener('click', (e) => {
             const papa = e.target.parentElement
             papa.remove()
             corbeille.appendChild(papa)
             reflesh()
                 //  Nder(div)
                 //  console.log(div.id);
                 //  corbeille.appendChild(div)
             fleche1.classList.add('dispa')
             fleche2.classList.add('dispa')
             iconSupprim.classList.add('dispa')
                 //  confirModal.classList.remove('appelModal')
                 //  ************Renvoie de tache de la corbeille vers la div  origine***************************
                 //  createCol(tab)
                 //  const sections = document.querySelectorAll('section')
                 //  console.log(sections);

             //  const section = document.getElementById("section_1")
         })
         //  *******************Restaurere*************************
     restaure.addEventListener('click', (e) => {
         //  ****************ID de la carte*****
         const idparenOrigine = e.target.parentElement.getAttribute("data-idCol")
             //  *****************Parent de la carte****
         const parentOrigine = contenu.querySelector(`#col_${idparenOrigine}`)
             //  **********************Recup"ration de la premiere colonne
         const premiereCol = document.querySelector("#col_1")
             //  ****************Test pour pour verifier si la colonne de  base n'est pas supprimer
         if (parentOrigine) {
             parentOrigine.lastChild.appendChild(div)
         } else if (premiereCol) {
             premiereCol.lastChild.appendChild(div)
         }

     })
 }
 // ***************Modale de confirmation de suppression************* 
 function Nder(element) {
     confirModal.classList.add('appelModal')
     const bnt1 = document.getElementById("btn1")
     const bnt2 = document.getElementById("btn2")
     bnt2.addEventListener("click", () => {
         element.remove()
         reflesh()
         confirModal.classList.remove('appelModal')
             //  contenu.appendChild(modalNotif("La colonne a été bien supprimer"))
         notification.classList.add('sup')
         ok.addEventListener('click', () => {
             notification.classList.remove('sup')
         })
         contenu.appendChild(notification)
     })

     bnt1.addEventListener('click', () => {
         confirModal.classList.remove('appelModal')


     })
 }
 // ******************FONCTION DE CREATION DE COLONNE************************
 function createCol(array) {
     const div = document.createElement('div')
     div.setAttribute('class', 'colonne')
     div.setAttribute('id', `col_${k}`)
         //  **************Titre colonne*****************************
     const sousDiv = document.createElement('div')
     sousDiv.setAttribute('class', 'titre')
     const i = document.createElement('i')
     const textarea = document.createElement('input')
     textarea.value = `Colonne_${k}`
     textarea.setAttribute('data-rename', 'false')
     textarea.setAttribute('class', 'titleCol')
     textarea.addEventListener('dblclick', () => {
         textarea.classList.remove("titleCol")
     })
     textarea.addEventListener('blur', () => {
             textarea.innerText = textarea.value
             textarea.classList.add("titleCol")
             textarea.setAttribute("data-rename", "true")
         })
         //  ******************Icone supprime colonene**************************************
     i.setAttribute('class', "fa-solid fa-delete-left")
     sousDiv.append(textarea, i)
     i.addEventListener('click', (e) => {
         //  ***********************Evenement sur l'icone suppression colonne*********************
         //  let enfants = contenu.childElementCount
         //  console.log(enfants);

         let elementParent = e.target.parentElement.parentElement
         const tab = elementParent.id.split("_", 2)
         const idEntier = parseInt(tab[1])
         const suivant = document.getElementById("col_" + (idEntier + 1))
         if (elementParent.id == `col_${1}` && suivant == null) {
             Nder(elementParent)
         } else
         if (elementParent.id != "col_" + 1) {
             Nder(elementParent)
         }
     })
     const section = document.createElement('section')
     section.id = "section_" + `${k}`
     div.append(sousDiv, section)
     div.style.background = array[k - 1]
     return div
 }

 function textarea(label) {
     const div = document.createElement('div')
     div.setAttribute('class', 'form-controle')
     const small = document.createElement('small')
     small.setAttribute('class', 'erreur')
     const labelEl = document.createElement('label')
     labelEl.innerHTML = label
     const textarea = document.createElement('textarea')
     textarea.cols = 30
     textarea.rows = 10
     div.append(labelEl, textarea, small)
     return div
 }

 function input(label, type, id) {
     const div = document.createElement('div')
     div.setAttribute('class', 'form-controle')
     const labelEl = document.createElement('label')
     labelEl.innerHTML = label
     const small = document.createElement('small')
     small.setAttribute('class', 'erreur')
     const inputEl = document.createElement('input')
     inputEl.type = type
     inputEl.id = id
     if (type == 'submit') {
         inputEl.value = 'Ajouter la tache'
     }
     div.append(labelEl, inputEl, small)
     return div
 }

 function Modale() {
     const conteneurModal = document.createElement('div')
     conteneurModal.setAttribute('class', 'modalContenur')
     const div = document.createElement('div')
     div.setAttribute('class', 'modale')
     const sousDiv1 = document.createElement('div')
     sousDiv1.setAttribute('class', 'titreForm')
     const h1 = document.createElement('h1')
     h1.innerHTML = "NOUVELLE TACHE"
     const span = document.createElement('span')
     span.innerHTML = "X"
     sousDiv1.append(h1, span)
     const sousDiv2 = document.createElement('div')
     sousDiv2.setAttribute('class', 'corps')
     const p = document.createElement('p')
     p.innerHTML = "Remplir les informations de la nouvelle tache"
     const form = document.createElement('form')
     const textarea1 = textarea("Tache")
     const input1 = input("Date", "date", "id_1")
     const input2 = input("Date début", "time", "id_2")
     const input3 = input("Date fin", "time", "id_3")
     let bouton = input("", "submit", "ajout")

     form.append(textarea1, input1, input2, input3, bouton)
     sousDiv2.append(p, form)
         //  *********************Bouton soumission formulaire**************************
         //  let a = 0;

     bouton.addEventListener('click', (e) => {
         //  a++
         if (LaisseForm() == false) {
             let valTxtearea = document.querySelector('textarea').value
             let valInput1 = document.getElementById('id_1').value
             let valInput2 = document.getElementById('id_2').value
             let valInput3 = document.getElementById('id_3').value
             ValiderFormulaire(valInput1, valInput2, valInput3, valTxtearea)

         }
         e.preventDefault()
     })
     div.append(sousDiv1, sousDiv2);
     conteneurModal.appendChild(div)
     return conteneurModal;
 }
 // fonction   pour reordonner les colonnes
 function reflesh() {
     const list = document.querySelectorAll('.colonne')
     list.forEach((element, i) => {
         //  console.log(element.firstChild.firstChild);
         var inputCol = element.firstChild.firstChild
         if (inputCol.getAttribute("data-rename") == "false") {
             inputCol.value = `Colonne_${i+1}`
         }
         element.lastChild.id = `section_${i+1}`
             //  element.id = "col_" + (i + 1)
         k = i + 1
             //  a = i + 1
     });
 }
 ajouter.addEventListener('click', () => {
         if (k < 5) {
             k++;
             //  console.log(createCol(tab));
             contenu.appendChild(createCol(tab))
         }
         reflesh()

     })
     //  ***********************Modale de saisi de donner****************************
 contenu.appendChild(Modale())
 const modale = document.querySelector('.modalContenur')
 AjoutModal.addEventListener('click', () => {
         if (k != 0) {
             modale.classList.add("masqer")
         }
     })
     //  **********************Icone fermer Modale***********************************
 const span = document.querySelector('span')
 span.addEventListener('click', () => {
         modale.classList.remove('masqer')

     })
     //  ********************Afficher corbeille****************************************
 boiteCorbeil.addEventListener('click', () => {
     corbeille.classList.toggle("afficheCorbeille")

 })

 function Oumy(msg) {
     const champs = document.querySelectorAll('input')
     let error = false
     champs.forEach(el => {
         if (el.value === '') {
             el.parentElement.querySelector('small').innerText = msg
             return true
         }
     })
     return error
 }

 function estVide(msg) {
     if (document.querySelector('textarea').value == '') {
         document.querySelector('textarea').parentElement.querySelector('small')
         document.querySelector('textarea').parentElement.querySelector('small').innerText = msg;
         return true;
     }
     return false;
 }

 function TimeCompare() {
     const champ2 = document.getElementById('id_2')
     const champ3 = document.getElementById('id_3')
     if (champ3.value < champ2.value) {
         champ3.parentElement.querySelector('small').innerHTML = "La date fin doit etre supérieure a la date  debut"
         return true
     }
     return false
 }

 function VerifDate() {
     const champ1 = document.getElementById('id_1')
     let dateSaisi = Date.parse(champ1.value)
     let dateActu = new Date().getTime() - 86400000;
     if (dateSaisi < dateActu) {
         champ1.parentElement.querySelector('small').innerHTML = "La date est invalide"
         return true
     }
     return false
 }

 function LaisseForm() {
     let laisse = true
     if (Oumy("Champ obligatoire") == true || estVide("Champ obligatoire") === true || VerifDate() === true || TimeCompare() === true) {
         return laisse
     } else {
         return false
     }
 }

 //  **********************************FETCH VERS LE BACK POUR RECUPERER LES DONNEES****************************************************************
 const BACKTRELLO = `http://localhost:8004/?controleur=securite&action=trello`;
 //  console.log(BACKTRELLO);
 fetch(BACKTRELLO)
     .then(function(donnees) {
         return donnees.json();
         //   donneesEnJson = donnees.json();
         //   console.log(donneesEnJson);
         //   console.log(donneesEnJson);
         //   return donneesEnJson;
     })
     .then((data) => {
         console.log(data)
     });
 //      .then(function(resultat) {
 //          resultat.results.forEach(element => {
 //              textH3 = element.title
 //              textSpan = element.vote_average
 //              src = IMGPATH + element.backdrop_path
 //              description = element.overview;
 //              main.appendChild(newDiv(src, textH3, textSpan, "Overview", description))
 //          });
 //      })


 //  function Suppression(elementSup, message) {
 //      const divModalSup = document.createElement('div')
 //      divModalSup.setAttribute('class', 'modal-confirm')
 //      divModalSup.id = "modal-confirm"
 //      const valide = document.createElement('div')
 //      valide.setAttribute('class', "confirmation")
 //      valide.id = "confirmation"
 //      const sousDiv1sup = document.createElement('div')
 //      sousDiv1sup.setAttribute('class', "message")
 //      const h3 = document.createElement('h3')
 //      h3.innerHTML = message
 //      sousDiv1sup.appendChild(h3)
 //      const divBtn = document.createElement('div')
 //      divBtn.setAttribute('class', "modal-button")
 //      const bntSup1 = document.createElement('button')
 //      bntSup1.id = "btn1"
 //      bntSup1.setAttribute('class', 'buttum-modal')
 //      const bntSup2 = document.createElement('button')
 //      bntSup2.id = "btn2"
 //      bntSup2.setAttribute('class', 'buttum-modal supprime')
 //      divBtn.append(bntSup1, bntSup2)
 //          //  **************************************************
 //      bntSup2.addEventListener("click", () => {
 //          elementSup.remove()
 //          reflesh()
 //          divModalSup.classList.remove('appelModal')
 //      })
 //      bntSup1.addEventListener('click', () => {
 //          divModalSup.classList.remove('appelModal')

 //      })


 //      // ***************************************************
 //      valide.append(sousDiv1sup, divBtn)
 //      divModalSup.appendChild(valide)
 //      return divModalSup


 //  }