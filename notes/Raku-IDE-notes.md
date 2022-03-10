# Raku IDE notes

# On This Page

- [Raku IDE notes](#raku-ide-notes)
    - [notes from usr on discord about his try getting IDE working](#notes-from-usr-on-discord-about-his-try-getting-ide-working)

## notes from usr on discord about his try getting IDE working

[5:04 PM] klebs: from what i could tell, it is just a program which parses raku files and sends back the ast, more or less

[5:04 PM] klebs: it seems like, since we already have a grammar to parse raku, writing the language server is just a translation (or invokation) of that 

[5:04 PM] klebs: i found some attempt at writing one for raku, but couldn't get it to work

[5:05 PM] klebs: https://termbin.com/arpv

[5:05 PM] klebs: that's basically the code for it, but i think it is broken

[5:06 PM] klebs: maybe it actually does work, i am not exactly sure

[5:10 PM] klebs: after spending 4 or 5 days solely upgrading neovim for lsp, treesitter, lua, etc i just burned out on it (after getting it to be mostly awesome) and went back to my main line of development.  it does seem possible, and perhaps not that difficult depending on how easy it is to use the parsing capability already in raku.

