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
    * [My older website](https://steve.dondley.com/)
        * the content there will eventually get migrated into this one 
        * also uses vimwiki/markdown
        * uses jekyll framework
        * looks nice, but framework was too convoluted and confusing and a pain to keep upgraded 
    * [More about me](Steve Dondley)

# Website Name
* Climate Change Chat for Realists
    * This is the same name as a livestream project about climate change I do
        * Why is the website named after the livestream project? 
            * Because I want to call attention to my project

# Goals
* Have a creative outlet free of limitations and impositions of corporate social media platforms
* make it exceptionally easy to update and maintain
    * will be less likely to abandon a project that is less of a pain to update 
* share ideas and notes with other easily and quickly
* keep track of shit

# The tech under the hood
* all content is published to github to private repo
    * all new content is publshed with custom vim maps
        * Example:
            * Typing `<leader>www` does the following:
                * saves the markdown file I'm working on
                * processes the markdow file and converts to HTML
                * commits the markdown and HTML file to a git repo
                * pushes changes out to the remote repo
    * I can quickly whip out text and publish it to web with little effort
    * git will give me an entire history of every change published to the site
        * nothing will be lost to the historians who stumble upon my great work :) 
* content is pulled in every minute to web server running a cron

## vim
* all pages are created and edited with vim text editor
    * more accurately, neovim, a fork of vim 
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
* It's inherent to the design of the vimwiki plugin I use
* It's much faster to write this way
    * no agonizing over how eloquent I'm being and how well ideas flow 
    * much fucking faster to edit/revise
    * aiming for quantity over quality
* Ideas can be conveyed very succinctly
* I have a hunch prose is dead 
    * 20th century media killed poetry 
    * prose killed by the internet 
    * I notice my own increasing impatience reading wordy shit
        * just get me to the meat of the matter, especially on reality-based topics
            * I'll fill in the emotional details with my own imagination 

# Why is the design so plain?
* It's not as plain as it used to be
    * Gave it a good facelift on 3/5/22 
* I'm more concerned with content and functionality than design
* I don't want it to be time-consuming
    * A design that looks like a magazine and is both functional and not annoying to update and maintain takes a huge amount of effort 
* This will improve somewhat over time as I work on it 
    * may add some graphics to spiff it up a little 
    * right now, I'm not sure I like the colors 
        * may play with it some more 

# Coming Improvements
* Better menu navigation and interlinking between pages
* Mobile friendly table of contents
* Slightly more interesting design
* Get a GD spel checker integrated with vim in a way that isn't annoying
