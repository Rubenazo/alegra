<?php

class ContactsController extends Zend_Rest_Controller
{

    public function init()
    {
        $this->_helper->viewRenderer->setNoRender(true);
    }

    public function indexAction()
    {
        $this->getResponse()->setBody('Alegra Contacts API');
        $this->getResponse()->setHttpResponseCode(200);
    }

    public function headAction()
    {

    }

    public function getAction()
    {

    }

    public function postAction()
    {
        $body = $this->getRequest()->getRawBody();
        $data = Zend_Json::decode($body);

        $client = new Zend_Http_Client('https://app.alegra.com/api/v1/contacts');
        $client->setHeaders('Authorization', $this->getRequest()->getHeader('Authorization'));
        $client->setRawData(json_encode($data), null);

        $response = $client->request('POST');
        
        $this->getResponse()->setHttpResponseCode($response->getStatus())->sendResponse();
    }

    public function putAction()
    {

    }

    public function deleteAction()
    {

    }

}

