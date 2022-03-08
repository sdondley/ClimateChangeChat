# On This Page

- [Raku Programming Language Notes](#raku-programming-language-notes)
- [Regexes](#regexes)

# Raku Programming Language Notes

These are quick reference notes for myself so I don't have to keep looking up the same thing in the docs. Not meant to be pedagogical.

# Regexes
* regexes almost have to be relearned coming from perl
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

