# Markdown Notes

# On This Page

- [Markdown Notes](#markdown-notes)
- [Headers](#headers)
    - [Atx-style Headers with no matched closing characters](#atx-style-headers-with-no-matched-closing-characters)
- [Header 1](#header-1)
    - [Header 2](#header-2)
        - [Header 3](#header-3)
            - [Header 4](#header-4)
                - [Header 5](#header-5)
                    - [Header 6](#header-6)
        - ["Closed" atx-style headers with matched closing characters](#closed-atx-style-headers-with-matched-closing-characters)
        - ["Closed" atx-style headers with unmatched closing characters](#closed-atx-style-headers-with-unmatched-closing-characters)
    - [Setext-style headers](#setext-style-headers)
- [Header 1](#header-1-2)
    - [Header 2](#header-2-2)
        - [Number of underline characters don't matter](#number-of-underline-characters-dont-matter)
- [Paragraphs](#paragraphs)

# Headers
## Atx-style Headers with no matched closing characters
```
    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6
```

**Produces:**
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### "Closed" atx-style headers with matched closing characters
This closing sytle is optional and is for improving appearance only.
```
    # Header 1 #
    ## Header 2 ##
    ### Header 3 ###
    #### Header 4 ####
    ##### Header 5 #####
    ###### Header 6 ######
```

### "Closed" atx-style headers with unmatched closing characters
```
    # Header 1 #
    ## Header 2 #
    ### Header 3 #
    #### Header 4 #
    ##### Header 5 #
    ###### Header 6 #
```

## Setext-style headers
```
Header 1
========
Header 2
--------
```
Header 1
========
Header 2
--------

### Number of underline characters don't matter
```
    Header 1
    =
    Header 2
    -
```
**Still produces:**

Header 1
=
Header 2
-

# Paragraphs
**Paragraph are just text with no blank lines between them. Paragraphs can contain single line breaks:**
```
This is a paragraph
with line breaks between
the lines.

This is the start
of a new paragraph.
```
**This renders as:**

This is a paragraph
with no line break between
the lines.

This is the start
of a new paragraph.

AT&T


