<?php
namespace App\Controllers;
/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 01.14.2025

FILE: portfolio/app/Controllers/Contact.php
DESCRIPTION: This is the Controller for the contact me page 
             of my portfolio website that is housed at 
             rikkitomikoehrhart.com and is also on Github
*/

use CodeIgniter\Controller;
use App\Models\ContactModel;

class Contact extends Controller
{
    public function index()
    {
        return view('templates/header')
            . view('contact/index')
            . view('templates/footer');
    }

    public function send()
    {
        $validation = \Config\Services::validation();
        $validation->setRules([
            'name'    => 'required|trim|min_length[1]|max_length[50]',
            'email'   => 'required|valid_email',
            'subject' => 'required|trim|min_length[2]|max_length[100]',
            'message' => 'required|trim|min_length[2]|max_length[1000]',
        ]);

        if (!$validation->withRequest($this->request)->run()) {
            return $this->response->setJSON([
                'status' => 'error',
                'message' => 'Please check your inputs.'
            ]);
        }

        // Sanitize input
        $formData = [
            'name'    => trim((string) $this->request->getPost('name')),
            'email'   => trim((string) $this->request->getPost('email')),
            'subject' => trim((string) $this->request->getPost('subject')),
            'message' => trim((string) $this->request->getPost('message'))
        ];

        // Load ContactModel
        $contactModel = new ContactModel();
        $response = $contactModel->sendEmail($formData);

        return $this->response->setJSON($response);
    }
}