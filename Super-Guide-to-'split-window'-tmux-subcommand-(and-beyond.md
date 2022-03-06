# Super Guide to the `split-window` tmux Subcommand (and Beyond)

# On This Page

- [Super Guide to the `split-window` tmux Subcommand (and Beyond)](#super-guide-to-the-split-window-tmux-subcommand-and-beyond)
    - [Guide overview](#guide-overview)
        - [Important note on turning off existing tmux customizations](#important-note-on-turning-off-existing-tmux-customizations)
    - [What does the `split-window` subcommand do for you?](#what-does-the-split-window-subcommand-do-for-you)
    - [Executing the `split-window` subcommand](#executing-the-split-window-subcommand)
        - [Using key binding to execute the `split-window` subcommand](#using-key-binding-to-execute-the-split-window-subcommand)
        - [Executing `split-window` from the tmux command prompt](#executing-split-window-from-the-tmux-command-prompt)
        - [Creating splits from a tmux configuration file](#creating-splits-from-a-tmux-configuration-file)
        - [Executing `split-window` from a shell](#executing-split-window-from-a-shell)
    - [The `split-window` default operation](#the-split-window-default-operation)
    - [Basic `split-window` options](#basic-split-window-options)
        - [Horizontal splits](#horizontal-splits)
    - [Faster commands with the `splitw` alias and tab completion](#faster-commands-with-the-splitw-alias-and-tab-completion)
        - [Saving strokes with the `split-window` alias](#saving-strokes-with-the-split-window-alias)
        - [Tab completion for supercharging your productivity](#tab-completion-for-supercharging-your-productivity)
    - [More basic `splitw` options](#more-basic-splitw-options)
        - [Controlling the size of the new pane with the `-l` and `-p` size options](#controlling-the-size-of-the-new-pane-with-the--l-and--p-size-options)
            - [The `-l` option](#the--l-option)
            - [the `-p` option](#the--p-option)
        - [Controlling the placement order of a new pane with the `-b` option](#controlling-the-placement-order-of-a-new-pane-with-the--b-option)
        - [Creating a new pane on the left, right, top, or bottom of a window with `-f`, `-b`, and `-h` options](#creating-a-new-pane-on-the-left-right-top-or-bottom-of-a-window-with--f--b-and--h-options)
        - [Changing which pane is split with the `-t` option](#changing-which-pane-is-split-with-the--t-option)
            - [Overriding how panes are numbered with the `set-window-option` command](#overriding-how-panes-are-numbered-with-the-set-window-option-command)
        - [Changing the working directory our pane opens in with `-c`](#changing-the-working-directory-our-pane-opens-in-with--c)
        - [Changing the active pane when a new pane is created with `-d`](#changing-the-active-pane-when-a-new-pane-is-created-with--d)
    - [Passing shell commands to `splitw`](#passing-shell-commands-to-splitw)
        - [A simple, but very fleeting example](#a-simple-but-very-fleeting-example)
        - [Keeping panes open](#keeping-panes-open)
        - [Respawning panes](#respawning-panes)
        - [Attack of the zombie panes](#attack-of-the-zombie-panes)
        - [Using `splitw` options with a shell command](#using-splitw-options-with-a-shell-command)
    - [Using the `bind-key` subcommand to perform advanced splits](#using-the-bind-key-subcommand-to-perform-advanced-splits)
        - [Introducing key tables](#introducing-key-tables)
        - [Creating a custom key table](#creating-a-custom-key-table)
        - [More useful examples of key-binding splits](#more-useful-examples-of-key-binding-splits)
            - [Getting you ready to stand on your own](#getting-you-ready-to-stand-on-your-own)
        - ["Chaining" key tables](#chaining-key-tables)
    - [Moving beyond the tmux command prompt](#moving-beyond-the-tmux-command-prompt)
        - [Introducing the `~/.tmux.conf` file](#introducing-the-tmuxconf-file)
            - [Adding commands to the tmux configuration file](#adding-commands-to-the-tmux-configuration-file)
            - [Updating and reloading the configuration script](#updating-and-reloading-the-configuration-script)
        - [Supercharging tmux automation with shell scripting](#supercharging-tmux-automation-with-shell-scripting)
    - [One More Thing: Navigating panes](#one-more-thing-navigating-panes)
        - [Setting up key binding for more convenient pane navigation](#setting-up-key-binding-for-more-convenient-pane-navigation)
    - [Next steps in your tmux adventures](#next-steps-in-your-tmux-adventures)
- [RTFM!](#rtfm)

## Guide overview

tmux, like other great software, is deceptive. On the one hand, it's fairly easy
to get set up and start using right away. On the other hand, it's difficult to
take advantage of tmux's adanced power features without spending some quality alone
time with the manual. But the problem with manuals
is that they aren't geared toward beginners. They are geared toward
helping seasoned developers and computer enthusiasts quickly obtain the
information they need so they can get back to real work. As a result, man pages
assume a certain level of a competence and experience and don't spend a lot of
time laying a conceptual framework for their software. And so while we agree
that "RTFM" (read the frickin' manual) is good advice, it's not the best advice
if the manual is written at a level that's inaccessible to you. So this guide
provides a gentler approach to learning the subtler, unwritten intricacies of
tmux that can't be easily gleaned by typing `man tmux` into the terminal. It
assumes the user is new to tmux and even fairly new to the world of command
line-based computing.

The only requirement for using this guide assumes is that you have tmux
installed and have figured out how to launch a tmux session from the shell with
**`tmux new -s <session_name>`** and that you have at least a day or two's worth
of experience getting around a command line. Though this guide will be
accessible to new users, many fairly experienced users can benefit from it, too.
The guide might start with an excessive amount of hand holding, but it
eventually goes into fairly good detail on many tmux features and configuration
options. So unless you have spent many hours reading the tmux manual, don't be
surprised if you pick up quite a few tips and tricks even if you've been using
tmux for years but never took the time to truly ***grok*** it.

So this guide's goals are two-fold: 1) help newbies get over the hump of
confusion that often accompanies new software by giving them enough experience
and a comfort level with tmux so that RTFM becomes possible and 2) give less
experienced users and even some intermediate users a deeper understanding and
appreciation for how to take advantage of tmux's many available customizations
and features.

The `split-window` command was chosen for a "Super Guide" because it is,
arguably, the first command a beginning tmux user should be very familiar with.
Working with many applications simultaneously is the core feature of tmux and
the `split-window` command is the gateway command for taking advantage of it.
Using this command well requires the knowledge of many other configuration
settings and subcommands so by taking the time to explore this one command in
great detail, you will be much closer to being able to bend tmux to your will.

### Important note on turning off existing tmux customizations

This guide assumes you are starting with a "clean" install of tmux and that
there is no `.tmux.conf` configuration file customizing your tmux set up or
adding plugins. To ensure the examples in this guide work and to minimize your
confusion, we strongly encourage you to rename your `~/.tmux.conf` file and
store it safely somewhere on your hard drive. You can restore it when you finish
with the guide.

It's possible, though unlikely, there is a global tmux configuration file on
your system that is customizing your tmux experience. Consult your operating
system's documentation or friendly system administrator to ensure there isn't.
If there is and you can't get rid of it, consider setting up a virtual machine
or docker image you can call your own.

## What does the `split-window` subcommand do for you?

We'll begin our guide with a big picture overview of what the `split-window`
subcommand does.

When a new tmux session or window is created in tmux, only one application can
be seen inside of the visible window that tmux opens. `split-window` splits this
window up into rectangular-shaped subunits, called **panes,** as in a window
pane. If there is more than one pane in a tmux window, they are visually
delineated from one another with a thin, single pixel-wide border. Each pane can
have a different height and width so a tmux window with many panes can start to
resemble [a window designed by the famous 20th century architect Frank
Lloyd Wright](http://www.glass-by-design.com/images7/flw_abstract_stained_glass_1x.jpg) more than the neat, symmetrical arrangement found on a French door.

Panes have one of two states: "active" and "inactive." Active panes will have a
brighter border color than the "inactive" ones. There can be only one active
pane in a tmux session at a time, and that is the pane you are presently working
in and that tmux will direct your keystrokes to. Inside each pane is a program,
or **process,** if we are going to be more technically accurate. It could be a
vim editing session, a shell prompt or any kind of application that can run in a
terminal. You can have the same program running different processes in separate
panes. For example, you might have five panes open, each with a different vim
process running inside.

The advantage of being able to run multiple processes at the same time in
different sections of your computer monitor is clear. The idea is not new and
has been around for decades. If you have an operating system with a gui, you
don't need tmux to pull this off. You could open a terminal window for each
process you want to run and arrange them on your monitor the way you like.  Or
if the machine you want to run these processes on doesn't have a gui, you can
ssh into them from a computer that does and achieve the same effect.

However, tmux is much more than a text-based gui. It has many great efficiency
advantages it can offer over a modern gui environment by collecting all the
processes together under a single tmux server that can talk to the
pseudo-terminals containing the processes within each pane. And so if you take
the time to become proficient with tmux, you will be duly rewarded.

The first step in that journey is to learn the `split-window` command well
because it is the key to unlocking the most important feature of tmux. The
`split-window` subcommand creates more panes so you can have more
applications visible at once. Of course, you only have so much screen real
estate and so there is a practical limitation for how many panes you can have
open in a single window. Working around that limitation is a topic for
another time. Our focus is on how to master this one single command to get
you off to a good start toward achieving mastery with tmux.

Before getting started, we should point out that one potentially confusing aspect
of the `split-window` command is its name is slightly misleading. If you split a
rock in half, you expect to get two rocks, right? But `split-window` doesn't
split a window into two windows. Instead, it splits the **current active pane**
of the current window into **two panes.** So it might be helpful to think of the
`split-window` command as the "split pane" command instead.

## Executing the `split-window` subcommand

From the shell command line, you can issue hundreds or even thousands of
different commands. If you have tmux installed, `tmux` is one of those commands.
The `tmux` command itself has many commands nested within it. And so each of the
commands inside of tmux is properly referred to as a "subcommand" of the `tmux`
command.

There are a few different ways to execute the subcommands. You can access them
with a couple of keystrokes inside a tmux window using what tmux calls **key
bindings.** You can also type the subcommands in directly to the tmux command
line.  You can also place the subcommand inside a tmux configuration file.
Finally, you can run them from a shell command line or script. Each of these
ways is discussed next.

**Note:** This guide assumes you have not customized your key bindings. If you
haven't already done so, make sure you have removed all tmux customizations as
recommended in the "Important note on turning off tmux customizations" in the
overview to this guide above.

### Using key binding to execute the `split-window` subcommand

There are two different types of tmux splits: vertical and horizontal. Each of
these two splits has a **key binding** dedicated to it that can be executed
by you. To execute the key binding for the **vertical split,** which splits the
current pane of the current window into a top and bottom pane, you type in the
following keys from inside an active terminal window running a tmux session:

**`C-b "`**

For those new to tmux, this means "hold down the `control` key while you tap the
`b` key, then release the control key, then hit the `"` key (`shift-'`)." So
`C-b` is read as "Control-b." The `"` character is the double quotation mark.

After typing these keys, you will see a thin line appear across the middle of
your window (if you're not seeing this behavior, seriously consider rereading
the "Important note on turning off tmux customizations" in the intro to this
guide above; this is your final warning).  Everything above the line is the
original pane and everything below the line is the new pane. Although a
horizontal line appears across your screen, tmux considers this to be a
"vertical" split because the new pane is aligned vertically with the old pane.
This often confuses seasoned vim users where a "horizontal" split looks like
tmux's vertical split. You'll frequently see tmux's vertical split referred to
as horizontal splits in poorly researched blog posts across the web.

At any rate, The `C-b "` keystroke combination is one of the many default key
bindings that tmux provides for you out of the box. Key bindings are similar to
"hot keys" or "shortcut keys" you may be familiar with in other applications
(e.g., control-s for "save document"). Key bindings are great for issuing
frequently used commands very quickly. In tmux, key bindings are a bit more
flexible and powerful than typical hot keys. We will learn more about them in
more detail later in the guide.

For now, you should know that in the key binding above, tmux refers to the
**`C-b`** keystroke combination as the **prefix key.** When you hit `C-b`, tmux
hijacks your keyboard input from all the other applications and waits patiently
for you to enter the next key to see what tmux command you want to perform. In
this way, specific tmux commands are **bound** to certain keys and keystroke
combinations, hence the phrase "key binding." The key combination bound to our
split command in this case is `C-b "`. tmux refers to the key after the prefix
key as the **key command**. In this case the key command is the `"` character
which, by default, is associated with the `split-window` command.

The prefix key prevents they key commands from activating while you work on the
applications running inside the panes. For example, if you want to type the `"`
character into a text document, it would be annoying if tmux started splitting
panes on you. The `C-b` prefix is a magic keystroke that wakes tmux up and gets
it ready to listen for your next keystroke. `C-b` tells tmux, "Listen up!  I
want to give you a command," much like the talking speakers on your kitchen
counter.  You wouldn't like it if those devices piped up during dinner
conversation with your friends and family. That's why you're required to
"prefix" your commands with some attention-grabbing statement like "Hey
Siri!"  or "Alexa." tmux works the same way. It's there listening for the
special prefix command but it shuts up and stays out of the way until it gets
it.

Key bindings can be customized to your liking. You will learn how to do this
later. For now, the only other useful thing to know about key bindings is that
if you hit `C-b` and and then want to back out of giving a key command, you can
hit **`Esc`** (the escape key). This will get tmux back out of the way
so you can continue interacting with the application you have open in
your active pane.

A different key binding is used to perform a **horizontal split.** In tmux,
horizontal splits place the new pane on the right side of the current active
pane. The key binding for a horizontal split is:

**`C-b %`**

Though the key bindings can be a bit confusing to use a first, you will quickly
adapt to them and use them reflexively without even thinking.

To help you remember the default key bindings for splitting, think of the
punctuation marks used in these two bindings as visually resembling the types of
splits they perform. The double quotation mark used for vertical splits are
vertical lines that you can imagine as connecting a top and bottom pane. The
percent sign has a circle on the left and right split with a line between them,
which looks kind of like a horizontal split. Many people still find this
confusing and one of the first custom key binding changes they make is to the
default key bindings for splitting panes. Again, we will show you how to do that
later in the guide.

### Executing `split-window` from the tmux command prompt

The two default key bindings for splitting windows only do very basic splits.
It's possible to modify the existing key bindings and add new key bindings to do
fancier kinds of splits which we'll show you how to do later in the guide. But
if you don't have a key binding that does exactly what you need, then you will
need to type the `split-window` command in manually. To run the default command,
we type in the following keystrokes:

**`C-b :split-window`**

Let's break this down in detail. Here we see the prefix key again, `C-b`,
followed by a colon, followed by the actual command, `split-window`. The command
above does not supply any options or a shell command that may be passed to the
`split-window` subcommand. We will cover that later.

For now, the really important part to understand is the special role the colon
plays in the command above. Typing in the `:` character after our prefix, `C-b`,
is a key binding that places us into tmux's command line mode. When we enter
command line mode, the tmux command prompt appears and our cursor is placed
inside of it. Now we can start typing the `split-window` command and tell tmux
exactly how we want our split to be executed using options and arguments we
might supply. `C-b :` essentially tells tmux "Hey, I want to type in a command,
so give me the command prompt." Like with `C-b`, you can back out of the command
prompt by hitting the `Esc` key.

We should point out that the tmux command line is not the same as a shell
command line. tmux expects to see tmux subcommands here, not shell commands. If
you do need to run a shell command from within tmux, you can use the
appropriately named `run-shell` command which is not covered in this guide.

### Creating splits from a tmux configuration file

The `split-window` command, along with other subcommands, can also be placed
inside of a tmux configuration file. These configuration files can run every
time you start tmux. You can also run them manually while inside tmux. You can
use configuration files to help you automate your window splits and get them set
up just the way you like when a new tmux session is launched. All this will be
covered later in the guide.

### Executing `split-window` from a shell

The `split-window` can also be directly run right from a shell command line:

**`tmux split-window`**

Note that this way of executing `split-window` is the same as executing it from
tmux's command prompt except we precede the subcommand with the `tmux` shell
command. Our shell has no knowledge of what `split-window` is, so we have to
type `tmux` first so it knows to pass the subcommand along to tmux which will
know how to respond. The other difference is that there is no need to type
a colon, of course, because we aren't trying to get to the tmux command prompt,
we are passing the subcommand directly to tmux via the shell. If we do put a
colon there, tmux will think the colon is part of an unreognized command and
throw an error.

Running the `split-window` subcommand works even if it is executed from outside
of a tmux session. That's because the command ultimately gets passed to the tmux
server running on our machine which processes it and takes the appropriate
action. As a result, we can run tmux commands from inside shell scripts and
functions, and perform all kinds advanced automation tricks that can make
working with tmux a real joy. Unfortunately, this is not a guide on shell
scripting and that will be left to the reader to explore.

Now that we know all the different ways to execute the split command, let's take
a closer look at what it actually does and then later, how we can change its
default behavior.

## The `split-window` default operation

It's time to explore what `split-window` does out of the box, without passing it
any options. Start a new tmux session with **`tmux new -s split`** and then
issue this simple `split-window` command:

**`C-b :split-window`**

This default command does quite a bit of work. It:

* Splits the currently active pane and opens a new pane
* Places the new pane below the existing active pane (a vertical split).
* Sizes the new pane to be exactly half the height of the current pane
* Launches the default shell in the new pane
* Deactivates the old pane and makes the new pane active. As a result, your
cursor is now at the command line prompt of the shell the opens up inside the
new pane.

As already mentioned, you can use the `C-b "` key binding to do this same
action. Go ahead and practice issuing this key binding enough times so that the
action becomes instinctual. If you start running out of space in your window,
practice using the **`C-b :kill-pane -a`** command to close all the open panes
except the active one. Or, if you want to kill just the pane you are currently
in, do **`C-b x`** and answer "y" when asked if you are sure you want to kill
the pane.

As you create new panes, you'll notice each pane you created gets progressively
smaller.  The first new pane you create is half the size of the window. The
second pane created is half the size of the first pane. The third pane is half
the size of the second, and so on, until we run out of room and can't create any
more panes.  Don't worry about resizing the panes or moving between panes. We
will cover all that later.

The next several sections of this guide will show you how to override tmux's
default settings by using the `split-window` **options** to get it to respond
with in more precise and desired behaviors.

## Basic `split-window` options

### Horizontal splits

When you get bored creating vertical splits and are ready to inject some
excitement into your life, create a horizontal split with the following command:

**`C-b :split-window -h`**

This is the same command as the vertical split except we've added an `h`,
preceded with a `-`, after the subcommand. The dash tells `split-window` that we
are about to give it one or more options. In this case, the single "h" option we
pass to our command stands for "horizontal." So when we apply this option,
instead of the new pane showing up below the existing pane, it will show up to
the right of the existing pane. In other words, the `h` option overrode our
default vertical split with a horizontal split.

As we saw, this simple split can be performed with the `C-b %` key binding. Go
ahead and practice a little with this key binding.

We will learn more `split-window` options in a bit. First we will take a short
detour and talk about how to save a few keystrokes issuing the `split window`
command in tmux.

## Faster commands with the `splitw` alias and tab completion

Typing sucks. It's painfully slow even if you're a fast typist. It would be much
better if we could just think a thought and have the computer magically execute
it. That day isn't coming any time soon so the next best thing is to make more
efficient use of our keystrokes to make issuing commands much faster.

### Saving strokes with the `split-window` alias

One way to do that is by using aliases. tmux provides an alias for
`split-window` called `splitw`. So instead of 12 keystrokes with `split-window`,
you only have to type in 6 keystrokes with `splitw`. It doesn't sound like much
but it adds up over time. And when you want to get something done fast, typing
in all those keys gets very annoying very fast.

From this point forward in the guide, we will use `splitw` instead of
`split-window`. So instead of **`C-b :split-window`** you will see **`C-b
:splitw`**.

### Tab completion for supercharging your productivity

Aliases are nice but tab completion is even better. Hopefully, tab completion is
already set up on your machine. You can find out by issuing the following
keystrokes in tmux:

**`C-b :sp<TAB>`**

This is the prefix, followed by the colon, followed by `sp`, followed by the
"Tab" key. The tab key tells tmux to try to finish typing in the rest of the
command for us. We only have to type in just enough of the command so the
completion feature can figure out the full command we wish to issue. Otherwise,
it will complete as much of the command it can until we supply it with more
letters in the command and hit `TAB` again.

In this case, `sp` is enough for our completion feature to determine we want to
use the full `split-window` command because no other commands begin with "sp".
If you have tab completion on, you will see "sp" expand into `split-window`. So
now we have gone form 12 keystrokes to just three. Very nice.

Setting up command completion is not covered by this guide. You should consult
with your local computer expert or search engine or man page for guidance.

## More basic `splitw` options

OK, now that we are super efficient with our keystrokes, let's cover some more
options.

### Controlling the size of the new pane with the `-l` and `-p` size options

By default, `splitw` opens a new pane that is half the height or width of the
pane that is split. tmux gives us two options to override this default
behavior. This saves us the effort of having to resize the new pane to our
liking after we create it.

#### The `-l` option

With vertical splits, we can control how many lines high our new pane is with
the `-l` option. The "l" stands for "lines."  Here is the option
in action:

**`C-b :splitw -l 20`**

The "20" is the size argument that is passed to our `-l` option. This creates
our default vertical split with a new pane that is 20 lines high. Note that if
you choose a number larger than the number of lines in the current pane, the
current pane will be reduce to just one line and the new pane will take up the
rest.

With a horizontal split, the `-l` option controls how many columns (or "cells",
as the official man pages refers to them) wide our new pane will be. So if we
want a horizontal split that is 20 columns wide, we do:

**`C-b :splitw -hl 20`**

Notice how we combined the `-h` option with the `-l` option using a single dash.
This should not be new to you if you have any experience issuing commands on the
command line. A reminder, however, that the `-l` option has to come last because
we are passing it an argument.  Alternatively, we could separate out the options
like so:

**`C-b :splitw -l 20 -h`**

This way, we don't have to care what order the options are in since each option
gets its own leading dash.

#### the `-p` option

Sometimes it's more useful to give a percentage of how how or wide the new pane
should be relative to the current pane. We can use the `-p` option in this case.
The "p," as you already guessed, is for "percent." So, for example, if we have
pane that is 50 lines high and we issue this command:

**`C-b :splitw -p 10`**

Our new pane will be 5 lines high, or 10% of our original pane. The old pane
will take up 45 lines, or the remaining 90%. Simple enough. Just like the `-l`
option, the `-p` option can be used to tell tmux how wide to make the new pane
if we are creating a horizontal split.

### Controlling the placement order of a new pane with the `-b` option

For vertical splits, the default operation places our new pane below the current
pane. For horizontal splits, the new pane is placed to the right of the current
pane. If we would like to force the new pane to show up above or to the left of
the current pane, we can use the `-b` option, for "before," like so:

**`C-b :splitw -b`**

This creates our default vertical split, however, it will show up on top of our
current pane. To have our new pane show up to the left of our current pane, we
do:

**`C-b :splitw -hb`**

Easy peasy.

### Creating a new pane on the left, right, top, or bottom of a window with `-f`, `-b`, and `-h` options

By default, `splitw` splits the current pane. This may not give us the control
we want. For example, let's say we have two panes open, one on the left and one
on the right. If we vertically split the pane on the right, that will give us
one large pane on the left and two smaller panes on the right. But what if we
want a pane that stretches across the bottom of both panes? This is where the
`-f` option, for "full," comes to the rescue. With it, you can create a pane
that is either the full width or full height of the entire window. Coupled with
the `-b` option, you can place the pane to the left, right, top or bottom of all
existing panes.

**`C-b :splitw -f`**

Places a full width pane on the bottom of our window with a vertical split.

**`C-b :splitw -bf`**

Places a full length pane at the top of our window with a vertical split.

**`C-b :splitw -fh`**

Places a full length pane on the right side of our window with a horizontal
split.

**`C-b :splitw -bfh`**

Places a full length pane on the left side of our window with a horizontal
split.

### Changing which pane is split with the `-t` option

By default, the current pane gets split by tmux. But what if we don't want to
split the current pane and want to split a different one instead? Well, you
could switch to the other pane and issue the `splitw` command there. But there
is a better way, and that's with the `-t` option. Here, "t" stands for "target
pane", the pane we want to split.

Like our `-l` and `-p` options, the `-t` option takes an argument. The argument
is an integer representing the pane number we want want to split. This integer
is the called the pane's **index**. Here's how it's used:

**`C-b :splitw -t 2`**

This command splits pane #2 vertically. Pane numbering starts with zero so this
is actually the third pane. But how do we know which index number a pane is? The
pane in the top left is always pane 0 and the pane in the bottom right is always
the last pane. But if we have a lot of panes open, it may not be so obvious what
number a pane has. To solve this problem, tmux has a nifty key binding that
briefly flashes the pane numbers in each pane:

**`C-b q`**

Each number is large and colored so it stands out in the pane. For very small
panes, you might have to look closely because the index number will be small and
hard to to spot. The active pane is given a different color than the inactive
panes.

#### Overriding how panes are numbered with the `set-window-option` command

Normal humans don't start counting from "zero," they start at "one." This is
something we learned since long before Kindergarten. So you can't be blamed if
you don't like having the pane indexes beginning with zero. tmux, being a
flexible application that aims to please, lets you change this behavior to your
liking. To make this change, we need to introduce a new command, the
`set-window-option`. Like `split-window`, the `set-window-option` has an alias:
`setw`. The command looks like this:

**`C-b :setw option value`**

Using this command, we set the value of the option we supply to the value of the
argument we give. There are dozens of options built into tmux that we can
change. One of those options is called `pane-base-index` which tells tmux which
number to start numbering panes from. So, to tell tmux to start ordering panes
beginning with the number "1", we do:

**`C-b :setw pane-base-index 1`**

Now the first pane index number is "1" instead of "0". The second pane is now
"2", and so forth. We can verify this happened by typing in the **`C-b q`** key
binding and we'll see the first pane in the top left now flashes a "1".  We are
not limited to using "1" for the index argument. If we wanted our first pane to
start with the number "50", we could do that (though we can't think of a good
reason why you would).

By default, the `setw` command only affects the current window we are in. If we
want to change our pane numbering for all current windows that are open and any
new windows we might open in the future, we need to explicitly tell `setw` that
with the `-g` option:

**`C-b :setw -g pane-base-index `**

Here, the "g" stands for "global." This terminology makes perfect sense if you
are programmer, but might be a bit strange if you are not. If you think of
"global" as a synonym for "everywhere," then you will be on the right track.

Note that this global option setting is not remembered by tmux. So if you shut
tmux down and restart it, any `setw` option we set will be lost. We will show
you how to make changes to the window option settings more permanent later.

### Changing the working directory our pane opens in with `-c`

By default, the directory the shell in the new pane is opened to, called the
"working directory," is set to the same directory tmux was launched from. You
can override this default by using the `-c` option, for "change directory," to
tell tmux which directory you'd prefer it to use for the new pane:

**`C-b :splitw -c '/home/johnnybgood/projects'`**

It's always a good idea to surround your path argument to `-c` in quotes in case
it has an spaces or other funny characters that might confuse tmux.

### Changing the active pane when a new pane is created with `-d`

By default, tmux assumes you will want to do something in a new pane that is
opened. Therefore, it makes the new pane active so you can start typing into it
right away. But this may not always be desirable. We might just want to open a
pane to display something and continue working in our current pane. In that
case, we throw the `-d` option at `splitw`:

**`C-b :splitw -d`**

Now tmux will return us to our current pane after the new pane is created. The
"d" stands for "detach" or "deactivate," if you prefer.

OK! This covers all the basic options for the `splitw` command. Actually, there is
one more basic option: `-v`, which does a vertical split. But since `-v` is
already the default, there is no reason to use it.

There are a couple of advanced options available with `splitw`, the `-P` and the
`-F` options. These options are useful for doing advanced automation of tmux.
But to try to keep this guide at a somewhat reasonable length and stay focused
on the basics, they are not covered by this guide.

So now that we've covered all the basic options, it's time to turn our attention to
passing a shell command to the `splitw` subcommand.

## Passing shell commands to `splitw`

Options are cool and give us fine-tuned control over how panes are split, but
the real power of `splitw` is realized when we pass shell commands to it.
Learning this simple aspect of `splitw` is the first step to unlocking all kinds
of great ways to automate tmux, saving you a lot of tedious keystroke entry.

### A simple, but very fleeting example

In a new tmux session or window, run this command:

**`C-b :splitw ls`**

If you didn't see any thing, then you must have blinked or you have an extremely
fast computer. Run the command a few more times to see if you can see something
happen. **TIP:** you can do `C-b :<UP ARROW>` to pull up the last command
from the tmux command line history to save you some typing.

So what happened here?

In the command above we passed the `ls` shell command to the `splitw` command.
tmux then ran the command in a new pane. When the command finished executing,
tmux killed the pane for us. This is the default behavior of tmux. So why, you
may ask, do the other panes stay open and not close immediately? It's because
they have a running process in them, an interactive shell that never stops
running until we command it.

To prove this to yourself, create a new split with `C-b "`. After the new pane
opens, type `exit` at the shell prompt. The pane vanishes! That's because we
exited the default shell command that tmux launched. Since the shell was what
kept the pane alive, the pane remained alive until the point we killed the shell
by leaving it.

Unlike a shell process, the `ls` command doesn't hang around waiting for us to
tell it what to do. It does its job and bails. When `ls` finished printing out
its list of files to the pane it exited and tmux dutifully killed the pane.

### Keeping panes open

Alright, so now let's make our ls command useful for those of us who can't read
quite so fast:

**`C-b :splitw 'ls | less'`**

Here we run the `ls` command except this time we "pipe" its output into the
`less` program using the `|` operator supplied by our shell. As a result, less
will be opened with the output of `ls` command displayed. Notice that the shell
command is surrounded in single quotes. This is important because our shell
command will not work properly without them because of the pipe operation. By
surrounding it with quotes, `splitw` passes everything between the quotes as one
large argument to the default shell command. So if we are using the bash shell,
here is the command tmux actually runs:

**`/bin/bash -c 'ls | less'`**

which then parses everything the way we expect it to. For simpler commands, we
will usually leave out the quotes because it makes it easier to write commands
that might contain other quotes. Without quotes, the command is run directly by
tmux without sending it to the shell command. If you have done any shell
scripting, you know that handling and escaping quotes in shell commands can be
very tricky business.

After we run this command, we see the pane remains open. That's because the
less program does not quit until we tell it to. When we quit less with the `q`
key, tmux will detect that the less process ended and kills the pane. Nice!

Most of the shell commands you give will spawn a new process that doesn't die so you
won't need to worry about the pane disappearing immediately. For example, if you
are opening a document with vim, you can simply do:

**`C-b :splitw vim my_document.txt`**

In this case, vim will open up in the new pane with the document open. Once you
quit vim, however, the pane will close.

### Respawning panes

Although this guide is specifically focused on the `splitw` command, we want to
cover a subcommand that can be considered a close cousin of `splitw` called
`respawn-pane` or `respawnp` for short. This subcommand can work hand-in-hand
with `splitw`'s ability to send shell commands to a newly opened pane. It's
easiest to explain `respawnp` with a simple demonstration.

Start with a fresh, paneless window and open a new pane with the contents of
`ls` again:

**`C-b :splitw 'ls | less'`**

You should now have two panes and the new pane with the less command being the active
one. To switch back to the original pane, do:

**`C-b ;`**

which is the key binding for jumping back to the last active pane. Now we wish
to update the contents of our new pane with something else. So we do:

**`C-b :respawnp -k -t ! 'ls .. | less'`**

This command definitely needs a little explaining. It starts out with our usual
key binding to get us to the command line and then we see the subcommand,
`respawnp`. Next we see two options, `-k`, and then a `-t`, which has an
argument supplied to it, `!`. Lastly, we pass in the shell command.

The `-k` options tells our subcommand to kill the existing command running in a
pane. So in other words, we kill the first `ls | less` command which effectively
kills less and therefore the entire pane off. However, the `respawnp` command
will resurrect the pane with the output of the shell command we supply to it. In
this case, we output the listing of the directory above the current directory
(this is what the `..` means). So, tmux effectively removes the listing of the
current directory for us and replaces it with a listing of the directory one
level up.

So what's the `-t !` business? This is how we tell `respawnp` which pane we want
to kill off and respawn. You probably recall the `-t` option means "target
pane." We normally supply this option with an integer argument that represents
the index number of the pane we are going to kill. However, instead of a number
we have an exclamation point. The exclamation point is what's called a
**token**. In the context of the `respawnp` command, it represents the last
active pane. Note that we could have just as easily replaced the token with the
actual index number of the pane. But the token conveniently saves us from having
to do that. There are many other tokens available and we'll see one ore two more
later in the guide.

### Attack of the zombie panes

Now we are going to leave the beaten path a little more and explore some thicker
underbrush of tmux.

As we have seen, tmux kills off panes once the process running inside them
exits. We can, however, change this behavior and keep these dead panes hanging
around. This requires us to mess with a tmux option called `remain-on-exit`.
Like the name indicates, it causes a pane to remain even after the process in it
exits. We turn this option on by giving it an `on` value like so:

**`C-b setw remain-on-exit on`**

Now let's quit the less process and see what happens. Make the pane running
less the active pane if it isn't already by doing `C-b ;`. Type in `q` to
quit less. You will now see the pane didn't close! Instead, the pane hangs
around, taking up space even though it has nothing to display. tmux displays a
little message for us, declaring the pane to be "dead," along with some other
bits of information we don't need to be concerned with.

But, it's not totally dead. We can use `respawnp` to breathe life back into the
zombie pane. Let's do that. Be sure to make the first pane active with `C-b ;`
and then run:

**`C-b :respawnp -t ! 'ls | less'`**

The dead pane will now be active again with a new process. Notice we didn't need
the `-k` option in this case because the dead pane didn't have any command
running that needed to be killed.

### Using `splitw` options with a shell command

Let's say we want to open our `ls` output in a new pane but would like to return
to the originating pane after it opens. Here's how we do it:

**`C-b :splitw -d 'ls | less'`**

Notice that we placed the `-d` option (you'll recall stands for "detach")
immediately after the subcommand and before the shell command. Otherwise, the
command will not behave the way we expect. tmux can be very particular about the
order of the arguments to its subcommands.

OK, let's set the `remain-on-exit` window option back to its default and move
on:

**`C-b setw remain-on-exit off`**

## Using the `bind-key` subcommand to perform advanced splits

Now that you know most of basic features of the `splitw` subcommand and some
related subcommands, we'll look at some more advanced type of splits using key
bindings. As we saw, tmux offers only two default key bindings for splits, one
for a vertical split and one for a horizontal split. We are going to improve on
this by learning how to use the `bind-key` subcommand, or `bind` for short.

But before we get there, we have to lay a little more groundwork and get up to
speed on the inner workings of key bindings if we want to get the most out of
them. As we mentioned earlier, there is a lot more to tmux's key bindings than
what you get with your average hot key.

### Introducing key tables

The first concept we need to introduce are **key tables**. A key table is
nothing more than a listing of key commands. A key command, as you may recall,
is the key followed by the prefix key, `C-b`. Each of the key commands in a key
table are bound to a specific tmux subcommand.

So far, all the key bindings we've used required us to type in the default
prefix key, `C-b`, before hitting our key command. What we didn't
mention before is that `C-b` tells tmux which key table to use. Each table has a
name. In the case of `C-b`, the key table name is, appropriately, "prefix." The
table contains a list of all the key commands that can be run after hitting the
`C-b` prefix key. Let's make this more clear by introducing a new command,
`list-keys` (aliased to `lsk`), to list all the key command listed in the prefix
key table:

**`C-b :lsk -T prefix`**

Now we see a long list of all the key commands that belong to the prefix key
table. The `-T` option, for "table," tells `lsk` to show us key commands only
for the tables we request. If we leave the `-T` option off, `lsk`shows us all
the key commands from all the different key tables.

Look closely toward the top of the list, a few rows down. You should see a
familiar face:

**`bind-key    -T prefix "       split-window`**

And there is, our key binding for the default split. Then a few rows below that,
you'll see:

**`bind-key    -T prefix %       split-window -h`**

This, of course, it he key binding for a horizontal split.

Looking at these two rows more closely, we see each of them is a full `bind-key`
subcommand. First you see the `bind-key` subcommand followed by the `-T` option
followed by the name of the table the key command belongs to, followed by the
key command and then finally, the actual command that is run when key command is
pressed. This is convenient if we ever want to share these key bindings
somewhere else. We can just copy and paste the command directly.

For the very first command at the top of the key table, we see:

**`bind-key    -T prefix C-b     send-prefix`**

You would be tempted to think that this is how tmux knows that `C-b` uses the
prefix table. But you would be incorrect. Remember that this is a command key
that runs only **after** we hit `C-b` the first time. So the `C-b` we see in
command above only applies if we hit `C-b` a second time, at which point it
runs the `send-prefix` command. You can prove this to yourself by removing this
key binding with the `unbind-key` (alias: `unbind`) command:

**`C-b :unbind -T prefix C-b`**

This removes the `C-b` key command from the prefix table. Technically, we didn't
have to bother to tell `unbind` which key table to remove the key command from.
That's because if no `-T` option is supplied, it assumes we want to remove it
from the prefix key table. For all other key tables, we must specify the table.

OK, so what do you think will happen now when we run `C-b %`? Will it work? Try
it and you'll see that it does, in fact, still work and will create a horizontal
split. But now try hitting `C-b C-b` (two times) and then `%`. Now a literal `%`
character is generated! The first time we hit `C-b` we entered the prefix key
table as usual. But because we obliterated the `C-b` key command from the prefix
table, tmux no longer ran the `send-prefix` command when we hit `C-b`. Instead
it did nothing. After doing literally nothing, exactly what we told it to do
while switched to the prefix table. After doing nothing as instructed, it
interpreted the next `%` as a literal percent sign.

If you're paying attention, the next question you'll ask is, so what *does* tell
tmux that `C-b` should load the prefix key table? To answer that question
yourself, you can run this command (**IMPORTANT:** before running this command, hit
the `q` key first if you are still looking at the key table listing or you will
not see anything output):

**`C-b :show -g prefix`**

This outputs: `prefix C-b` to the pane. Here we introduce yet another subcommand,
`show-options`, or `show` for short. We are asking it to show us the value
of the global option called "prefix." We can see that this value is set to `C-b`
and this is how tmux knows to load the prefix key table when we type that in. Go
ahead an close out the current pane by hitting `q`.

Phew, we've covered a lot of ground here. And you thought you were just going to
learn about the `splitw` command. Ha! But don't relax just yet, the fun is just
about to get started.

### Creating a custom key table

Alright, it's time to get to work and start building our very own key table that
we will use to store more useful split commands. The first step is to decide on
a name. We'll call it "split" because we are going to use it mostly for running
split commands. Now let's go ahead and create a key binding in
our "split" key table with the `bind` subcommand:

**`C-b :bind -T split '"' splitw -d`**

Notice we have to place the double quotes inside of a set of single quotes or
you will confuse poor tmux. By default, tmux expects the `"` character to be
paired with another `"` character and gives special meaning to all the
characters in between them (this is why `"` is known as a "delimiter"). To make
sure tmux undertands what we want, we have to "delimit the delimiter" with
single quotes.

OK, while we're at it, let's create a second key binding:

**`C-b :bind -T split % splitw -hd`**

Now let's make sure we typed everything in properly and list the command we just
added to the split key table:

**`C-b :lsk -T split`**

This should output:

**`bind-key -T split " split-window -d`**

**`bind-key -T split % split-window -hd`**

Beautiful! There is just one thing more to do. We need to tell tmux which key
command should load the custom "split" key table so we can actually access the
key commands we just set up.

What should we use? We're already using `C-b` for the prefix table so that's
out. Whatever we decide, we need to very careful with our selection. We don't
want to use a key that is useful to any of our apps we might run inside
tmux or those apps will no longer be able to no longer respond to it because
tmux hijackis it. Overrding another application's functionaity would be like
Alexa cutting the power to your HomePod and then giving you a weather report
whenever you asked Siri to to play music. One possible workaround to the problem
is to find a way to reprogram your HomePod to play music with a completely
different command. This would be the equivalent of changing the hot key in your
application. We'll leave these hard decisions up to you when they arise.

Anyway, we will choose `C-\` because it is unlikely that another app uses it.
Here's subcommand to run to activate the "split" key table when we hit `C-\`,
the `switch-client` (`switchc`) subcommand:

**`C-b :bind -T root C-\ switch-client -T split`**

So what's going on here? We can see we are binding `C-\` to the `switch-client`
command which we pass the "split" table to. But what is the `-T root` stuff?

The `-T`, as we have already seen, is the option for naming a key table. And
"root" is just the name of the table we are adding our new key command to.

Like the "prefix" table, the "root" table is a special table built into tmux.
The significant thing about key commands in root is that they don't require us
to type a key combination before they can be activated. It's a lot like being
able to issue a subcommand to our favorite digital assistant without first
saying "Hey Siri," "Alexa," or "Ok Google." So we have to be very careful about
what goes in the root table. We don't want to put common, everyday keystrokes in
there because we don't want tmux piping up all the time when we are trying to
get work done in our applications. Therefore, placing key commands in the root
key table should be done sparingly and reserved only for key combinations that
activate tables or for key combinations that are extremely useful. For example,
many tmux users map the pane navigation keys to C-h, C-j, C-k and C-l and place
them in the root key table to let them move between panes much more quickly.

At any rate, go ahead and take a peek at the root key table with:

**`C-b :lsk -T root`**

As you might surmise from this list, the root table is used by tmux to interact
with mouse commands. You should also see the new `C-\` key command we just
minted.

The mouse commands we see don't actually do anything because we haven't
activated the special `mouse` option tmux supplies (tmux assumes you are hard
core and don't need no stinkin' mouse). If you're not averse to indulging in a
little mouse activity from time to time, you can get tmux to respond to your
mouse by turning on the `mouse` option:

**C-b :set -g mouse on**

With this option turned on, tmux panes should now be able to respond to scrolls,
clicks, and drags on the pane border so you can quickly resize them. You can see
we are setting this command with the global option with `-g` which essentially
means we are changing this everywhere (it's a bit more complicated than that but
that is a topic of another guide). Another note of interest is that instead of
using `setw`, we use `set` to indicate that we are changing a session option not
a window option. We will leave it up to you investigate the different kinds of
options and what they mean on your own as they aren't directly related to the
`splitw` command. But you should at least be aware that there are different
kinds of options.

Alright, let's get back to the business at hand and see if our new key binding
works:

**`C-\ %`**

Did it do what you expected? It should have generated a new pane except instead
of making the new pane activate, it keeps our original pane active because we
applied the `-d` switch to our split command. Awesome!

We'll remind you again that all the options and settings and key bindings we add
and change from the tmux prompt will be lost if we restart tmux. Later, we'll
show you how to make these settings more permanent. For now, we are going to
continue adding new key bindings to give you a taste for what else is possible
with our newfound abilities.

### More useful examples of key-binding splits

So we've created some key bindings to see how we can use them to add additional
options to the `splitw` command. Now let's show some more creative and useful
`splitw` subcommands that use shell commands to help you see some of the real
power of using tmux.

First, let's say you are learning tmux and you want to be able to quickly pop open
its man page. Add this key binding:

**`C-b :bind -T split t splitw -f man tmux`**

`C-\ t` will now open up the tmux manual in a full width pane along the bottom of your
screen. Now let's add an option to quickly close it:

**`C-b :bind -T split q kill-pane -t {bottom}`**

Now we have a way to quit the bottom pane. Great! The `{bottom}` in this command
is another token that means, obviously, the "bottom" pane. As long as we don't
open another full length pane along the bottom, this will always close our man
page pane.

What if you want to open up a different man page? You could create a new key
binding for each frequently used man page, but that would be tedious and use up
a lot of precious command keys (but we'll show you a way around that, soon).
Instead, it's probably better to be able to enter the name of an arbitrary man
page. This can be accommodated with the `command-prompt` subcommand:

**`C-b :bind -T split m command-prompt -p 'man page name:' "splitw -f man '%%'"`**

Now try `C-\ m` and you'll see a prompt, "man page name:". Type in the name of
the man page and a new pane will pop open with any man page you desire. Super
cool! Be aware, however, if you make a typo in your man page name and the man
page doesn't exist, man will immediately exit with an error, the pane will die,
and you'll be left wondering why your man page isn't showing up.

We aren't going to break down the above command for you. Instead, we are going
to do you a bigger favor and show you a neat trick for quickly looking it up
yourself in the tmux man page. Add this monster command:

**`C-b :bind -T split s command-prompt -p 'man page name:','search term:' "splitw -f man '%%'; send-keys / %2 Enter"`**

Now do `C-\ s` to execute this command. At the first prompt, type in `tmux`. At
the second prompt, type in `command-prompt`. When the man page opens now, the
man page will move down to the first mention of "command-prompt" for you. Super
duper!

We do want to point out a couple of significant points from that last command.
First, look closely at the command sent to the `command-prompt` subcommand and
you'll see there are actually two different subcommands in there separated by a
semicolon: `splitw -f man '%%'` and `send-keys / %2 Enter`. The first command is our
familiar `splitw` command.

The second subcommand is `send-keys` or just `send`. "What's that?" you
say. Well, you don't have to ask us anymore, now you can find out for yourself
with `C-\ m`! We will say that if you are interested in automating your
applications, `send` is definitey a subcommand you will want to master. Like
`splitw`, learning the ins and outs of `send` will unlock a lot of power for
you. We highly recommend spending some time practicing with it.

#### Getting you ready to stand on your own

As we start telling you to go RTFM, now would be a good opportunity to talk
about how to actually RTFM. But there are lots of great tutorials on this topic
already. If you are new to man pages, or you still find them intimidating, we'd
like just suggest a video which we think is an excellent introduction to them:
https://youtu.be/jyo0TwmON4A. It's slightly on the long side (is that such a bad
thing?), so consider bumping the speed setting up to 1.5 or even higher if you
want.

Once you are done with that video, spend at least 10 to 15 minutes browsing
through the tmux man page. You don't have to understand all of it, but you
should at least get familiar with how it's laid out and what the major sections
of the page are. This will help you find things much more quickly when you need
them. The more familiar you get with the tmux manual and how to read it, the more
pleasant learning tmux will be for you.

One tip for getting around the tmux man page quickly is to search by a
subcommand aliases to help find what you need more more quickly.

### "Chaining" key tables

Before we leave the topic of key bindings, we wanted to show you a fairly
advanced trick you can use to organize and access hundreds of custom key
bindings very quickly. We call this method "chaining." It'll be easier show you
first and then explain it.

We start by creating a key command, "t", to split a new pane across the top of
our window. We will place this subcommand into a new key table called
"split_f":

**`C-b :bind -T split_f t splitw -fb`**

To reach this key command, we are going to link a key command from our "split"
key table to our new "split_f" key table using the familiar `switch-client`
command:

**`C-b :bind -T split f switch-client -T split_f`**

Study these commands closely before reading on to see if you can figure out how
this work.

You get it? Here's how it works. First you hit `C-\` to activate the "split"
key table.  Inside that table, is the "f" key, which activates the "split_f"
key table for us where the new "t" key command we created lives.

We can add additional split to the new "split_f" table to make it more useful:

**`C-b :bind -T split_f l splitw -hfb`**

A left split.

**`C-b :bind -T split_f r splitw -hf`**

A right split.

**`C-b :bind -T split_f r splitw -f`**

A bottom split.

Now, to create a left split, we can do:

**C-\ fb**

That's just 4 keystrokes. Very nifty. So now you can find all of your full
split with `C-\ f` and then choose the location of the split with the next key
command. There's nothing stopping your from creating a key command in the
"split_f" table to yet another key table reserved for even more fine-grained
types of splits. You can also set up a new key command in the "split" key table
that links to an entirely different key table called "split_d", for example.
Of course, there are only so many key bindings you'll be able to remember. But
if you organize them well and plan your key bindings carefully, you can have
hundreds of very powerful tmux commands at your disposal with just a few
keystrokes. Wowzers!

## Moving beyond the tmux command prompt

So you've seen some of the pretty cool things you can do with key bindings and
the command prompt. tmux doesn't stop there, though. Using tmux configuration
files and shell scripts, you can achieve extreme levels of automation if you are
willing to put in a little work up front. Your future self will definitely thank
you if you do.

Everything you just learned about how to run tmux from the tmux command prompt
will serve you well when applying them to tmux configuration files and scripts.
You'll be using pretty much all the same commands you just learned but you'll be
storing them inside a file instead of inside of tmux's memory. This is a good
thing. You wouldn't want to have to retype a few dozen key bindings and options
into the tmux command line every time you started a new tmux server.

OK, let's get started by showing you the basics of a tmux configuration file.

### Introducing the `~/.tmux.conf` file

Applications usually have a way for you to configure them to your liking. tmux
is no different. The main tmux configuration is found in your home directory in
a file called `.tmux.conf`. Like many configuration files, it has a dot in front
of it so it won't visually clutter up your directory listing. There can be dozens
of them. Hiding them also provides a very thin layer of security to protect
them from getting accidentally deleted or moved with a badly constructed
wildcard command.

To create the file, you will need to use your favorite text editing program. So
fire it up and start editing a new, blank document in your home directory called
`.tmux.conf`.

The tmux configuration file is exactly like a shell script. It's nothing more
than a simple list of commands with some basic logic sprinkled throughout so it
can make basic decisions based on the environment it finds itself in. We are not
going to cover how to place anything more advanced than the most basic commands,
however.

The only major difference between a tmux configuration file and a shell
configuration script is that one is full of tmux subcommands and the other is
full of shell commands. This makes sense because a tmux configuration file is
meant to be read by tmux while a while a shell script is meant to be executed by
your shell.

#### Adding commands to the tmux configuration file

Adding commands is simple and works a lot like a shell script. You add one
command per line. If you put more than one command on a line, the commands have
to be separated with a semicolon. You can intersperse comments in the file with
the `#` character, just like with a shell script, to help you remember what some
of the more complex commands do when you look at it weeks, months, or years
later. Go ahead and copy and paste the following few lines the file and save it:

**`new -s my_sess`** # create new session

**`neww -n shell`** # create new window

**`set -g mouse on`**

**`splitw -hd`**

**`splitw -hd`**

**`bind -T split '"' splitw -d`**

**`bind -T split % splitw -hd`**

**`bind -T root C-\ switch-client -T split`**

**`bind -T split t splitw -f man tmux`**

**`bind -T split q kill-pane -t {bottom}`**

**`bind -T split m command-prompt -p 'man page name:' "splitw -f man '%%'"`**

**`bind -T split s command-prompt -p 'man page name:','search term:' "splitw -f man '%%'; send-keys / %2 Enter"`**

**`bind -T split_f t splitw -fb`**

**`bind -T split f switch-client -T split_f`**

**`bind -T split_f l splitw -hfb`**

**`bind -T split_f r splitw -hf`**

**`bind -T split_f r splitw -f`**

As the comments indicate, the first two commands establish a new tmux session
and open a new window with the names we provide. We'll leave it to you to check
out the man page to learn more details about those commands. The rest of the
commands are all familiar to you: we enable mouse support, then create two
new panes, and then add in many of the key binding we covered earlier in the
guide.

Let's see this in action. Find a free command prompt and kill your tmux server
with this command:

**`tmux kill-server`**

Yes, there is a lot of killing and dying with tmux, isn't there?

Make sure the configuration file you created is saved to the right location and
fire up a new tmux server:

**`tmux attach`**

It's important to add the `attach` subcommand here, otherwise tmux will start up
with two different sessions instead of just the one we created. You should now
be looking at three panes side-by-side with the first pane active. Go ahead and
try a few key binding to confirm they all work.

If so, congrats! You are an official graduate of the Tmux Scripting Academy.

There is, of course, much more you can do with a configuration script than add
some key bindings and splits. You can change colors, the tmux status bar, load
plugins, and change the many other aspects of tmux. But that is well beyond what
the purpose of this guide does, which is to show you just enough to be able to
use the configuration file with the `splitw` command. You will need to explore
the many other highly advanced configuration options and tmux commands on your
own.

#### Updating and reloading the configuration script

Our last topic covers how to update and reload the configuration script. This is easy:

1. Make the desire changes to the configuration file with the new subcommands
1. Source the file with the `source-file` or `source` subcommand to make the
   changes take effect:

**`source ~/.tmux.conf`**

Just like with the shell source command, the tmux source command reads the
configuration script you tell it to and executes the commands inside of it.

If you're a new user to tmux, you'll probably be making a lot of changes to the
configuration file so consider creating a key binding to this command. Take a
look at your prefix table with `lsk` and see if there are any key bindings you
hardly use. Unless you really love the tmux clock, the `C-b t` binding for
displaying the time in the window is probably a good candidate for replacement.
Even if you're in full screen mode without the computer clock visible, who
doesn't have a watch or a phone or a clock in the room to glance at? To nuke it,
just replace it with the new key binding in the configuration file:

**`bind t source ~/.tmux.conf`**

There is no need to `unbind` the default key command first. You will, of course,
have to resource the configuration file from the command line before the new key
binding takes effect.

### Supercharging tmux automation with shell scripting

Now that you know how to automate running tmux subcommands, you can take things
to the next level and automate the automation of the tmux subcommands and
perhaps bring on the technological singularity.

We kid, of course.

But shell scripting does have far more advanced features than tmux subcommands
and opens up new possibilties that would be difficult or impossible to pull off
with just a plain tmux configuration file. And you aren't limited to using a
shell script either. You can use just about any programming language you wish to
automate tmux. But why do work that's already been done? There are many very
cool tmux session managers available for you to download that you may find very
useful.

Alas, this is well beyond learning about our relatively low-level `splitw`
command. And it is now time to bid adieu. We hope we have helped you take
you first big step toward mastering tmux.

## One More Thing: Navigating panes

Alright, alright. We're throwing in a little bonus material for you: some
suggestions for making it easier to navigate tmux panes.

The easiest way tmux provides to move between split panes that's built into tmux
is:

**`C-b o`**

This moves us to the pane with the next index number of the pane we are in
in. The first and last panes are connected together so when we get to the last
pane, `C-b o` returns us to the first in the window.

`C-b o` is great if we have only two panes open and fine for three, but it's not
so great if we have four or more panes open. If we are in the first pane and
want to get to the last pane, we have to perform 3 keystrokes for each pane in
between. This is tedious and annoying.

We can improve upon this a little with four other key bindings that tmux
provides:

**`C-b Up`**

**`C-b Down`**

**`C-b Left`**

**`C-b Right`**

The directions you see there should be replaced by the arrow keys on your
keyboard. So to move down to the next pane in the window, you do `C-b Down` and
you can keep issuing more pane movement commands until you get to your desired
pane. Because the first and last panes are linked together, you can jump
between the first pane and the last pane quickly by issuing a `C-b Left` or
`C-b Up`. Similarly, if you are in the last pane and want to jump back to
the first, you can do `C-b Right` or `C-b Down`.

Note that these command keys are "repeat" command keys. That means we don't have
to do `C-b Right`, `C-b Right`, `C-b Right` three times to move three panes to
the right. Instead, we can do: `C-b Right Right Right`, which is convenient. See
the tmux documentation for the `bind` subcommand for more details.

Still, three keystrokes to move between a pane is a bit of a pain (har har), and
the arrow keys can still be very tedious to use if we have a lot of panes open
especially since the arrow keys require us to move our entire hand which slows
our typing down considerably.

tmux does supply a subcommand to jump straight to another pane with the
`select-pane` subcommand. It's alias is `selectp`. In its simplest incantation,
you do:

**`C-b :selectp -t pane_index_number`**

So, to jump to pane #4, you do `C-b :selectp -t 4`. But this is impractical and
impossibly slow. Even if we use tab completion effectively, that's 13 or 14
keystrokes just to move to a pane! So `selectp` is hardly a good solution. It
is, however, a very useful command for scripting tmux and for creating custom
key bindings, which we will now cover.

### Setting up key binding for more convenient pane navigation

So, out of the box, tmux doesn't give provide great options for moving between
panes.  Let's see how we can improve the situation. There are a couple of things
we can do.

One common practice is to add the following key bindings to the root key table:

**`bind    -T root    C-h              selectp -L`**

**`bind    -T root    C-j              selectp -D`**

**`bind    -T root    C-k              selectp -U`**

**`bind    -T root    C-l              selectp -R`**

Since we're adding this key command to the root key table, there is no need to
type in the prefix key. What's equally great about this solution is
your right hand never has to move off the home row and so this is very fast. The
downside to this is that it may interfere with the shortcut keys in your
applications. But having such a convenient way to navigate panes might be worth
it for you.

Another possibility is to set up key bindings that will jump to a pane's index
number in a new prefix table.

**`bind  -T your_key_table  0 selectp -t 0`**

**`bind  -T your_key_table  1 selectp -t 1`**

**`bind  -T your_key_table  2 selectp -t 2`**

**`bind  -T your_key_table  3 selectp -t 3`**

**`bind  -T your_key_table  4 selectp -t 4`**

**`bind  -T your_key_table  5 selectp -t 5`**

**`bind  -T your_key_table  6 selectp -t 6`**

**`bind  -T your_key_table  7 selectp -t 7`**

**`bind  -T your_key_table  8 selectp -t 8`**

**`bind  -T your_key_table  9 selectp -t 9`**

This can be faster than the previous solution especially if you are jumping
across several panes. Though you will still need a key command to activate your
custom key table before you can access the key commands listed above. We'll
leave setting up that key command as an exercise for you.

## Next steps in your tmux adventures

You should now know just enough to bootstrap your way to learning more about
tmux and what it can do. Of course, you also want to use it to get real work
done. Unless you aspire to be a professional tmux trainer, learning tmux should
not be your full time job.

So our best advice is to go ahead an start using tmux. Use it all the time.
Program your terminal to automatically attach to a tmux session when you open
it. But be sure to keep things simple at first. Get comfortable working with
just one window with multiple panes. When that starts to feel too limiting,
start learning how to create new windows. When you get comfortable working with
many windows in a single session, begin learn about running multiple tmux
sessions. When you're starting to feel like a real pro, see if there are any
advantages to running multiple tmux servers.

There will be things that will frustrate you or confuse you about tmux and
things that will feel very restrictive and limiting at first. You will be
tempted to turn to plugins to "fix" tmux's perceived limitations. We don't want
to discourage you from installing plugins, but we encourage you to be very
selective. Carefully research what each plugin does and how it does it because
the plugins may just add to your confusion and provide capabilities you aren't
ready to take advantage of. They will also hide which features are native to
tmux and which ones are provided by the plugins. So as much as possible, keep
your use of plugins limited until you gain a lot more confidence with tmux. Look
closely at the subcommands the plugin adds to your configuration file. A good
rule of thumb is that if you can't figure out what the plugin's subcommands do,
don't add them to your configuration.

Finally, we covered only one subcommand in depth today and a few options. There
are hundreds, if not thousands of different subcommands and settings for you to
explore.  Treat tmux like a musical instrument and try to set aside 15 or 20
minutes each day praciting and experimenting with new commands and options.

A great place to find other important subcommands to study is right there in
your prefix table. Take some time see which subcommands tmux is using for the
default key bindings. Try each of them out and see what happens. Figure out
which key bindings are useful to you. Get rid of the ones you'll rarely need and
replace them with your own. Then create your own key table and start adding your
own custom key bindings. Be sure to add the good ones to your configuration
file. There's no better way to learn tmux quickly than by experimenting with it.

When you experiment, be sure to run them in a "clean" tmux environment without
any configuration file (or at least a very limited one) so you can be sure it is
working as the developers intended. Feel free to take notes and cheatsheets to
help you remember all that you learn. If you follow this advice diligently, you
will be a master tmuxer in no time.

Oh yeah, and one more thing...

# RTFM!
