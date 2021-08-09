---
title: "Cut Corners - Solution"
---


{{< printfriendly "/doc/Cut-Corners-Solution.pdf" >}}

Let's take a closer look at that grid.

![plain-grid](/img/Plain-Grid.png)

Maybe you've played with this for a while without coming up with a valid domino tiling. It's definitely not as easy as it looks!

To see why, let's color this grid like a checkerboard:

![checkered-grid](/img/Checkered-Grid.png)

(Give this problem another try before reading more. I'll wait.)

...

...

...

...

...

Okay. The key to finishing here is to notice that every time we place a domino on this checkerboard, we cover up one white square and one green square. No more, no less. But the two missing squares are *both green*. So we're trying to cover up 32 white squares and 30 green squares with dominoes that each cover one white square and one green square. This is impossible, so there are 0 ways to tile this grid.
