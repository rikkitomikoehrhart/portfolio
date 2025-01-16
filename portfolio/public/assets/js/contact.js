/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 01.15.2025

FILE: portfolio/public/assets/js/contact.js
DESCRIPTION: This is the functions for my contact page 
             AJAX form functions for my portfolio at 
             rikkitomikoehrhart.com and is also on Github
*/

document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault(); 

    let formData = new FormData(this);

    fetch("/contact/send", {
        method: "POST",
        body: formData,
        headers: {
            "X-Requested-With": "XMLHttpRequest" // Tells CodeIgniter this is an AJAX request
        }
    })
    .then(response => response.json()) // Parse JSON response
    .then(data => {
        clearMessage();

        if (data.status === "success") {
            clearForm();
            document.getElementById('success').innerHTML = "Message sent successfully!";
            document.getElementById('success').style.backgroundColor("#e0f0d5");
        } else {
            document.getElementById('error').innterHTML = "Error sending message. Please email rikki.ehrhart@g.austincc.edu directly";
            document.getElementById('error').style.backgroundColor("#f3d7cf");
        }
    })
    .catch(error => {
        document.getElementById('error').innterHTML = "Error sending message. Please email rikki.ehrhart@g.austincc.edu directly";
        document.getElementById('error').style.backgroundColor("#f3d7cf");
    });
});

function clearForm() {
    document.getElementById('contactForm').reset();

    document.getElementById('submitButton').innerHTML = "Send Another Message";
}

function clearMessage() {
    document.getElementById('success').innerHTML = ""
    document.getElementById('success').style.removeProperty("background-color");
    document.getElementById('error').innterHTML = ""
    document.getElementById('error').style.removeProperty("background-color");
}