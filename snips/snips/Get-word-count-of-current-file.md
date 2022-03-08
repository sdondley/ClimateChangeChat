# On This Page

- [Get word count of current file in vim](#get-word-count-of-current-file-in-vim)

# Get word count of current file in vim

* These are crude
    * `g <c-g>`
    * `:!wc %`
* not very accurate
    * Counts things like punctuation marks
* basically anything that separated by whitespace
* This seems a little better:
* `:let cnt=0 | g/./let cnt+=len(split(getline('.'), '\W\+'))`
    * `:echo cnt` afterwards to get the number of words
    * highlights the file, though 
    * Still not super accruate for counting things like markdown pages
        * words in links are counted
        * words in table of contenst section are counted
* best way to get accurate count is to write a script

