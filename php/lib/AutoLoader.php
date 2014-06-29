<?php
class AutoLoader{
    static private $_classNames = array();
    static private $_cacheFile = '';
    public static function registerDirectory($dirName, $ignore = array())
    {
        $di = new DirectoryIterator($dirName);
        foreach ($di as $file) {
            if ($file->isDir() && !$file->isLink() && !$file->isDot()) {
                if (!in_array($file->getPathname(), $ignore)) {
                    // recurse into directories other than a few special ones
                    self::registerDirectory($file->getPathname(), $ignore);
                }
            } elseif (substr($file->getFilename(), -4) === '.php') {
                // save the class name / path of a .php file found
                $className = substr($file->getFilename(), 0, -4);
                AutoLoader::registerClass($className, $file->getPathname());
            }
        }
    }

    public static function registerCache($cacheFile)
    {
        self::$_cacheFile = $cacheFile;
    }


    public static function loadFromCache()
    {
        if (file_exists(self::$_cacheFile)) {
            self::$_classNames = unserialize(file_get_contents(self::$_cacheFile));
            $result = true;
        } else {
            $result = false;
        }

        return $result;
    }

    public static function saveToCache()
    {
        if (!empty(self::$_cacheFile)) {
            file_put_contents(self::$_cacheFile, serialize(self::$_classNames));
            $result = file_exists(self::$_cacheFile);
        } else {
            $result = false;
        }

        return $result;
    }

    public static function registerClass($className, $fileName)
    {
        self::$_classNames[$className] = $fileName;

        return array_key_exists($className, self::$_classNames);
    }
    public static function loadClass($className)
    {
        if (isset(self::$_classNames[$className])) {
            require_once(self::$_classNames[$className]);
        }
    }

    public static function getCacheFileName()
    {
        return self::$_cacheFile;
    }

    public static function updateCacheFile($dirName, $ignore = array())
    {
        unlink(self::$_cacheFile);

        self::registerDirectory($dirName, $ignore, true);

        self::saveToCache();
    }

}
spl_autoload_register(array('AutoLoader', 'loadClass'));
