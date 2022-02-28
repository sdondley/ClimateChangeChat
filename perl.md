# Setting up an LSP with nvim-lspconfig and Perl in Neovim 0.6.1

## WTF
* ...is an LSP?
* ...is nvim-lspconfig?
* ...is perl?
* ...is neovim

## The Big Picture Stuff

### Why an LSP?
* To write code you use a text editor
    * Text editors require you to type
        * But typing sucks
            * Would you rather use a steam shovel or a spade to dig your home's foundation?
        * Programmers have built a bazillion tools to minimize the amount they have to type
            * vim is one of those tools 
            * More recently, they came up with "IDE's"
                * "IDE" is a stupid name that tries to impress with computer sciency words
                    * stands for "Integrated Development Environment" 
                        * Programmers like talking about "environments" for some reason
                    * Just a tool for helping you write code faster
                        * How about a "Coding Assistant" instead? 
                * also help make it easier to look shit up and navigate lots of code
                * Not without some disadvantages
                    * added complexity
                        * configuring an IDE to work they way you want can take up a shit ton of time from typing and getting some actual typing done
                    * adds a layer of abstraction between you and your code
                        * any time not thinking directly about your code and instead thinking about the tool that writes your code is a distraction 
                            * the real productivity doesn't kick in until after you get over a confusing learning curve (and a very steep one with vim)
                    * Makes it easier to pump out lots of code...but bad, confusing code
                * Rough advice not to be followed strictly
                    * Learn to type before learning to code
                    * Learn to code "by hand" before using an IDE
                    * Use an IDE after you learn to program manually
* So why use an "LSP?"
    * Takes away some of the tedious work of typing and looking shit up 
    * It's kind of magical and fun to use 
    * Allows you to turn vim into a poor man's IDE
        * But an IDE you have absolute full control over (if you know what you are doing) 
    * Common "killer" features that programmers realy like that LSP's can provide:
        * Syntax checking 
            * tells you in real time if your code has an obvious mistake 
            * but cannot tell you if your code behaves the way you want it to 
                * use tests for that 
                    * IDE can hlep you manage and run your tests, not an LSP 
        * Auto completion 
            * Type in the first few characters of an identifier (a variable, function, class, etc.) and a little menu will pop up to prompt you with some guesses as to what you might want to write 
                * You don't have to type in the full name of the identifier, just choose it from the menu 
                * Choosing from menu might often be a little slower for shorter names, but:
                    * Prevents spelling mistakes, which might end up costing time
        * Documentation lookup
            * Forgot what arguments a function takes? 
            * Forgot what a function does?
            * Need a quick reminder of how classes work in language A? 
            * Forgot how a variable is declared?
            * An LSP helps you find the answers you are looking for
        * Code formatting 
            * Avoid spending hours aligning equal signs, indenting just so and eliminating blank lines to make your code look pretty and more readable 
        * There's more an LSP can do, but these are the big ones
* Can't I already to this with vim without an LSP?
    * Yes, most of it 
        * But not quite as conveniently and not as quite fast 
        * Bundles an extra layer of abstraction to provide a bunch of different features so you don't have to do so much manual configuration and set up of other tools
* What about using coc plugins instead?
    * I haven't used coc up until last week when I started using it in conjunction with an LSP
        * Not really qualified to weigh in on the matter
            * sorry 
            * FWIW, from what I've read, the nvim-lspconfig seems to be the future of neovim
* Why Perl?
    * like English, it's my native language 
    * I had difficultly getting an LSP set up with Perl and neovim
        * Not a huge amount of documentation for it
            * Stuff I did find was wrong or incomplete
                * Some of it has since been updated 
                    * thanks to my tireless efforts :) 
            * The two LSPs for Perl are not written by people who use neovim 
                * they use Perl LSP with "VSCode" 
        * Wanted other to avoid my initial confusion 
            * wrote this 

### Is an LSP hard to set up?
* if you are new to vim
    * it's basically impossible to figure out unless you find a step-by-step recipe identical to your needs
        * but still probably a lot easier than setting up a bunch of different non-LSP plugins to provide similar functionality 
* If you have at least some experience with neovim
    * It's not too bad 
    * still a learning curve 
    * it required some trial and error 
* Hopefully this web page helps at least a little

### Why does the Perl community seem behing the curve on adopting LSPs?
* Good question! (if I do say so myself)
* Is it really behind the curve?
    * It seems like it to me 
        * based on my early experiences 
* I could take many guesses as to why
    * but would just me speculating 
        * so no real point to it 
* Maybe this tutorial will help things along

### My relevant background
* totally new to LSPs and nvim-lspconfig 
    * until last week 
* Coding in Perl since late 90s
    * When Perl was king of the web 
* Mac user since 2008
    * for daily computing 
    * used windows from about 1998 until 2008
* GNU/Linux user since early 2000s 
    * Most familiar with Debian 
* Vim user since early 2000s 
    * when I started using Linux 
    * still far from an expert 
* neovim user for maybe 2 years
* Know some vimscript
    * well enough, but very slow to code it 
    * no idea how to go about to architect a sophisticated plugin with it 
* Never used an LSP until last week
    * I know just about zilch about how they work
        * beyond knowing they follow a traditional "client/server" paradigm 
* Never used a proper IDE except for dabbling a little with XCode 
* Never wrote a line of lua until last week 

### Assumptions about your background
* Have been using vim for at least a few months
* Know at least the basics of how to configure neovim
* You know your way around perl and installing perl modules 

### Will this work for Windows?
* No idea. Good luck. You're on your own.
 
## "The important stuff" or "What you probably came here for"

### Big picture stuff 

#### There are two perl language servers
* #1
* #2
* get links on cpan 
* go over abbreviations
* names are confusing
* to neovim, they go by very different abbrevations:
    * perllsp
    * perlpls 
* figure out how long they've been around
* both are in active development
* P::LS and PLS are my abbreviations
* get github links
* get names of developers
* installing the language servers 
    * briefly mention cpanm 
     
     

