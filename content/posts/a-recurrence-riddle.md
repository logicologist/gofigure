---
title: "A Recurrence Riddle"
date: "2018-06-16"
thumbnail: ""
categories: ["Brain Play"]
pager: true
---


Two sisters, Amy and Sarah, are staying busy on a long car ride. Sarah is reading a book. Amy is poking her older sister and trying to start a conversation.

To give Amy something to do, Sarah looks up from her book and says, "Look -- I'll give you a math puzzle, and once you get the answer, I'll put down the book and talk with you." Amy is up for the challenge and agrees.

Here's the puzzle that Sarah gives Amy:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
*Define the sequence of numbers $a_1, a_2, a_3, \ldots$ as follows:*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
$a_1 = 1$

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
$a_n = a_{n-1} + 2n - 1$             for all $n > 1$.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
*Find* $a_{10000}$.

"No fair!" says Amy. "That'll take forever to compute."

"Well, you agreed to the challenge," Sarah says. "It's completely fair."

Amy thinks for a bit, and comes up with the idea to find a *closed form* expression for $a_n$: one that doesn't require calculating any of the terms before the one you're interested in. (For instance, $a_n = 2n$ would be a closed form, since you could just plug in $n = 10000$ to get your answer, but it's not the right expression.)

Can you help Amy find a closed form expression for $a_n$ and then calculate $a_{10000}$?

The solution can be found [here](/brain-play/a-recurrence-riddle-solution/). Happy puzzling!

*Print-friendly versions of all Brain Play problems can be found [here](/brain-play-problems-and-solutions/ "Brain Play Problems and Solutions").*
