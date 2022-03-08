# Raku Programming Language Notes

* Notes go here
* Nothing to see here yet
    * just testing 

# Regexes
* `#` (hash sign) must be commented out
* matching beginning and end of lines
    * `^^` and `$$` 
* character classes
    * <[oneofthesechars]>
    * is not *this* characters 
        * `<-[b]>`

# inline per
* problems using
    ```
    use Lingua::En::Titlecase:from<Perl5>;
    my $tc = Lingua::EN::Titlecase.new("CAN YOU FIX A TITLE?");
    ```
* throws error:
    ```
    Could not find symbol ''&Titlecase'' in ''GLOBAL::Lingua::EN''
    ```
