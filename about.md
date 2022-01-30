# About this website

# On This Page

- [About this website](#about-this-website)
- [Authored by](#authored-by)
- [Website Name](#website-name)
- [Goals](#goals)
- [The tech under the hood](#the-tech-under-the-hood)
    - [vim](#vim)
- [Why is this site written mostly in outline form?](#why-is-this-site-written-mostly-in-outline-form)
- [Why is the design so plain?](#why-is-the-design-so-plain)
- [Coming Improvements](#coming-improvements)

# Authored by

* [Steve Dondley on twitter.com](https://twitter.com/steve_dondley) (**Caution:** f-bombs ahead)
    * Quick bio
        * Live in Westfield, MA
        * Married with son in college, majoring in comp. sci. 
        * Have been running a small web/phone app development company and web hosting service for unions since 2004
        * Ex-US Navy nuclear reactor operator (1988 - 1994)
        * One-term city councilor (2016 - 2018)
        * Former labor organizer and political/labor activist
    * Political views
        * Pragmatic progressive
        * Very worried about climate change
        * There are way too many idiots these days
    * Email: s@dondley.com

# Website Name
* Climate Change Chat for Realists
    * This is the same name as a livestream project about climate change I do
        * Why is the website named after the livestream project? 
            * Because I want to call attention to my project

# Goals
* Have a creative outlet where I'm free of the chains and impositions of corporate social media platforms
* make it exceptionally update and maintain
    * will be less likely to abandon a project that is less of a pain to update 
* share ideas and notes with other easily and quickly
* keep track of shit

# The tech under the hood
* all content is published to github to private repo
    * all new content is publshed with custom vim maps
        * Example:
            * Typing `<leader>www` does the following:
                * saves the markdown file I'm workig on
                * processes the markdow file and converts to HTML
                * commits the markdown and HTML file to a git repo
                * pushes changes out to the remote repo
    * I can quickly whip out text and publish it to web with litle effort
    * git will give me an entire history of every change published to the site
        * nothing will be lost to the historians who stumble upon my great work :) 
* content is pulled in every minute to web server running a cron

## vim
* all pages are created and edited with vim text editor
* allows you to avoid using a mouse 
    * I fucking hate using a mouse
        * Way too slow
        * Way too tedious
        * I get around the computer as much as possible with keystrokes and hot keys
            * It requires some obsession to get there
            * But, in the end, it makes computing far more enjoyable for me
* about vim
    * used heavily by open source coders 
* benefits 
    * absolutely the fastest way to input and maniupalate text 
* primary plugins used to crate these pages
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

# Why is this site written mostly in outline form?
* It's inherent to the design of the vimwiki plugin
* It's much faster to write this way
    * No agonizing over how eloquent I'm being and how well ideas flow 
* Ideas can be conveyed very succinctly
* I have a hunch prose is dead 
    * 20th centure media killed poetry 
    * prose killed by the internet 

# Why is the design so plain?
* I'm more concerned with content and functionality than design
* I don't want it to be time-consuming
    * A design that looks like a magazine and is both functional and not annoying to update and maintain takes a huge amount of effort 
* This will improve somewhat over time as I work on it 

# Coming Improvements
* Better menu navigation and interlinking between pages
* Mobile friendly table of contents
* Slightly more interesting design
