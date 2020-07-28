
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerEl = document.getElementById('question-container');
var questionElement = document.getElementById("question");
var timerElement = document.getElementById("timer");
//var counter = document.getElementById("counter");
//var scoreCount = document.getElementById("scoreCount");
//var answerButtons = document.getElementById("answer-buttons");
var buttonA = document.getElementById('button-A');
var buttonB = document.getElementById('button-B');
var buttonC = document.getElementById('button-C');
var buttonD = document.getElementById('button-D');



///     Turning the questions,answers and correct into an array
var codeQuestions = [{
    question: "How many values can a Boolean have?",
    choiceA: "3",
    choiceB: "1",
    choiceC: "2",
    choiceD: "4",
    correct: "B",
},
                   {
    question: "What does DOM sand for?",
    choiceA: "Domain Of Model",
    choiceB: "Document Of Model",
    choiceC: "Document Object Module",
    choiceD: "Document Object Model",
    correct: "D",
 },
                   {
    question:"What are variables used for in Javascript",
    choiceA: "For storage or holding data",
    choiceB: "For giving instructions to be excuted in web browser",                   
    choiceC: "For storing a series of characters",
    choiceD: "To provied access to a local storage",
    correct: "A",       
},
                   {
     question:"What are the ",
     choiceA: "What 3 languages are most common in front end development?",
     choiceB: "JavaScript, Python, HTML",                   
     choiceC: "HTML, Java, CSS",
     choiceD: "Javascript, CSS, HTML",
     correct: "D",
},
                   {
     question:"What does WWW stand for?",
     choiceA: "World Web Window",
     choiceB: "World Wide Web",                   
     choiceC: "Web Wide Window",
     choiceD: "Web Window Wide",
     correct: "B",
 },
];


// question index and interval variables
var finalQuestionIndex = codeQuestions.length;
var currentQuestionIndex = 0;
var timerInterval;
var secondsLeft = 60;
var scoreCount = 0;
var correct;





startButton.addEventListener("click", startQuiz);


    function startQuiz() {
        console.log('Started')
        startButton.classList.add('hide')
        questionContainerEl.classList.remove('hide')
       createQuestion()

        timerInterval = setInterval(function() {
            secondsLeft --;
   
            if(secondsLeft === 0) {
            clearInterval(timerInterval);
            showScore();
           }
       }, 1000);
        
        }
    


        function createQuestion() {
            if (currentQuestionIndex === finalQuestionIndex) {
            return showScore();
     }
        
        var currentQuestion = codeQuestions[currentQuestionIndex];
            questionElement.innerHTML = "<p>" + currentQuestion.question + "</p>";
            buttonA.innerHTML = currentQuestion.choiceA;
            buttonB.innerHTML = currentQuestion.choiceB;
            buttonC.innerHTML = currentQuestion.choiceC;
            buttonD.innerHTML = currentQuestion.choiceD;
    };


        function pickAnswer() {

    }




  






    
