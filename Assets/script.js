//Gets all of the query selectors set up for the document
var begin = document.getElementById("begin");
var questions = document.getElementById("questions");
var jsQuestions = document.querySelectorAll(".jsQuestions")
var timer = document.getElementById("timer");
var username = document.getElementById("username");
var addScoretoLB = document.getElementById("addScoretoLB");
var leaderboard = document.getElementById("leaderboard");
var leaderboardList = document.getElementById("leaderboardList");
// Initializing the timer for 60 seconds
var timeLeft = 60

function startTimer() {
    displayQuestions();
    var timer = setInterval(function () {
        timeLeft--;
        timer.innerHTML = timeLeft + " seconds remaining";
        // Checks to see if the timer has any time remaining, if there is none, gives the alert that time is up and resets the timer incase they want to try again
        if (timeLeft === 0) {
            clearInterval(timer);
            alert("Times up!");
        }
        // Sets the timer function to run every 1000ms, or 1 second
    }, 1000);

};
// Bank with all the questions and the correct answers
var questionsAnswers = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: ['Strings','Booleans','Alerts','Numbers'],
        correct: 2
    },
    {
        question: 'Arrays in Javascript can be used to store:',
        answers: ['Numbers and strings','Other arrays','Booleans','All of the above'],
        correct: 3
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        answers: ['Commas','Curly brackets','Quotes','Parenthesis'],
        correct: 2
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ['JavaScript','Terminal/bash','For loops','Console.log'],
        correct: 3
    }, 
    {
        question: 'Bonus question: which beats are best?',
        answers: ['Bears','Beats','Battlestar Galactica','Trick Question, Jim!'],
        correct: 3
    }
];
// Keeps track of what question you are on
var questionCounter = 0;
function displayQuestions() {
    // Adds the question from the question counter
    questions.innerHTML = questions[questionCounter].question;
    // Hides the begin button when the questions start displaying
    begin.setAttribute("style", "display: none")
    // Loops through the array of questions until the final question is reached
    for (var i = 0; i < questions.length; i++) {
        console.log(questions[questionCounter].choices[i]);
        jsQuestions.textContent = questions[0].choices;
    }
}
// Adds high scores the the leaderboards based on their username or initials
var item = document.getElementById("username").value;
var userInput = [];
function saveName() {
    if (item === "") {
        alert("Please enter your Name to save your score")
    } 
    else {
        alert("Score saved")
        localStorage.setItem("username", item.value);
    }
}

// Starts the saveName Function to check if the user inputted a name,
// If they did, shows the leaderboards
addScoretoLB.addEventListener("click", saveName);
leaderboard.addEventListener("click", function() {
    leaderboardList.setAttribute("style", "display: block");
});