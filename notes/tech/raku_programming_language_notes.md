# Raku Programming Language Notes

# On This Page

- [Raku Programming Language Notes](#raku-programming-language-notes)
- [running external command](#running-external-command)
- [Regexes](#regexes)
- [say](#say)
- [Testing](#testing)
    - [Test::Output](#testoutput)

These are quick reference notes for myself so I don't have to keep looking up the same thing in the docs months later after I forget them. Not meant to be pedagogical.

# running external command
* [routine run: docs.raku.org](https://docs.raku.org/routine/run)

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

# say 
* defined at `multi method say(|)`
    * what does this mean
        * `|`
            * flattens arguments into an argument list
                * of type Capture, Pair, List, Map and Hash
                    * what is a Capture? 
                        * [class Signature: docs.raku.org](https://docs.raku.org/type/Signature#Capture_parameters)
                        * can be bound to a variable
                    * What is a Pair?

# Testing
## Test::Output
```
ugh, so this works: stdout-like ({ $md_obj.dump }, /This/, 'can dump file');
[2:54 PM] stevied: this is does not: stdout-like ({ $md_obj.dump }, /This is/, 'can dump file');
[2:55 PM] stevied: error: Potential difficulties:
    Space is not significant here; please use quotes or 😒 (:sigspace) modifier (or, to suppress this warning, omit the space, or otherwise change the spacing)
    at /Users/stevedondley/git_repos/raku/modules/steve/Markdown-toHTML/t/01-basic.rakutest:10
    ------> 
[2:55 PM] stevied: but this doesn't work either: stdout-like ({ $md_obj.dump }, m:s/This is/, 'can dump file');
[2:56 PM] stevied: error: 

Use of uninitialized value of type Any in string context.
Methods .^name, .raku, .gist, or .say can be used to stringify it to something meaningful.
[2:58 PM] stevied: ok, this worked: stdout-like ({ $md_obj.dump }, /'This is'/, 'can dump file');
[2:59 PM] stevied: but I really don't understand this at all
[2:59 PM] stevied: i've never seen quotes used like that in a regex
[3:00 PM] stevied: actually, maybe I have now that I think about it
[3:01 PM] stevied: had to use it for some other raku regex I wrote with a # sign
[3:01 PM] stevied: I don't know why m:s// didn't work, though
[3:04 PM] stevied: ok, this works: stdout-like ({ $md_obj.dump }, rx :s/\# This is a markdown file/, 'can dump file');
[3:04 PM] stevied: threw a rx in front of it to let stdout-like know it was a regex
[3:05 PM] stevied: i guess it's not smart enough to detect it. dunno.
```
