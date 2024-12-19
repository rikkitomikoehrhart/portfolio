<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

// HOME PAGE
$routes->get('/', 'Home::index');
// RESUME PAGE
$routes->get('/resume', 'Resume::index');
// PORTFOLIO PAGE(S)
$routes->get('/portfolio', 'Portfolio::index');
$routes->get('portfolio/(:segment)', 'Portfolio::show/$1');
