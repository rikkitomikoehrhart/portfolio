<?php
namespace App\Controllers;
/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 12.19.2024

FILE: portfolio/app/Controllers/Portfolio.php
DESCRIPTION: This is the Portfolio controller that handles the 
             communication between the model and the view for 
             my portfolio projects for my portfolio website that 
             is housed at rikkitomikoehrhart.com and is also on 
             Github
*/
use App\Models\PortfolioModel;

class Portfolio extends BaseController
{
    
    public function index()
    {
        $model = model(PortfolioModel::class);

        $data['projects'] = $model->getProjects();

        return view('templates/header', $data)
        . view('portfolio/index')
        . view('templates/footer');
    }

    public function view($id = null)
    {
        $model = model(PortfolioModel::class);

        $data['project'] = $model->getProjects($id);

        if (empty($data['project'])) {
            throw new \CodeIgniter\Exceptions\PageNotFoundException('Project not found.');
        }

        return view('templates/header', $data)
        . view('news/view')
        . view('templates/footer');
    }
}
