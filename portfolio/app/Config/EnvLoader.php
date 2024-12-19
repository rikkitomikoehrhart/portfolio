<?php

return [
    'hostname' => getenv('database.default.hostname') ?: 'localhost',
    'username' => getenv('database.default.username') ?: 'root',
    'password' => getenv('database.default.password') ?: '',
    'database' => getenv('database.default.database') ?: 'default_database',
    'DBDriver' => getenv('database.default.DBDriver') ?: 'MySQLi',
];