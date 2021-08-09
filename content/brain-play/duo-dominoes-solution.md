---
title: "Duo Dominoes - Solution"
---


{{< printfriendly "/doc/Duo-Dominoes-Solution.pdf" >}}

Let's take another look at that 2xn region.

![](/img/2xN-Hallway.png)

The hard thing about this problem is the n. A good strategy here is to start with small numbers and build up and generalize.

So let's look at n=1.

![](/img/2x1.png)

This case is pretty simple: there's only room for one domino on this grid, and there's only one way to place it.

Now let's look at n=2.

![](/img/2x2.png)

This case is also pretty simple: there's room for 2 dominoes side by side, and we could either place them both horizontally or both vertically. (In general, we can place n dominoes on a 2xn grid, since each domino covers 2 squares. And tiling a 2xn grid with n dominoes is always possible: just take the example of placing all the dominoes horizontally.)

Now let's try n=3. After a bit of trial and error, we come up with these options:

![](/img/2x3.png)

Either they all go horizontally, or two of them pair up to go vertically (in which case, the remaining horizontal domino could go above or below the vertical ones). In fact, we can see that any vertical dominoes must come in pairs: two vertical ones side by side. (We can't stagger the vertical ones -- see if you can figure out why.)

When we try n=4, things get a little trickier, and we need to be more systematic. We could either start with a horizontal domino on the bottom:

![](/img/2x4-horizontal.png)

Or we could start with two vertical dominoes at the bottom:

![](/img/2x4-vertical.png)

Once we've made that initial choice, it's easier to fill in the rest of the grid with all the different combinations.

Moving on to n=5... Looks like the horizontal-or-vertical trick we tried above is going to be useful here as well. If we start with a horizontal domino, then all we have left to tile is a 2x4 grid, and if we start with a pair of vertical dominoes, then all we're left with is a 2x3 grid. We add the number of 2x3 options to the number of 2x4 options to get the number of 2x5 options.

![](/img/2x5-vertical.png)

![](/img/2x5-horizontal.png)

This looks like a pattern that we can generalize!

Let's call $D_n$ the number of ways there are to tile a 2xn grid. We can break down $D_n$ by the above strategy: either it has a horizontal domino at the bottom, which can happen $D_{n-1}$ ways since there's a 2x(n-1) grid remaining, or it has a pair of vertical dominoes at the bottom, which can happen $D_{n-2}$ ways since there's a 2x(n-2) grid remaining. Putting it all together,

$$ D_n = D_{n-1} + D_{n-2} $$

And we already know that $D_1 = 1$ and $D_2 = 2$. So we can build the rest of the sequence:

$$ 1, 2, 3, 5, 8, 13, \ldots $$

Aha! We've uncovered the [Fibonacci numbers](/natures-favorite-math/fibonacci-numbers/)! Specifically, $D_n$ is the (n+1)th Fibonacci number. This is just one example of how math that seems completely unrelated can pop up unexpectedly in a problem.
