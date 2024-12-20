<?php
namespace App\Models;
/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 12.19.2024

FILE: portfolio/app/Models/PortfolioModel.php
DESCRIPTION: This is the Portfolio model that handles the 
             data for my portfolio projects for my portfolio 
             website that is housed at rikkitomikoehrhart.com 
             and is also on Github
*/
use CodeIgniter\Model;

class PortfolioModel extends Model
{
    protected $table = 'projects';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'name',
        'type',
        'languages',
        'features',
        'tools',
        'images',
        'short_description',
        'long_description',
        'links',
        'reflections'
    ];

    // Pulls all the projects unless an id is provided, then it
    // pulls the project with that id.
    public function getProjects($id = false)
    {
        if ($id === false) {
            // Get all projects
            $projects = $this->findAll();
    
            // Decode JSON fields for each project
            $decodedProjects = array_map(function($project) {
                $project['languages'] = !empty($project['languages']) ? json_decode($project['languages'], true) : [];
                $project['features'] = !empty($project['features']) ? json_decode($project['features'], true) : [];
                $project['tools'] = !empty($project['tools']) ? json_decode($project['tools'], true) : [];
                $project['images'] = !empty($project['images']) ? json_decode($project['images'], true) : [];
                $project['links'] = !empty($project['links']) ? json_decode($project['links'], true) : [];
                $project['reflections'] = !empty($project['reflections']) ? json_decode($project['reflections'], true) : [];
                return $project;
            }, $projects);
    
            return $decodedProjects;
        } else {
            // Get a single project
            $project = $this->where(['id' => $id])->first();
    
            // If no project is found, return null
            if (empty($project)) {
                return null;
            }
    
            // Decode JSON fields for the single project
            $project['languages'] = !empty($project['languages']) ? json_decode($project['languages'], true) : [];
            $project['features'] = !empty($project['features']) ? json_decode($project['features'], true) : [];
            $project['tools'] = !empty($project['tools']) ? json_decode($project['tools'], true) : [];
            $project['images'] = !empty($project['images']) ? json_decode($project['images'], true) : [];
            $project['links'] = !empty($project['links']) ? json_decode($project['links'], true) : [];
            $project['reflections'] = !empty($project['reflections']) ? json_decode($project['reflections'], true) : [];
    
            return $project;
        }
    }
}
