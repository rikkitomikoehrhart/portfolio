<?php
// api/config.php

// Load .env file manually
$env = parse_ini_file(__DIR__ . '/../.env');

$host = $env['DB_Hostname'];
$database = $env['DB_Database'];
$username = $env['DB_Username'];
$password = $env['DB_Password'];

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$database;charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}