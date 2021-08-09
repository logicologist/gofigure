---
title: "Some Neat Features"
menu:
  main:
    parent: "Pascal's Triangle"
    weight: 1
---


{{< printfriendly "/doc/Some-Neat-Features-printer-friendly.pdf" >}}

[Pascal's Triangle](/better-ways-to-count/pascals-triangle/ "Pascal’s Triangle") is riddled with intriguing patterns and embedded sequences. Here it is again:

![Rows 0-10 and beyond cropped](/img/Rows-0-10-and-beyond-cropped.png)

For easy reference, we'll call the lonely 1 at the top Row 0, and the row below that Row 1, then below that Row 2, and so on. Then in each row, the first 1 at the very left will be in Position 0, and the number to its right in Position 1, then to the right Position 2, etc. Then, for instance, the last 10 in "1 5 10 10 5 1" is in Row 5, Position 3. It might feel odd to start counting at 0 this way, but it'll make sense in a minute.

So -- the remarkable properties. Step right up, ladies and gentlemen...

First, notice that Pascal's triangle is symmetrical. That's perhaps not too surprising; when we apply the rule that generates the triangle, we're doing the same thing to both sides of the figure, so there's no reason for asymmetry.

Then, look at the diagonals. On the far left we have a long string of 1s. (That's because each one is the sum of the 1 and invisible 0 above it.) Then the second diagonal is made of simply the natural numbers: our counting numbers 1, 2, 3, and so on. Why? Think about it -- at every row you're adding a 1 from the first diagonal. The third diagonal is made of the triangular numbers; I'll leave ye intrepid readers to puzzle out why on your own.

Next, let's color Pascal's Triangle. We'll put a blue dot on every odd number and a gray dot on every even number.

 

![Pascal\'s Triangle -- The Math Less Traveled](/img/Pascals-Triangle-–-The-Math-Less-Traveled.png)*[Image](http://mathlesstraveled.com/2012/10/20/visualizing-pascals-triangle-remainders/) by [Brent Yorgey](http://mathlesstraveled.com) / [CC BY NC 3.0](http://creativecommons.org/licenses/by-nc/3.0/us/)*

 

Hm, looks rather like our friend [Sierpinski](/fractals/sierpinski/ "Sierpinski").... In fact, if you continue this coloring pattern on to infinity and squash it into a finite perimeter, it <span style="text-decoration: underline;">is</span> the Sierpinski Triangle.

Here's another nifty thing about Pascal's Triangle: Add up the numbers in each row and see what you get.

![Pascal\'s Addition Triangle 2 cropped](/img/Pascals-Addition-Triangle-2-cropped.png)

Recognize those numbers? They're the powers of 2. Specifically, the $n$th row of Pascal's Triangle adds up to $2^n$.

Try this. For every row, insert plus and minus signs between the numbers, starting with a -- and alternating from there: --, +, --, +, --, +, --, +, ...

![Pascal\'s Add-Subtract Triangle 2 cropped](/img/Pascals-Add-Subtract-Triangle-2-cropped.png)

Except for the lonely 1 at the top, the rows thus evaluated are equal to 0.

For our next trick, we'll need to shift Pascal's Triangle so it all lines up along a left boundary.

![Pascal\'s Left-Align Triangle](/img/Pascals-Left-Align-Triangle.png)

Now we'll mark the diagonals and add them up:

![Fibonacci in Pascal](/img/Fibonacci-in-Pascal.png)

And look there, we've uncovered our good friends the [Fibonacci numbers](/natures-favorite-math/fibonacci-numbers/ "Fibonacci Numbers")!

These properties are pretty remarkable all right, but we have yet to explore [the most remarkable property of all](/better-ways-to-count/pascals-triangle/choosing-a-route/ "Choosing a Route")...
