# On This Page

- [Raku Programming Language Notes](#raku-programming-language-notes)
- [Regexes](#regexes)

# Raku Programming Language Notes

# Regexes
* regexes almost have to be relearned, coming from perl
    * fortunately, compiler can be very helpful pointing out mistakes if you are coming from perl 
* `#` (hash sign) must be commented out
* matching beginning and end of lines
    * `^^` and `$$` 
* capture marker: `<( )>`
* Ranges:
    * perl: `a-z`
    * raku: `a..z`
* character classes
    * <[oneofthesechars]>
    * is not *this* characters 
        * `<-[b]>`

