<?php


// AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
// LAST UPDATE: 03.29.2025
//
// FILE: portfolio/public/projects/4/keys.php
// DESCRIPTION: "Rescue me" is a pet adoption project 
//              I made for my website portfolio. It 
//              showcases use of the Petfinder API and 
//              Tailwind CSS.


$env_path = __DIR__ . '/../../../../.env';

if (!file_exists($env_path)) {
    die("⚠️ .env file not found at $env_path");
}

$lines = file($env_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
foreach ($lines as $line) {
    if (!str_starts_with(trim($line), '#') && strpos($line, '=') !== false) {
        list($key, $value) = explode('=', $line, 2);
        $_ENV[trim($key)] = trim(trim($value), '"');
    }
}

if (!isset($_ENV['PETFINDER_CLIENT_ID']) || !isset($_ENV['PETFINDER_CLIENT_SECRET'])) {
    die("⚠️ PETFINDER_CLIENT_ID or PETFINDER_CLIENT_SECRET missing from .env");
}

define('PETFINDER_CLIENT_ID', $_ENV['PETFINDER_CLIENT_ID']);
define('PETFINDER_CLIENT_SECRET', $_ENV['PETFINDER_CLIENT_SECRET']);
?>