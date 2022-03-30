 const contenu = document.querySelector('.contenu')
 const ajouter = document.querySelector('.ajoutCol')
 const AjoutModal = document.querySelector('.ajoutModal')
     //  *************************************
 const confirModal = document.getElementById("modal-confirm")
 let enfants = contenu.childElementCount
     // *********************************************
 const tab = ["Pink", "Violet", "White", "Grey", "#ffd194"]

 let k = 0;

 function createCol(array) {
     //  console.log(k);
     const div = document.createElement('div')
     div.setAttribute('class', 'colonne')
     div.setAttribute('id', k)
     const sousDiv = document.createElement('div')
     sousDiv.setAttribute('class', 'titre')
     const i = document.createElement('i')
     const textarea = document.createElement('textarea')
     textarea.innerHTML = `Colonne${k}`
         //  textarea.innerHTML = `Colonne + ${enfants}`

     textarea.setAttribute('class', 'titleCol')
         //  textarea.addEventListener('dblclick', () => {
         //      textarea.innerHTML = ""
         //      textarea.focus()
         //          //  textarea.blur()
         //  })
     i.setAttribute('class', "fa-solid fa-delete-left")
     sousDiv.append(textarea, i)
     i.addEventListener('click', (e) => {
         confirModal.classList.add('appelModal')
         const bnt1 = document.getElementById("btn1")
         const bnt2 = document.getElementById("btn2")
         bnt2.addEventListener("click", () => {
             e.target.parentElement.parentElement.remove()

             reflesh()

             confirModal.classList.remove('appelModal')
         })

         bnt1.addEventListener('click', () => {
             confirModal.classList.remove('appelModal')

         })



         //  sousDiv.parentElement.remove()
     })
     const section = document.createElement('section')
     section.id = "section_" + `${k}`
     div.append(sousDiv, section)
     div.style.background = array[k - 1]
     return div
 }
 //  const sect = document.getElementById("section_1")

 function textarea(label) {
     const div = document.createElement('div')
     div.setAttribute('class', 'form-controle')
     const labelEl = document.createElement('label')
     labelEl.innerHTML = label
     const textarea = document.createElement('textarea')
     textarea.cols = 30
     textarea.rows = 10
     div.append(labelEl, textarea)
     return div
 }


 function input(label, type, id) {
     const div = document.createElement('div')
     div.setAttribute('class', 'form-controle')
     const labelEl = document.createElement('label')
     labelEl.innerHTML = label
     const inputEl = document.createElement('input')
     inputEl.type = type
     inputEl.id = id
     div.append(labelEl, inputEl)
     return div

 }

 function Modale() {
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
     const input1 = input("Date", "date", "id_11")
     const input2 = input("Date début", "time", "id_21")
     const input3 = input("Date fin", "time", "id_31")
     bouton = input("", "button", "ajout")

     form.append(textarea1, input1, input2, input3, bouton)
     sousDiv2.append(p, form)
         //  ***********************************************

     //  console.log(section);
     let a = 0;
     bouton.addEventListener('click', () => {
         a++;
         createCol(tab)
         const section = document.getElementById("section_1")
         const divEl = document.createElement('div')
         divEl.setAttribute('class', 'tache')
         let textInput1 = input1.lastChild.value
         let textInput2 = input2.lastChild.value
         let textInput3 = input3.lastChild.value
         let txt = textarea1.lastChild.value;
         //  **********************************************
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

         //  *********************************************
         divTexarea.innerHTML = txt
         divtextInput1.innerHTML = textInput1
         divtextInput2.innerHTML = textInput2
         divtextInput3.innerHTML = textInput3
         divInfoDate.append(divtextInput1, divtextInput2, divtextInput3)

         divEl.append(divTexarea, divInfoDate)
         const div = document.createElement('div')
         div.setAttribute('class', 'flecheContent')
             //  div.setAttribute("draggable", "true");
         const fleche1 = document.createElement('i')
         const fleche2 = document.createElement('i')
             //  fleche1.innerHTML = "&#xab"
             //  fleche2.innerHTML = "&#xbb"
         fleche1.setAttribute('class', 'fa-solid fa-angles-left')
         fleche1.setAttribute('id', 'left')
         fleche2.setAttribute('class', 'fa-solid fa-angles-right')
         fleche2.setAttribute('id', 'right')
             // div.appendChild(fleche1)
             //div.appendChild(divEl)
         div.append(fleche1, divEl, fleche2)
             //  console.log(fleche1)

         fleche2.addEventListener('click', (e) => {
                 const elementParent = e.target.parentElement.parentElement.parentElement
                     //  console.log(elementParent);
                 const idEntier = parseInt(elementParent.id)
                 const suivant = document.getElementById(idEntier + 1)

                 suivant.lastChild.appendChild(div)
             })
             //  ******************************************
         fleche1.addEventListener('click', (e) => {
                 const elementParent = e.target.parentElement.parentElement.parentElement
                 const idEntier = parseInt(elementParent.id)
                 const precedent = document.getElementById(idEntier - 1)
                 precedent.lastChild.appendChild(div)
             })
             // ******************************************
             //  div.style.background = tab[k - 1]

         div.id = "tache_" + (a)

         section.appendChild(div)


     })

     // *********************************************
     div.append(sousDiv1, sousDiv2);
     return div;

 }


 // fonction   pour reordonner les colonnes
 function reflesh() {
     const list = document.querySelectorAll('.colonne')
     list.forEach((element, i) => {
         element.firstChild.firstChild.innerHTML = `Colonne_${i+1}`
         element.lastChild.id = `section_${i+1}`
         element.id = i + 1
         k = i + 1
     });

     //  console.log("la valeur de k est" + k);
 }

 // console.log(Modale());

 ajouter.addEventListener('click', () => {

     if (k < 5) {
         k++;
         //  console.log(createCol(tab));
         contenu.appendChild(createCol(tab))

     }
     console.log(k);
 })

 contenu.appendChild(Modale())
 const modale = document.querySelector('.modale')
 AjoutModal.addEventListener('click', () => {
     if (k != 0) {
         modale.classList.add("masqer")
     }
 })
 const span = document.querySelector('span')
 span.addEventListener('click', () => {
     modale.classList.remove('masqer')
         // alert('azerty')
 })

 //  function desabledFleche(element) {
 //      const elementParent = element.target.parentElem ent.parentElement.parentElement
 //      const idEntier = parseInt(elementParent.id)
 //      const suivant = document.getElementById(idEntier + 1)
 //      const precedent = document.getElementById(idEntier - 1)
 //      if (suivant.id > 5) {
 //          element.classList.add("deactive")

 //      } else if (precedent - 1 < 1) {
 //          element.classList.add("deactive")


 //      }


 //  }
 //  Confirmation


 //  console.log(textConfirm);