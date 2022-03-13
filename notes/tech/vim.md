# Vim Notes

# On This Page

- [Vim Notes](#vim-notes)
- [Alphabeticlly Sorting of Lines](#alphabeticlly-sorting-of-lines)
- [Plugins](#plugins)
    - [fzf](#fzf)
        - [RTFM](#rtfm)
- [Vim scripting](#vim-scripting)
    - [assign output of command to a variable](#assign-output-of-command-to-a-variable)
    - [run "normal" keystroke commands in a function](#run-normal-keystroke-commands-in-a-function)
    - [get character under cursor](#get-character-under-cursor)

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
* use `system()` function
* Example:
    * `let html = system("tree -nDhH files" . ' ' . path)`

## run "normal" keystroke commands in a function
* `:execute "normal \<c-w>\<c-w>"`
* `:normal ^W^W`

## get character under cursor
* `matchstr(getline('.'), '\%' . col('.') . 'c.')`
