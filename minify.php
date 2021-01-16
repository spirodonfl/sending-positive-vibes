<?php
require_once('/var/www/html/site/vendor/autoload.php');
use MatthiasMullie\Minify;

// TODO: Add import extensions for CSS (to embed references like images and fonts) REFERENCE https://github.com/matthiasmullie/minify#setimportextensionsextensions-css-only
$root = '/var/www/html/site/public/';
$rootCss = $root . 'css/';
$rootJs = $root . 'js/';

$css = [
    ['in' => $rootCss . 'leaflet.css', 'out' => $rootCss . 'leaflet.min.css'],
    ['in' => $rootCss . 'main.css', 'out' => $rootCss . 'main.min.css'],
    ['in' => $rootCss . 'light.css', 'out' => $rootCss . 'light.min.css'],
    ['in' => $rootCss . 'dark.css', 'out' => $rootCss . 'dark.min.css'],
];

$js = [
    ['in' => $rootJs . 'leaflet.js', 'out' => $rootJs . 'leaflet.min.js'],
    ['in' => $rootJs . 'animate.js', 'out' => $rootJs . 'animate.min.js'],
    ['in' => $rootJs . 'geohash.js', 'out' => $rootJs . 'geohash.min.js'],
    ['in' => $rootJs . 'main.js', 'out' => $rootJs . 'main.min.js'],
];

$minifyAll = new Minify\CSS();
foreach ($css as $file) {
    if (isset($file['out'])) {
        $minify = new Minify\CSS($file['in']);
        $minify->minify($file['out']);
    }
    $minifyAll->add($file['in']);
}
$minifyAll->minify($rootCss . 'all.min.css');

$minifyAll = new Minify\JS();
foreach ($js as $file) {
    if (isset($file['out'])) {
        $minify = new Minify\JS($file['in']);
        $minify->minify($file['out']);
    }
    $minifyAll->add($file['in']);
}
$minifyAll->minify($rootJs . 'all.min.js');
