<!-- 
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 12.18.2024

FILE: portfolio/public/Views/templates/header.php
DESCRIPTION: This is the header template for my portfolio
             website that is housed at rikkitomikoehrhart.com
             and is also on Github
-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- TITLE AND FAVICON -->
        <title>Rikki Tomiko Ehrhart Portfolio</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon">

        
        <!-- LINK TO STYLE SHEET -->
        <link rel="stylesheet" href="/assets/css/styles.css">

    </head>
    <body>
        <header>
            <nav class="navbar">
                <!-- ICON -->
                <div class="navbar-icon">
                    <a href="/"><img src="/assets/images/logo.png" alt="Rikki Tomiko Ehrhart Portfolio Logo"></a>
                </div>

                <!-- HAMBURGER MENU -->
                <button class="hamburger" id="hamburger">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>

                <!-- LINKS -->
                <ul class="nav-links" id="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
