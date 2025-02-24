/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 02.23.2025

FILE: portfolio/public/projects/3/main.js
DESCRIPTION: This is a project made on behalf of Lou DiSimone
             (lou.disimone@g.austincc.edu), Phi Theta Kappa
             Chapter Alpha Gamma Pi, President for the Spring
             2025 Semester. He requested I turn his "The 
             Princess Bride" personality quiz into a working
             website quiz that they can use at the next Phi
             Theta Kappa conference (TRC 2025).
*/


window.onload = (event) => {
    // Create a new Game
    var game = new Game;

    // Start game
    playGame(game, 1);

}



/* ERROR FUNCTIONS */
function returnError(msg) {
    document.getElementById('err').innerHTML = `
        <p>ERROR: ${msg}</p>
    `
}
function clearError() {
    document.getElementById('err').innerHTML = ``;
}




/* GAMEPLAY FUNCTIONS */
function playGame(game, question) {
    var playing = true; 

    // While question is less than 10, populate the question, 
    // one at a time until the last question is populated
    while (playing) {
        playing = false;
        if (question <= 10) {
            // Populate the question HTML
            populateQuestion(game, question)

            // create a value to hold the current selected answer
            // and grab the current selection
            var currentSelection;
            var choices = document.getElementsByClassName('choice');
            for (var i = 0; i < choices.length; i++) {
                choices[i].addEventListener('change', function() {
                    currentSelection = this.id;

                })
            }



            // Listen for the next button
            document.getElementById('next').addEventListener('click', function() {
                // Check if there has been a selection
                if (!currentSelection) {
                    returnError("Please make a selection first.");
                } else {
                    // Clear error if needed
                    clearError();

                    // save current selection
                    game.increaseLetterTotal(currentSelection);


                    // check if the game is won
                    if (game.getTotalAnswers() < 10) {
                        // game isn't won yet

                        
                        document.getElementById('quiz').innerHTML = ``;
                        // populate the next question
                        question++;
                        playGame(game, question)
                    } else {
                        // Clear quiz area
                        document.getElementById('quiz').innerHTML = ``

                        showResult(game);
                    }
                }

            })

        } else {
            // question is more than 10
            playing = false;
        }

    }

}
function populateQuestion(game, num) {
    // get the question
    var questionTxt = game.questions[num]["question"];

    // get the answers, and shuffle them
    var choicesArr = game.questions[num]["choices"];
    choicesArr = shuffle(choicesArr);
    console.log(choicesArr)

    // Create the HTML elements for container and question
    var container = document.createElement('div');
    var question = document.createElement('h3');
    var choicesContainer = document.createElement('div');

    // Assign classes and ids
    container.id = "container"
    container.classList.add("questionContainer")
    choicesContainer.classList.add("choicesContainer")


    // Fill question
    question.innerHTML = `${num}. ${questionTxt}`;


    // Populate choices
    for (let letter in choicesArr) {
        var option = document.createElement('div');
        var choice = document.createElement('input');

        // adjust input settings
        choice.type = "radio";
        choice.name = num;
        choice.value = choicesArr[letter];
        choice.id = letter;

        choice.classList.add("choice");

        var label = document.createElement("label");
        label.textContent = `${choicesArr[letter]}`;


        option.appendChild(choice);
        option.appendChild(label);

        option.classList.add('option');
        choicesContainer.appendChild(option);
    }


    // Create Next button
    var button = document.createElement('button');
    button.id = "next";

    if (num == 10) {
        button.textContent = "Submit";
    } else {
        button.textContent = "Next Question";
    }
    




    // Populate the container
    container.appendChild(question);
    container.appendChild(choicesContainer);
    container.appendChild(button);
    document.getElementById('quiz').appendChild(container);
    
}



/* RESULTS FUNCTIONS */
function showResult(game) {
    // Get the winner's info.
    var winner = game.winnerInfo();

    // grab the quiz html element
    var container = document.getElementById('quiz');

    // Clear the title
    document.getElementById('gameTitle').innerHTML = ``;

    // Create html elements
    var winnerTitle = document.createElement('h2');
    var winnerImg = document.createElement('img');
    var winnerDesc = document.createElement('p');

    // Fill out the html elements
    winnerTitle.textContent = winner[0];
    winnerImg.src = `images/${winner[2]}`;
    winnerDesc.textContent = winner[1];

    
    // add html elements to the container
    container.appendChild(winnerTitle);
    container.appendChild(winnerDesc);
    container.appendChild(winnerImg);
    

    container.classList.add("winner")
}


/* MISC FUNCTION */
function shuffle(array) {

    const elements = Object.entries(array);
  
    for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elements[i], elements[j]] = [elements[j], elements[i]];
    }

    return Object.fromEntries(elements);


    
}