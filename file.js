fetch("question.json")
.then(res => res.json())
.then(data => {

    
    const questionEl = document.getElementById("question");
    const answer1El = document.getElementById("answer1");
    const answer2El = document.getElementById("answer2");
    const answer3El = document.getElementById("answer3");
    const resultEl = document.getElementById("result");

    const    card =  document.getElementById("cont");

    let index = 0;
    

    questionEl.textContent = data[index].question;
    answer1El.textContent = data[index].options[0];
    answer2El.textContent = data[index].options[1];
    answer3El.textContent = data[index].options[2];

    const TR_answer = data[index].answer;

    window.checkAnswer = function() {
        const selected = document.querySelector('input[name="q1"]:checked');

        if (!selected) {
            resultEl.textContent = "please select";
            // card.style.backgroundColor = "red";
            return;
        }

        if (selected.value === TR_answer) {
            resultEl.textContent = "إanswer is true";
            card.style.backgroundColor = "green";
            
        } else {
            resultEl.textContent = "answer wrong"; 
            card.style.backgroundColor = "red";
        }
    }
});

