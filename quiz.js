fetch("question.json")
.then(res => res.json())
.then(data => {

    const questionEl = document.getElementById("question");

    const answer1El = document.getElementById("answer1");
    const answer2El = document.getElementById("answer2");

    const answer3El = document.getElementById("answer3");
    const resultEl = document.getElementById("result");
    const card = document.getElementById("cont");

    let index = 0;

    

    function show_question() {

         const q = data[index];
         questionEl.textContent = q.question;

    
          answer1El.textContent = q.options[0];
          answer2El.textContent = q.options[1]

          answer3El.textContent = q.options[2];

    
         const radios = document.querySelectorAll('input[name="q1"]');
         radios[0].value = q.options[0];
         radios[1].value = q.options[1];
         radios[2].value = q.options[2];
         let i = 0;

          while (i < radios.length) {

            radios[i].checked = false;
            i++;
             }
            resultEl.textContent = "";

      
}

    
    function next_question(){
        index++;
        if (index < data.length) 
            {

            show_question();
        } else {
            questionEl.textContent = "Quiz finished!";
           
            card.style.backgroundColor = "white";
        }
    }
     

   
    show_question();

    
    window.checkAnswer = function() {
        const selected = document.querySelector('input[name="q1"]:checked');

        if (!selected) {
            resultEl.textContent = "Please select an answer!";
            card.style.backgroundColor = "red";
            return;
        }

        const correctAnswer = data[index].answer;
     console.log("selected:", selected.value, " correct:", correctAnswer);


        if (selected.value === correctAnswer) {
            
            card.style.backgroundColor = "green";
            

            next_question();
            resultEl.textContent = "correct";
            
        } else {
            resultEl.textContent = "Wrong";
            card.style.backgroundColor = "red";
        }
        // console.log("selected:", selected.value, " correct:", correctAnswer);

    }
});


