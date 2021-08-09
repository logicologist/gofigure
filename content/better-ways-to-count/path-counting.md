---
title: "Path Counting"
menu:
  main:
    parent: "Better Ways To Count"
    weight: 3
---


{{< printfriendly "/doc/Path-Counting-printer-friendly.pdf" >}}

In the city of Trafficville there is a region where all the streets are one-way. If a car drives into this region, it can only drive south or east. (It's really not very practical. The city council is debating what should be done about it.)

![Trafficville Full cropped](/img/Trafficville-Full-cropped.png)

Restaurant owner Rosa Gustaroni, who is going to work this morning, wants to drive from the bakery (at the green star) to her restaurant (at the orange star). How many ways can she get there? Which route is the shortest?

In this problem, it's just as important to remember what we can't do as to remember what we can. The big limitation here is the bit about the one-way streets. It means Ms. Gustaroni can't do this:

![Trafficville Doodling cropped](/img/Trafficville-Doodling-cropped.png)

In fact, we can do even better. We know that she can't go on streets north or west of her house without driving the wrong way along a one-way street. And we also know that if she drives too far south or east, she won't be able to get back to the restaurant without taking a big detour. So we can simplify our diagram like so:

![Trafficville Simplified cropped](/img/Trafficville-Simplified-cropped.png)

Well now, that looks a lot more manageable.

Now, if we look hard enough we discover a key point: whatever route Ms. Gustaroni takes, she has to go exactly four blocks east and exactly three blocks south. No more, no less. That makes a total of seven steps, always -- and that answers one of the questions we are asked. There is no "shortest" route.

What about the other question? How many ways are there to get from the bakery to the restaurant? We know that there will be seven total steps, and that three of them will be southward. Hey, this looks familiar -- we're asked to pick three of the seven steps to be southward! We've bumped into our old friend, [choosing](/better-ways-to-count/on-choosing/ "On Choosing").

$$ \dbinom{7}{3} = \dfrac{7!}{3!(7-3)!} = \dfrac{5040}{6\cdot 24} = 35 $$

That means that there are $35$ ways for Ms. Gustaroni to drive from the bakery to the restaurant. (We'd get the same answer if we'd chosen the $4$ eastward steps -- read more on [choosing](/better-ways-to-count/on-choosing/ "On Choosing") if you don't understand why.)

Let's put a twist on this problem.

![Traffic Accident cropped](/img/Traffic-Accident-cropped.png)

There has been a traffic accident at the intersection where the red X is, and the police have blocked off the area so that cars must go around the accident. Rosa Gustaroni still needs to get to her restaurant from the bakery. Now how many ways are there for her to make the trip?

Well, we could either do an awful lot of casework, or we could use a trick called complementary counting. In complementary counting, you count the total number of things, and then subtract the things you don't want. This problem has a pretty clear definition of what we don't want, and we already know the total number of things, so it seems like complementary counting is a good thing to try.

Okay, so what exactly is a bad route? Clearly, it's one that goes through the blocked-off intersection. So we want to count how many paths go from the bakery to the intersection to the restaurant. That means we're really counting two things: 1) the number of paths from the bakery to the intersection, and 2) the number of paths from the intersection to the restaurant.

![Traffic Avoidance cropped](/img/Traffic-Avoidance-cropped.png)

Let's tackle these one at a time.

1.  To get from the bakery to the intersection, you have to take a total of three steps, two southward and one eastward. Choosing one eastward step out of three total steps:

$$ \dbinom{3}{1} = \dfrac{3!}{1!(3-1)!} = \dfrac{6}{2} = 3. $$

2.  To get from the intersection to the restaurant, you have to take a total of four steps, one southward and three eastward. Choosing three eastward steps out of four total steps:

$$ \dbinom{4}{3} = \dfrac{4!}{3!(4-3)!} = \dfrac{24}{6} = 4. $$

So there are $3$ ways to get from the bakery to the intersection, and $4$ ways to get from the intersection to the restaurant. Do these choices depend on each other in any way? No, so to get the total we multiply (because for each option of the first, all options of the second are possible). Then there are $3 \cdot 4 = 12$ bad routes.

The total number of routes that Ms. Gustaroni could take, as we already calculated, is $35$. The number of bad routes, we just figured out, is $12$. So the number of good routes is

$$ 35 - 12 = 23. $$

So Rosa Gustaroni still has plenty of possible ways to get to work.
