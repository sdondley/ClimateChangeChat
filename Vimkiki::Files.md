# Vimwiki::Files Module

A module I'm currently writing for analyzing a markdown file to help me process
their conversion to HTML for output to this website. I want this module to be a
subclass of [IO::Path](https://docs.raku.org/type/IO::Path) so it inherits its
methods.

# On This Page

- [Vimwiki::Files Module](#vimwikifiles-module)
    - [Subclassing IO::Path](#subclassing-iopath)
        - [Problem](#problem)
            - [Help from Stackoverflow](#help-from-stackoverflow)
            - [The Struggle Continues](#the-struggle-continues)
            - [Help from IRC](#help-from-irc)
            - [Upshot: IO::Path may not be subclassifiable](#upshot-iopath-may-not-be-subclassifiable)
        - [Solution! Thanks raiph](#solution-thanks-raiph)
        - [What did we learn?](#what-did-we-learn)
    - [One more thing](#one-more-thing)

## Subclassing IO::Path

### Problem
* I ran into problems right away trying to subclass Raku's IO::Path module
* Looked for help from community

#### Help from Stackoverflow
* Posted question to stackoverflow about it
    * [raku - How to make a class that inherits the same methods as IO::Path? - Stack Overflow: stackoverflow.com](https://stackoverflow.com/questions/70919945/how-to-make-a-class-that-inherits-the-same-methods-as-iopath/70920126#70920126)
    * recevied an answer
        * from user "raiph"
        * gave me tips for subclassing IO::Path
            * create a `new` method in child class
            * use `nextwith` function call in `new` method
        * at first the answer seemed to work
            * quickly ran into problems, however
                * I was unable to manipulate attributes of my subclass
                    * unable to get my object to set/use its own attributes
    * raiph then modified his original answer later
        * suggested that the `$.path` attribute I had in the child class was a problem
            * would conflict with original `IO::Path` module
        * raiph now recommended delegating IO::Path methods through an attribute

#### The Struggle Continues
* I was still curious about how to subclass IO::Path
    * wanted to learn 
    * partially took raiph's recommendation and tried to get subclassing working
        * removed the `$!path` attribute 
        * still ran into a bunch of problems 
* spent hours trying to get it to work but was unable to
    * The good news is I learned some stuff in the process 
        * One module I found extends IO::Path
            * [IO::Path::More ](https://raku.land/github:labster/IO::Path::More)
            * Uses [augment](https://docs.raku.org/syntax/augment)
                * not recommended to use 
                * can't add your own attributes to the child class when using augment

#### Help from IRC
* started to feel dumb, dejected and defeated :)
* finally gave in and posted code IRC to see if anyone could help me figure this out
    * posted my last best attempt to get it working:
    ```
        #! /usr/bin/env raku
        use v6;

        class Vimwiki::File is IO::Path {
            has $.blah;

            multi method new($path) {
                self.bless;
                nextwith($path);
            }

            submethod BUILD() {
                say 'hi';
                $!blah = 'test';
                say $!blah;
            }
        }

        my $vwf = Vimwiki::File.new('t/test_file.md');
        say $vwf.^mro;
        say $vwf.s;
        say $vwf.blah;
    ```
    * the code outputs:
    ```
            hi
            test
            ((File) (Path) (Cool) (Any) (Mu))
            0
            (Any)
    ```
    * I asked why was `say $vwf.blah` not returning any results?
    * went to bed, waited for Europeans to wake up
        * where are the American Raku developers, btw? 

#### Upshot: IO::Path may not be subclassifiable
* I wake up and check IRC
    * lizmat responded
        * yay! 
        * suggested the IO::Path may not be subcasslifiable 
            * suggested [submitting report](https://github.com/rakudo/rakudo/issues/new)
            * issue submitted 
                *  [Unable to subclass IO::Path · Issue #4750 · rakudo/rakudo: github.com](https://github.com/rakudo/rakudo/issues/4750)
* I felt better and a lot less like a dummy

### Solution! Thanks raiph
* Finally got around to raiph's suggestion to delegate. This seems to work perfectly:
```
    unit class Vimwiki::File;

    has IO::Path $.path is required handles * where *.IO.e;
    has $.content;


    multi method new($path) {
        self.bless(path => IO::Path($path));
    }

    submethod TWEAK() {
        $!content = $!path.slurp;
    }
```
* Just not sure if I'm using `TWEAK` right or not 
    * I thought `TWEAK` took same arguments as new constructor
        * I don't appear to need any arguments, though 
        
### What did we learn?
* Raku is still a little rough around the edges
    * Probably somewhat expected
        * It's fairly new
        * It's a huge, complex language 
* if you're a beginner
    * You can kill a lot of time banging your head on a problem
    * probably best to go with what works immedately and move on
        * on the other hand
            * my diligence brought attention to a problem 
            * while frustrating, you can learn a lot during the process
* if you're much more skilled
    * Raku is an opportunity to build upon a great foundation and pick up skill building the language 

## One more thing
* lizmat has suggested a way for subclassing a core module
    * See  [Unable to subclass IO::Path · Issue #4750 · rakudo/rakudo: github.com](https://github.com/rakudo/rakudo/issues/4750)
    * No delegation required
* End result that I'm going to build upon:
    ```
    unit class Vimwiki::File is IO::Path;
        has $.content;
        
        method !SET-SELF() {
            $!content = self.slurp;
            self;
        }

        method new($path) {
            $path.IO.e ?? self.IO::Path::new($path)!SET-SELF() 
                      !! die "$path is not a file";
        }
    ```
* The TWEAK and BUILD methods are still ignored
    * the `SET-SELF` method takes care of that 
        * is a private method, hence the `!` before the name 
