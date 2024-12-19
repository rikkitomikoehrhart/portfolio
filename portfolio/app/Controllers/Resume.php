<?php
namespace App\Controllers;
/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 12.18.2024

FILE: portfolio/app/Controllers/Resume.php
DESCRIPTION: This is the Controller for the resume of my
             portfolio website that is housed at 
             rikkitomikoehrhart.com and is also on Github
*/class Resume extends BaseController
{
    public function index(): string
    {
        // Return the Resume page view with header, body, and footer
        return view('templates/header')
            . view('resume/index')
            . view('templates/footer');
    }
}

