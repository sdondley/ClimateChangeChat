# Comma IDE Notes
 
# On This Page

- [Comma IDE Notes](#comma-ide-notes)
- [About](#about)
- [Run Current File](#run-current-file)
- [Display Function Signature](#display-function-signature)
- [Hotkeys](#hotkeys)
- [Recipes](#recipes)
- [Plugins](#plugins)
- [Raku Module Development](#raku-module-development)
    - [selecting a compiler](#selecting-a-compiler)
    - [no test source roots in the project](#no-test-source-roots-in-the-project)
    - [testing warnings](#testing-warnings)
    - [markdown headings aren't printed to the console](#markdown-headings-arent-printed-to-the-console)

# About
* based on IntelliJ IDE
* presentation about building IDE for Raku with intellij
    https://www.youtube.com/watch?v=zDP9uUMYrvs
* is open source

# Run Current File
* `^r`
    * make sure conflict with IDE is resolved if usig ideavim

# Display Function Signature
* insert cursor in function name and hit command-p

# Hotkeys
| Key command | Description       |
|-------------|-------------------|
| ⌘-+         | expand fold       |
| ⌘--         | close fold        |
| ⌘-backtick  | open preferences  |
| ⌘-p         | show function sig |
| ^-r         | execute file      |

# Recipes
* Turn of annoying typo messages for string literals in code
* cmd-backtick to open preferences
    * editor
        * inspections 
            * proofreading 
                * typo 
                    * uncheck:
                        * process code
                        * process literals

# Plugins
* IdeaVim
    * [IdeaVim plug-in](https://plugins.jetbrains.com/plugin/164-ideavim/versions)
    * [JetBrains/ideavim: Vim emulation plugin for IDEs based on the IntelliJ Platform: github.com](https://github.com/JetBrains/ideavim)
* Modifying maps
    * your .vimrc file is ~/.ideavimrc (by default) 
    * add key maps to this file
        * to reload/edit: 
            * click IdeaVim logo in lower right
            * click "open ~/.ideavimrc
            * make edits
            * click the little refresh logo on the right to save changes


# Raku Module Development
* [Comma - Raku IDE Documentation: commaide.com](https://commaide.com/docs/creating-project)
    * SDK is just the compiler
## selecting a compiler
    * there doesn't seem to be a way to 
    * the rakudo executable it darkened out 
        * old directions talk about selecting perl6 
    * selecting the bin folder worked
* selecting a package manager
    * zef? 
        * selected it 
        * <rakudo_dir>/share/perl6/site/bin/zef
        * seemed to accept it
## no test source roots in the project
* happened after I changed the name of the module 
* reimported project to fix

## testing warnings
* test functions are throwing "Subroutine X is not declared" warnings
* [raku - Comma reporting "subroutine X not declared" for test function - Stack Overflow: stackoverflow.com](https://stackoverflow.com/questions/71544246/comma-reporting-subroutine-x-not-declared-for-test-function)
    * Quitting and restarting Comma IDE made the warnings go away 

## markdown headings aren't printed to the console
* [IntelliJ not showing lines that begin with '#' in test output - Stack Overflow: stackoverflow.com](https://stackoverflow.com/questions/71548158/intellij-not-showing-lines-that-begin-with-in-test-output)
