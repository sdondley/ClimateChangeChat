# On This Page

- [git](#git)
- [Reset to HEAD](#reset-to-head)
- [branches](#branches)
- [import file from current branch to](#import-file-from-current-branch-to)
- [submodules](#submodules)

# git

# Reset to HEAD
*  git reset `--hard` HEAD  

# branches
* branch commmand
    * list branches
        * `git branch -l`
* creating
    * `git checkout -b <branch_name>` 

# import file from current branch to 
* `git restore --source otherbranch path/to/myfile.txt`

# submodules
* [Git - Submodules: git-scm.com](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
* create a new submodule from scratch
    * add repo to github 
    * add some kind of starter file to the repo
        * using submodules does not appear to work otherwise 
    * `git submodule add <url> <local_dir>`
    * 
