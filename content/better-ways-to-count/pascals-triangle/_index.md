---
title: "Pascal's Triangle"
menu:
  main:
    parent: "Better Ways To Count"
    weight: 4
---


{{< printfriendly "/doc/Pascal’s-Triangle-printer-friendly.pdf" >}}

In the beginning, there was an infinitely long row of zeroes. And somewhere in the midst of these zeroes there was a lonely 1.

![Row 0 (with invisibles) cropped](/img/Row-0-with-invisibles-cropped.png)

To this long row was applied a certain rule:

![Rule cropped](/img/Rule-cropped.png)

The figure then looked like this.

![Rows 0-1 (with invisibles) cropped](/img/Rows-0-1-with-invisibles-cropped.png)

That wasn't exciting enough, so the rule was applied to the new row that had just been generated.

![Rows 0-2 (with invisibles) cropped](/img/Rows-0-2-with-invisibles-cropped.png)

Looking better. Now the rule again to the newest row:

![Rows 0-3 (with invisibles) cropped](/img/Rows-0-3-with-invisibles-cropped.png)

At this point, all those zeroes are getting in the way. So let's make them invisible.

![Rows 0-3 cropped](/img/Rows-0-3-cropped.png)

There, that's much easier to see. Remember, we haven't gotten rid of the zeroes; we've just hidden them so we can focus on the interesting part.

Continuing the pattern for a few more rows -- with each number in the new row being the sum of the two numbers above it -- we get:

![Rows 0-7 cropped](/img/Rows-0-7-cropped.png)

If we continue this on to infinity, we get a structure known as Pascal's Triangle.

![Rows 0-10 and beyond cropped](/img/Rows-0-10-and-beyond-cropped.png)

This curious construction has some very remarkable properties, as discovered by the French mathematician Blaise Pascal (for whom the triangle is named). Let's start with [the basics...](/better-ways-to-count/pascals-triangle/some-neat-features/ "Some Neat Features")
