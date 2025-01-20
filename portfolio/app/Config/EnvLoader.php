<?php

return [
    // CI Environment
    'CI_ENVIRONMENT' => getenv('CI_ENVIRONMENT') ?: 'development',

    
    // DEVELOPMENT DATABASE VARIABLES 
    'dHostname' => getenv('database.default.dHostname') ?: 'localhost',
    'dUsername' => getenv('database.default.dUsername') ?: 'root',
    'dPassword' => getenv('database.default.dPassword') ?: '',
    'dDatabase' => getenv('database.default.dDatabase') ?: 'default_database',
    'dDBDriver' => getenv('database.default.dDBDriver') ?: 'MySQLi',


    // PRODUCTION DATABASE VARIABLES 
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