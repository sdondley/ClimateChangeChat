# My "Note Stream"

A streaming diary of rather random stuff I'm taking notes on to keep track of shit. I can dump notes from here and organize them later into the website if they warrant it. These notes are mostly for me but feel free to take a peek from time to time to see what I'm up to.

# 2022

## March

### 11th
#### On the term "note stream"
* I never heard the term before thinking of it tonight     
* apparently it's a product from Microsoft
    * looks kind of dumpy 
    * [Get Note Stream - Microsoft Store: www.microsoft.com](https://www.microsoft.com/en-us/p/note-stream/9wzdncrdd17s?activetab=pivot:overviewtab)
#### adding "Notes" to menu
* good progress tonight on the site
    * and for the last week 
* feeling I can relax on this project a bit and work on something else
#### Listening music while I code my site tonight
* https://www.youtube.com/watch?v=o_HPLf3lmb4

### 10th
#### having issues with disply of youtube videos with note headers
* showing up as raw html wrapped in a `<pre>` tag 
* probably will require more modifications to raku post processor script
    * put youtube videos in a bulleted list
        * look for iframe element in a bullet 
        * add class to parent bullet
        * modify css to remove bullets for li items in that class
    * the above did the trick
#### old/new imacs connected well through ethernet
* having issues with disply of youtube videos with note headers
    * showing up as raw html in a `<pre>` tag 
    * probably will require more modifications to raku post processor script
* faster transfer speeds 
* can also be used to stream audio from 2020 to 2014
    * using audio hijack/loopback (see below) 
#### 2014 imac software installs
* vlc, via homebrew
* audio hijack
* loopback 
#### moved tech notes to their own folder
* Is there any good reason to separate snips from notes? 
    * I may just fold them into the notes. 
    * Even better by may to have them get copied out automatically from notes file and then separated out into separate files automatically.
#### set up streaming between 2020 imac and 2014
* using audio hijack/loopback 
* I can now use dictation using a high-quality mic which gets streamed over via ethernet to the old iMac 
#### this guy has a site pretty similar to mine:
* [Git errors and how to solve them - Technotes: technotes.adelerhof.eu](https://technotes.adelerhof.eu/git/git_errors/)
* also done in markdown
* less of a wiki, though
* finally got private pages working with submodule on ccc site
    * had a lot of trouble with submodules 
    * kept getting errors trying to set md_private_dir
    * just removed it from server
    * potential fix:
        * [fatal: remote error: upload-pack: not our ref · Issue #704 · darlinghq/darling: github.com](https://github.com/darlinghq/darling/issues/704)
#### Jon Steward interview Shell CEO
* first interesting thing I've seen Jon do on his new show
    * I haven't watched the show at all 
* https://www.youtube.com/watch?v=E_-9Uk3xnkU
#### Reaction to new mac Studio
* https://www.youtube.com/watch?v=CMm7UZKtGNk
#### set up private part of climate change chat website for private notes
* "private" directory set up as a git submodule
* directory on server is password protected with apache auth_basic
#### investigating why old mac crashes at high resolutions
*  [What might cause my old late 2014 iMac to constantly crash at the highest resolution? : mac: www.reddit.com](https://www.reddit.com/r/mac/comments/tb19cx/what_might_cause_my_old_late_2014_imac_to/)
 
### 9th
#### battled a lot today wem crashes on imac 2014
* having kernel panic every 15 min or so 
* pram reset seems to have finally fixed the issue 
    * nope, still happening 
* crashes not happening in safe mode
    * screen res is lower in safe mode 
        * maybe part of the problem 
    * think I need a technician to look at this
* does not seem to crash at lower screen resolutions when not in safe mod
    * indicates a problem with the gpu?

#### power to chernobyl plant cut off
* only 48 hours of fuel left on backup generators
* Ukrainian official claims there is grave risk of radiation leak 
* IAEA, a UN body of atomic scientists, says there is no reason for alarm
* Ukrainian utility company says there is a danger

#### debug of responsive issue with this website
* the site slides a little from left to right while scrolling up and down
    * a litle annoying 
* possible solution: 
    ```
    html, body {
        max-width: 100%;
        overflow-x: hidden;
    }
    ```
    * solution from: [how to prevent website sliding left and right Code Example: www.codegrepper.com](https://www.codegrepper.com/code-examples/whatever/how+to+prevent+website+sliding+left+and+right)
#### switched over to Barrier
* open source version of Synergy 
* they are the same piece of software
* both pretty buggy and not user friendly
* but Barrier is free
* will ask for a refund for synergy
 
#### debugged a problem where I was losing ctrl-j/k functionality on client computer with Barrier
* [Frequently losing ctrl-j/k functionality after switching over to client · Issue #1604 · debauchee/barrier: github.com](https://github.com/debauchee/barrier/issues/1604)

### 8th
* more notes on my new computing setup (imac 2020/2014 combo)
    * things seems to be faster when primary machine is not on wifi 
    * connected directly to router
    * may break handoff though?
        * nope, still works 
    * so far, use it for notes
        * ssh into primary
            * attach to an existing tmux session
            * don't have to worry about managing config files
            * commands issued on client machine get played out on primary machine
    * frees up a lot of real estate
    * use f13/f14 hotkeys to toggle betwen machines
        * bit of a reach but:
            * just a single key press
            * can easily feel way to the correct key
            * swiching between two different apps now just takes one keystroke
            * nice side benefit
    * my main programming machine is now right in front of me instead of off to the side
    * there is a slight bit of lag on client machine
    * best not to use mouse on client machine
        * also a little laggy 
* 2014 iMac software installs
    * homebrew 
    * perlbrew
        * 5.34.0 installed 
    * karabiner-elements
* resurrected old 2014 imac workhorse today
    * using it as a second machine/slash 3rd monitor 
    * I now have 3 monitors again
        * I now have 33,523,200 pixels at my command
            * way bigger than Putin's army
        * 2 5K monitors and an old thunderbolt display
        * you can never have enough screen real estate
    * it's actually pretty snappy
    * connected the computers using software that acts as a "virtual" KVM switch
        * called "Synergy"
            *  [Synergy - Share one mouse & keyboard across computers: symless.com](https://symless.com/synergy)
        * works pretty well
        * sometimes there mouse is a bit laggy on second machine 
        * just move mouse cursor over the 2nd machine and the kvm automatically kicks in
        * you can use hotkeys to switch between machines as well
    * this should open up more possibilities for me
    * maybe even better than having the 2nd machine in "target" mode
        * had target mode set up with old 2010 iMac 
            * target mode not compatible with "newer" macs like my 2014 iMac
        * but now I can use this third machine for running tasks I wouldn't want bogging down my main machine
            * maybe smoke tests for perl
            * or for safari, a memory hog, on the old machine
            * or for note taking
                * share the files via icloud 
                    * or synology drive
    * upgrading old imac to latest versino of big sur
        * nearly 6 GB large
        * download speed is very slow
            * perhaps heavily throttled by apple? 
    * and now I get to enjoy installing and configuring software for hours
#### Mac Studio: To Buy or Not to Buy?
* make studio ultra looks tempting as hell
    * lots of sticker shock, though
        * 4k starting price with no monitor 
            * thought I do get a 10% vet disounted 
            * so 3600
        * I **could** trade in my imac 2020 though...
            * apple will only give me $1500 for it 
                * would bring cost down to 2100
                * if it were 2 grand I might be tempted 
                * disappointing
                    * the computer has lost almost 2/3rds of its value in just 18 months 
                        * that's nuts 
                * going for well over $2500  on ebay
                    * knock off maybe about $300 in fees 
                        * net $2200 
            * and i'd be stuck wih just one crappy thunderbolt monitor 
                * would have to spring for a new screen 
                    * about 1450 for their cheapest display
                    * total package would be close to 4 grand with taxes 
                    * ugh, no 
                    * but I may 
                    * but wait, I have a used car I'm looking to sell
                        * how much could I get for that?
* other option is to get the one with the max chip
    * much more reasonably priced at two grand (to start)
    * with trade in, could get for just $300 after vet discount
        * extremely tempting 
    * still have to buy a monitor
        * or coud just use the one crappy thunderbolt display
            * not really an option 
    * however, that monitor could be used for newer computers I buy
        * so could end up saving me money 
    * but would take a huge hit on storage space
        * 4 TB hard drive is $1200! 
            * that's insane 
    * $400 extra for memory upgrade to 64GB
        * what I have now but need much less for m1 chips 
        * likely not needed
    * also still have the 2015 imac
        * could maybe get 4 or 500 hundred for it 
        * which means I would only have to spend about $1000 out of pocket
            * $2200 with 4tb of storage
                * probably not needed 
            * for a much faster computer 
            * maybe slightly better screen 
            * selling old imac would offset that down to about $1800
    * I could probably scale it back to a 1TB drive and get away with it
        * would save me $1000
    * far fewer ports than I need
        * would need to drop about $100 for adapters and such 
    * other options is to live with just the thunderbolt display for a while
    * so (2399 + 1800) - 10% discount - 1500 trade-in = 2699
    * OK, after a lot of hemming an hawing, I'm not going to do this
* going to wait another year or two 
    * will be faster macs by then 
    * what I have is perfectly fine
#### Galaxy Brain newsletter
*  [The Information War Between Ukraine and Russia Is Far From Over - The Atlantic: www.theatlantic.com](https://www.theatlantic.com/technology/archive/2022/03/russia-ukraine-war-propaganda/626975/)
* about the spread of info during wartime on the net
* discusses what we know about following disinformation networks
* quotes experts on dissemination of Russian propaganda and their operations
* upshot: it's too early to tell how prop war is going
#### Stack overflow question on inline perl raku module
* Yup, I can be a real dummy sometimes 
*  [raku - Inline::Perl5 not working with Lingua::En::Titlecase perl 5 module - Stack Overflow: stackoverflow.com](https://stackoverflow.com/questions/71391287/inlineperl5-not-working-with-linguaentitlecase-perl-5-module?noredirect=1#comment126200198_71391287)
#### Anderson Cooper on Stephen Colbert
* talks about coomplications of covering war and what he think Putin is afraid of 
    * https://www.youtube.com/watch?v=9r_8jhtcUIo
* Upshots:
    * it's hard collecting news during wartime
    * CNN is working hard
    * war is horrible
    * Russians are behaving badly
    * Putin is scared of an 80 year old womand protesting
        * sign of weakness and fear 

#### Computering expert talks about why crypto is bullshit
* Listened with half an ear to while coding
* https://www.youtube.com/watch?v=twrduL8aNGE
* guest mentions podcast at end which sounds good
    * The Economict 
        * Babbage is the name of the podcast
            * started to listen to it but fell asleep 

### 7th
#### Watching bill joy ted x talk from 2008
* https://www.youtube.com/watch?v=LN2shXeJNz8
* from 2008
* seems like a bit of a doom an gloomer
    * but still named "joy" 
* civiliation is engaged in an asymmetric warfare against individual bad actors
    * because they have extraorindary amounts of power as a result of new tech tools
    * hard to stop bad actors
* venture capitalist now
* founded Sun microsystems
* wrote vi text editor in 1976
* concerned about future
    * climate change

#### What is Bill Joy up to now?
* seems to have dropped off the map 
* looks like he's retired from venture capitalism
* good chance he's disillusioned 
    * seems to have gone silent on things 
    * or could just be trying to enjoy the rest of his life
* more recent video about crispr genetic tech
* https://www.youtube.com/watch?v=lRJvtYttNNY

#### Tried out HackMD
* collaborate with others using git markup 
    * an idea I have long had 
* pretty impressive but a bit confusing
    * not easy to figure out how to create navigation between pages 
        * got it working, but menu items are tiny 
        * want it to look somethingmore like this
            * [Home - HackMD: hackmd.io](https://hackmd.io/@rimworldmultiplayer/docs/https%253A%252F%252Fhackmd.io%252F%2540rimworldmultiplayer%252Fhome)
* editor kind of sucks
    * has a vim mode, but no key repeat
    * it most respects, much easier to work with vim 
    * but can make it easier to add media
* changes to documents are instant
* you can allow anyone to make changes to docs
    * unsure how you might revert vandalism 
* integrates with github
    * unclear why this was built into their offering
        * do versioning? 
            * if so, kind of kludgy as far as I can tell
                * doesn't seem to integrate in with live edits 
    * can presumably get exported to a proper website from there 

# On This Page

- [My "Note Stream"](#my-note-stream)
- [2022](#2022)
    - [March](#march)
        - [11th](#11th)
            - [On the term "note stream"](#on-the-term-note-stream)
            - [adding "Notes" to menu](#adding-notes-to-menu)
            - [Listening music while I code my site tonight](#listening-music-while-i-code-my-site-tonight)
        - [10th](#10th)
            - [having issues with disply of youtube videos with note headers](#having-issues-with-disply-of-youtube-videos-with-note-headers)
            - [old/new imacs connected well through ethernet](#oldnew-imacs-connected-well-through-ethernet)
            - [2014 imac software installs](#2014-imac-software-installs)
            - [moved tech notes to their own folder](#moved-tech-notes-to-their-own-folder)
            - [set up streaming between 2020 imac and 2014](#set-up-streaming-between-2020-imac-and-2014)
            - [this guy has a site pretty similar to mine:](#this-guy-has-a-site-pretty-similar-to-mine)
            - [Jon Steward interview Shell CEO](#jon-steward-interview-shell-ceo)
            - [Reaction to new mac Studio](#reaction-to-new-mac-studio)
            - [set up private part of climate change chat website for private notes](#set-up-private-part-of-climate-change-chat-website-for-private-notes)
            - [investigating why old mac crashes at high resolutions](#investigating-why-old-mac-crashes-at-high-resolutions)
        - [9th](#9th)
            - [battled a lot today wem crashes on imac 2014](#battled-a-lot-today-wem-crashes-on-imac-2014)
            - [power to chernobyl plant cut off](#power-to-chernobyl-plant-cut-off)
            - [debug of responsive issue with this website](#debug-of-responsive-issue-with-this-website)
            - [switched over to Barrier](#switched-over-to-barrier)
            - [debugged a problem where I was losing ctrl-j/k functionality on client computer with Barrier](#debugged-a-problem-where-i-was-losing-ctrl-jk-functionality-on-client-computer-with-barrier)
        - [8th](#8th)
            - [Mac Studio: To Buy or Not to Buy?](#mac-studio-to-buy-or-not-to-buy)
            - [Galaxy Brain newsletter](#galaxy-brain-newsletter)
            - [Stack overflow question on inline perl raku module](#stack-overflow-question-on-inline-perl-raku-module)
            - [Anderson Cooper on Stephen Colbert](#anderson-cooper-on-stephen-colbert)
            - [Computering expert talks about why crypto is bullshit](#computering-expert-talks-about-why-crypto-is-bullshit)
        - [7th](#7th)
            - [Watching bill joy ted x talk from 2008](#watching-bill-joy-ted-x-talk-from-2008)
            - [What is Bill Joy up to now?](#what-is-bill-joy-up-to-now)
            - [Tried out HackMD](#tried-out-hackmd)
