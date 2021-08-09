---
title: "Salt and Pepper - Solution"
---


{{< printfriendly "/doc/Salt-and-Pepper-Solution.pdf" >}}

We don't know the size of the salt and pepper shakers. Is this a problem?

It turns out not to be, as long as we keep our eye on what happens with the teaspoon.

Step 1 in the procedure is to move a teaspoon of pepper to the salt shaker. This is pretty straightforward: one teaspoon of pepper is transferred.

Step 2 is to move a teaspoon of salt-and-pepper mix back to the pepper shaker. This time, we don't have 1 teaspoon of salt that we're moving: part of what we're moving is the pepper that was mixed into the salt. Let's assign a variable so we can keep track of the amount of pepper in that teaspoon; we can call it x. That means in Step 2 we're moving x teaspoons of pepper and 1-x teaspoons of salt to the pepper shaker.

After this is done, how much salt is in the pepper shaker and how much pepper is in the salt shaker?

We've just moved 1-x teaspoons of salt into the pepper shaker in Step 2. For the salt shaker, we moved 1 teaspoon of pepper in (via Step 1) but then moved x teaspoons of pepper out (via Step 2), leaving us with 1-x teaspoons of pepper in the salt shaker.

That means we'll have the same amount (1-x teaspoons) of salt in the pepper shaker and pepper in the salt shaker.

Bonus question: How much salt and pepper should be in the shakers if we want there to be 3/4 teaspoon salt in the pepper shaker in the end?
