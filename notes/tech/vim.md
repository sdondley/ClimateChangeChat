# Vim Notes

# On This Page

- [Vim Notes](#vim-notes)
- [Alphabeticlly Sorting of Lines](#alphabeticlly-sorting-of-lines)
- [Plugins](#plugins)
    - [fzf](#fzf)
        - [RTFM](#rtfm)
- [Vim scripting](#vim-scripting)
    - [assign output of command to a variable](#assign-output-of-command-to-a-variable)

# Alphabeticlly Sorting of Lines
* `:sort`
* case insensitive:
    * :`sort i`
* can also sort on selected lines in visual mode
* `:h sort`

# Plugins
## fzf
### RTFM
* [junegunn/fzf.vim: fzf vim: github.com](https://github.com/junegunn/fzf.vim)
* add plugin to config
    * for packer
        ```
        use { 'junegunn/fzf', cmd = 'fzf#install()', ft = 'vimwiki' }
        use { 'junegunn/fzf.vim', ft = 'vimwiki' }
        ```
# Vim scripting
## assign output of command to a variable
