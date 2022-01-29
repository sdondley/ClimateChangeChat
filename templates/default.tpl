<!DOCTYPE html>
    <head>
        <title>
            %title%
        </title>
        <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"></script>
        %pygments%
        <link rel="stylesheet" type="text/css" href="%root_path%css/style.css" />
    </head>
    <body>
        <div id="menu">
        <ul>

            <li><a href="%root_path%index.html">Home</a></li>

            <li><a href="%root_path%about.html">About</a></li>

        </ul>

        </div>

        <div id="toc" style="float: right; position: -webkit-sticky; position: sticky; top: 0px; border: 1px;">
            <div>
            </div>
        </div>
        %content%
        <script>
        var scroll = new SmoothScroll('a[href*="#"]', {
        	speed: 300
        });
        </script>
    </body>
</html>
