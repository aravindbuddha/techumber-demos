<?php

class Config{
    const SECURITYSALT = 'hfhy394niyn404983nuhirh65fv89uvd';
    const WEB_ROOT = 'http://localhost:8080/learn/php/tinyphp/';
    const NOTFOUND_URI = '/404/';
    public static $dbConnection = array(
        'UseDatabase' => false,
        'Type' => 'MySQL',
        'Host' => 'localhost',
        'User' => 'root',
        'Password' => '',
        'DatabaseName' => 'tinyphp',
        'Port' => null,
    );
}