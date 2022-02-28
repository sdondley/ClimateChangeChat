# Setting up an LSP with nvim-lspconfig and Perl in Neovim 0.6.1

# On This Page

- [Setting up an LSP with nvim-lspconfig and Perl in Neovim 0.6.1](#setting-up-an-lsp-with-nvim-lspconfig-and-perl-in-neovim-061)
- [TLDR; The REAL thing you are here for](#tldr-the-real-thing-you-are-here-for)
    - [Install the following plugins into vim from github (in addition to the `neovim/nvim-lspconfig` plugin):](#install-the-following-plugins-into-vim-from-github-in-addition-to-the-neovimnvim-lspconfig-plugin)
    - [Cut and paste this code into `init.vim`:](#cut-and-paste-this-code-into-initvim)
    - [That's it. You're done!](#thats-it-youre-done)
    - [Looking for something more gratifying for your thirsty curious soul?](#looking-for-something-more-gratifying-for-your-thirsty-curious-soul)
- [WTF](#wtf)
- [The Big Picture Stuff](#the-big-picture-stuff)
    - [Why an LSP?](#why-an-lsp)
    - [Is an LSP hard to set up in neovim?](#is-an-lsp-hard-to-set-up-in-neovim)
    - [Why does the Perl community seem to be behind the curve on adopting LSPs?](#why-does-the-perl-community-seem-to-be-behind-the-curve-on-adopting-lsps)
    - [My relevant background](#my-relevant-background)
    - [Assumptions about your background](#assumptions-about-your-background)
    - [Will this work for Windows?](#will-this-work-for-windows)
- [The more technical stuff](#the-more-technical-stuff)
    - [Smaller picture stuff](#smaller-picture-stuff)
    - [The stuff in between (probably what you really want to know)](#the-stuff-in-between-probably-what-you-really-want-to-know)
        - [There are two Perl language servers (that I know of)](#there-are-two-perl-language-servers-that-i-know-of)
    - [OK, the stuff you really need to know to get some real work done](#ok-the-stuff-you-really-need-to-know-to-get-some-real-work-done)
    - [The gory details for those who thirst for knowledge](#the-gory-details-for-those-who-thirst-for-knowledge)

# TLDR; The REAL thing you are here for
* This section assumes:
    * you know what an LSP is, what an IDE is
    * you know what the nvim-lspconfig plugin is and have it installed already
    * you installed the two known perl language servers
    * If any of these assumption are wrong or are confusing to you, you should scroll down to the next major section
        * otherwise, proceed to the very next step

## Install the following plugins into vim from github (in addition to the `neovim/nvim-lspconfig` plugin):
    christoomey/vim-tmux-navigator 
    hrsh7th/nvim-cmp
    hrsh7th/cmp-nvim-lsp
    saadparwaiz1/cmp_luasnip
    hrsh7th/cmp-nvim-lsp
    L3MON4D3/LuaSnip

## Cut and paste this code into `init.vim`:
* Yeah, you might not have any clue what this does
    * some people don't care, so let's not waste their time 
    * so just do it
        * ask questions later 
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
--local servers = { 'perlpls', 'perlls' }
local servers = { 'perlpls' }
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
		debounce_text_changes = 100,
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
* Check that's it's working:
    * Open neovim
    * Type `:LspInfo`
    * Does it look like it's connected?
        * "Yes, you're a genius!"
            * OK, get on your way and go get some coding coding done
            * Or continue if you feel cheated and want to learn more
        * "No, you're an asshole!"
            * OK, google it
            * Or continue reading to try to gain more insight as to the problem

## Looking for something more gratifying for your thirsty curious soul? 
* continue below

# WTF
* ...is an LSP?
* ...is nvim-lspconfig?
* ...is perl?
* ...is neovim?

# The Big Picture Stuff

## Why an LSP?
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

## Is an LSP hard to set up in neovim?
* really depends on the language server
    * for perl, it's super, super easy 
* if you are new to vim
    * it's basically impossible to figure out unless you find a step-by-step recipe identical to your needs
        * but still probably a lot easier than setting up a bunch of different non-LSP plugins to provide similar functionality 
* If you have at least some experience with neovim
    * It's not too bad 
    * still a learning curve 
    * it requires some trial and error 
* Hopefully this web page helps at least a little
* As neovim matures, will probably get easier

## Why does the Perl community seem to be behind the curve on adopting LSPs?
* Good question! (if I do say so myself)
* Is it really behind the curve?
    * It seems like it to me 
        * based on my amateur observations
    * I could definitely be wrong
* I could take many guesses as to why
    * but would just me speculating 
        * so no real point to it 
* Maybe this tutorial will help things along

## My relevant background
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

## Assumptions about your background
* Have been using vim for at least a few months
* Know at least the basics of how to configure neovim
* You know your way around perl and installing perl modules 

## Will this work for Windows?
* No idea. Good luck. You're on your own.
* Fuck Windows
    * sure, it's better than it used to be but old perceptions die hard 
    * no OS without a decent command line built in is worth anything
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
* as mentioned above, my knowledge of LSPs is basically zero
    * but from what I've learned so far...
        * There is a client (vim) 
        * There is a server (the language server)
        * There is the protocol
            * used by the server and client to talk to each other 
        * a client can attach itself to multiple servers
        * a server can service multiple clients but the clients have be use different ports (AFAICT)
* you need to install the language server
    * language server can be used by neovim or another other piece of software that knows how
    * there's generally two or three for each programming language
        * there are more for more popular languages 
        * why there is often more than server for each language?
            * I have no idea 
                * geeks are sometimes territorial?
        * How do I know which one to use?
            * It depends on what you need it to do
                * Not all language servers have the same feature set 
            * The ones that seem to work are the better ones 
    * we will cover how to do this later 
* you need to configure neovim to use the language server you installed
    * we will cover the settings need to connect to the perl language servers
    * this is where the nvim-lspconfig plugin comes in
        * written in a language called "lua" 
            * why lua? 
                * I have no idea other than neovim uses it
                    * why does neovim use it? 
                        * I have no idea 
                            * my best explanation: 
                                * some hipster developer really liked it 
            * the important upshot is you have to write a bit of lua code to configure neovim
                * don't worry, mostly cutting and pasting small code snippets 
                    * seems like a pretty easy language, though 
        * neovim has a new, built-in API for "talking" to a language server
            * in essence, neovim is the client for the server 
        * but you still have to tell the API (neovim) which language server you want to use
            * so you configure nvim-lspconfig to tell neovim about the language server 
        * you can also set other basic settings to nvim-lspconfig to change:
            * how neovim responds to the language server
            * how you want the language server to respond to neovim 
        * you can still use other plugins to connect to a language server and bypass neovim's built-in client
            * but it's wasteful to duplicate the same effort in each plugin 
            * nvim-lspconfig aims to simplify the process of building plugins that need a language server
            * but will be slower than the built-in language client neovim provides
* In addition to nvim-lspconfig you will probably want to use other plugins
    * to try to achieve the "true IDE" experience 
    * plugins for code completion
        * you don't have to use a plugin
            * you can use omnifunc with nvim-lspconfig
                * but not as nice 
                * btw, using <c-x><c-whatever> is probably its worst design decision in vim
                    * there might good reasons for it but I don't know what they are 
                        * so I'll just stick with "it sucks" 
    * for snippets
        * again, totally optional to install a snippets plugin
        * I know litte about snippets, never really used them much 
            * too lazy to learn how to use them 
        * the kids seem to go fuckign nuts about them 
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
                    * or `print 'fuck you';` when I'm frustrated
                    * so not a big loss for me 
    * P:LS is older
        * but seems to have some kinks (see below) 
    * they seem more similar than different 
        * both are perl modules 
        * both are easily installed from cpan repo 
        * both are free to use
        * names are easily confused
        * both developers apparently code use vscode, not neovim
        * but both can work with neovim (maybe, see below) 
        * both have kind of weak documentation for setting up with neovim
            * hence this tutorial 
    * Is one faster than the other?
        * no idea 
        * both seem about the same after limited use 

## OK, the stuff you really need to know to get some real work done
* with all that out of the way, we can finally get some shit done
* First, we download both language servers so you can try them both out
    * I use cpanm as my tool of choice for installing perl modules 
        * not covered in this tutorial 
            * googel it 
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
* OK, got your nvim-lspconfig installed and working?
    * How do you tell? 
        * type `:LspInfo` into vim
            * if you see something pop up, it's working 
            * if you don't, it's not working 
                * google it 
                    * (oh, and fuck google, too) 
                        * don't be evil, my ass 
                        * duck duck go sucks, though, too
                            * all search engines kind of suck 
                                * "hotbot" was the balls
                                    * for its time
                                        * can you tell I'm getting bored writing this? 
* Halfway home! Now:
    * Go back to the top of the page
        * Follow the instructions in the TLDR; section
        * The come back here if you want to suffer more through this tutorial to learn something

## The gory details for those who thirst for knowledge
* This section goes into more detail on what the code snippet you pasted above does
* One caveat: I'm not an expert in Lua
    * take everything in this section with a bit of grain of salt 
