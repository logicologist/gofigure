---
title: "Factorials!"
menu:
  main:
    parent: "Better Ways To Count"
    weight: 1
---


{{< printfriendly "/doc/Factorials-printer-friendly.pdf" >}}

Five-year-old Harry is obsessed with rabbits. For his birthday he got five books about rabbits to put on his shelf: The Care and Keeping of Rabbits, 101 Things You Didn't Know About Rabbits, Common Diseases of Rabbits, How to Draw Rabbits, and Super-Sam and the Giant Were-Rabbit. Harry is now trying to decide how to arrange his new books on his bookshelf. **How many ways can he put the books in order?**

Well, he could start by lining them up in the order he unwrapped his presents, and then shuffling them, and then shuffling them again. But the obvious problem is that Harry has no way of knowing if he's shuffled them the same way twice or whether he's shuffled them in all possible ways. Anyway, that looks like a lot of work. There has to be an easier way.

Let's start with a simpler problem.

Suppose Harry has only unwrapped two of his presents: Care & Keeping and 101 Things. Now there are only two ways to order his new books:

<center style="margin-bottom: 0.5em;">
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>
<span style="color: #ff9900; font-weight: bold;">101 Things</span>
</center>

<center style="margin-bottom: 1.5em;">
<span style="color: #ff9900; font-weight: bold;">101 Things</span>
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>
</center>


$2$ ways. Okay, that's pretty simple. Now Harry unwraps Common Diseases. How many ways are there now?

Well, we know that one of the books has to come first in the lineup. Any of the three books could come first. Let's start with Care & Keeping. Now what's left? Two books to order! We just did this above!

<center style="margin-bottom: 0.5em;">
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>,
<span style="color: #ff9900; font-weight: bold;">101 Things</span>,
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>
</center>

<center style="margin-bottom: 1.5em;">
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>,
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>,
<span style="color: #ff9900; font-weight: bold;">101 Things</span>
</center>


Remember, Care & Keeping isn't the only book that can be first. Let's repeat what we just did, this time with 101 Things and with Common Diseases.

<center style="margin-bottom: 0.5em;">
<span style="color: #ff9900; font-weight: bold;">101 Things</span>,
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>,
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>
</center>

<center style="margin-bottom: 0.5em;">
<span style="color: #ff9900; font-weight: bold;">101 Things</span>,
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>,
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>
</center>

<center style="margin-bottom: 0.5em;">
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>,
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>,
<span style="color: #ff9900; font-weight: bold;">101 Things</span>
</center>

<center style="margin-bottom: 1.5em;">
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>,
<span style="color: #ff9900; font-weight: bold;">101 Things</span>,
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>
</center>


For each of the $3$ books that can start the lineup, there are $2$ possible lineups. So there are $3 \cdot 2 = 6$ ways to order three books. Now what happens when Harry unwraps How to Draw?

Let's tackle four books in the same way we tackled three. Pick one of the four books to put first. Then there are three books left, and we can order them like we did above.

<center style="margin-bottom: 0.5em;">
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>,
<span style="color: #ff9900; font-weight: bold;">101 Things</span>,
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>,
<span style="color: #0000ff; font-weight: bold;">How to Draw</span>
</center>

<center style="margin-bottom: 0.5em;">
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>,
<span style="color: #ff9900; font-weight: bold;">101 Things</span>,
<span style="color: #0000ff; font-weight: bold;">How to Draw</span>,
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>
</center>

<center style="margin-bottom: 0.5em;">
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>,
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>,
<span style="color: #ff9900; font-weight: bold;">101 Things</span>,
<span style="color: #0000ff; font-weight: bold;">How to Draw</span>
</center>

<center style="margin-bottom: 0.5em;">
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>,
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>,
<span style="color: #0000ff; font-weight: bold;">How to Draw</span>,
<span style="color: #ff9900; font-weight: bold;">101 Things</span>
</center>

<center style="margin-bottom: 0.5em;">
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>,
<span style="color: #0000ff; font-weight: bold;">How to Draw</span>,
<span style="color: #ff9900; font-weight: bold;">101 Things</span>,
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>
</center>

<center style="margin-bottom: 0.5em;">
<span style="color: #ff0000; font-weight: bold;">Care & Keeping</span>,
<span style="color: #0000ff; font-weight: bold;">How to Draw</span>,
<span style="color: #00cc00; font-weight: bold;">Common Diseases</span>,
<span style="color: #ff9900; font-weight: bold;">101 Things</span>
</center>
/

Hm. This is getting messy. We've got six possibilities for just one of the four ways to start the sequence. We have to do this four times before we're done: four times listing all the ways to order three things.

Aha!

The number of ways to order $4$ books is $4$ times the number of ways to order $3$ books. And the number of ways to order $3$ books is $3$ times the number of ways to order $2$ books. And the number of ways to order $2$ books is $2$ -- or, put another way, $2$ times the number of ways to order $1$ book, which is $1$. So the number of ways to order $4$ books is $4$ times $3$ times $2$ times $1$.

Here's another way to look at it: When ordering $4$ books, there are $4$ ways to pick what book comes first. Then there are $3$ books left, so there are $3$ ways to pick the next book in the lineup. Then from the remaining $2$ books there are $2$ ways to pick the next book, and then there's only $1$ book left to fill the last spot. So the total number of ways to order $4$ books is $4$ times $3$ times $2$ times $1$.

There's a name for this special multiplication. It's called a factorial, and it's written like this:

$$ 4! $$

This is not a very excited $4$. It's just shorter way to write $4 \cdot 3 \cdot 2 \cdot 1$. Factorials are very useful when counting things, and they'll save us a lot of trouble in solving this problem. Here we go -- Harry unwraps Super-Sam:

First, there are $5$ choices for the first book. Then there are $4$ books remaining, so there are $4$ ways to pick the second book. Then there are $3$ ways to pick the third book, and $2$ ways to pick the fourth book, and then there's only one book left for the last position, for a grand total of

$$ 5! = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120 $$

ways for Harry to arrange his new books.

Thank goodness we didn't have to write out all those options.

It turns out that we can follow this same process for any number of things that need to be ordered. If there are $n$ things, then there are $n$ ways to pick the first thing and $n-1$ ways to pick the second thing and so on, and when you multiply it all out you get a grand total of $n!$ ways to order them. That's something that definitely deserves an exclamation mark!
