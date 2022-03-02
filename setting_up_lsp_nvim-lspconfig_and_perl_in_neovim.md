# Setting up a language server with nvim-lspconfig and Perl in Neovim 0.6.1 in well under 5 minutes (if you're lucky)
**CAUTION:** This tutorial is sprinkled with expletives and opinions that may be a bit uninformed just to spice things up a little. If you're humorless or just think my sense of humor sucks, go [RTFM](#rtfm) instead.

**PREFACE**: I knew next to nothing about language servers or using them with neovim until recently. It took many hours of fiddling and experimenting to get somethings of a clue. But it turns out to be surprisingly easy to set up a Perl language server with neovim. This tutorial is the tutorial I wish I existed when I started and will spare you some confustion and frustration. Good luck! 

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
        - [There are two Perl language servers (that I know of)](#there-are-two-perl-language-servers-that-i-know-of)
    - [OK, the stuff you really need to know to get some real work done](#ok-the-stuff-you-really-need-to-know-to-get-some-real-work-done)
    - [Some gory details for those who thirst for knowledge](#some-gory-details-for-those-who-thirst-for-knowledge)
        - [Analzying the giant lua code snippet](#analzying-the-giant-lua-code-snippet)
            - [Setting up mappings](#setting-up-mappings)
            - [Connecting vim to our language servers](#connecting-vim-to-our-language-servers)
            - [Set up completion, completion mappings, and snippets](#set-up-completion-completion-mappings-and-snippets)
- [RTFM](#rtfm)
    - [neovim docs](#neovim-docs)
    - [Perl language server docs](#perl-language-server-docs)

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
        * `cpanm Perl::LanguageServer`
            * I could not get completion working with this one
* Step 1 is done

### Step 2: Install the nvim-lspconfig plugin with git and install into neovim
* Use your favorite neovim package manager to install it     
    * or the one you hate 
        * makes no difference to me 
* Github repo for nvim-lspconfig is here:
    * `https://github.com/neovim/nvim-lspconfig` 
* Step 2 is done

### Step 3: Throw one line of lua code into neovim's init file
* neovim has complicated vim (even more) by offering two different scripts for writing neovim's configurtion 
    * old way: with vimscript 
    * new way: with lua 
* WTF is lua, you say?
    * Sounds like you're probably using `init.vim` to configure neovim 
        * Throw this code into `init.vim`: 
            *  `lua require('lspconfig').perlpls.setup{}`
                * for the PLS language server 
                    * again, I recommend this one
            * OR for the Perl::LanguageServer
                *  `lua require('lspconfig').perlls.setup{}`
* If you're into lua, edit the `init.lua` file instead:    
    * `require'lspconfig'.perlpls.setup{}`
        * for the PLS language server 
    * `require'lspconfig'.perlls.setup{}`
        * for the Perl::LanguageServer language server 
            * ok, if you don't care about not having code completion 
                * or maybe you'll have better luck than me 
* Step 3 is done

### Step 4
* There is no step 4. You're done.
* Fire up neovim 
* Run `:LspInfo` 
* Does it looks like it's working? 
    * Yup, you're done  
* "I can't tell if it's working."
    * Then it probably isn't 
    * But you should see: "Configured servers list: perlpls" (or perlls) at the bottom of a popup box
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
    hrsh7th/cmp-nvim-lsp
    L3MON4D3/LuaSnip

### Step 3: Cut and paste a giant lua code snippet into your neovim configuration
* **MUY IMPORTANTE**
    * The lua code works for the `PLS` language server (not the Perl::LangaugeServer)
        * Ensure you have downloaded this langauge server from CPAN before proceeding 
    * And make sure you remove the one-line of lspconfig code from the basic setup above
* If you use `init.lua` for your neovim confguration file, you can drop the code below directly into it
* If you use `init.vim` for your configuration file:
    * Open `init.neovim`
    * Add `lua require('lsp_config')` to the file
    * Now, in the root of you your neovim config directory:
        * create a `lua` directory if it doesn't already exist 
            * In this directory, create a file called `lsp_config.lua`
                * drop the code below into it
* You might not have any clue what this code does
    * This is the TLDR; section so not covered here
        * read the boring details further down in this tutorial 
    * ask questions later 
        * just focus on getting it working for now 
        * I'll hopefully answer at least some of them down lower on the page

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
                    * IDE can hlep you manage and run your tests, not a language server 
        * Auto completion 
            * Type in the first few characters of an identifier (a variable, function, class, etc.) and a little menu will pop up to prompt you with some guesses as to what you might want to write 
                * You don't have to type in the full name of the identifier, just choose it from the menu 
                * Choosing from menu might often be a little slower for shorter names, but:
                    * Prevents spelling mistakes, which might end up costing time
        * Documentation lookup
            * Forgot what arguments a function takes? 
            * Forgot what a function does?
            * Need a quick refresher on how classes work? 
            * Forgot how a variable is declared?
            * A langauge server helps you find the answers you are looking for
        * Code formatting 
            * Avoid spending hours aligning equal signs, indenting just so and eliminating blank lines to make your code look pretty and more readable 
        * There's more a language server can do, but these are the big ones
* Can't I already do this with neovim without a language server?
    * Yes, most of it 
        * But not quite as conveniently and not quite as fast 
        * Bundles an extra layer of abstraction to provide a bunch of different features so you don't have to do so much manual configuration and set up of other tools and plugins
* What about using coc plugins instead?
    * WTF is coc? 
        * It's a suite of plugins that allow you to easily connect to language servers 
            * Created before neovim had a built-in LSP client
    * I hadn't used coc up until last week when I experimented with it
        * Not really qualified to weigh in on the matter, sorry
            * FWIW, from what I've read, using neovim's built-in LSP client is the future of neovim
                * Perhaps coc will just retool and eventually use the built-in client at some point?
                    * dunno 
* Why Perl?
    * like English, it's my native language 
    * I had difficultly getting a language server set up with Perl and neovim
        * Not a huge amount of documentation for perl language servers
            * Stuff I did find was wrong or incomplete
                * Some of it has since been updated 
                    * thanks to my tireless efforts :) 
            * The two language servers for Perl are not written by people who use neovim 
                * they use Perl language servers with "VSCode" 
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
                * learning one OS really well is enough work for me
 
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
* you need to install the language server
    * we will cover how to do this later 
    * language server can be used by neovim or another other piece of software that knows how
    * there's generally two or three for each programming language
        * there are more for more popular languages 
        * why is there often more than server for each language?
            * I have no idea 
                * geeks are sometimes territorial?
        * How do I know which one to use?
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
        * but you still have to tell the client (neovim) which language server you want to use
            * so you use nvim-lspconfig, a plugin, to tell neovim about the language server 
        * you can also set other basic settings with nvim-lspconfig to change:
            * how neovim responds to the language server
            * how you want the language server to respond to neovim 
        * you can still use other plugins to connect to a language server and bypass neovim's built-in client
            * those plugins will be slower than the built-in language client neovim provides
            * and it's wasteful to duplicate the same effort in each plugin 
            * nvim-lspconfig aims to simplify the process of building plugins that need a language server
* In addition to nvim-lspconfig you will probably want to use other plugins
    * to try to achieve a "true IDE" experience 
        * plugins for code completion, for example
    * you don't have to use a plugin
        * you can use omnifunc with nvim-lspconfig for completion instead
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

### There are two Perl language servers (that I know of)
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
        * both developers apparently code use vscode, not neovim
        * but both can work with neovim (maybe, see below) 
        * both have kind of weak documentation for setting up with neovim
            * at least they when I started writing this
            * hence this tutorial 
    * Is one faster than the other?
        * no idea 
        * after my very limited use, both seem about the same to me

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
    * Note the 4 other plugins listed here, in addition ot `nvim-lspconfig`
        * These plugins are not strictly needed
            * add bells and whistles like better auto completion and snippets 
* Got nvim-lspconfig installed? Good! Now:
    * Go back to the top of the page
        * Follow the rest of the instructions in the TLDR; section
            * Ensure you get all the plugins installed 
            * Paste in the appropriate code snippets into `init.lua` or `init.vim`
        * Then come back here if you want to suffer more through this tutorial to learn something
            * Continue on in next section below 

## Some gory details for those who thirst for knowledge
* This section goes into more detail on what the code snippet you pasted above does
* One caveat: I'm not an expert in Lua
    * so take the technical discussion in this section with a bit of grain of salt 

### Analzying the giant lua code snippet
* as mentioned all you really need is this one single line to connect to the perl language server: 
        * `require'lspconfig.perlpls'.setup{}` 
* The bulk of the lua code is mostly dedicated to adding mappings for lspconfig

#### Setting up mappings
* Mappings make it easier to interact with the language server
* This code sets up some gobal key maps, common to all buffers and all langauge servers:

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
* Now we connect to the lspconfig
* First we assign our lspconfig plugin to a variable
    ```
    local lspconfig = require('lspconfig');
    ```
* Now we add the list of language servers we want to use to the `servers` variable:
    ```
    local servers = { 'perlpls' }  -- this will connect to the Perl Language Server (PLS)
    --local servers = { 'perlls' } -- uncomment this line to use the Perl::LanguageServer language server instead
    ```
* Note that we can add more than one languager server here. Just add the name of it to the comma separated list
    * consult the language server documenation for the name
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

## Perl language server docs
* [Perl::LanguageServer](https://metacpan.org/pod/Perl::LanguageServer) 
* [Perl-Language-Server (PLS)](https://metacpan.org/pod/PLS)

