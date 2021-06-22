// début fonctionalité affichage formule avec json

var dataFormule = "https://raw.githubusercontent.com/WJarod/GiteHurle/main/data/formule.json"
var formuleID = 0

//function pour afficher les formules
function affichagerFormule() {

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

        divColFormule.appendChild(divRowBTN)
        divRowBTN.setAttribute("class", "row")
        divRowBTN.appendChild(divCol1BTN)
        divCol1BTN.setAttribute("class", "col-4")
        divCol1BTN.appendChild(btn1)
        btn1.setAttribute("class", "btnAdminStyle")
        btn1.setAttribute("onclick", `afficherFormModifierFormule(${formuleID})`)
        btn1.innerHTML = "Modifier"
        divRowBTN.appendChild(divCol2BTN)
        divCol2BTN.setAttribute("class", "col-4")
        divCol2BTN.appendChild(btn2)
        btn2.setAttribute("class", "btnAdminStyle")
        btn2.setAttribute("onclick", `suppFormule(${formuleID})`)
        btn2.innerHTML = "Supprimer"
    }
    })
  .catch((err) => {
    console.log(err)
  })
}
affichagerFormule()

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
        var divCol5 = document.createElement("div")
        var divRow1 = document.createElement("div")
        var divRow2 = document.createElement("div")
        var divRow3 = document.createElement("div")
        var divRow4 = document.createElement("div")
        var btn = document.createElement("button") 
        var p = document.createElement("p")
        var img1 = document.createElement("img")
        var img2 = document.createElement("img")

        divPrincipal.appendChild(divRow1)
        divRow1.setAttribute("class", "service row style")
        divRow1.setAttribute("id", `service${serviceID}`)

        divRow1.appendChild(divCol1)
        divCol1.setAttribute("class", "col-4")

        divCol1.appendChild(img1)
        img1.setAttribute("class","imgServiceStyle")
        img1.setAttribute("id", `imgService${serviceID}`)
        img1.setAttribute("src",srcIMG)

        divRow1.appendChild(divCol2)
        divCol2.setAttribute("class", "col")
        divCol2.appendChild(img2)
        img2.setAttribute("class","bareSepa2")
        img2.setAttribute("src", "/img/bareSepa2.svg")

        divRow1.appendChild(divCol3)
        divCol3.setAttribute("class", "col")

        divCol3.appendChild(divRow2)
        divRow2.setAttribute("class", "row Service FinitionTP")
        divRow2.setAttribute("id", `service${serviceID}`)
        divRow2.innerHTML = data[id].nom

        divCol3.appendChild(divRow3)
        divRow3.setAttribute("class", "row paraFormules FinitionTP")
        divRow3.setAttribute("id", `infoService${serviceID}`)
        divRow3.innerHTML = data[id].description

        divCol3.appendChild(divRow4)
        divRow4.setAttribute("class", "row infoFinition")
        divRow4.setAttribute("id", `infoSercice${serviceID}`)
        
        divRow4.appendChild(divCol4)
        divCol4.setAttribute("class", "col-4 offset-2")
        divCol4.appendChild(btn)
        btn.setAttribute("class","btnAdminStyle")
        btn.setAttribute("onclick",`afficherFormModifierService(${serviceID})`)
        btn.innerHTML = "Modifier"
        
        divRow4.appendChild(divCol5)
        divCol5.setAttribute("class", "col-5 offset-6 infoService")
        divCol5.appendChild(p)
        p.setAttribute("id", `infoService${serviceID}`)
        p.innerHTML = `Espaces restant ${data[id].nbrDespace}/${data[id].nbrDespace} à ${data[id].prix}€/nuits `
      }
    })

} 

affichageChambre()

// fin fonctionalité affichage chambre avec json


// début de la fonctionnalité pour modifier les services (chambre / appartement)
// objectif modifier le titre,l'image,le paragraphe d'explication et les info tel que
// le prix et le nombre d'espace dispo

var serviceID;

// fonction qui permet de lancer la modification
function modifierService(){
    // récupérer les objects que l'on va modifier 
    var titreService = document.querySelector("#Service" + serviceID);
    var paraService = document.querySelector("#infoSercice" + serviceID);
    var infoService = document.querySelector("#infoService" + serviceID);
    var img = document.querySelector("#imgService" + serviceID);


    // récupérer les donners qui vont modifier les objects
    var newTitreService = document.querySelector("#TitreService").value;
    var src = document.querySelector("#imgService").value;
    var newParaService = document.querySelector("#paragrapheService").value;
    var newEspace = document.querySelector("#nbrEspace").value;
    var newPrix = document.querySelector("#prix").value;


    // modifie la source
    src = document.querySelector("#imgService").value;
    img.src = src;

    // modifie le titre
    newTitreService = document.querySelector("#TitreService").value;
    titreService.innerHTML = newTitreService;

    //modifie le paragraphe d'explication
    newParaService = document.querySelector("#paragrapheService").value;
    paraService.innerHTML = newParaService;
    
    // condition pour modifier les objects avec un id de 1 ou 2
    if(serviceID == 1 || serviceID == 2){
        // modifie les infos prix et espace 
        infoService.innerHTML = `Espaces restant ${newEspace}/${newEspace} à ${newPrix}€/nuits`
    }else if (serviceID == 3){
        // modifie les infos prix et espace
        infoService.innerHTML = `Appartements restant ${newEspace}/${newEspace} à ${newPrix}€/nuits`
    }

    // permet d'enlever la popupService
    var popupService = document.querySelector(".contenus");
    popupService.classList.remove("montrer")
    popupService.classList.add("cacher");


    newTitreService = document.querySelector("#TitreService").value = "";
    src = document.querySelector("#imgService").value = "";
    newParaService = document.querySelector("#paragrapheService").value = "";
    newEspace = document.querySelector("#nbrEspace").value = "";
    newPrix = document.querySelector("#prix").value = "";
}

// function qui permet d'afficher la popupService avec le formulaire
function afficherFormModifierService(id){
    serviceID = id;

    var popupService = document.querySelector(".contenus");
    popupService.classList.remove("cacher")
    popupService.classList.add("montrer");
}

// function qui permet de cacher la popupService si la personne veut anuler
function cacherFormModifierService(){
    var popupService = document.querySelector(".contenus");
    popupService.classList.add("cacher");
}

// fin fonctionnalité pour modifier les services 


// début de la fonctionnalité qui permet de cliquer sur un bouton et de créer une nouvel formule

var formuleID = 3;

function addFormule(){
    
    formuleID++;

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

    divColFormule.appendChild(divParaFormule)
    divParaFormule.setAttribute("class", "row paraService FinitionTP")
    divParaFormule.setAttribute("id", `infoFormule${formuleID}`)

    divColFormule.appendChild(divRowBTN)
    divRowBTN.setAttribute("class", "row")
    divRowBTN.appendChild(divCol1BTN)
    divCol1BTN.setAttribute("class", "col-4")
    divCol1BTN.appendChild(btn1)
    btn1.setAttribute("class", "btnAdminStyle")
    btn1.setAttribute("onclick", `afficherFormModifierFormule(${formuleID})`)
    btn1.innerHTML = "Modifier"
    divRowBTN.appendChild(divCol2BTN)
    divCol2BTN.setAttribute("class", "col-4")
    divCol2BTN.appendChild(btn2)
    btn2.setAttribute("class", "btnAdminStyle")
    btn2.setAttribute("onclick", `suppFormule(${formuleID})`)
    btn2.innerHTML = "Supprimer"

}

// fin de la fonctionnalité qui permet de cliquer sur un bouton et de créer une nouvel formule

// début de la fonctionnalité pour modifier les formules

function modifierFormule(){
    // récupérer les objects que l'on va modifier 
    var titreFormule = document.querySelector("#titreFormule" + formuleID);
    var paraFormule = document.querySelector("#infoFormule" + formuleID);
    var img = document.querySelector("#imgFormule" + formuleID);


    // récupérer les donners qui vont modifier les objects
    var newTitreFormule = document.querySelector("#TitreFormule").value;
    var src = document.querySelector("#imgFormule").value;
    var newParaFormule = document.querySelector("#paragrapheFormule").value;


    // modifie la source
    src = document.querySelector("#imgFormule").value;
    img.src = src;

    // modifie le titre
    newTitreFormule = document.querySelector("#TitreFormule").value;
    titreFormule.innerHTML = newTitreFormule;

    //modifie le paragraphe d'explication
    newParaFormule = document.querySelector("#paragrapheFormule").value;
    paraFormule.innerHTML = newParaFormule;
    

    // permet d'enlever la popupFormule
    var popupFormule = document.querySelector(".contenus");
    popupFormule.classList.remove("montrer")
    popupFormule.classList.add("cacher");


    newTitreFormule = document.querySelector("#TitreFormule").value = "";
    src = document.querySelector("#imgFormule").value = "";
    newParaFormule = document.querySelector("#paragrapheFormule").value = "";
}

// function qui permet d'afficher la popupFormule avec le formulaire
function afficherFormModifierFormule(id){
    formuleID = id;

    var popupFormule = document.querySelector(".contenus");
    popupFormule.classList.remove("cacher")
    popupFormule.classList.add("montrer");
}

// function qui permet de cacher la popupFormule si la personne veut anuler
function cacherFormModifierFormule(){
    var popupFormule = document.querySelector(".contenus");
    popupFormule.classList.add("cacher");
}
// fin fonctionnalité pour modifier les formules


// début fontionnalité pour supprimer une formule 
function suppFormule(id){
    formuleID = id
    var main = document.querySelector("main")
    var divContSupp = document.querySelector(`.mainAllService${formuleID}`)

    var result = confirm("Etes-vous sûr de vouloir supprimer la formule");
    if (result == true){
        main.removeChild(divContSupp)
        formuleID--;
    }
}
// fin fontionnalité pour supprimer une formule 
