---
title: "Spider Socks - Solution"
---


{{< printfriendly "/doc/Spider-Socks-Solution.pdf" >}}

To find the probability that Harvey picks a valid order for his socks and boots, we want to count the number of valid orders for his socks and boots, and then divide that by the total number of ways Harvey might order his socks and boots.

Let's start with the total number of orderings, since that's the simpler part of this puzzle. Harvey has 16 pieces of footwear to choose from (8 socks plus 8 boots), so he has 16 choices for the first piece of footwear he puts on; after that, he has 15 choices for his second piece of footwear, and then 14 choices for his third, and so on, for a total of

$$ 16 \cdot 15 \cdot 14 \cdot \ldots \cdot 3 \cdot 2 \cdot 1 = 16! $$

ways. (If you've read about [factorials](/better-ways-to-count/factorials/), this logic will look familiar to you.)

Now here's where things get really interesting: we want to count the number of valid orderings. To do this, we ask ourselves a question: How do we construct a valid ordering?

One way is to fill in the socks and boots sequentially. Pick a sock to be first; then we can pick either the corresponding boot or another sock; then, if we have socked-and-not-booted feet left, we can pick corresponding boots or introduce another sock; and so on, never picking a boot for which we haven't yet picked the corresponding sock. But all these dependencies between pieces of footwear make it hard to turn this into math.

Another way to construct a valid ordering is to make 16 empty bins:

<center> __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ </center><br>

And then drop each sock-boot pair into a pair of empty bins, one pair at a time. Here's the key: whenever we pick a pair of empty bins to put our sock-boot pair in, *we know what order the sock and boot must go in*. Specifically, once we pick a pair of bins, we automatically put the sock in the leftmost of the two bins. That way, we know every sock comes before its corresponding boot, just based on the way we've constructed our orderings.

As an example, suppose we want to place $A_1$ and $B_1$, and we decide the empty bins we'll use are the 3<sup>rd</sup> and 8<sup>th</sup>; since $A_1$ has to go before $B_1$, we end up with:

<center> __ __ $A_1$ __ __ __ __ $B_1$ __ __ __ __ __ __ __ __ __ __ __ __ </center><br>


Now we want to place $A_2$ and $B_2$, and we decide the empty bins we'll use are the 14<sup>th</sup> and 16<sup>th</sup>. This gives us:

<center> __ __ $A_1$ __ __ __ __ $B_1$ __ __ __ __ __ __ __ __ __ $A_2$ __ $B_2$ </center><br>


And so on. Eventually, we use the last of the empty bins with the last sock-boot pair ($A_8$ and $B_8$), and we're done.

The nice thing about this approach is that we get rid of the complicated if-then situations from our first strategy. At every step, we just need to pick 2 bins out of however many bins remain. How do we say this in math?

When we pick 2 bins for the $A_1-B_1$ pair, we have all 16 bins empty, so we have $\binom{16}{2}$ ways to pick our first pair of bins. (If you're not familiar with this notation, check out the page on [choosing](/better-ways-to-count/on-choosing/).) Then when we pick 2 bins for the $A_2-B_2$ pair, we have 14 empty bins left to choose from (we don't know which ones, but all we need to know is that there are 14 of them), so that makes $\binom{14}{2}$ ways. Then there are 12 bins left for the $A_3-B_3$ pair, so there are $\binom{12}{2}$ ways to pick the third pair. And so on: the total number of valid orderings is

$$ \dbinom{16}{2} \cdot \dbinom{14}{2} \cdot \dbinom{12}{2} \cdot \dbinom{10}{2} \cdot \dbinom{8}{2} \cdot \dbinom{6}{2} \cdot \dbinom{4}{2} \cdot \dbinom{2}{2} $$

To simplify this, we rewrite it as

$$ \dfrac{16 \cdot 15}{2} \cdot \dfrac{14 \cdot 13}{2} \cdot \dfrac{12 \cdot 11}{2} \cdot \dfrac{10 \cdot 9}{2} \cdot \dfrac{8 \cdot 7}{2} \cdot \dfrac{6 \cdot 5}{2} \cdot \dfrac{4 \cdot 3}{2} \cdot \dfrac{2 \cdot 1}{2} $$

(Think back to the definition of choosing to convince yourself that this works!)

Our expression, then, just simplifies down to

$$ \dfrac{16!}{2^8} $$

valid ways for Harvey to put on his socks and boots.

Whew. Time to put it all together: the probably that Harvey picks a valid ordering by random chance is

$$ \dfrac{\frac{16!}{2^8}}{16!} = \dfrac{1}{2^8} = \dfrac{1}{256} $$

That's a pretty slim chance! Harvey will probably need to use his spider-brain and fix some sock-boot mistakes.
