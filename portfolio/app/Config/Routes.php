<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

 // HOME PAGE
$routes->get('/', 'Home::index');
 // RESUME PAGE
$routes->get('/resume', 'Resume::index');
