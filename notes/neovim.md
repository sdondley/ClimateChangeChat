# On This Page

- [neovim notes](#neovim-notes)
    - [Configuration](#configuration)
        - [Configuring nvim from scratch](#configuring-nvim-from-scratch)

# neovim notes

vim is something a not-so-modern software miracle. Originally written
in 1976 by Bill Joy, it still manages to a the text editor of choice
for many developers, especially open source developers. It's an insanely
flexible and configurable text editor. It would take a lifetime to truly master
it. neovim, a direct fork of vim, has come along in recent years to give vim a
run for it's money and improve upon it.

* What is neovim?
    * neo = "new" vim
    * It's a fork of the vim text editor
    * Popular with newer developers
    * Big advantage over vim is many more people work on it
        * Faster development cycle
        * Does more innovative stuff than vim
            * Examples:
                * Language server protocol implementation
                    * useful for editing code like an IDE 
                * Lua integration
                    * claims to better to work with than vimscript 
                    * vimscript can still be used with neovim
    * Basically backward compatible with vim but with extra features

## Configuration
Note: all notes below apply to default macOS. While the descriptions are accurate, directory locations may be different on your machine.

* two main directories
    * ~/.local/share/nvim
        * for storing more tranisient data about vim files (which can be stored anywhere on the machine) on the local machine
    * ~/.config/nvim/
        * this is where the user can configure vim to their liking
        * Most time is spent here configuring vim to your heart's desire

### Configuring nvim from scratch
* if you already have a neovim config:
    * good idea to create git repo of the nvim directory in .config
        * create new branch called 'clean'
        * delete all config files on the branch
        * commit the branch
        * switch back to old config until clean config is where you need it to be
* convert old init.vim to lua
    * tutorial https://www.notonlycode.org/neovim-lua-config/
    * config is in lua.init, not init.vim
    * in general, use `vim.opt` over `vim.o`
    * can use after/ftplugin/<filetype>.lua for lua code
        
