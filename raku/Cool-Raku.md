# On This Page

- [Rockin' with Raku](#rockin-with-raku)
    - [A Detailed Walk Through of Code for Finding Specific Prime Numbers](#a-detailed-walk-through-of-code-for-finding-specific-prime-numbers)
    - [How it works](#how-it-works)

# Rockin' with Raku

Selected code examples showcasing the power of the Raku programming language.
Watch it flex!

## A Detailed Walk Through of Code for Finding Specific Prime Numbers

What's the 5th prime number? How about the 500th? 50,000th?! Easy (and super fast):

```
my $x = ^Inf;
sub get-prime(Int:D $nth where * > 0) {
    say ($x.grep: *.is-prime)[$nth - 1];
}
for (5, 50, 500, 5000, 50000) { get-prime $_ };
```

When we run this, we get the following output after just a second or two:
```
11      # 5th prime
229     # 50th prime
3571    # 500th prime
48611   # 5000th prime
611953  # 50000th prime
```

Can you match the speed and conciseness of this code in your favorite language?
More than likely, you'll have a hard time writing and executing this problem in
a reasonable time. But with Raku, it's a snap.

Let's walk through the code in detail.

## How it works
First we assign variable `$x` to `^Inf` which represents a Range of Integers
from 0 to infinity. In Raku, a Range is a class which generates Range objects.
Range objects are "lazy," which means the actual set of numbers in the Range
aren't actually calculated or generated. This is unlike an Array where each
element is calculated ahead of time by the compiler and inserted into the array
and eats up memory. And so laziness makes your program much more efficient. You
certainly don't want to wait around for your computer to count to infinity but
you'd certainly run out of memory long before then anyway!

Next we create a simple subroutine called `get-prime` that accepts a single
argument called `$nth`, which is placed inside a set of parentheses. The
parentheses and the code inside of it is part the function's Signature, which
is itself an object. The Signature tells code calling `get-prime` what kind of
parameters are acceptable to send. In `get-prime`'s signature, we ensure that
`$nth` is a defined integer object by slapping `Int:D` in front of it. The
`Int` requires the caller to pass an Integer object. The `:D` bit ensures that
it's a "definite" object, meaning that it actually has a value. We also add a
nice touch by ensuring the number passed is greater than 0 with the `where * >
0` because it doesn't make sense to ask for the 0th or -1st prime number. If
you're you're wondering what the `*` symbol is, hang tight. We'll cover this
symbol again shortly.

Restricting the kinds of argument that can be passed to a subroutine is known
as "type checking." But thanks to Raku's flexibility, we could have chosen to
not type check our arguments. If you want to bang out a simple script without a
lot of hassle and headache trying to keep the compiler happy, Raku will
accommodate your desires and not make onerous demands that make your work
unnecessarily tedious.

Inside the subroutine is a single line of code consisting of a `say` routine
that prints out the result of the expression to the right of it to standard
output, followed  by a newline character. Every time `get-prime` is called, a
new number, the prime number calculated by the expression, is printed out on a
separate line. Here it is:

`say ($x.grep: *.is-prime)[$nth];`

So how is the number printed calculated? Well, the first thing you have
to understand is that the code inside the parentheses results in a data
structure called a Sequence which is basically a list of data in a specific
order. This means Sequences are a type of Positional data structure. For the
purposes of this discussion, that means we can find a specific value in the
Sequence using the square bracket notation, the `[$nth - 1]` bit you see there
on the end where `$nth` is the value passed into the subroutine.  So this is
how we tell the code in the parentheses which prime number to pull out. Those
new to programming may be wondering why we subtract "1" from `$nth`. This small
nice touch makes the subroutine more intuitive to use because a Sequence's
index number starts at '0', not '1'. So to get the first element, we pass in a
value of "1" which we gets reduced to "0" for us. If we didn't subtract one,
passing in a "5" would actually return the 6th prime number, which is
confusing.

You can imagine that in between the parentheses is every prime number that can
exist from 0 to infinity (but that hasn't actually been calculated and so uses
no memory). The number in the brackets chooses which number in that list to
select, whether it be the 1st, 2nd, 3rd, 10th, or 10,232nd.

Now let's look inside the parentheses in our line of code in the subroutine,
the code that generates the Sequence. We can see our value `$x` in there
representing every positive integer possible, both primary and non-primary
numbers. But, we don't want all numbers, we only want a list of all the primary
numbers. So what we do is run the `grep` method on our infinite list of numbers
by placing a `.` after `$x`, followed by a method called `grep`. `grep` is
named after the command `grep` found on computers since the 70s to find text
inside of lots of computer files on your storage device. You can think of
`grep` as a filter that creates a list of stuff. It puts the stuff you want on
a list and keeps the stuff you don't want off of it. As you might guess, it's
the `grep` method that generates our Sequence of prime numbers for us.

Now all that's left to do is to tell grep what numbers we want on our list. We
do that by passing an argument to `grep`, expressed as `*.is-prime`. Notice the
colon immediately after `grep`. That indicates that what follows is the
argument we will be passing to the `grep` method. Alternatively, we could do
away with the colon and surround the `*.is-primate` argument with a set of
parentheses. In line with one of Raku's mantras, "There is more than one way to
do it" (TIMTOWTDI), it's up to you to decide what you think is most readable
in a given situation.

So what exactly is the `*.is-prime` doing? It tells grep which stuff to place
into the Sequence. You can think of it as a test that runs on every number in
the range. First we look at the first number in the range, '0', and determine
if it's prime with the `is-prime` method, one of the many math functions baked
into Raku, making it a great language for people interested in solving math
calculations. The `is-prime` method returns `True` if the number is prime and `False` if
it isn't. If it's prime, grep will add the number to the Sequence. If it isn't
prime, grep will filter it out and it won't get added to the Sequence. Then we
go to the next number to determine if it's prime and so on until we reach
infinity.

But again we have to stress--and what makes this code so fast--is that we only
do these calculations for the prime numbers we are interested in. It would be
very wasteful to calculate the 1,000th prime number when we are only interested
in the 5th.

You can you think of the `*` symbol, what Raku calls the "Whatever" object, as
a placeholder for each number in our infinite list (kind of like how the "glob"
character is used in popular OS shells). The `.is-prime` method gets run on the
"Whatever." Together, this expression can be read as "whatever is prime." The
expression returns `True` if "Whatever" is prime or `False` if it isn't. If
`True`, grep puts the tested number into the Sequence, the list of all the
prime numbers, which again, isn't actually calculated (an impossible task).
Only the minimum work necessary is done to determine the specific prime number
we are looking for out of the theoretical series of all prime numbers that
exist.

After the `get-prime` subroutine, we call it five different times, using a list of
5 numbers using a `for loop`:

`for 5, 50, 500, 5000, 50000 { get-prime $_ };`

For each number in the list of numbers we supply, we run the code in the curly
braces which, in turn, calls the `get-prime` subroutine for us. The technical
term for this kind of looping process is called "iteration".

Note the `$_` variable in the curly braces. It has a special meaning in Raku.
It is called the "topic variable." It's helpful to think of it to mean the
"topic" of discussion. Each time we iterate over the list of our numbers, the
topic variable gets assigned to the next number in the list and this becomes
the `$nth` parameter the `get-prime` sub receives for its `$nth` argument.

Wow, so that's well over 1,000 words to explain just four lines of Raku code. It
demonstrates the power of Raku and how how efficient it can be. Amazingly, we
can make this bit of code even more concise:

`(for 5, 50, 500, 5000, 50000 { (^Inf :grep *.is-prime)[$_] }).say`

And don't worry if this seems a little overwhelming. Most of Raku is much more
straightforward than this example so don't let yourself get scared off. The
larger takeaway is Raku excels at taking hard problems and making them a
whole lot easier, even problems that are nearly impossible or impractical in
many other programming languages.

The brevity of Raku's code also makes it much easier to understand what a large
code base is doing because the code won't be cluttered with dozens of lines of
code. And, of course, fewer lines of code means fewer bugs. And for the bugs
that do crop up, they'll be easier for you to isolate and squash.
