---
title: "Troll Trouble - Solution"
---


{{< printfriendly "/doc/Troll-Trouble-Solution.pdf" >}}

Eventually you want to be in a position where there is only 1 pebble left and it's the troll's turn. That means if there are 2 pebbles left and it's your turn, you should take away 1; and if there are 3 pebbles left, you should take 2. In those cases you can force the troll to take the last pebble.

On the other hand, you don't want to have 4 pebbles left when it's your turn, because after your turn there will be 2 or 3 pebbles left and the troll will be able to make you take the last pebble. So you would much rather there be 4 pebbles left when it's the troll's turn: whatever the troll decides to do, you know how to respond in a way that guarantees you'll win.

That means if there are 5 pebbles left and it's your turn, you should take away 1; and if there are 6 pebbles left, you should take 2. In those cases you can force the troll to be left with 4, and you've already worked through your strategy for 4.

7 is another number you don't want to be the one dealing with. If there are 7 pebbles left when it's your turn, there will be either 5 or 6 after you've moved, and either way the troll can force the number down to 4, putting you in a bad position. But conversely, if you can make the pile contain 7 pebbles when it's the troll's turn, then no matter what the troll does, you'll have a response that'll put you on your way to a guaranteed win.

We can start making a table now:

![Strategy Table](/img/Strategy-Table.png)

We're seeing a pattern! 1, 4, 7, etc. are bad positions to be in. But at 2, 3, 5, 6, etc., you can choose your move wisely and put the troll in one of these bad positions. Mathematically, all the bad positions are 1 more than a multiple of 3, and your strategy for the good positions can be summarized like so:

-   If it's a multiple of 3: remove 2 pebbles

-   If it's 2 more than a multiple of 3: remove 1 pebble

The one scenario where this strategy doesn't work is if you're in a bad position at the start of the game -- for instance, if the game started with 7 pebbles and you were first to play, the troll would have the advantage from the start. You're lucky that the game starts with 50 pebbles when it's your turn: 50 is 2 more than 48, and 48 is a multiple of 3, so your first move should be to remove 1 pebble. From there you can use the strategy developed above to guarantee that you'll win the game and your freedom.

(If you liked this puzzle, check out the game of Nim!)
