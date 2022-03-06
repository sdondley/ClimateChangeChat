<!DOCTYPE html>
    <head>
        <title>
            %title%
        </title>
      <!-- %pygments%  -->

        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Libre Franklin">
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source Code Pro">
        <link rel="stylesheet" type="text/css" href="%root_path%css/style.css" />

	    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
        <script src="%root_path%js/highlightjs-line-numbers.js"></script>
        <script>
          hljs.highlightAll();
          hljs.initLineNumbersOnLoad();


        </script>
    </head>
    <body>
        <div id="menu">
            <ul>
                <li><a href="%root_path%index.html">Home</a></li>
                <li><a href="%root_path%about.html">About</a></li>
                <li><a href="%root_path%tech-toots.html">Tech Toots</a></li>
            </ul>
        </div>
        <div id="page">
            <div id="content">
              %content%
            </div>
            <div id="toc">
                <div class="scrollsync">
                </div>
            </div>
        </div>
        <script src="%root_path%js/scroll_sync.js"></script>
        <script src="%root_path%js/zenscroll/zenscroll-min.js"></script>
        <script>
          zenscroll.setup(200, 50);
          </script>
    </body>
</html>
