// const { compile } = require("tailwindcss");

const   input = document.getElementById("titleinput");
const   submit = document.getElementById("btn");
const   card = document.querySelector(".list");
const    Question = document.getElementById("Question");
const  Réponse  = document.getElementById("Reponse");

const Ajouter_cart  = document.getElementById("Ajouter");

const  index =  document.getElementById("index");
let id_option;
let currentCollection;
let  option_question;

 let  selectorO =  document.getElementById("optionsCards");


let cardsArr = [];
getdata();



// if (localStorage.getItem("cardsArr")){
//     cardsArr = JSON.parse(localStorage.getItem("cardsArr"));
    
// }




submit.onclick = function (){

    if (input.value !== ""){
        addCardTOArry(input.value);
        
        // optionsCards();
        input.value = "";
        
    }
    
}

function  addCardTOArry(infoInput){ 
    const  cards = {
        id: Date.now(),
        title:infoInput,
        
    }

    cardsArr.push(cards);
    add_element();
    
}




 

function add_element(){


    card.textContent = ""; 
    selectorO.textContent = "";


    cardsArr.forEach(cards =>{


        let Add_element =  document.createElement("div"); 
        
        Add_element.className = "cards ";
        Add_element.setAttribute("id", cards.id);
        let h1 = document.createElement("h1");
        
        
        let link = document.createElement("a");
        let question_AND_ansewr = document.createElement("div");
        question_AND_ansewr.className = "question_AND_ansewr";
        
        link.appendChild(document.createTextNode(cards.title))


        // link.appendChild();
        Add_element.appendChild(question_AND_ansewr);
        Add_element.appendChild(link);
        


        card.appendChild(Add_element); 
        Add_element.style.backgroundColor = "black";
        Add_element.style.color = "white";
        Add_element.className = 'p-6';


        currentCollection = Add_element;


         let  add = document.createElement("option");
         add.value = cards.id;

         add.style.backgroundColor = "blue";

         add.appendChild(document.createTextNode(cards.title));
         option_question = add;


         
         
         selectorO.appendChild(add);

          addinfo_to_local(cardsArr);
        
        //   console.log(add);

        // console.log(Add_element);  
    });

}

function AJOUT() {
    let selectedId = selectorO.value;
    if (!selectedId)
        
        return;

    let target_card = document.getElementById(selectedId);
    if (!targetCard) 
        return;
    

    let zone = target_card.querySelector(".question_AND_ansewr");

    let ques = document.createElement("h1");
    ques.textContent = Question.value;


    zone.appendChild(ques);

    Question.value = "";
    Réponse.value = "";
}



function  addinfo_to_local(cardsArr){

    localStorage.setItem("cardsArr", JSON.stringify(cardsArr));
    
}
//  window.addEventListener('DOMContentLoaded', getdata);
function getdata() {
    
    let data  =  localStorage.getItem('cardsArr');

    if (data){
        let CS = window.JSON.parse(data);
        cardsArr.push(...CS);  
        add_element(CS);   
        
    }

   
    
}




