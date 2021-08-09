---
title: "Spider Socks"
date: "2017-12-30"
thumbnail: ""
categories: ["Brain Play"]
pager: true
---


Harvey the Spider is putting on his argyle socks and boots in the morning. Naturally, he has 8 socks and 8 boots to put on, and for every one of his 8 legs, he has to put the sock on before the boot.

Let's number Harvey's feet 1 through 8, call the argyle sock for his $i\textrm{th}$ foot $A_i$, and call the boot for his $i\textrm{th}$ foot $B_i$. Then one valid order Harvey could use for putting on socks and boots is

$$ A_1 B_1 A_2 B_2 A_3 B_3 A_4 B_4 A_5 B_5 A_6 B_6 A_7 B_7 A_8 B_8 $$

Another valid order is

$$ A_4 A_3 B_4 A_7 B_3 A_1 A_5 B_5 A_6 B_1 B_6 A_8 B_7 B_8 A_2 B_2 $$

since each $A_i$ comes before its corresponding $B_i$. But it would be impossible for Harvey to use the order

$$ A_4 \color{red}{\boldsymbol{B_3}} B_4 A_7 \color{red}{\boldsymbol{A_3}} A_1 A_5 B_5 A_6 B_1 B_6 A_8 B_7 B_8 A_2 B_2 $$

since now $B_3$ comes before $A_3$. Harvey also can't use the order

$$ B_1 A_1 B_2 A_2 B_3 A_3 B_4 A_4 B_5 A_5 B_6 A_6 B_7 A_7 B_8 A_8 $$

since all the sock-boot pairs are backwards.

Harvey is sleepy this morning and not paying attention to his order of socks and boots, so he puts on his socks and boots in random order. What is the probability that he picks a valid order for his socks and boots?

(If you get stuck, you might want to read the techniques in [Better Ways to Count](/better-ways-to-count/).)

The solution can be found [here](/brain-play/spider-socks-solution/). Happy puzzling!

*Print-friendly versions of all Brain Play problems can be found [here](/brain-play-problems-and-solutions/ "Brain Play Problems and Solutions").*

