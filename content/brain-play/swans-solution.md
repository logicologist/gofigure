---
title: "Swans - Solution"
---


{{< printfriendly "/doc/Swans-Solution.pdf" >}}

It's simplest to think about the entire flock taking off by working one swan at a time.

After the first swan takes off, we're at $k=1$. The probability that a second swan takes off is $1 - \frac{1}{1+3} = 1 - \frac{1}{4} = \frac{3}{4}$.

After the second swan takes off, we're at $k=2$. The probability that a third swan takes off is $1 - \frac{1}{2+3} = 1 - \frac{1}{5} = \frac{4}{5}$.

After the third swan takes off, we're at $k=3$. The probability that a fourth swan takes off is $1 - \frac{1}{3+3} = 1 - \frac{1}{6} = \frac{5}{6}$.

And so on. At the end, when $n-1$ of the $n$ swans have taken off, we're at $k=n-1$, so the probability that the last swan takes off is $1 - \frac{1}{n-1+3} = 1 - \frac{1}{n+2} = \frac{n+1}{n+2}$. Notice what happens when $n$ gets big here: we're subtracting a smaller and smaller number from $1$, so $\frac{n+1}{n+2}$ gets really close to $1$, meaning the last swans in a big flock taking off are almost certain to take off with the rest.

Now we need to bring it all together. We want the probability that the second swan then takes off *and* the third swan then takes off *and* the fourth swan then takes off *and*...

For the entire chain of events to happen, we have to multiply the probabilities of all of these together:

$$ \frac{3}{4} \cdot \frac{4}{5} \cdot \frac{5}{6} \cdot \ldots \cdot \frac{n+1}{n+2} $$

Oh, pretty! All the stuff in the middle cancels out (the $4$ with the $4$, the $5$ with the $5$, etc.) -- this is called "telescoping," after the style of old telescopes -- and we're left with just

$$ \frac{3}{n+2} $$

Wow. As we change the flock size $n$ from $3$ to $4$ to $5$ to $6$, the probability of the entire flock taking off changes from $\frac{3}{5}$ to $\frac{3}{6} = \frac{1}{2}$ to $\frac{3}{7}$ to $\frac{3}{8}$. Very quickly it becomes less than half chance that all the swans will leave!

And look at what happens to this answer when $n$ gets really big: the fraction gets really tiny. So even though the last swans in a large flock are almost certain to take off once all their flock-mates do, the probability of *all of those previous flock-mates* taking off is small since there are so many swans.

Try playing around with the taking-off function $1 - \frac{1}{k+3}$. What happens to the final answer when you change the function to $1 - \frac{1}{k+1}$? To $1 - \frac{1}{k}$? To something completely different?
