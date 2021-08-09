---
title: "City Council - Solution"
---


{{< printfriendly "/doc/City-Council-Solution.pdf" >}}

Let's say that there are $x$ knights on the city council. If we can figure out what the value of $x$ is, we'll be practically done. We can start our exploration with a couple of extreme cases:

-   If $x=0$, then all of the councilmembers are liars. But then the first councilmember's statement is true, and since liars never tell the truth, that means the first person is a knight. But we assumed that $x=0$, meaning $0$ knights! So this case is impossible.

-   If $x=12$, then all of the councilmembers are knights. But then the first councilmember's statement is false, and since knights never say things that are false, that means the first person is a liar. But $x=12$ means there aren't any liars! So this case is impossible also.

Okay, so we know that $1 \le x \le 11$. (This tells us immediately that the first councilmember is a liar and the twelfth one is a knight -- make sure you can see why.) We could keep working through each case individually, crossing out options each time something doesn't work, but that seems like a pretty long process... is there a faster way?

Let's take another look at which of the councilmembers' statements are true when there are $x$ knights.

When the second councilmember says "Not more than $1$ person in this room tells the truth," the statement is equivalent to "There are $1$ or fewer knights in this room." If $x \le 1$, then the statement is true and the councilmember is a knight, but if $x > 1$, the statement is false and the councilmember is a liar. We can do the same thing for all the others: e.g. the eighth councilmember's statement is equivalent to "There are $7$ or fewer knights in this room," which is true (and therefore the councilmember a knight) for $x \le 7$ and false (and thus the councilmember a liar) for $x > 7$.

Whoever says "Not more than $x$ people in this room tell the truth" (for whatever the value of $x$ is) is saying a true statement (since $x \le x$) and so must be a knight. And all the people who speak after that person set increasingly large upper bounds on the number of knights, so they're all telling the truth also and thus must also be knights. But whoever says "Not more than $(x-1)$ people in this room tell the truth" is saying something false (since $x \nleq x-1$) and so must be a liar. And all the people who speak before that person also set upper bounds that are too low for the number of knights, so they're also lying.

Since everybody after "Not more than $x$ people in this room tell the truth" (i.e. councilmember $(x+1)$) is a knight and everyone before that is a liar, and we defined $x$ to be the number of knights, we can take the last $x$ councilmembers and say with confidence that they are knights: this means council members $(12-x+1)$ through $12$. And we know that since council member $(12-x+1)$ is the first knight to speak after that turnaround point from liars to knights, and that person says "Not more than $(12-x)$ people in this room tell the truth," we can conclude that there are exactly $(12-x)$ knights in the room (since any smaller cap on the number of knights will result in a false statement by one of the liars).

Hold it. We just concluded that there are exactly $(12-x)$ knights in the room. But we defined $x$as the number of knights in the room. If we want a solution to this puzzle that follows all the constraints, these two numbers must be equal:

$$ x = 12 - x $$

This is an equation we can solve! We add $x$ to both sides:

$$ 2x = 12 $$

And then we divide by $2$:

$$ x = 6 $$

And there we have it! There must be $6$ knights in the room, and therefore $12-6=6$ liars. Try checking our solution against the councilmembers' statements to confirm it works!
