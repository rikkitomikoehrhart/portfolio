<?php
namespace App\Controllers;
/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 12.18.2024

FILE: portfolio/app/Controllers/Home.php
DESCRIPTION: This is the Controller for the home page of my
             portfolio website that is housed at 
             rikkitomikoehrhart.com and is also on Github
*/



class Home extends BaseController
{
    public function index(): string
    {
        // Load the homepage view with header, body, and footer
        return view('templates/header')
        . view('home/index')
        . view('templates/footer');
    }
}
