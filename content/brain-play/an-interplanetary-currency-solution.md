---
title: "An Interplanetary Currency - Solution"
---


Let's start with the 6-blyp case. The first thing we notice is that the ATM will never give Alex an 8-blyp coin for this problem, since 6 \< 8. So it's enough for us to solve this problem just with 1, 2, and 4 blyp coins.

After playing around with this for a bit, we might notice that some ways of making 6 blyps involve a 4-blyp coin while others don't. We can therefore look at two different cases:

-   Case 1: There is a 4-blyp coin. Then all that's left to do is to figure out how the remaining 2 blyps' worth of value can get dispensed in coins. That's pretty easy, actually, since it's such a small number: it can either be a 2-blyp coin or two 1-blyp coins.
-   Case 2: There isn't a 4-blyp coin. Then we need to make 6 blyps' worth of value just with 1 and 2 blyp coins. After some experimenting, we realize we can break down the solutions by how many 2-blyp coins are dispensed (0, 1, 2, or 3), and since all the rest of the coins are 1s, this leads to four solutions.

So there are 2 + 4 = 6 ways to make a total of 6 blyps.

Okay, now we can tackle the 42-blyp problem! Our experience with the 6-blyp problem gives us a hint about what to try. We can first break down this problem by how many 8-blyp coins are dispensed; then for however many blyps' worth of value remains, we only need to work with 1, 2, and 4 blyp coins, and we can make sub-cases based on how many 4-blyp coins are dispensed; then we can work out the rest using only 1 and 2 blyp coins. Hooray -- we have a plan!

Let's jump straight in with the casework:

-   Case 1: There are five 8-blyp coins. Then we just have 42 -- 5 • 8 = 2 blyps to still account for. We've already seen this: 2 blyps can be made with one 2-blyp coin or two 1-blyp coins. So there are 2 options for this case.
-   Case 2: There are four 8-blyp coins. Then we need to make 42 -- 4 • 8 = 10 blyps from 1, 2, and 4 blyp coins. We make sub-cases based on the number of 4-blyp coins:
    -   Sub-case 2.1: There are two 4-blyp coins. Then there are 10 -- 2 • 4 = 2 blyps left; as before, there are 2 options.
    -   Sub-case 2.2: There is one 4-blyp coin. Then we need to make 10 -- 4 = 6 blyps from only 1 and 2 blyp coins; there are 4 ways to do this.
    -   Sub-case 2.3: There are no 4-blyp coins. Then we need to make the full 10 blyps from just 1 and 2 blyp coins; there are 6 ways to do this. (Make sure you see why!)

    In total, then, there are 2 + 4 + 6 = 12 options for this case.
-   Case 3: There are three 8-blyp coins. Then we need to make 42 -- 3 • 8 = 18 blyps from 1, 2, and 4 blyp coins. Again, we make sub-cases:
    -   Sub-case 3.1: There are four 4-blyp coins. Then we just have 18 -- 4 • 4 = 2 blyps left; we already know there are 2 options for this.
    -   Sub-case 3.2: There are three 4-blyp coins. Then we need to make 18 -- 3 • 4 = 6 blyps from 1 and 2 blyp coins; as before, there are 4 ways to do this.
    -   Sub-case 3.3: There are two 4-blyp coins. Then we need to make 18 -- 2 • 4 = 10 blyps from 1 and 2 blyp coins; as before, there are 6 ways to do this.
    -   Sub-case 3.4: There is one 4-blyp coin. Then we need to make 18 -- 4 = 14 blyps from 1 and 2 blyp coins; there are 8 ways to do this.
    -   Sub-case 3.5: There are no 4-blyp coins. Then we need to make the full 18 blyps from just 1 and 2 blyp coins; there are 10 ways to do this.

    In total, then, there are 2 + 4 + 6 + 8 + 10 = 30 options for this case.

Hmm, that's interesting... So far our cases have given us 2, 2 + 4 + 6, and 2 + 4 + 6 + 8 + 10 options. What's going on here?

Notice what's happening with the sub-cases. Every time we move to a new case, we use one fewer 8-blyp coin, so we have 8 more blyps to make from 1, 2, and 4 blyp coins. And since 8 = 2 • 4, we just have to use two more 4-blyp coins than we did before to get to the same number of blyps made with only 1 and 2 blyp coins. That's why sub-cases 2.1, 2.2, and 2.3 are essentially the same as sub-cases 3.1, 3.2, and 3.3. Then the only thing we need to do differently for Case 3 is to solve the sub-cases where there are only one or zero 4-blyp coins, since those don't map to any of the sub-cases in Case 2.

Okay, let's get back to the casework now that we have this insight:

-   Case 4: There are two 8-blyp coins. Then we need to make 42 -- 2 • 8 = 26 blyps from 1, 2, and 4 blyp coins. We make sub-cases again, keeping our observations from above in mind:
    -   Sub-cases 4.1-4.5: There are six, five, four, three, or two 4-blyp coins. Then we have 2, 6, 10, 14, or 18 blyps to make from 1 and 2 blyp coins. This is the same as sub-cases 3.1-3.5 above, giving us 2 + 4 + 6 + 8 + 10 = 30 options.
    -   Sub-case 4.6: There is one 4-blyp coin. Then we need to make 26 -- 4 = 22 blyps from 1 and 2 blyp coins; there are 12 ways to do this.
    -   Sub-case 4.7: There are no 4-blyp coins. Then we need to make all 26 blyps from just 1 and 2 blyp coins; there are 14 ways to do this.

    In total, this gives us 30 + 12 + 14 = 56 options for this case.
-   Case 5: There is one 8-blyp coin. Then we need to make 42 -- 8 = 34 blyps from 1, 2, and 4 blyp coins. Again, many of our sub-cases can be re-used from our work above:
    -   Sub-cases 5.1-5.7: There are eight through two 4-blyp coins. This leaves us with 2, 6, 10, ..., 22, or 26 blyps to make from 1 and 2 blyp coins. This is the same as sub-cases 4.1-4.7, giving us 2 + 4 + 6 + 8 + 10 + 12 + 14 = 56 options.
    -   Sub-case 5.8: There is one 4-blyp coin. Then we need to make 34 -- 4 = 30 blyps from 1 and 2 blyp coins; there are 16 ways to do this.
    -   Sub-case 5.9: There are no 4-blyp coins. Then we need to make the full 34 blyps from just 1 and 2 blyp coins; there are 18 ways to do this.

    In total, this gives us 56 + 16 + 18 = 90 options for this case.
-   Case 6: There are no 8-blyp coins. Then we need to make all 42 blyps from 1, 2, and 4 blyp coins. At this point, the pattern is pretty familiar:
    -   Sub-cases 6.1-6.9: This is the same as sub-cases 5.1-5.9 above, giving us 90 options. (Convince yourself that this works!)
    -   Sub-case 6.10: There is one 4-blyp coin. Then we need to make 42 -- 4 = 38 blyps from 1 and 2 blyp coins; there are 20 ways to do this.
    -   Sub-case 6.11: There are no 4-blyp coins. Then we need to make all 42 blyps from just 1 and 2 blyp coins; there are 22 ways to do this.

    In total, we then have 90 + 20 + 22 = 132 options for this case.

Whew! Adding up all the cases gives us 2 + 12 + 30 + 56 + 90 + 132 = **322** ways to make 42 blyps from 1, 2, 4, and 8 blyp coins.

If you're looking for an extra challenge, there's a lot more we can do with this problem setup! To make this easier to talk about, let's define the following bit of notation:

<center> $M(b, c)$ = the number of ways to make $b$ blyps from coins with value at most $2^c$​ </center><br>

We just calculated $M(6, 3)$ and $M(42, 3)$, and along the way we calculated a lot of other values like $M(2, 1)$, $M(6, 2)$, $M(26, 2)$, and $M(34, 1)$. Try making a table with a bunch of $M(b, c)$ values -- what patterns do you see, and can you explain why they occur?

Our strategy above was "figure out how many of the biggest coin can be used, and for each one of those numbers, make the remaining amount from all the smaller coin values." In math, this looks like:

$$
M(b, c) = \sum\limits_{i=0}^{\lfloor b/(2^c) \rfloor} M(b - i \cdot 2^c, c-1)
$$

<center>$M(b, 0) = 1$ for all $b$</center><br>

A little complicated-looking? Sure, but it's also something we can give to a computer when we want to know something huge like $M(10000, 14)$. If we tell the computer to keep track of its intermediate results in a big table (like we did with our sub-cases), it can run our procedure very quickly and give us the answer. (This technique of breaking our problem down recursively into overlapping sub-problems is called *dynamic programming*, and the trick with storing our intermediate results in a big table -- sometimes referred to as *memoization* -- is a very common way to make dynamic programming algorithms go faster.)

What if the interplanetary currency came in powers of 3 instead of 2, or if it had some different structure altogether?
