// début fonctionalité affichage formule avec json

var dataFormule = "https://raw.githubusercontent.com/WJarod/GiteHurle/main/data/formule.json"
var formuleID = 0
fetch(dataFormule)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    for (var id = 0 ; id < data.length; id++){
        formuleID++;

        var srcIMG = data[id].img

        var main = document.querySelector("#mainFormule")
        
        var divContenaire = document.createElement("div")
    
        var divFormule = document.createElement("div")
        var divContImg = document.createElement("div")
        var img = document.createElement("img")

        var divBareSepa2 = document.createElement("div")
        var imgBareSepa2 = document.createElement("img")

        var divColFormule = document.createElement("div")
        var divTitreFormule = document.createElement("div")
        var divParaFormule = document.createElement("div")

        var divRowBTN = document.createElement("div")
        var divCol1BTN = document.createElement("div")
        var divCol2BTN = document.createElement("div")
        var btn1 = document.createElement("button")
        var btn2 = document.createElement("button") 

        main.appendChild(divContenaire)
        divContenaire.setAttribute("class", `col-8 offset-2 mainAllService${formuleID}`)
        
        divContenaire.appendChild(divFormule)
        divFormule.setAttribute("class", "service row style")
        divFormule.setAttribute("id" ,`Formule${formuleID}`)
        
        divFormule.appendChild(divContImg)
        divContImg.setAttribute("class", "col-4")
        divContImg.appendChild(img)
        img.setAttribute("class", "imgFormuleStyle")
        img.setAttribute("id", `imgFormule${formuleID}`)
        img.setAttribute("src", srcIMG)

        divFormule.appendChild(divBareSepa2)
        divBareSepa2.appendChild(imgBareSepa2)
        divBareSepa2.setAttribute("class", "col")
        imgBareSepa2.setAttribute("class", "bareSepa2")
        imgBareSepa2.setAttribute("src", "/img/bareSepa2.svg")
        

        divFormule.appendChild(divColFormule)
        divColFormule.setAttribute("class", "col")

        divColFormule.appendChild(divTitreFormule)
        divTitreFormule.setAttribute("class", "row Formule FinitionTP")
        divTitreFormule.setAttribute("id", `titreFormule${formuleID}`)
        divTitreFormule.innerHTML = data[id].nom

        divColFormule.appendChild(divParaFormule)
        divParaFormule.setAttribute("class", "row paraService FinitionTP")
        divParaFormule.setAttribute("id", `infoFormule${formuleID}`)
        divParaFormule.innerHTML = data[id].description
    }
  })
  .catch((err) => {
    console.log(err)
  })

// fin fonctionalité affichage formule avec json

// début fonctionalité affichage chambre avec json

var serviceID = 0;
function affichageChambre() {
    
    
    var dataService = "https://raw.githubusercontent.com/WJarod/GiteHurle/main/data/service.json"

    fetch(dataService)
    .then((response) => {
    return response.json()
    })
    .then((data) =>{
      console.log(data)
      for (var id = 0; id < data.length; id++){
        serviceID++;
        var srcIMG = data[id].img
        var divPrincipal = document.querySelector("#mainService")
        var divCol1 = document.createElement("div")
        var divCol2 = document.createElement("div")
        var divCol3 = document.createElement("div")
        var divCol4 = document.createElement("div")
        var divRow1 = document.createElement("div")
        var divRow2 = document.createElement("div")
        var divRow3 = document.createElement("div")
        var divRow4 = document.createElement("div")
        var p = document.createElement("p")
        var img1 = document.createElement("img")
        var img2 = document.createElement("img")

        divPrincipal.appendChild(divRow1)
        divRow1.setAttribute("class", "service row style")
        divRow1.setAttribute("id", `service${serviceID}`)
        
        divRow1.appendChild(divCol1)
        divCol1.setAttribute("class", "col-4")
        divCol1.appendChild(img1)
        img1.setAttribute("class", "imgServiceStyle")
        img1.setAttribute("id", `imgService1${serviceID}`)
        img1.setAttribute("src", srcIMG)

        divRow1.appendChild(divCol2)
        divCol2.setAttribute("class", "col")
        divCol2.appendChild(img2)
        img2.setAttribute("src", "/img/bareSepa2.svg")
        img2.setAttribute("class", "bareSepa2")

        divRow1.appendChild(divCol3)
        divCol3.setAttribute("class", "col")
        divCol3.appendChild(divRow2)
        divRow2.setAttribute("class", "row Service FinitionTP")
        divRow2.setAttribute("id", `Service${serviceID}`)
        divRow2.innerHTML = data[id].nom

        divCol3.appendChild(divRow3)
        divRow3.setAttribute("class", "row paraFormules FinitionTP")
        divRow3.setAttribute("id", `infoSercice${serviceID}`)
        divRow3.innerHTML = data[id].description

        divCol3.appendChild(divRow4)
        divRow4.appendChild(divCol4)
        divCol4.setAttribute("class", "col-5 offset-6 infoServiceClient")
        divCol4.appendChild(p)
        p.setAttribute("id", `infoSercice${serviceID}`)
        p.innerHTML = `Espaces restant ${data[id].nbrDespace}/${data[id].nbrDespace} à ${data[id].prix}€/nuits `
      }
    })

} 

affichageChambre()

// fin fonctionalité affichage chambre avec json

