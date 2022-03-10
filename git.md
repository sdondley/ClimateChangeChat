# On This Page

- [Git](#git)
- [Reset to HEAD](#reset-to-head)
- [Branches](#branches)
- [import file from current branch to](#import-file-from-current-branch-to)
- [Submodules](#submodules)

# Git

# Reset to HEAD
*  git reset `--hard` HEAD  

# Branches
* branch commmand
    * list branches
        * `git branch -l`
* creating
    * `git checkout -b <branch_name>` 

# Import File from Current Branch to 
* `git restore --source otherbranch path/to/myfile.txt`

# Submodules
* [Git - Submodules: git-scm.com](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
* create a new submodule from scratch
    * add repo to github 
    * add some kind arter file to the repo
        * using submodules does not appear to work otherwise 
    * `git submodule add <url> <local_dir>`
    * 
* [complete deletion of submodule](https://stackoverflow.com/a/1260982/1641112)
