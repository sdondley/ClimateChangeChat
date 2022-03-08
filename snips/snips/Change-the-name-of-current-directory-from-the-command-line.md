# On This Page

- [Change the name of the current directory from the command line](#change-the-name-of-the-current-directory-from-the-command-line)

# Change the name of the current directory from the command line

A simple bash function for renaming the current directory you are in from the command line:

* Add this to the appropriate shell config file:
```
rename_current_dir() {
   cd=${PWD##*/}
   cd ..
   mv $cd $1
   cd $1
}
```
* Create an alias of your choice to this command so it's easier to type:

`alias rncd='rename_current_dir'`
