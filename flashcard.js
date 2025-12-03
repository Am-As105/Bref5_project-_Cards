

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
// let QuestionArr = [];

let   data_from_LS = JSON.parse(localStorage.getItem("CARDS")) || [];
// let data_Question = JSON.parse(localStorage.getItem("question"));


let cards = [];
let  dataRES = JSON.parse(localStorage.getItem("the_cards"));


if (dataRES !== null) {
    cards = dataRES
    
}
console.log(cards)
let i = 0;

if (data_from_LS !== null){
    cardsArr = data_from_LS;
    while (i < cardsArr.length){
    
    ajout_collection_to_card(cardsArr[i]);
    ajout_collection_to_Option(cardsArr[i]);
    i++; 
}


 getIfromlocal();


console.log(cards);




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

        ques:"",
        res:""
        
    }

    cardsArr.push(card);
    console.log(card);

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
     let  amine =  h3.setAttribute( "data_id",input_value.id);
    
    create_option.appendChild(h3);
    selectorO.appendChild(create_option);
    
    
}

function ajout_collection_to_card(input_value){

    let create_card = document.createElement("div");
    create_card.className = "card";
    create_card.setAttribute("data-id", input_value.id);

    create_card.textContent = input_value.title;

    let question_place = document.createElement("h4");
    question_place.style.color = "silver";

    create_card.question_place = question_place;
    create_card.appendChild(question_place);

    create_card.style.position = "relative"; 
    create_card.style.backgroundColor = "black";
    create_card.style.color = "white";
    create_card.style.padding = "50px";

    const back = document.createElement("div");
    back.className = "card-back";
    back.textContent = "back";
    create_card.appendChild(back);
    //  create_card.question_place = question_place;

    placeCard.appendChild(create_card);

    create_card.addEventListener("click", function(){
        create_card.classList.toggle("flipped");
    });
}



Ajouter_cart.onclick = function (){

    const selectedTitle = selectorO.value;
    const allCards = document.querySelectorAll("#placeCard .card");

    allCards.forEach(card =>{
        
        const title = card.firstChild.nodeValue.trim();
    

        if (title === selectedTitle){


            card.querySelector(".card-back").textContent = Réponse.value;
            card.question_place.textContent = Question.value;

            const qholder = Question.value.trim();
            const aholder = Réponse.value.trim();
            

            const   Q_R = {
                id:title,
                res:qholder,
                ques:qholder,
                
            }
            cards.push(Q_R);
            localStorage.setItem("the_cards", JSON.stringify(cards));
            
            // console.log(Question.value);
        }
    })
}}

function getIfromlocal(){
    i = 0;
  const allCards = document.querySelectorAll("#placeCard .card");

  
   
  while (i  < allCards.length){
    const title = allCards[i].firstChild.nodeValue.trim();
    let j = 0;

    while (j < cards.length){
           

          if (cards[j].id === title ){
               allCards[i].querySelector(".card-back").textContent = cards[j].res;
               allCards[i].question_place.textContent = cards[j].ques;
               
               
                }
                j++;  
            }
            
            i++;
  }
 
    
}

 
 

    
    

