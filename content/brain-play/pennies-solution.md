---
title: "Pennies - Solution"
---


{{< printfriendly "/doc/Pennies-Solution.pdf" >}}

When we roll the outer penny around the central cluster, we're rolling it from bump to bump 6 times. If we can figure out what happens just going from one bump to the next, we can just repeat that 6 times to get our overall result. Let's zoom in on just the top part and see what it looks like geometrically.

![](/img/Closeup1.jpg)

Notice how we've connected the centers of the pennies together. The nice thing about these lines is that they pass through the points where the pennies touch (which, intuitively, makes sense because of symmetry). It also lets us see the angles between pennies more easily. Also notice that wherever three pennies all meet, the triangle connecting their centers is *equilateral* (all sides are the same, because the pennies are all the same size), so every angle in the triangle is 60 degrees.

Now let's roll the top penny (labeled "a") around to the left (around "b").

![](/img/Closeup2.jpg)

Notice what happens to the edge of the penny, starting at the red dot. Based on our green triangles, we deduce that we go around 360 -- 4\*60 = 120 degrees of penny "b." Since we don't allow penny "a" to slide as it rolls, we're matching those 120 degrees exactly with 120 degrees of the edge of penny "a" (as shown with the two matching red curves).

Let's take a look at one specific point on the edge of penny "a" (marked with a blue star):

![](/img/Closeup3.jpg)

The star starts 120 degrees clockwise from where "a" and "b" initially touch, and it ends up on the rightmost side of penny "a." We can make a diagram showing all the angles it travels through in between:

![](/img/Angles.jpg)

The red arc is the 120 degrees that roll against penny "b"; the bottom arc is where penny "a" initially touches the two pennies below it; the right-hand arc is the remainder of the way to the rightmost side of penny "a." The nice lattice-like structure of the green triangles is what lets us line everything up like this.

Now we can add it all up: 120 + 60 + 60 = 240 degrees. That's how much penny "a" rotated during that one step rolling around penny "b."

There's nothing special about penny "b" -- this same logic applies for each penny we roll penny "a" around, so we just repeat until we get back to where we started. Since we have 6 pennies around the outside of the central cluster, penny "a" will roll 6 \* 240 degrees = 1440 degrees in total, which is 1440/360 = 4 complete rotations.

You can check this yourself -- try the problem with 8 pennies (or quarters, or cardboard circles) and see if you get the same thing! You can also try other arrangements of pennies for the central cluster instead of our original 7 -- what does the geometry look like in your new scenarios?
