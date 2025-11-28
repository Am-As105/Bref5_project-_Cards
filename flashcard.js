

const   input = document.getElementById("titleinput");
const   submit = document.getElementById("btn");
const   card = document.querySelector(".list");
const    Question = document.getElementById("Question");
const  Réponse  = document.getElementById("Reponse");

const Ajouter_cart  = document.getElementById("Ajouter");

const  index =  document.getElementById("index");



 let  selectorO =  document.getElementById("optionsCards");


 const   placeCard  = document.getElementById("placeCard"); 

let cardsArr = [];
let QuestionArr = [];

let   data_from_LS = JSON.parse(localStorage.getItem("CARDS"));
let data_Question = JSON.parse(localStorage.getItem("question"));




let i = 0;

if (data_from_LS !== null){
    cardsArr = data_from_LS;
    while (i < cardsArr.length){
    
    ajout_collection_to_card(cardsArr[i]);
    ajout_collection_to_Option(cardsArr[i]);
    i++; 
}
    
}

i = 0;

if (data_Question !== null){
    while(i < QuestionArr.length){
        
        i++;
    }
    
}

// console.log(cardsArr.length);
submit.onclick = function (){

    if (input.value !== ""){

        // ajout_collection_to_Option(input.value);
        add_info_toARR(input.value);
        
        input.value = "";
        
    }
    
}

function add_info_toARR(input_value){

    const   card = {
        id : Date.now(),
        title : input_value,
    }

    cardsArr.push(card);

    localStorage.setItem("CARDS", JSON.stringify(cardsArr));

    ajout_collection_to_Option(card);   
    ajout_collection_to_card(card);
    
}
// ajout_collection_to_Option()

function ajout_collection_to_Option(input_value)
{


    let create_option = document.createElement("option");

    let h3 = document.createElement("h3");
    h3.className = "titleCol";
    h3.textContent = input_value.title;
     let  amine =   h3.setAttribute( "data_id",input_value.id);
    
    create_option.appendChild(h3)
    selectorO.appendChild(create_option);
    
    
}


function ajout_collection_to_card(input_value){

      let create_card = document.createElement("h2");
      create_card.className = "h2";
    //   create_card.className = "card";

      create_card.textContent = input_value.title;

      create_card.setAttribute("data-id",input_value.id);

      
    let question_place = document.createElement("h4");
  
    question_place.style.color = "silver";
    

    create_card.question_place = question_place;
    

    create_card.style.backgroundColor = "black";
    create_card.style.color = "white";
    create_card.style.padding = "50px";
   

    create_card.appendChild(question_place);

     placeCard.appendChild(create_card);


        create_card.onclick = function (){

        create_card.style.backgroundColor = "blue";
     }
          
}

Ajouter_cart.onclick = function(){


    const selectedTitle = selectorO.value;
    const allCards = document.querySelectorAll("#placeCard h2");

    allCards.forEach(card => {
        if (card.textContent === selectedTitle) {
            card.question_place.textContent = Question.value;

            const question_to_local = {
                id:Date.now(),
                title:Question.value
            }
            QuestionArr.push(question_to_local);
            localStorage.setItem("question",JSON.stringify(QuestionArr));

        

            console.log( Question.value);
        }
    });
};










 





