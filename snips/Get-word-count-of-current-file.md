# On This Page

- [Get Word Count of Current File in Vim](#get-word-count-of-current-file-in-vim)

# Get Word Count of Current File in Vim

* These are crude
    * `g <c-g>`
    * `:!wc %`
* not very accurate
    * Counts things like punctuation marks
* basically anything that separated by whitespace
* This seems a little better:
* `:let cnt=0 | g/./let cnt+=len(split(getline('.'), '\W\+')) | echo cnt | nohlsearch`
    * `:echo cnt` afterwards to get the number of words
        * gives output of words on each line 
    * highlights the file, though 
        * needs to be cleared
    * Still not super accruate for counting things like markdown pages
        * words in links are counted
            * could be handled with a better regex
        * words in table of content section are counted
* best way to get accurate count is to write a script

