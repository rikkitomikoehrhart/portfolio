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
$routes->get('portfolio/view/(:num)', 'Portfolio::view/$1');
