---
title: "Light Bulbs - Solution"
---


{{< printfriendly "/doc/Light-Bulbs-Solution.pdf" >}}

Imagine that each light bulb is numbered: Bulb 1, Bulb 2, Bulb 3, etc. When Rachel pulls the chain of every *n*th bulb, only the bulb numbers divisible by *n* are affected. To see how the procedure affects an individual bulb, then, we just need to look at its divisors.

Take the case of Bulb 12. The divisors of 12 are 1, 2, 3, 4, 6, and 12, as we can see when we multiply:

$$ 1 \times 12 = 12 $$

$$ 2 \times 6 = 12 $$

$$ 3 \times 4 = 12 $$

For every number *n* that's not a divisor of 12, when Rachel pulls the chain of every *n*th bulb, she'll skip over 12. The end result is that the chain is pulled for Bulb 12 only 6 times, once for each divisor. Because 6 is even, at the end of this process Bulb 12 will be off.

So to answer the question of which bulbs will be on at the end of the process, we need to ask ourselves this: Which numbers from 1 to 100 have an odd number of divisors?

Looking back at our example of Bulb 12, we see that divisors come in pairs: $1 \times 12$, $2 \times 6$, etc. That's because if a number *n* has a divisor *d*, then there has to be some number you multiply *d* by to get *n* -- in other words, a second divisor of *n*.

Does this mean all the bulbs will be off in the end? Not quite... What if the second divisor of *n* is the same as the first divisor? In other words, what if *n* is a perfect square?

Let's look at the example of Bulb 25. We can factor it like so:

$$ 1 \times 25 = 25 $$

$$ 5 \times 5 = 25 $$

We're still pairing divisors, but one of them is repeated! The result is that 25 has divisors 1, 5, and 25 -- a total of 3 divisors. Since 3 is odd, this tells us that Bulb 25 will be on in the end.

We can generalize this to all the bulbs. If the number is a perfect square, then the bulb will be on at the end. All the other bulbs will be off. (You can test a few other bulb numbers if you're not convinced.) So now we can list the bulbs that will be on:

$$ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 $$

These 10 bulbs will be on at the end of the process, and the rest will still be off.
