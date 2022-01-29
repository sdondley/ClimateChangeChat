# About this website
* Authored by:
    * [Steve Dondley on twitter.com](https://twitter.com/steve_dondley)
* Name:
    * Climate Change Chat for Realists
        * This is the same name as a livestream project I do 
            * Why? 
                * Because I want to call attention to my project
* Goals:
    * make it exceptionally update and maintain
        * will be less likely to abandon a project that is less of a pain to update 
    * share ideas and notes with other easily and quickly
    * keep track of shit
* Under the hood tech:
    * all content is published to github to private repo
        * all new content is publshed with vim map:
            * <leader>www 
                * saves the file 
                * commits changes to repo
                * pushes changes out
    * content is pulled in every minute to web server running a cron
    * vim text editor
        * all pages are created and edited with it
        * about
            * used heavily by open source coders 
        * benefits 
            * absolutely the fastest way to input and maniupalate text 
        * plugins used
            * vimwiki
                * designed to easily create wiki pages 
                * has simple templating system for standardizing pages 
                * easily creates outline and links
                * allows pages written in markdown format
                * converts vimwiki pages to html using a ruby gem called vimwiki_markdown
                * also uses some special sauce code that I wrote
            * taskwiki
                * a bridge between taskwarrior task software and vimwiki 
                * allows vimwiki to be the interface for managing tasks
* Why is it written mostly in outline form?
    * It's much faster to write this way
    * Ideas can be conveyed very succinctly
* Why is the design so plain?
    * I'm more concerned with content and functionality over design
    * This will change over time as I work on it 

