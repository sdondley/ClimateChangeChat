# Raku Programming Language

I haven't done much with Raku since about early February; not from lack of interest, but lack of time.

# On This Page

- [Raku Programming Language](#raku-programming-language)
- [What is Raku?](#what-is-raku)
- [Why Raku?](#why-raku)
- [Raku-related tech](#raku-related-tech)
- [My Adventures with Raku To Date](#my-adventures-with-raku-to-date)
    - [Problems I've encounted](#problems-ive-encounted)
    - [Ongoing project](#ongoing-project)
    - [Tips and Tutorials](#tips-and-tutorials)
    - [My Raku questions on stackoverflow](#my-raku-questions-on-stackoverflow)
    - [My contributions to the cause](#my-contributions-to-the-cause)
        - [Module's I've Written](#modules-ive-written)
        - [Other contributions](#other-contributions)
            - [Documentation](#documentation)
            - [Elsewhere](#elsewhere)

# What is Raku?
* Fork/rewrite of the Perl programming language
* Ambitious project launched in early 2000s
    * Goal is to be the programming language for the next 100 years 
* First release in 2015
* Originally intended to be called Perl6
    * renamed in 2019 

# Why Raku?
* Easy to learn and start using right away
    * The powerful tools in the language are kept hidden until you need them 
* Very powerful, flexible language
* Very easy to create and distribute new modules
    * [App::Mi6 ](https://raku.land/cpan:SKAJI/App::Mi6)
        * Highly recommended for creating modules 
* Flexible
    * Can write in any common paradigm 
        * procedural
        * object-oriented
        * functional
* Has powerful, new features
    * Grammars 
* It's just fun to play around with and see what I can do with it

# Raku-related tech
* [Cro](Cro)
    * a framework for building websites 
    * written in Raku 
    * have not used it yet but want to play with it
* IDE development in Raku?
    * [Raku IDE notes](notes/Raku-IDE-notes)
    * One exists, called [Comma](https://commaide.com)
        * My [comma notes](notes/comma_ide_notes)
        * Just tried it out for 2 minutes
            * Initial impression is good 
                * much faster than neovim
            * first thing I did is install the [IdeaVim plug-in](https://plugins.jetbrains.com/plugin/164-ideavim/versions) that gives me vim commands inside the IDE
        * downside
            * probably no way to integrate with tmux 
                * will have to set up a hotkey to activate it 
                    * I'll use [Karabiner Elements](Karabiner-Elements) for that 
    * I'd prefer to develop in neovim
        * unable to find a language server, however 
        * syntax highlighting is atrociously slow
            * I turn it off for any file larger than like 50 lines
        * not sure how hard it is to build a language server
            * probably pretty tough

# My Adventures with Raku To Date
* Began learning the language in late Dec. 2021
* Good, helpful community
    * IRC
    * On reddit
    * StackOverflow
        * my questions there get upvoted a lot 
* Community is working to get Raku off the ground
    * Thanks to everyone who has helped me and made me feel welcome
* Going to begin writing some code for helping me manage my vimwiki
* Still have much to learn 
    * Learning functional programming style after years of using perl is bit of a mind-bender 

## Problems I've encounted
* [Subclassing IO::Path](Vimkiki::Files#Subclassing IOPath)

## Ongoing project
* a suite of [Raku vimwiki modules](Raku-vimwiki-modules)

## Tips and Tutorials
* [zef](zef)
* [App::Mi6](App::Mi6)
* Objects and classes

## My Raku questions on stackoverflow
* [Newest posts containing 'user:1641112' and Raku](https://stackoverflow.com/search?tab=newest&q=user%253a1641112%2520%255braku%255d)
## My contributions to the cause

### Module's I've Written
* [Karabiner::CompModGenerctor](https://raku.land/zef:sdondley/Karabiner::CompModGenerator)
    * helps generate shortcut keys for use with Karabiner-Elements app on mac
* [Mac::Applications::List](https://raku.land/zef:sdondley/Mac::Applications::List)
    * list applications on a mac
    * writtn most for use with Karabiner::CompModGenerator

### Other contributions

#### Documentation
* I've gotten a pull request to official documentation site for Raku
* Got a PR pending to documentation

#### Elsewhere
* Made some PRs to some Raku modules
* I try to help out in IRC if I can
    * so far, I can't help too much 

[Notes](notes/raku_programming_language_notes.md)

