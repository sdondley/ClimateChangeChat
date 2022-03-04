# Perl Language Servers Part Deux: Fast as FUCK completion with the **NEW** Perl Navigator Language Server
**PREFACE**: Earlier this week, I wrote an [ungodly, long tutorial](setting_up_lsp_nvim-lspconfig_and_perl_in_neovim.md) about how to set up a perl language server with neovim. This more modest follow-up tutorial focuses on getting you started with the brand new, heretofore unknown language server, Perl Navigator, along with coq, a neovim plugin that promotes itself as the "fast as FUCK" completion engine.

**PARENTAL GUIDANCE:** This documents contains f-bombs and makes insensitive comments about software and software choices. If you find this off-putting, go [RTFM](#rtfms) instead.

**FIND A MISTAKE OR HAVE SOMETHING HELPFUL TO ADD?** Fork this site and [submit a pull request](https://github.com/sdondley/ClimateChangeChat/blob/main/fast_as_fuck_perl_language_server_and_completion.md).

You should read or at least skim the [previous tutorial](setting_up_lsp_nvim-lspconfig_and_perl_in_neovim.md) tutorial about perl langauge servers if you haven't already.

# On This Page

- [Perl Language Servers Part Deux: Fast as FUCK completion with the **NEW** Perl Navigator Language Server](#perl-language-servers-part-deux-fast-as-fuck-completion-with-the-new-perl-navigator-language-server)
- [TLDR;](#tldr)
    - [Getting the Perl Navigator language server working with COQ](#getting-the-perl-navigator-language-server-working-with-coq)
        - [Step 1: Install the Perl Navigator language server(s)](#step-1-install-the-perl-navigator-language-servers)
        - [Step 2: Install the needed neovim plugins](#step-2-install-the-needed-neovim-plugins)
        - [Step 3: cut and paste lua code into your neovim init.vim or init.lua](#step-3-cut-and-paste-lua-code-into-your-neovim-initvim-or-initlua)
        - [Step 4: change the paths in the lua snippet to reflect your machine](#step-4-change-the-paths-in-the-lua-snippet-to-reflect-your-machine)
        - [The Moment of Truth](#the-moment-of-truth)
- [WTF](#wtf)
- [The Big Picture Stuff](#the-big-picture-stuff)
    - [Perl Navigator (PN)](#perl-navigator-pn)
        - [How does PN compare with the other language servers?](#how-does-pn-compare-with-the-other-language-servers)
        - [What can it do?](#what-can-it-do)
    - [COQ](#coq)
- [Using PN and COQ to get an IDE-like experience with neovim](#using-pn-and-coq-to-get-an-ide-like-experience-with-neovim)
    - [Setup](#setup)
    - [OK, let's go](#ok-lets-go)
        - [use perltidy](#use-perltidy)
        - [use completion](#use-completion)
        - [use snippets](#use-snippets)
    - [What else?](#what-else)
- [RTFMs](#rtfms)
    - [neovim docs](#neovim-docs)
    - [Github docs](#github-docs)

# TLDR;
* This TLDR; section assumes:
    * you read at least part of my [previous tutorial](setting_up_lsp_nvim-lspconfig_and_perl_in_neovim.md) about perl language servers
        * if not, I recommend spending a few minutes to familiarize yourself with it to get some context
            * Yeah, I know it's too long and will make your eyes bleed 
                * the price of progress is steep 
    * you know your way around a command line and the basics of installing software and neovim plugins on your machine
 
## Getting the Perl Navigator language server working with COQ
* COQ? Perl Navigator?
    * Believe me now, ask questions later
        * this is the TLDR; version 
        * Will be covered later 

### Step 1: Install the Perl Navigator language server(s)
* Perl Navigator is not available on cpan
* The software you need to install Perl Navigator
    * npm 
        * the node.js package manager 
        * No, I don't know a thing about it except it's used manage node js packages 
        * install it 
            * use your favorite package manager to install this package manager 
            * google it if you don't know how
    * typescript
        * I've never seen a line of typescript in my life 
            * just install it if you don't already have it
            * no, I don't know how to install it on your machine unless you're on a mac using homebrew
                * google it 
    * git
        * if you don't have git installed yet, you probably need to learn more basic skills before you fuck around with a language server
            * that's not to dissuade you 
            * install it 
                * you guessed it: google it if you don't know how 
* Now type in these commands like a good code monkey:
    * ripped straight from the ["Perl Navigator" documentation](https://github.com/bscan/PerlNavigator)
        ```
        git clone https://github.com/bscan/PerlNavigator
        cd PerlNavigator/
        npm install
        cd server/
        npm install
        tsc
        ```
* Bam! Step 1 is done

### Step 2: Install the needed neovim plugins
* Install the lspconfg-nvim plugin
    * Covered in the first tutorial 
* Install coq plugins    
    * Provides completion and snippet features for you 
    * There are two coq plugins you need from github:
        * `ms-jpq/coq_nvim`
            * download from branch "coq" 
        * `ms-jpq/coq.artifacts`
            * download from branch "artifacts"
    * Use a neovim/vim package manager to install them     
        * or load them manually, makes no difference to me 
        * you guessed it, if you don't know how, google it
        * just make sure you install from the branches mentioned above 
* Woot! Step 2 is done
 
### Step 3: cut and paste lua code into your neovim init.vim or init.lua
* **IMPORTANT:** if you still have code left over from my first tutorial, delete it and replace it with the code below
    * The mappings are mostly the same
    * very different setup needed for Perl Navigator and COQ 
* If you use `init.lua` for your neovim confguration file, you can drop the code below directly into it
* If you use `init.vim` for your configuration file:
    * Open `init.vim`
    * Add `lua require('coq_page_nav_config')` to the file
    * Now, in the root of you your neovim config directory:
        * create a `lua` directory if it doesn't already exist 
            * In this directory, create a file called `coq_page_nav_config.lua`
                * drop the code below into it
        ```
        -- configure coq to our liking
        vim.cmd[[
            let g:coq_settings = { 'auto_start': v:true } ]]
            let g:coq_settings.keymap = { 'jump_to_mark': '<space>j' } -- default map is <c-h> for coq
                                                                       -- changed by me to avoid conflict
        ]]
        
        local lspconfig = require'lspconfig'
        local configs = require 'lspconfig.configs'
        local opts = { noremap=true, silent=true }
        vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>f', '<cmd>lua vim.lsp.buf.formatting()<CR>', opts)
        vim.api.nvim_set_keymap('n', '<space>q', '<cmd>lua vim.diagnostic.setloclist()<CR>', opts)

        local opts = { noremap=true, silent=true }
        vim.api.nvim_set_keymap('n', '<space>e', '<cmd>lua vim.diagnostic.open_float()<CR>', opts)
        vim.api.nvim_set_keymap('n', '[d', '<cmd>lua vim.diagnostic.goto_prev()<CR>', opts)
        vim.api.nvim_set_keymap('n', ']d', '<cmd>lua vim.diagnostic.goto_next()<CR>', opts)
        vim.api.nvim_set_keymap('n', '<space>q', '<cmd>lua vim.diagnostic.setloclist()<CR>', opts)
         
        -- Use an on_attach function to only map the following keys
        -- after the language server attaches to the current buffer
        local on_attach = function(client, bufnr)
          -- Enable completion triggered by <c-x><c-o>
          vim.api.nvim_buf_set_option(bufnr, 'omnifunc', 'v:lua.vim.lsp.omnifunc')
         
          -- Mappings.
          -- See `:help vim.lsp.*` for documentation on any of the below functions
          vim.api.nvim_buf_set_keymap(bufnr, 'n', 'gD', '<cmd>lua vim.lsp.buf.declaration()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', 'gd', '<cmd>lua vim.lsp.buf.definition()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', 'K', '<cmd>lua vim.lsp.buf.hover()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', 'gi', '<cmd>lua vim.lsp.buf.implementation()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<c-\\>', '<cmd>lua vim.lsp.buf.signature_help()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>wa', '<cmd>lua vim.lsp.buf.add_workspace_folder()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>wr', '<cmd>lua vim.lsp.buf.remove_workspace_folder()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>wl', '<cmd>lua print(vim.inspect(vim.lsp.buf.list_workspace_folders()))<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>D', '<cmd>lua vim.lsp.buf.type_definition()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>rn', '<cmd>lua vim.lsp.buf.rename()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>ca', '<cmd>lua vim.lsp.buf.code_action()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', 'gr', '<cmd>lua vim.lsp.buf.references()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>f', '<cmd>lua vim.lsp.buf.formatting()<CR>', opts)
        end

        -- the important stuff
            -- set up and configure Perl Navigator
            -- configure built-in client to use coq plugin for completion/snippets
        local coq = require "coq"
        local capabilities = vim.lsp.protocol.make_client_capabilities()

        if not configs.perlnavigator then
          configs.perlnavigator = {
           default_config = {
             cmd = { "/usr/local/bin/node", "/your/path/to/PerlNavigator/server/out/server.js", "--stdio" },
             root_dir = function(fname)
               return lspconfig.util.find_git_ancestor(fname)
             end;
             on_attach = on_attach,
             flags = {
                 debounce_text_changes = 150
             },

             --single_file_support = true,
             capabilities = capabilities,
             filetypes = { 'perl' };
             settings = { perlnavigator = {
                 perlPath = '/your/path/to/bin/perl',
                 perlcriticProfile = '/your/path/to/.perlcritic',
                 perltidyProfile = '/your/path/to/.perltidyrc' },
             };

           };
          }
        end

        lspconfig.perlnavigator.setup{ (coq.lsp_ensure_capabilities()) }
        ```
* Step 3 done. Booya!

### Step 4: change the paths in the lua snippet to reflect your machine
* Look for the lines in the lua code that contain `/your/path/to`
    * There are 4 different places
    * Change these paths so that the paths are correct for your machine
* Step 4 done. What a boss you are!

### The Moment of Truth
* Fire up neovim 
    * make sure you see no errors
    * should see weird emoticons from COQ in the status bar
        * configuration starts it up automatically for you 
* Run `:LspInfo` 
    * You should see: "Configured servers list: perlnavigator" at the bottom of a popup box
        * You don't?
        * Double check everthing and if you think it's right, send a nastygram to s@dondley.com to tell me my tutorial sucks
* **IMPORTANT:** for this particular lua configuration, neovim will not attach to the langauge server unless you are in a git repo
    * so you will not get any langauge server functionality outside of a git repo
    * [See below](#using PN and COQ to get an IDE-like experience with neovim) for more details

# WTF
* ...is [COQ]()?
* ...is [Perl Navigator](https://github.com/bscan/PerlNavigator)?

# The Big Picture Stuff

## Perl Navigator (PN)
* a third perl language server
    * spanking new
    * out just a few weeks
* Author: "b_scan" 
    * Like the other two perl LSes, written by coder who uses vscode, not neovim 
    * Thanks b_scan! Good work!
* [Read what the author says about it](https://www.reddit.com/r/perl/comments/suamcf/introducing_the_perl_navigator_a_language_server/)
    * main motivation is to get something that is more portable

### How does PN compare with the other language servers?
* Takes a little more lua code to get working with neovim than other language servers
    * developer is actively working on providing better integration with lspconfig out of the box
* Does Windows better
    * if you're one of *those* people 
    * but will work on any machine 
        * but cannot be installed with `cpanm` 
        * takes a few more commands and tools to install
* More compatible with older versions of Perl, according to author
* Is it fast?
    * I didn't do any speed tests, but it does feel a little snappier than the other two    
* completion suggestions are much more limited than other two language servers 
    * for now
        * language server author is working on it 
    * focuses only on identifiers in current file or loaded modules
    * no perl keywords 

### What can it do?
* So far, I've gotten the following features working using the recipe above:     
    * completion 
    * perlcritic 
    * perltidy 
    * syntax checking 
    * snippet support
* More details on some of the these features follow
* I'm sure there's more it can do that I haven't figured out yet

## COQ
* It's a neovim plugin
    * Actually two 
        * `ms-jpq/coq_nvim`
        * `ms-jpq/coq.artifacts`
            * no idea what this one does or why it's needed
* The self proclaimed "fast as FUCK" completion engine 
* I can confirm it is very fast as fuck
    * much faster than the completion plugin used in my first tutorial
* integrates in with neovim's built-in lsp 
* Provides snippet support
    * no separate plugin needed for snippets like in previous tutorial
* does completion on a lot more than just perl
    * can have multiple "sources" of completion 
        * words in open buffers 
        * tmux commands 
        * etc. 
        * these sources can be turned on and off
* does "fuzzy" completion
    * nice! 
    * it doesn't need an exact match to help you find suggestions
    * great for identifiers you don't quite remember the name of
* See [COQ's github readme](https://github.com/ms-jpq/coq_nvim) for documentation and many more details
    * this isn't COQ tutorial 
* I'm not an expert, but I think this plugin is pretty great
 
# Using PN and COQ to get an IDE-like experience with neovim
* My [first tutorial](setting_up_lsp_nvim-lspconfig_and_perl_in_neovim.md) did not go into the actual usage of the tools
* So let's get a small taste of that here
* Assumes you have PN and COQ up and running after doing the [TLDR;](#tldr)

## Setup
* the root directory is expected to be a git repo
    * as set in the lua code config above:
        ```
         root_dir = function(fname)
           return lspconfig.util.find_git_ancestor(fname)
         end;
        ```
    * there is probably a way to change the `root_dir` to the current working directory
        * I'll leave that to you to figure out 
* Upshot: **you must init a new git repo or `cd` into an existing git repo before proceeding**

## OK, let's go
* Now that you are in a git repo, open up a new perl file
    * give the file a `.pl` extension
* Make sure vim has `ftdetect` turned on
    * do `:set ft=perl` if you don't 
* throw some code in there that's not formatted and has obvious mistakes 
    * you should see perlcritic and the syntax checker throw errors at you
        * make sure you have a perlcritic config file 
            * if you don't know about perlcritic or how to set it up, google it 
                * similar to setting up perltidy config file (see [next section](#use perltidy)) 
    * fix the code to make the errors disappear
* The mappings used below come from the lua code snippet
    * Change them if they are not to your liking 

### use perltidy
* tldr: `<space>f` triggers formatting
    * this map is configured in lua code above 
* make sure you got a perltidy config file set up
    * must be located at the path you provided in the lua code above
    * if you've never used perltidy before, google it
        * download someone's perltidy configuration and copy and paste it into perltidy config file 
* in normal mode in neovim do `<space>f`
    * bam! all your code is nice and pretty 

### use completion
* type in `my $blah = 7`;
* on the next line, type in `$b`
* menu will pop up
* do `<c-n>` until `blah` is highligted 
    * scrolls down the menu 
    * `<c-p>` scrolls up
* hit `<space>` to enter variable name into buffer with a space after it
    * any key will trigger completion, does not have to be `<space>` 
        
### use snippets
* type in `wh`
* select the `while` snippet from the menu
* hit enter
* input some stuff between the parens 
* hit `<space>j` 
* input the body of the while loop

## What else?
* That's it for now
* This is not an IDE power-user's guide
    * This is a "let's get your started" guide 
* I'll leave it to you to play around with the other mappings
    * see lua code 
        * not all of the mappings may work
    * still learning this stuff myself 
        * maybe when I'm an expert, I'll write another tutorial 
            * though I could not think of a more tedious topic to write and read about 
                * so don't hold your breath

# RTFMs
* get answers for things I didn't bother to RTFM for

## neovim docs
* `:h lsp`
* `:h lspconfig`
* `:COQhelp`

## Github docs
* [lspconfig wiki](https://github.com/neovim/nvim-lspconfig/wiki)
* [Perl Navigator](https://github.com/bscan/PerlNavigator)

