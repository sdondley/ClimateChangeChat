# On This Page

- [Cool Raku](#cool-raku)
    - [Finding Specific Prime Numbers](#finding-specific-prime-numbers)
            - [How it works](#how-it-works)

# Cool Raku

Selected code examples showcasing the power of Raku. Watch it flex!

# Finding Specific Prime Numbers

What's the 5th prime number? How about the 500th? How about the 5 millionth? Easy:

```
my $x := ^Inf;
sub get-prime(Int:D $nth) {
    say ($x.grep: *.is-prime)[$nth];
}
for (5, 50, 500, 5000, 50000) { get-prime $_ };
```

* When we run this, we get the following output after just a second or two:
```
13     # 5th prime
233    # 50th prime
3581   # 500th prime
48619  # 5000th prime
61195  # 50000th prime
```
## How it works
First we assign variable `$x` to `^Inf` to generate a Range of numbers from
0 to infinity. The Range is "lazy," which means that none of the numbers are
actually generated until we need them. This is unlike an Array where each
element gets calculated ahead of time by the compiler. For this reason, your
program can be much more efficient. You certainly don't want to wait around for
your computer to count to infinity; you'd get nothing done!

Next we create a simple subroutine called `get-prime` that accepts an
argument called `$nth`. We ensure that `$nth` is a defined integer object by slapping
`Int:D` in front of it. The `Int` means that it's an Integer object and the `:D`
bit ensure that it's a "definite" object, meaning that it actually has a value.

Inside our subroutine is just one line of code consisting of a `say` routine
that will prints out the result of the expression to the right of it to standard
output, followed  by a newline character. Every time `get-prime` is called, a new
number will be printed out on a separate line.

So how do we calculate which number to print? Well, the first thing you have to
know is that a Range object is Positional? What does that mean? It means it behaves
the way we expect Positional objects to behave. More specifically, it means we
can find a specific number in the Range using the square bracket notation, the
`[$nth]` bit you see there on the end. So this is how we tell the code in the
parentheses which prime number we want.

You can imagine that in between the parentheses every prime number that can
exist from 0 to infinity. We are choosing which number in that list to select,
whether it be the 1st, 2nd, 3rd, 10th, or 10,232,433,323th.

Now let's look at what's inside the parentheses in our line of code in the
subroutine. We can see our value `$x` in there representing every number
possible, both primary and non-primary numbers. But, we don't want all number,
we only want a list of all the primary numbers. So what we do is run the `grep`
method on our infinite list of numbers by placing a `.` after our Range of
numbers and the typing `grep`. `grep` is named after the command `grep` which
has been used since the 70s to find text inside of lots of computer files on
your hard disk. It's best to think of `grep` as a filter that keeps the stuff
we want and removes the stuff we don't want from a list of things.

Now all that's left to do is tell the grep what numbers we are interested in. We do
that by passing an argument to `grep`: `*.is-prime`. Notice the colon immediately after
`grep`. That indicates that that what follows is the argument we are going to pass
to the `grep` method.

So what's the `*.is-prime` doing? You can think of it as a test that is run on
all the numbers in the range. First we look at the first number 0 in the range
and determine if it's prime with the `is-prime` method, which returns `True` if
the number is prime and `False` if it isn't. If it's prime, grep puts it on our
list of prime numbers. If it isn't prime, grep will filter it out and it won't
go on our list. Then we go to the next number to determine if it's prime and so
on until we reach infinity. But the important thing to understand is that we
only do these calculations when we need to do them. It would be very wasteful
to calculate the 1,000 prime number when we are only interested in the 5th. So
you can you think of the `*` as a placeholder for each number in our infinite
list and the `.is-prime` as a test run on each of those numbers that returns
either `True` or `False` so grep can determine if the number should go on the
list of numbers we want to keep, in this case all the prime numbers. But
instead of calculating the infinite list of prime numbers ahead of time (an
impossible task), it does the minimum calculation necessary to determine the
specific prime number in the series of all prime numbers that we are interested
in.

Finally, we call the `get-prime` subroutine with a list of 5 numbers using a
`for loop`:

`for 5, 50, 500, 5000, 50000 { get-prime $_ };`

For each number in the list of numbers we supply, we run the code in the curly
braces which, in turn, calls the `get-prime` subroutine for us. The technical
term for this kind of looping process is called "iteration".

Note the `$_` variable in the curly braces. It has a special meaning in Raku.
It is called the "topic variable." It's helpful to think of it to mean the
"topic" of discussion. Each time we iterate over the list of our numbers, the
topic variable gets assigned to the next number in the list. This is the number
the `get-prime` receives for its `$nth` argument.

Wow, so that's a lot words to explain just a little bit of code. It
demonstrates just some of the power of Raku and how how efficient it can be.
Amazingly, we can make this code much more compact:

`(for 5, 50, 500, 5000, 50000 { (^Inf :grep *.is-prime)[$_] }).say`

And don't worry if this seems a little overwhelming. Most of Raku is much more
straightforward than this example so don't let yourself get scared off. But as
you can begin to see, Raku excels at taking hard problems and making them a
whole lot easier, even problems that are nearly impossible in many other
programming languages. The brevity of Raku's code also makes it much easier
to understand what a large code base is doing because the code won't
be cluttered with dozens of lines of code for a relatively trivial job. And,
of course, fewer lines of code means fewer bugs and for the bugs that do
crop up, they'll be easier for you to isolate and squash.


