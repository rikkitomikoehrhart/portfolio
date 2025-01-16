<?php

return [
    // DATABASE VARIABLES 
    'hostname' => getenv('database.default.hostname') ?: 'localhost',
    'username' => getenv('database.default.username') ?: 'root',
    'password' => getenv('database.default.password') ?: '',
    'database' => getenv('database.default.database') ?: 'default_database',
    'DBDriver' => getenv('database.default.DBDriver') ?: 'MySQLi',

    // SMTP EMAIL VARIABLES
    'fromEmail' => getenv('email.fromEmail') ?: 'rikkitomikoehrhart@gmail.com',
    'fromName' => getenv('email.fromName') ?: 'Rikki Tomiko Ehrhart Portfolio Contact Form',
    'SMTPHost' => getenv('email.SMTPHost') ?: 'smtp.gmail.com',
    'SMTPUser' => getenv('email.SMTPUser') ?: 'rikkitomikoehrhart@gmail.com',
    'SMTPPass' => getenv('email.SMTPPass'),
    'SMTPPort' => getenv('email.SMTPPort') ?: 587,
    'SMTPCrypto' => getenv('email.SMTPCrypto') ?: 'tls',
];