---
title: "Wolf, Goat, Lettuce - Solution"
---


{{< printfriendly "/doc/Wolf-Goat-Lettuce-Solution.pdf" >}}

Farmer Brown can't take the wolf across first, since then the goat would be left behind with the lettuce, and we know what goats do to lettuce. Similarly, he can't take the lettuce across first, since then the wolf would be left behind with the goat. But wolves don't eat lettuce, so he takes the goat across first.

![Wolf Goat Lettuce 1 of 5](/img/Wolf-Goat-Lettuce-1-of-5.png)

Next, he rows back alone, and then rows the wolf across. To protect the goat, he brings it with him on his way back.

![Wolf Goat Lettuce 2 of 5](/img/Wolf-Goat-Lettuce-2-of-5.png)

![Wolf Goat Lettuce 3 of 5](/img/Wolf-Goat-Lettuce-3-of-5.png)

Then he leaves the goat on the first side of the river and rows the lettuce across. He rows back alone.

![Wolf Goat Lettuce 4 of 5](/img/Wolf-Goat-Lettuce-4-of-5.png)

Finally, he rows the goat across one more time. He has now transported all of his goods across the river, and he can continue on his way.

![Wolf Goat Lettuce 5 of 5](/img/Wolf-Goat-Lettuce-5-of-5.png)

We can graph our solution by placing it on the edges of a cube. We start at the bottom front left corner. When we take the wolf across the river, we move upward along an edge of the cube; when we take the goat across, we move toward the back of the cube; when we take the lettuce across, we move to the right. We want to combine these moves so that we end up at the top back left corner. But some moves will leave the goat alone with the lettuce or the lettuce alone with the goat, so we don't want to move along those corresponding edges.

![Wolf Goat Lettuce Solutions](/img/Wolf-Goat-Lettuce-Solutions.png)

We're left with the bolded edges above. Now it's easy to see that there are two solutions: two paths via bold edges to the top back left corner. We've already walked through the steps for one of them; can you trace out the other solution?
