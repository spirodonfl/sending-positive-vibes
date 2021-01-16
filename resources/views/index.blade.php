<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <!-- <meta name="viewport" content="width=device-width,initial-scale=1"> -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#202020">
        <link rel="manifest" href="manifest.json">
        <link rel="shortcut icon" href="img/favicon.ico">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png">
        <meta name="description" content="Send positive vibes to the world or somewhere special">
        <title>Sending Positive Vibes</title>

        <link href="css/leaflet.css" rel="stylesheet">
        <!--<link href="css/leaflet.min.css" rel="stylesheet"> TODO: Resolve issue where using this results in bad icons when you use the geolocation finder-->
        <!--<link href="css/main.css" rel="stylesheet">-->
        <link href="css/main.min.css" rel="stylesheet">
        <!--
        <link href="css/light.css" rel="alternate stylesheet" title="light" />
        <link href="css/dark.css" rel="alternate stylesheet" title="dark" />
        -->
        <link href="css/light.min.css" rel="alternate stylesheet" title="light" />
        <link href="css/dark.min.css" rel="alternate stylesheet" title="dark" />
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>

        <div class="popup" id="popup_contact">
            <div class="title">Contact Me</div>
            <div class="close">
                <svg class="svg-inline--fa fa-times-circle fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>
            </div>
            <div class="content">
                <p>Please feel free to reach out to me for feedback, questions or anything else.</p>
                <p>I am a senior architect with 15 years of experience. If you're looking for a mentor, I am looking to mentor. Feel free to reach out.</p>
                <p>I am always interested in new opportunities, full time, part time or gigs. Reach out if you are looking for a solid developer.</p>
                <p><a href="mailto:spiro@spirofloropoulos.com">spiro@spirofloropoulos.com</a></p>
                <p><a href="https://mobile.twitter.com/spirodonfl">Twitter</a></p>
                <p><a href="https://github.com/spirodonfl">Github</a></p>
            </div>
        </div>
        <div class="popup" id="popup_help_about">
            <div class="title">Help / About</div>
            <div class="close">
                <svg class="svg-inline--fa fa-times-circle fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>
            </div>
            <div class="content">
                <h3>About</h3>
                <p>2020 has been tough on everybody in various ways. I got tired of the negativity and wanted to send positive vibes somewhere. Just anywhere. To counter the negativity I was feeling.</p>
                <p>So I made this!</p>
                <h3>Help</h3>
                <p><strong>So how does this work?</strong></p>
                <p>Simple! Use your fingers (on touch & mobile devices) or your mouse to tap on an area you would like to send positive vibes to. You can zoom in and out by pinching, using the mouse scroll wheel or the plus/minus buttons on the top left of the page. You can tap an area several times to queue up a bunch of positive vibes! The icons on the left let you choose what kind of vibes you want to send. Right now, there's a heart, thumbs up, spock hand, smile and alien, just for fun.</p>
                <p><strong>What should I see?</strong></p>
                <p>Every few seconds, anything you have tapped/clicked will be sent to the server to be recorded. Every few minutes, those updates will be aggregated across all users. That makes all the "vibes" people send visible to everyone as pulsating rings. The highest used icon will be the icon represented on the map with the pulsating ring below it. The server will try to update everything every 5 to 30 minutes, depending on load, so just check back later if the map hasn't been updated for you right away.</p>
            </div>
        </div>
        <div class="popup" id="popup_share_donate">
            <div class="title">Share</div>
            <div class="close">
                <svg class="svg-inline--fa fa-times-circle fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>
            </div>
            <div class="content">
                <p>I host and run this by myself, for free. I pay for all the costs.</p>
                <p>If you want to help me out, <strong>please consider</strong> sharing this with your friends and family. Social media helps too.</p>
                <p>If you want to donate time or a coffee or something, please reach out to me at <a href="mailto:spiro@spirofloropoulos.com">spiro@spirofloropoulos.com</a>.</p>
                <p><a class="twitter-share-button"
                  href="https://twitter.com/intent/tweet?text=Send%20Positive%20Vibes%20to%20the%20world%20like%20I%20just%20did!%20https%3A%2F%2Fspv.spirofloropoulos.com">
                  Tweet</a></p>
                <p><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fspv.spirofloropoulos.com%2F&amp;src=sdkpreparse">Facebook</a></p>
            </div>
        </div>
        <div class="popup" id="popup_locate_error">
            <div class="title">Error locating you</div>
            <div class="close">
                <svg class="svg-inline--fa fa-times-circle fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>
            </div>
            <div class="content">
                <p>We had trouble locating your position. This could be for a number reasons. Check that your device is connected to the internet and you're running a relatively new browser. Also make sure you have GPS turned on and permissions granted.</p>
            </div>
        </div>

        <div id="map"></div>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JSZJYQWBLH"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JSZJYQWBLH');
        </script>

        <script>
            "serviceWorker" in navigator ? window.addEventListener("load", function() {
                navigator.serviceWorker.register("sw.js").then(function(o) {
                    console.log("Worker registration successful", o.scope)
                }, function(o) {
                    console.log("Worker registration failed", o)
                }).catch(function(o) {
                    console.log(o)
                })
            }) : console.log("Service Worker is not supported by browser.")
        </script>
        <!--<script src="css/fontawesome/js/all.js"></script>-->
        <!--
        <script src="js/leaflet.js"></script>
        <script src="js/animate.js"></script>
        <script src="js/geohash.js"></script>
        <script src="js/main.js"></script>
        -->
        <script src="js/all.min.js"></script>
    </body>
</html>
