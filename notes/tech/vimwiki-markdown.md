# Vimwiki_markdown Plugin

* [Github repo](https://github.com/patrickdavey/vimwiki_markdown)

# On This Page

- [Vimwiki_markdown Plugin](#vimwiki_markdown-plugin)
- [Description](#description)
- [Integration with Rouge](#integration-with-rouge)
    - [integration with rouge creates problems for me](#integration-with-rouge-creates-problems-for-me)

# Description
* a ruby script 
* to be used with with vimwiki plugin 
    * vimwiki does not support export of markdown syntax
        * 3rd party plugin necessary 
    * if you don't use vimwiki, you have no need for this plugin 
* converts markdown text to html
* ~~uses [Pygments](Pygments) to do syntax highlighting of code embedded in the markdown document~~
    * throw `%pygments` into the template 
    * actually, it doesn't use Pygments despite tag name
        * uses a ruby gem called `rouge` 

# Integration with Rouge
* simple to use
* use it with "fenced" markdown code to highlight code
```
my $code = 'is highlighted'
my $there_are_problems_however = "overrides local css code";
```
* used like this:
 
\`\`\`perl

\# perl code goes here

\`\`\`

* simply put the name of the language immediately after the first line of backticks

## integration with rouge creates problems for me
* rouge embeds its css directly into the html page 
    * the css I have for `<pre><code>` tags gets overridden
    * need to figure out a way to prevent it from overriding my code
    * quick and dirty way?
        * add `!important` to my css? 
            * yes, this worked 
        * but default highlighting does not looks good with black background 
            * black text is invisible 
* also conflicting with js for creating line numbers
    * ugh, this is a bigger headache than I thought
    * looks like it gets rid of the `<code>` tag 
    * now have to dig around and figure out how to control the output of rouge
    * maybe rouge can generate line numbers for me? 
        * would have to match what my js generates for js 
            * for consistency 
            * ugh, more headaches 
            * rouge doesn't seem to touch fenced code without a programming language name
                * ugh more headaches 
    * maybe figure out if I can inject `<code>` tags with rouge? 
* maybe a good idea to turn pygmetize off and find a js plugin to do highlighting? 
    * IIRC, vimwiki-markdown will throw errors if you remove `%pygments` tag from template 
        * testing... 
            * yeah, removing tag from template breaks the command
* got in touch with author of vimwiki_markdown
    * he confirmed there is no easy way to turn off rouge 
    * I rolled my own solution 
        * I just modify the html after it's published with my raku post processing script 
            * removes the css from the dom entirely

