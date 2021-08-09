---
title: "A Surprising Connection"
menu:
  main:
    parent: "The Golden Ratio"
    weight: 1
---


{{< printfriendly "/doc/A-Surprising-Connection-printer-friendly.pdf" >}}

At first glance, the Golden Ratio looks like it has very little to do with the Fibonacci numbers. But let's take another close look at our Fibonacci number friends.

![Screen Shot 2014-12-10 at 7.00.45 PM](/img/Screen-Shot-2014-12-10-at-7.00.45-PM.png)

In particular, let's ask ourselves what happens if we divide each Fibonacci number by the one before it.

![Screen Shot 2014-12-10 at 7.01.05 PM](/img/Screen-Shot-2014-12-10-at-7.01.05-PM.png)

You recognize 1.618? (If not, go look back at our definition of the [Golden Ratio](/natures-favorite-math/the-golden-ratio/ "The Golden Ratio")!) It certainly looks like these Fibonacci ratios are converging on the Golden Ratio. If we examine the sizes of these numbers, we might be thinking "too small... too big... kinda too small... rather too big... a bit too small... a little too big... a smidgen too small... a hair too big... almost spot-on..." If we plot these numbers on the number line we can see the convergence even more clearly:

![Golden Ratio Convergence](/img/Golden-Ratio-Convergence.png)

As it turns out, our guess is correct: our Fibonacci ratios converge on the Golden Ratio. It's a surprising and beautiful result. To get a better idea of why it's true, however, we'll need to take a detour into a problem that seems completely different.

![Screen Shot 2014-12-10 at 7.01.31 PM](/img/Screen-Shot-2014-12-10-at-7.01.31-PM.png)

Let me ask you this: What is this fraction equal to?

It's quite an interesting puzzle. We can't just pull out a calculator and evaluate it that way, because of the "..." that makes the fraction go on forever. Let's experiment with this a little and try some smaller samples of this fraction. (Experimenting is very important in math -- that's how you discover things.)

![Screen Shot 2014-12-10 at 7.01.44 PM](/img/Screen-Shot-2014-12-10-at-7.01.44-PM.png)

![Screen Shot 2014-12-10 at 7.02.03 PM](/img/Screen-Shot-2014-12-10-at-7.02.03-PM.png)

![Screen Shot 2014-12-10 at 7.02.16 PM](/img/Screen-Shot-2014-12-10-at-7.02.16-PM.png)

![Screen Shot 2014-12-10 at 7.02.29 PM](/img/Screen-Shot-2014-12-10-at-7.02.29-PM.png)

Wow.

There a couple of very interesting things going on here. For one thing, those decimals seem to follow the same convergence pattern we saw a moment ago. Second, look where the decimals are coming from -- the Fibonacci numbers are appearing out of this repeating fraction! (See if you can figure out why!)

What this means is that our funny infinite fraction is the same as what happens if we keep calculating Fibonacci ratios on forever. In other words, if we can prove that our infinite fraction equals the Golden Ratio, we'll have proved that our Fibonacci ratios from the beginning of this page really do converge on the Golden Ratio.

So is it really the Golden Ratio? Can we prove it?

We can, and to do that we'll return to the infinite fraction.

![Screen Shot 2014-12-10 at 7.01.31 PM](/img/Screen-Shot-2014-12-10-at-7.01.31-PM.png)

We want to know what this fraction equals, so let's call it something. If we wanted to be algebraic about it, we might use the letter x, which is generally used for unknowns. But just because we can, let's use a question mark.

![Screen Shot 2014-12-10 at 7.02.44 PM](/img/Screen-Shot-2014-12-10-at-7.02.44-PM.png)

Well, that's nice, except we still have this pesky "..." to deal with. How do we work with that?

Let's look at the fraction this way:

![Screen Shot 2014-12-10 at 6.49.36 PM](/img/Screen-Shot-2014-12-10-at-6.49.36-PM.png)

What does that green part equal? It's

![Screen Shot 2014-12-10 at 6.50.37 PM](/img/Screen-Shot-2014-12-10-at-6.50.37-PM.png)

It's what we want to find! It's the question mark! So we can rewrite

![Screen Shot 2014-12-10 at 6.49.36 PM](/img/Screen-Shot-2014-12-10-at-6.49.36-PM.png)

like so:

![Screen Shot 2014-12-10 at 6.51.11 PM](/img/Screen-Shot-2014-12-10-at-6.51.11-PM.png)

Infinity can be very convenient that way. The "..." was getting in our way, so we turned the problem into the solution. (Think that was cool? Check out the page on [infinity](/number-theory/to-infinity-and-beyond/ "To Infinity… And Beyond!")!)

Okay, so now if we can solve that equation to get the value of the question mark, we'll have our answer. (After all, the ? represents our continued fraction ­-- that's how we defined it.) For those of you who know some algebra, try to solve the equation for the question mark.

Meanwhile, I'll do a bit of mathemagic to give you an inkling of why we get the answer we get.

We'll start by rewriting the number 1 in the equation as $\frac{?}{?}$ . Remember -- anything divided by itself is 1. Even with carrots.

<img style="max-width: 200px;" src="/img/Carrot-over-carrot.png"><br>

So now our equation becomes

![Screen Shot 2014-12-10 at 6.51.22 PM](/img/Screen-Shot-2014-12-10-at-6.51.22-PM.png)

And now both of those fractions have a ? downstairs, so we can add them:

![Screen Shot 2014-12-10 at 6.51.28 PM](/img/Screen-Shot-2014-12-10-at-6.51.28-PM.png)

Now, finally, let's rewrite the left-hand ? as $\frac{?}{1}$. We can do that because anything divided by 1 is itself.

<img style="max-width: 200px;" src="/img/Carrot-divided-by-1.png"><br>

And if we color the result:

![Screen Shot 2014-12-10 at 6.51.39 PM](/img/Screen-Shot-2014-12-10-at-6.51.39-PM.png)

Green is to red as red is to blue. If that doesn't look familiar, go look back at our original definition of the [Golden Ratio](/natures-favorite-math/the-golden-ratio/ "The Golden Ratio")!

And there we have it. Our question mark is the Golden Ratio. And so our infinite fraction is the Golden Ratio, and so the Fibonacci ratios converge on the Golden Ratio. It's a surprising and beautiful connection. It's also a reminder that pieces of math that at first look completely different can actually turn out to be related -- if you'd like another example, try these two links!

[Sierpinski](/fractals/sierpinski/ "Sierpinski")

[Pascal's Triangle](/better-ways-to-count/pascals-triangle/ "Pascal’s Triangle")
