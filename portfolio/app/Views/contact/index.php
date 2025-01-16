<!--
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 01.14.2025

FILE: portfolio/app/Views/contact/index.php
DESCRIPTION: This is the Contact Me page view that shows the 
             contact form for users to be able to send me a 
             message at rikki.ehrhart@g.austincc.edu
-->

<!-- CONTACT FORM -->
<div class="contactMe">
    <h2>Contact Me</h2>

    <div class="message">
        <p class="success" id="success"></p>
        <p class="error" id="error"></p>
    </div>

    <div class="contactForm">
        <form id="contactForm">
            <?= csrf_field() ?> <!-- CSRF protection -->
        
            <label for="name">Name:</label>
            <input type="text" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" name="email" required>
            
            <label for="subject">Subject:</label>
            <input type="text" name="subject" required>
            
            <label for="message">Message:</label>
            <textarea name="message" rows="10" required></textarea>
            
            <button id="submitButton" type="submit">Send Message</button>
        </form>
    </div>

</div>

<!-- LINK TO JAVASCRIPT -->
<script src="/assets/js/contact.js"></script>