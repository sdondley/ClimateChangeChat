# Setting up a language server with nvim-lspconfig and Perl in Neovim 0.6.1 in well under 5 minutes (if you're lucky)
**PREFACE**: I knew next to nothing about language servers or using them with neovim until recently. It took many hours of fiddling, experimenting and some [head-banging](https://www.reddit.com/r/neovim/comments/t37alb/anyone_out_there_have_nvimlspconfig_working_100/) to get things working. This tutorial is the tutorial I wish existed when I started and should make it dead simple for you. Good luck! 

**DISCLAIMER**: This tutorial isn't meant to be exhaustive or the be all and end all authority of setting up language servers with neovim as I'm not an expert on the topic. It's meant to get you up to speed faster and save you some frustration. When in doubt, [RTFM](#rtfm). If you find any bad mistakes or bad information in this tutorial, email me at s@dondley.com or [do a pull request](https://github.com/sdondley/ClimateChangeChat/blob/main/setting_up_lsp_nvim-lspconfig_and_perl_in_neovim.md) to suggest a change to this page

**CAUTION:** I've sprinkled this post with expletives and uninformed opinions just to spice things up a little. If you're humorless or find me unfunny, go [RTFM](#rtfm) instead.

# On This Page

- [Setting up a language server with nvim-lspconfig and Perl in Neovim 0.6.1 in well under 5 minutes (if you're lucky)](#setting-up-a-language-server-with-nvim-lspconfig-and-perl-in-neovim-061-in-well-under-5-minutes-if-youre-lucky)
- [TLDR;](#tldr)
    - [Basic setup: Get a Perl language server up and running with neovim](#basic-setup-get-a-perl-language-server-up-and-running-with-neovim)
        - [Step 1: Install the language server(s)](#step-1-install-the-language-servers)
        - [Step 2: Install the nvim-lspconfig plugin with git and install into neovim](#step-2-install-the-nvim-lspconfig-plugin-with-git-and-install-into-neovim)
        - [Step 3: Throw one line of lua code into neovim's init file](#step-3-throw-one-line-of-lua-code-into-neovims-init-file)
        - [Step 4](#step-4)
    - [Advanced set up](#advanced-set-up)
        - [Step 1: Do steps 1 and 2 in the basic setup](#step-1-do-steps-1-and-2-in-the-basic-setup)
        - [Step 2: Install these plugins into neovim (in addition to the `neovim/nvim-lspconfig` plugin):](#step-2-install-these-plugins-into-neovim-in-addition-to-the-neovimnvim-lspconfig-plugin)
        - [Step 3: Cut and paste a giant lua code snippet into your neovim configuration](#step-3-cut-and-paste-a-giant-lua-code-snippet-into-your-neovim-configuration)
    - [That's it. You're done!](#thats-it-youre-done)
    - [Looking for something more gratifying for your thirsty, curious soul?](#looking-for-something-more-gratifying-for-your-thirsty-curious-soul)
- [WTF](#wtf)
- [The Big Picture Stuff](#the-big-picture-stuff)
    - [Why a language server?](#why-a-language-server)
    - [Is setting up a language server hard to set up in neovim?](#is-setting-up-a-language-server-hard-to-set-up-in-neovim)
    - [Why does the Perl community seem to be behind the curve on adopting languages servers?](#why-does-the-perl-community-seem-to-be-behind-the-curve-on-adopting-languages-servers)
    - [My relevant background](#my-relevant-background)
    - [Assumptions about your background](#assumptions-about-your-background)
    - [Will this work for Windows?](#will-this-work-for-windows)
- [The more technical stuff](#the-more-technical-stuff)
    - [Smaller picture stuff](#smaller-picture-stuff)
    - [The stuff in between (probably what you really want to know)](#the-stuff-in-between-probably-what-you-really-want-to-know)
        - [There are two Perl language servers that work with neovim (that I know of)](#there-are-two-perl-language-servers-that-work-with-neovim-that-i-know-of)
            - [A third Perl langauge server?](#a-third-perl-langauge-server)
    - [OK, the stuff you really need to know to get some real work done](#ok-the-stuff-you-really-need-to-know-to-get-some-real-work-done)
    - [Some gory details for those with a relentless quest for knowledge](#some-gory-details-for-those-with-a-relentless-quest-for-knowledge)
        - [Analzying the giant lua code snippet](#analzying-the-giant-lua-code-snippet)
            - [Setting up mappings](#setting-up-mappings)
            - [Connecting vim to our language servers](#connecting-vim-to-our-language-servers)
            - [Set up completion, completion mappings, and snippets](#set-up-completion-completion-mappings-and-snippets)
- [RTFM](#rtfm)
    - [neovim docs](#neovim-docs)
    - [Github docs](#github-docs)
    - [Perl language server cpan docs](#perl-language-server-cpan-docs)

# TLDR;
* This TLDR; section assumes:
    * you know what a language server is and what it might be good for
    * you know what the nvim-lspconfig plugin is and what it's for
    * you can install a perl module from cpan
    * you can install a neovim plugin 
    * If any of these assumption are wrong or are confusing to you, you should scroll down to the [next major section](#wtf)
        * otherwise, proceed to the very next step

## Basic setup: Get a Perl language server up and running with neovim
* No bells or whistles 
* Good for just making sure you can get something working before trying more sophisticated configs
    * Good idea to do this first then do advanced set up below

### Step 1: Install the language server(s)
* There are 2 langauge servers to choose from, Perl Language Server (PLS) and Perl::LanguageServer
    * From the command line, install one or both: 
        * `cpanm PLS` 
            * I recommend this one 
            * But no code debugging features
        * `cpanm Perl::LanguageServer`
            * I could not get completion working with this one
            * But does have debugging features
                * I did not confirm if debugging works with neovim 
* Step 1 is done

### Step 2: Install the nvim-lspconfig plugin with git and install into neovim
* Use your favorite neovim package manager to install it     
    * or the one you hate 
        * makes no difference to me 
* Github repo for nvim-lspconfig is here:
    * `https://github.com/neovim/nvim-lspconfig` 
* Step 2 is done

### Step 3: Throw one line of lua code into neovim's init file
* neovim has complicated vim (even more) by offering two different scripting languages for writing neovim's configuration files
* If you don't know which language your're using to configure neovim with, it's safe to say you're using vimscript 
* Decide which langauge server you want to use
    * I recommend PLS 
* Add the appropriate lua code into your vim configuration
    * for vimscript 
        * goes into `init.vim` file
        * for PLS: `lua require('lspconfig').perlpls.setup{}`
        * for Perl::LangaugeServer: `lua require('lspconfig').perlls.setup{}`
    * for lua 
        * goes into `init.lua` file
        * for lua with PLS: `require'lspconfig'.perlpls.setup{}`
        * for lua with Perl::LanguageServer: `require'lspconfig'.perlls.setup{}`
* Step 3 is done

### Step 4
* There is no step 4. You're done.
* Fire up neovim 
* Run `:LspInfo` 
* Does it looks like it's working? 
    * Yup, you're done  
* "I can't tell if it's working."
    * Then it probably isn't 
    * But you should see: "Configured servers list: perlpls" (or "perlls") at the bottom of a popup box
* "It's not working, you idiot!" 
    * go back and check for typos
    * or let me know if you think I fucked up somewhere
        * wouldn't be the first time 
        * email: s@dondley.com

## Advanced set up 
* If you want convenient mappings and cooler stuff like fancier code completion and snippets, follow the steps below
* This configuration is ripped almost straight from lspconfig docs
    * You can use a different set of plugins and mappings you can use as you get more skilled 

### Step 1: Do steps 1 and 2 in the basic setup
* Already did the basic set up?
    * **Don't forget to remove the one-line snippet in step 3 above before proceeding**

### Step 2: Install these plugins into neovim (in addition to the `neovim/nvim-lspconfig` plugin):
    hrsh7th/nvim-cmp
    hrsh7th/cmp-nvim-lsp
    saadparwaiz1/cmp_luasnip
    L3MON4D3/LuaSnip

### Step 3: Cut and paste a giant lua code snippet into your neovim configuration
* **MUY IMPORTANTE**
    * The lua code works for the `PLS` language server (not the Perl::LangaugeServer)
        * Ensure you have downloaded this langauge server from CPAN before proceeding 
    * And make sure you remove the one-line of lspconfig code from the basic setup above
* If you use `init.lua` for your neovim confguration file, you can drop the code below directly into it
* If you use `init.vim` for your configuration file:
    * Open `init.vim`
    * Add `lua require('lsp_config')` to the file
    * Now, in the root of you your neovim config directory:
        * create a `lua` directory if it doesn't already exist 
            * In this directory, create a file called `lsp_config.lua`
                * drop the code below into it
    ```
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
      vim.api.nvim_buf_set_keymap(bufnr, 'n', '<C-\\>', '<cmd>lua vim.lsp.buf.signature_help()<CR>', opts)
      vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>wa', '<cmd>lua vim.lsp.buf.add_workspace_folder()<CR>', opts)
      vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>wr', '<cmd>lua vim.lsp.buf.remove_workspace_folder()<CR>', opts)
      vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>wl', '<cmd>lua print(vim.inspect(vim.lsp.buf.list_workspace_folders()))<CR>', opts)
      vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>D', '<cmd>lua vim.lsp.buf.type_definition()<CR>', opts)
      vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>rn', '<cmd>lua vim.lsp.buf.rename()<CR>', opts)
      vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>ca', '<cmd>lua vim.lsp.buf.code_action()<CR>', opts)
      vim.api.nvim_buf_set_keymap(bufnr, 'n', 'gr', '<cmd>lua vim.lsp.buf.references()<CR>', opts)
      vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>f', '<cmd>lua vim.lsp.buf.formatting()<CR>', opts)
    end

    -- Use a loop to conveniently call 'setup' on multiple servers and
    -- map buffer local keybindings when the language server attaches
    local capabilities = vim.lsp.protocol.make_client_capabilities()
    capabilities = require('cmp_nvim_lsp').update_capabilities(capabilities)
    local lspconfig = require('lspconfig');
    local servers = { 'perlpls' }  -- this will load the Perl Language Server (PLS)
    --local servers = { 'perlls' } -- uncomment this line to use the Perl::LanguageServer language server instead
    for _, lsp in pairs(servers) do
      lspconfig[lsp].setup {
        --root_dir = util.find_git_ancestor,
        settings = { 
        perl = { 
            perlcritic = { enabled = true },
            syntax = { enabled = true },
        } 
      },
        single_file_support = true,
        on_attach = on_attach,
        capabilities = capabilities,
        flags = {
            -- This will be the default in neovim 0.7+
            debounce_text_changes = 150,
        }
      }
    end

    local luasnip = require 'luasnip'

    -- nvim-cmp setup
    local cmp = require 'cmp'
    cmp.setup {
      snippet = {
        expand = function(args)
          require('luasnip').lsp_expand(args.body)
        end,
      },
      mapping = {
        ['<C-p>'] = cmp.mapping.select_prev_item(),
        ['<C-n>'] = cmp.mapping.select_next_item(),
        ['<C-d>'] = cmp.mapping.scroll_docs(-4),
        ['<C-f>'] = cmp.mapping.scroll_docs(4),
        ['<C-Space>'] = cmp.mapping.complete(),
        ['<C-e>'] = cmp.mapping.close(),
        ['<CR>'] = cmp.mapping.confirm {
          behavior = cmp.ConfirmBehavior.Replace,
          select = true,
        },
        ['<Tab>'] = function(fallback)
          if cmp.visible() then
            cmp.select_next_item()
          --elseif luasnip.expand_or_jumpable() then
            --luasnip.expand_or_jump()
          else
            fallback()
          end
        end,
        ['<S-Tab>'] = function(fallback)
          if cmp.visible() then
            cmp.select_prev_item()
          elseif luasnip.jumpable(-1) then
            luasnip.jump(-1)
          else
            fallback()
          end
        end,
      },
      sources = {
        { name = 'nvim_lsp' },
        { name = 'luasnip' },
      },
    }
    ```
* You might not have any clue what this code does
    * This is the TLDR; section so not covered here
        * read the boring details further down in this tutorial 
    * ask questions later 
        * just focus on getting it working for now 
        * I'll hopefully answer at least some of them down lower on the page

## That's it. You're done!
* Was that so hard?
* Check that it's working:
    * Open neovim
    * Type `:LspInfo`
* Does it look like it's connected?
    * You should see: "Configured servers list: perlpls" at the bottom of a popup box
    * "Yes, you're a genius!"
        * Congrats, you know how to copy and paste things into the right place
        * Feel free to continue with the rest of the tutorial if you're inclined
    * "No, you're an asshole!"
        * OK, then google around and figure it out
            * Or, go bug someone on reddit/stackoverflow/perlmonks with your troubles
            * Or continue reading to try to gain more insight as to what the problem might be
            * Or pay me 25 bucks and call me for help
                * Sorry, I don't do Windows 

## Looking for something more gratifying for your thirsty, curious soul? 
Continue below...

# WTF
* ...is a language server?
    * the "LS" part of an "LSP", the "Language Server Protocol"
        * see next question 
    * "LSP" and "language server" are often used interchangeably
        * in reality, they are two separate components
* ...is an [LSP](https://microsoft.github.io/language-server-protocol/)?
* ...is [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)?
* ...is [Perl](https://www.perl.org)?
* ...is [neovim](https://neovim.io)?

I've googled these for you. You're welcome.

# The Big Picture Stuff

## Why a language server?
* To write code you use a text editor
    * Text editors require you to type
        * But typing sucks
        * Programmers have built a bazillion tools to minimize the amount they have to type
            * Wouldn't you rather use a steam shovel than a spade to dig your home's foundation?
            * vim is one of those tools
                * used since the early 80s 
            * More recently, deverlopers have been using "IDEs"
                * not to be confused with "IEDs" or the "IUD" 
                    * totally different things
                * "IDE" is an inscutable name
                    * stands for "Integrated Development Environment" 
                    * makes you sound impressive 
                        * Weird how programmers love talking about "environments" yet barely go outside
                    * Just a tool for helping you write code faster
                        * call it a "coding assistant" to sound less pretentious around real people
                            * I've never used this term before, I just made it up 
                * also help make it easier to look shit up and navigate lots of code
                * Not without some disadvantages
                    * added complexity
                        * configuring an IDE to work the way you want can take away a shit ton of time from typing and getting actual coding done
                    * adds a layer of abstraction between you and your code
                        * any time not thinking directly about your code and instead thinking about the tool that writes your code is a distraction 
                            * the real productivity doesn't kick in until after you get over a confusing learning curve (and a very steep one with vim)
                    * Makes it easier to pump out lots of code
                        * but not always good or well-organized code 
                            * but hey, looks nicely tabbed and spaced like a real pro 
                * Rough advice, not to be followed strictly
                    * Learn to type before learning to code
                    * Learn to code "by hand" before using an IDE
                    * Use an IDE after you learn to program manually
* So why use a language server?
    * Takes away some of the tedious work of typing and looking shit up 
    * It's kind of magical and fun to use 
    * Allows you to turn neovim into a somewhat kludgy, poor man's IDE
        * But an IDE you have absolute full control over (if you know what you are doing) 
        * neovim's goal seems to be to want to turn vim into a serious IDE 
            * that's my take, anyway 
    * Some common "killer" language server features that programmers really like:
        * Syntax checking 
            * tells you in real time if your code has an obvious mistake 
            * but cannot tell you if your code behaves the way you want it to 
                * use tests for that 
                    * IDE can help you manage and run your tests, not a language server 
        * Auto completion 
            * Type in the first character or two of an identifier (a variable, function, class, etc.) and a little menu will pop up to prompt you with some guesses as to what you might want to write 
                * You don't have to type in the full name of the identifier, just choose it from the menu 
                * The more letters you type, the fewer choices that appear are on the menu
                * Choosing from menu might often be a little slower for shorter names, but:
                    * Prevents spelling mistakes, which might end up costing time
                    * muscle memory will eventually kick in and reduce this downside dramatically 
        * Documentation lookup
            * Forgot what arguments a function takes? 
            * Forgot what a function does?
            * Need a quick refresher on how classes work? 
            * Forgot how a variable is declared?
            * A langauge server helps you find the answers you are looking for
        * Code formatting 
            * Avoid spending hours aligning equal signs, indenting just so and eliminating blank lines to make your code look pretty and more readable 
            * perl language servers provide a convenient frontend to perltidy to accomplish this
        * There's more a language server can do, but these are the big ones
            * for perl language servers, you'll have perlcritic standing by to nag you within a tenth of a second about your shit code 
* Can't I already do this with neovim without a language server?
    * Yes, most of it 
        * But not quite as conveniently and not quite as fast 
        * Bundles an extra layer of abstraction to provide a bunch of different features so you don't have to do so much manual configuration and set up of other tools and plugins
* Isn't all the blinking of menus and messages distracting?
    * definitely, at first
    * eventually, your brain's autopilot function will learn to tune out the distractions and figure out what to pay attention to
* What about using [coc plugins](https://github.com/neoclide/coc.nvim) instead?
    * WTF is coc? 
        * It's a suite of plugins that allow you to easily connect to different language servers 
            * Created before neovim had a built-in LSP client
    * I hadn't used coc up until last week when I experimented with it
        * I'm not qualified to weigh in on the matter, sorry
            * FWIW, from what I've read, using neovim's built-in LSP client is the future of neovim
                * Perhaps coc will just retool and eventually use the built-in client at some point?
                    * dunno 
    * [check this document](https://github.com/neovim/nvim-lspconfig/wiki/Comparison-to-other-LSP-ecosystems-(CoC,-vim-lsp,-etc.)) for a more technical comparison of nvim-lspconfig and coc
    * I think I've read that it's more laggy than using the built-in client
* What about [coq](https://github.com/ms-jpq/coq_nvim), the "fast as FUCK" completion plugin?
    * Another neovim plugin but that advertises itself as having very fast fuzzy completion
    * Apparently works with neovim's built-in LSP client nvim-lspconfig
        * I tried it only briefly 
        * On my list of things to experiment more with 
    * neovim plugin authors appear to have potty mouths
* Why Perl?
    * like English, it's my native language 
    * I had difficultly getting a language server set up with Perl and neovim
        * Not a huge amount of documentation for perl language servers
            * Stuff I did find was wrong or incomplete
                * Some of it has since been updated 
                    * thanks, in part, to my tireless efforts :) 
            * The two language servers for Perl are not written by people who use neovim 
                * they use Perl language servers with "VSCode" 
                * they work mostly by happenstance because it's an open protocol
                    * you can thank MicroSoft for something, at least 
                        * but fuck Gates and Ballmer 
                            * always and forever 
                            * thought kudos to Gates for being a good philanthroper 
                                * **almost** erases his sins
        * I wanted others to avoid my initial confusion 
            * wrote this 
    * Perl community has the best people
        * IMO, of course 

## Is setting up a language server hard to set up in neovim?
* really depends on the language server
    * for perl, it's super, super easy 
* also depends on your skill level 
    * if you are new to vim/neovim
        * it's basically impossible to figure out unless you find a step-by-step recipe identical to your needs
            * but still probably a lot easier than setting up a bunch of different non-LSP plugins to provide similar functionality 
    * If you have at least some experience with neovim
        * It's not too bad 
        * still a learning curve 
        * it requires some trial and error 
* Hopefully this web page helps at least a little
* As neovim matures, will probably get easier

## Why does the Perl community seem to be behind the curve on adopting languages servers?
* Good question! (if I do say so myself)
* Is it really behind the curve?
    * It seems like it to me 
        * based on my amateur observations
    * I could definitely be wrong
* I could take many guesses as to why
    * but would just me speculating 
        * so no real point to it 
* Maybe this tutorial will help things along in some small way

## My relevant background
* totally new to languages servers and nvim-lspconfig 
    * until last week 
* Coding in Perl since late 90s
    * When Perl was king of the web 
* Mac user since 2008
    * for daily computing 
    * used windows (and PC-DOS) from early 90s until 2008
* GNU/Linux user since early 2000s 
    * Most familiar with Debian 
* Vim user since early 2000s 
    * when I started using Linux 
    * still far from an expert 
* neovim user for maybe 2 years
* Know some vimscript
    * well enough, but very slow to code it 
    * no idea how to go about architecting a sophisticated plugin with it 
* Never used a languages server until last week
    * I know just about zilch about how they work
        * beyond knowing they follow a traditional "client/server" paradigm 
* Never used a proper IDE except for dabbling a little with XCode 
* Never wrote a line of lua until last week 

## Assumptions about your background
* Have been using vim for at least a few months
* Know at least the basics of how to configure neovim
* You know your way around perl and installing perl modules 

## Will this work for Windows?
* No idea. Good luck. You're on your own.
* Fuck Windows
    * sure, it's better than it used to be but old perceptions die hard 
    * no OS without a decent command line built into it is worth anything
    * I have only so much time to figure this shit out
        * no time to learn whatever you have to hack to get something working in Windows 
            * I'll leave it to more qualified people than me 
* My advice? 
    * if you're gonna do open source, use `*nix`
        * macs are fine
        * using a virtual linux box is better 
            * but I'm not looking for another box to manage 
                * learning one OS fairly well is enough work for me
 
# The more technical stuff

## Smaller picture stuff 
* as mentioned above, my knowledge of language servers is basically zero
    * but from what I've learned so far...
        * There is a client (vim) 
        * There is a server (the language server)
        * There is the protocol
            * used by the server and client to talk to each other 
        * a client can attach itself to multiple servers
        * a server can service multiple clients but the clients have be use different ports (AFAICT)
* you need to install the language server on your box
    * we will cover how to do this later 
        * spoiler: one `cpanm` command does the trick 
    * language server can be used by neovim or another other piece of software that knows how
    * there's generally two or three for each programming language
        * there are more for more popular languages 
        * why is there often more than server for each language?
            * I have no idea 
                * geeks are sometimes territorial?
        * How do I know which one to use
            * It depends on what you need it to do
                * Not all language servers have the same feature set 
                    * read the langauge server's documentation 
                        * should spell things out 
            * The ones that seem to work are the better ones 
* you need to configure neovim to use the language server you installed
    * we will cover the settings needed to connect to the perl language servers in a bit
    * this is where the nvim-lspconfig plugin comes in
        * written in a language called "lua" 
            * why lua? 
                * I have no idea other than neovim uses it
                    * why does neovim use it? 
                        * I have no idea 
                        * as an ignorant jackass that doesn't want to learn something new, I can only come to one obvious conclusion: 
                            * some hipster developer thought it provided a new, edgy look
            * the upshot is you have to write a bit of lua code to configure neovim
                * don't worry, just cut and paste
                    * seems like a pretty easy language to pick up, though 
        * neovim has a built-in client for "talking" to a language server
            * in essence, neovim is the client for the server 
        * but have to tell the client (neovim) which language server you want to use
            * so you use nvim-lspconfig, a plugin, to tell neovim about the language server 
        * you can also set other basic settings with nvim-lspconfig to change:
            * how neovim responds to the language server
            * how you want the language server to respond to neovim 
        * you can still use other plugins to connect to a language server and even bypass neovim's built-in client
            * those plugins will be slower than the built-in language client neovim provides
            * and it's wasteful to duplicate the same effort in each plugin 
        * nvim-lspconfig aims to simplify the process of connecting neovim to a language server
* In addition to nvim-lspconfig you will probably want to use other plugins
    * to try to achieve a "true IDE" experience 
        * plugins for code completion, for example
    * you don't have to use other plugins
        * for example, you can use omnifunc with nvim-lspconfig for completion
            * but not as nice 
            * btw, using `<c-x><c-whatever>` is probably its worst design decision in vim
                * there might good reasons for it but I don't know what they are 
                    * so I'll just stick with "it sucks" 
    * for snippets
        * again, totally optional to install a snippets plugin
        * helps you automatically write code from templates 
        * I know litte about snippets, never used them much 
            * too lazy to learn how to use them 
        * the kids seem to go fucking nuts about them 
        * I kind of like to type shit out
            * kind of relaxing 

## The stuff in between (probably what you really want to know)

### There are two Perl language servers that work with neovim (that I know of)
* First of all, thanks to the software authors of these language servers
    * I greatly appreciate your work! 
    * Be sure to pass along your gratitude and maybe even a tip
* The two (known) Perl language servers are:
    * Perl::LanguageServer (P::LS)
        * Author: Gerald Richter
        * GitHub Link: https://github.com/richterger/Perl-LanguageServer 
        * CPAN Link: https://metacpan.org/pod/Perl::LanguageServer 
    * Perl-Language-Server (PLS)
        * Author: "FractalBoy"
        * GitHub Link: https://github.com/FractalBoy/perl-language-server
        * CPAN Link: https://metacpan.org/pod/PLS
* What's the difference?
    * from a technical perspective, I have no idea 
    * PLS is newer
        * but has smaller feature set 
            * can't tap into debug interface provided by perl 
                * I just use `print 'hi';` as my goto debugging tool, anyway 
                    * or `print 'fuck you';` when I'm feeling frustrated
                * not a deal breaker for me 
    * P:LS is older
        * but seems to have some kinks
            * I could not get completion feature working  
                * If you got it working, let me know how:
                    * s@dondley.com
    * they seem more similar than different 
        * both are perl modules 
        * both are easily installed from cpan repo 
        * both are free to use
        * they have nearly the same name
        * both developers apparently code with vscode, not neovim
        * but both can work with neovim (maybe, see below) 
        * both have kind of weak documentation for setting up with neovim
            * at least they when I started writing this
            * hence this tutorial 
    * Is one faster than the other?
        * no idea 
        * after my very limited use, both seem about the same to me

#### A third Perl langauge server?  
* There is another Perl language server project
* Came to my attention after writing this blog post 
* Called ["PerlNavigator"](https://github.com/bscan/PerlNavigator)
* Does not yet work with neovim
* Developer "bscan" [is looking for help](https://www.reddit.com/r/perl/comments/t4inwe/comment/hz0dg4j/?utm_source=share&utm_medium=web2x&context=3) getting it working with neovim


## OK, the stuff you really need to know to get some real work done
* with all that out of the way, we can finally get some shit done
* First, we download both language servers so you can try them both out
    * I use `cpanm` as my tool of choice for installing perl modules 
        * see TLDR; above for the commands 
* having perlbrew installed is fine 
    * I didn't run into any issues 
    * running 5.34.0 version of perl
* Now we configure neovim
* first complication we run into is which package manager to use to install the nvim-lspconfig plugin
    * there are a butt ton of them 
    * managing plugins is probably one of the most confusing parts of vim (amongst many) 
    * this tutorial is not designed to be a vim package manager tutorial
        * it's long enough as it is
        * google it
    * If you use the packer package manager, here's the relevant parts of my packer config:
        ```
        return require('packer').startup( {
            function()
                use { 'neovim/nvim-lspconfig', opt = true, ft = 'perl' }  -- LSP config plugin
                use { 'hrsh7th/nvim-cmp' } -- Autocompletion plugin
                use 'hrsh7th/cmp-nvim-lsp' -- LSP source for nvim-cmp
                use 'saadparwaiz1/cmp_luasnip' -- Snippets source for nvim-cmp
                use 'L3MON4D3/LuaSnip' -- Snippets plugin
            end,
        })
        ```
    * Note the 4 other plugins listed here, in addition to `nvim-lspconfig`
        * These plugins are not strictly needed
            * add bells and whistles like better auto completion and snippets 
* Got nvim-lspconfig installed? Good! Now:
    * Go back to the top of the this page
        * Follow the rest of the instructions in the [TLDR;](#tldr;) section
            * Ensure you get all the plugins installed (for when you do the advanced setup)
            * Paste in the appropriate code snippets into `init.lua` or `init.vim`
        * Then come back here if you want to suffer more through this tutorial to learn something

## Some gory details for those with a relentless quest for knowledge
* This section goes into some detail on what the code snippet you pasted above does
* One caveat: I'm not an expert in Lua or configuing the language server
    * so take the technical discussion in this section with a bit of grain of salt 

### Analzying the giant lua code snippet
* as mentioned, all you really need is this one single line to connect to the perl language server: 
    * `require'lspconfig.perlpls'.setup{}` (for the PLS server)
* The bulk of the lua code is mostly dedicated to adding mappings for lspconfig

#### Setting up mappings

* Mappings make it easier to interact with the language server
* This code sets up some gobal key maps, common to all buffers and all langauge servers
    ```
    local opts = { noremap=true, silent=true }
    vim.api.nvim_set_keymap('n', '<space>e', '<cmd>lua vim.diagnostic.open_float()<CR>', opts)
    vim.api.nvim_set_keymap('n', '[d', '<cmd>lua vim.diagnostic.goto_prev()<CR>', opts)
    vim.api.nvim_set_keymap('n', ']d', '<cmd>lua vim.diagnostic.goto_next()<CR>', opts)
    vim.api.nvim_set_keymap('n', '<space>q', '<cmd>lua vim.diagnostic.setloclist()<CR>', opts)
    ```
* Next, we set up more keymaps that are specific to buffers, each of which might be connetected to a different language server
    * You might have one buffer open for programming in perl 
    * Another buffer for programming c 
    * each buffer will connect to the approprate language server 
    ```
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
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<C-\\>', '<cmd>lua vim.lsp.buf.signature_help()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>wa', '<cmd>lua vim.lsp.buf.add_workspace_folder()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>wr', '<cmd>lua vim.lsp.buf.remove_workspace_folder()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>wl', '<cmd>lua print(vim.inspect(vim.lsp.buf.list_workspace_folders()))<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>D', '<cmd>lua vim.lsp.buf.type_definition()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>rn', '<cmd>lua vim.lsp.buf.rename()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>ca', '<cmd>lua vim.lsp.buf.code_action()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', 'gr', '<cmd>lua vim.lsp.buf.references()<CR>', opts)
          vim.api.nvim_buf_set_keymap(bufnr, 'n', '<space>f', '<cmd>lua vim.lsp.buf.formatting()<CR>', opts)
    end
    ```
* Note these mappings get wrapped in a function called `attach`. They are added only when you connect to a language server
* What do these key mappings do?
    * This isn't an IDE tutorial 
        * Not going to cover them here 
    * Plus, I don't know what all of them do
        * the code above was cargo culted from lspconfig documentation 
    * If you've used an IDE before, you probably know more than me 
    * Some maps are pretty obvious from the description 
    * Play with them and find out

#### Connecting vim to our language servers
* Now we get to the meat of the matter
* First we set up the capabilities of the server
    ```
    local capabilities = vim.lsp.protocol.make_client_capabilities()
    capabilities = require('cmp_nvim_lsp').update_capabilities(capabilities)
    ```
    * I really don't know what exactly this does, TBH
    * Looks like we are telling neovim to use our plugin for completion
* Next we connect to the lspconfig
    * We assign our lspconfig plugin to a variable
        ```
        local lspconfig = require('lspconfig');
        ```
* Now we add the list of language servers we want to use to the `servers` variable:
    ```
    local servers = { 'perlpls' }  -- this will connect to the Perl Language Server (PLS)
    --local servers = { 'perlls' } -- uncomment this line to use the Perl::LanguageServer language server instead
    ```
* Note that we can add more than one language server here. Just add the name of it to the comma separated list
    * consult the language server documenation for the name
    * each buffer should just use one language server 
        * though it's possible to connect to multiple ones at the same time 
* Now we are ready to connect to the server(s) by looping over the `servers` list:
    ```
    -- Use a loop to conveniently call 'setup' on multiple servers and
    -- map buffer local keybindings when the language server attaches
    for _, lsp in pairs(servers) do
      lspconfig[lsp].setup {
        --root_dir = util.find_git_ancestor,
        settings = { 
        perl = { 
            perlcritic = { enabled = true },
            syntax = { enabled = true },
        } 
      },
        single_file_support = true,
        on_attach = on_attach,
        capabilities = capabilities,
        flags = {
            -- This will be the default in neovim 0.7+
            debounce_text_changes = 150,
        }
      }
    end
    ```
* A breakdown of these settings 
    * Not sure what `--root_dir` setting does  
        * RTFM
        * Confession: I don't always RTFM 
        * Cargo culted it 
        * Don't even think it's needed
    * `settings`:
        * This is the most important part of the lua code
        * Consult language server documentation for what goes here
        * Settings above work with PLS, not P::LS
            * enables perlcritic 
                * nags you with warnings about how your code style sucks 
            * enables syntax checking 
                * compiles your code on the fly and throws a warning if there's a problem 
                    * huge time saver 
                    * my biggest motiviation for using an LSP 
                        * I make a shit ton of dumb mistakes 
            * consult each language server's documentation for setting confugrations
                * should have a special section for nvim-lspconfig 
                * nvim-lspconfig also has a [compendium of settings](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md) for different language servers 
                    * be careful, they might be dated 
        * `--single_file_support`
            * I only have a vague idea what this does
            * won't speculate 
                * Don't be like me, [RTFM](#rtfm) 
        * `on_attach`
            * attaches our buffer maps 
        * `capabilities` 
            * tells `lspconfig` what plugin to use for certain features
                * I think 
                * here we tell it to use the completion capability we set earlier using `nvim-cmp` 
        * `flags`
            * passes config settings to the language client 
            * consult neovim's [lsp documentation](https://neovim.io/doc/user/lsp.html) 
        * `debounce_text_changes`
            * don't touch this unless you know what you are doing 
                * I don't 

#### Set up completion, completion mappings, and snippets 

* I know very little about completions or snippets
* Not going to weigh in on this code 
    * Except to say it seems to work (at least the completion)
        * and it sets up maps 
    * I haven't experimented with snippets yet
    ```
    local luasnip = require 'luasnip'

    -- nvim-cmp setup
    local cmp = require 'cmp'
    cmp.setup {
      snippet = {
        expand = function(args)
          require('luasnip').lsp_expand(args.body)
        end,
      },
      mapping = {
        ['<C-p>'] = cmp.mapping.select_prev_item(),
        ['<C-n>'] = cmp.mapping.select_next_item(),
        ['<C-d>'] = cmp.mapping.scroll_docs(-4),
        ['<C-f>'] = cmp.mapping.scroll_docs(4),
        ['<C-Space>'] = cmp.mapping.complete(),
        ['<C-e>'] = cmp.mapping.close(),
        ['<CR>'] = cmp.mapping.confirm {
          behavior = cmp.ConfirmBehavior.Replace,
          select = true,
        },
        ['<Tab>'] = function(fallback)
          if cmp.visible() then
            cmp.select_next_item()
          --elseif luasnip.expand_or_jumpable() then
            --luasnip.expand_or_jump()
          else
            fallback()
          end
        end,
        ['<S-Tab>'] = function(fallback)
          if cmp.visible() then
            cmp.select_prev_item()
          elseif luasnip.jumpable(-1) then
            luasnip.jump(-1)
          else
            fallback()
          end
        end,
      },
      sources = {
        { name = 'nvim_lsp' },
        { name = 'luasnip' },
      },
    }
    ```
# RTFM
* eating vegetables sucks too but they're good for you
* get answers for things I didn't bother to RTFM for

## neovim docs
* `:h lsp`
* `:h lspconfig`

## Github docs
* [lspconfig wiki](https://github.com/neovim/nvim-lspconfig/wiki)
* [Perl::LangaugeServer]()https://github.com/richterger/Perl-LanguageServer
* [PLS]()https://github.com/FractalBoy/perl-language-server

## Perl language server cpan docs
* [Perl::LanguageServer](https://metacpan.org/pod/Perl::LanguageServer) 
* [Perl-Language-Server (PLS)](https://metacpan.org/pod/PLS)

