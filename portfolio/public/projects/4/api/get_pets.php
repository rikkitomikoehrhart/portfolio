<?php


// AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
// LAST UPDATE: 03.29.2025
//
// FILE: portfolio/public/projects/4/get_pets.php
// DESCRIPTION: "Rescue me" is a pet adoption project 
//              I made for my website portfolio. It 
//              showcases use of the Petfinder API and 
//              Tailwind CSS.

header('Content-Type: application/json');

require_once(__DIR__ . '/../config/keys.php');

$token_url = 'https://api.petfinder.com/v2/oauth2/token';
$data = [
    'grant_type' => 'client_credentials',
    'client_id' => PETFINDER_CLIENT_ID,
    'client_secret' => PETFINDER_CLIENT_SECRET
];

$options = [
    'http' => [
        'method' => 'POST',
        'header' => 'Content-Type: application/x-www-form-urlencoded',
        'content' => http_build_query($data)
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($token_url, false, $context);
$token_data = json_decode($response, true);

if (!isset($token_data['access_token'])) {
    http_response_code(500);
    echo json_encode(['error' => 'Unable to fetch access token.']);
    exit;
}

$access_token = $token_data['access_token'];

$animals_url = 'https://api.petfinder.com/v2/animals?limit=10';

$opts = [
    'http' => [
        'method' => 'GET',
        'header' => 'Authorization: Bearer ' . $access_token
    ]
];

$context = stream_context_create($opts);
$animals_response = file_get_contents($animals_url, false, $context);

echo $animals_response;

?>