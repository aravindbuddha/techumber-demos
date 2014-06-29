<?php
/**
 * Contains the router
 *
 * @author David Summerton
 * @author Stefanie Janine Stoelting <mail@stefanie-stoelting.de>
 * @link http://Tinyphp.com/ Tiny website
 * @license http://opensource.org/licenses/MIT MIT
 * @package Tiny
 */
class Router
{

    /**
     * Contains the routes<br>
     * Default: Empty array
     * @var array
     */
    private $routes = array();

    /**
     * Default is false
     * @var boolean
     */
    private $matchfound = false;

    /**
     *
     * @param string $pattern
     * @param sting $action
     */
    public function add($pattern, $action)
    {

        $pattern = strtolower('/' . trim($pattern, '/'));

        $pattern = str_replace(':i', '(\d+)', $pattern);
        $pattern = str_replace(':s', '([A-Za-z0-9\-\_]+)', $pattern);

        $pattern = '/^' . str_replace('/', '\/', $pattern) . '$/';
        $this->routes[$pattern] = $action;
    }

    /**
     * Redirects to a route.
     */
    public function route()
    {

        $url = strtolower($_SERVER['REQUEST_URI']);

        if (strpos($url, Config::WEB_ROOT) === 0) {
            $url = substr($url, strlen(Config::WEB_ROOT));
        }

        $url = '/' . trim($url, '/');

        foreach ($this->routes as $pattern => $callback) {
            if (preg_match($pattern, $url, $params)) {
                array_shift($params);

                $actions = explode('/', $callback);
                $class = $actions[0];
                $function = $actions[1];

                $this->matchfound = true;


                $route = new $class();
                call_user_func_array(array($route, $function), array_values($params));
            }
        }

        if (!$this->matchfound) {
            System::redirect(Config::NOTFOUND_URI);
        }
    }

    /**
     *
     * @param sting $file Includes the given file,
     */
    public function notfound($file = null)
    {
        header('HTTP/1.0 404 Not Found');
        if (is_null($file)) {
            exit("<h1>404 Not Found</h1>\nThe page that you have requested could not be found.");
        } else {
            include_once($file);
            exit;
        }
    }

}