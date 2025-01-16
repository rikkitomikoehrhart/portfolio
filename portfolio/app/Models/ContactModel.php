<?php
namespace App\Models;
/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 01.15.2025

FILE: portfolio/app/Models/ContactModel.php
DESCRIPTION: This is the Contact model that handles the 
             data for my contact form on my website that 
             is housed at rikkitomikoehrhart.com and is 
             also on Github
*/

use CodeIgniter\Model;
use CodeIgniter\Email\Email;

class ContactModel extends Model
{
    protected $allowedFields = ['name', 'email', 'subject', 'message'];

    private $email;

    public function __construct()
    {
        parent::__construct();
        $this->email = service('email');
    }

    /**
     * Send a contact form email
     *
     * @param array $formData
     * @return array
     */
    public function sendEmail(array $formData): array
    {
        $env = require __DIR__ . '/../Config/EnvLoader.php'; // Load email credentials

        // Log Form Data for Debugging
        log_message('error', 'Received form data: ' . print_r($formData, true));

        // Configure email
        $this->email->setFrom($env['fromEmail'], $env['fromName']);
        $this->email->setTo('rikki.ehrhart@g.austincc.edu');
        $this->email->setReplyTo($formData['email'], $formData['name']);
        $this->email->setSubject($formData['subject']);
        $this->email->setMessage($formData['message']);


        // Send the email
        if ($this->email->send()) {
            return [
                'status' => 'success',
                'message' => 'Message sent successfully!',
            ];
        } else {
            return [
                'status' => 'error',
                'message' => 'Failed to send message.',
            ];
        }
    }
}