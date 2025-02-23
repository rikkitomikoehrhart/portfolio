/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 02.22.2025

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

    // On click for Submit Button
    document.getElementById('submit-button').addEventListener('click', function() {

        // If there aren't a total of 10 answers, then they haven't
        // answered every question, so product and error
        if (game.getTotalAnswers() < 10) {
            returnError();

        // If there is 10 answers, then they have answered every 
        // question, so produce the result
        } else {
            showResult();
        }
    })

    //





}



/* ERROR FUNCTIONS */
function returnError() {
    document.getElementById('err').innerHTML = `
        <p>ERROR: Please answer every question in the quiz before clicking submit.</p>
    `
}

function clearError() {
    document.getElementById('err').innerHTML = ``;
}





/* RESULTS FUNCTIONS */
function showResult() {
    // functionality will go here.
}