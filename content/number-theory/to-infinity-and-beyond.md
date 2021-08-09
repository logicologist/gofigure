---
title: "To Infinity… And Beyond!"
menu:
  main:
    parent: "Number Theory"
    weight: 2
---


{{< printfriendly "/doc/To-Infinity…-And-Beyond-printer-friendly.pdf" >}}

Here's a question for you: What's the biggest number?

It's not a billion. (You can just add 1 and get 1,000,000,001.) It's not 10 billion either, because 10 billion and 1 is bigger.

It's not a googol, which is a 1 with a hundred zeroes after it. It's not a googolplex, which is a 1 with a googol zeroes after it. You can just add 1 to each of those and get something bigger. And it's not a quadruple-mega-zillion, since that isn't even a number.

No, we're looking for the number where you start at 1, 2, 3, and you keep adding 1 *forever*. On beyond a billion and a googol and a quadruple-mega-zillion, all the way to infinity.

$$ \infty $$

Infinity is a very strange kind of number. You can't just add 1 to get a bigger number -- if you try, you'll just get infinity again. Here's how we write the equation:

$$ \infty + 1 = \infty $$

And that's not all! If we try to make it bigger by adding infinity or multiplying by infinity, here's what we get:

$$ \infty + \infty = \infty $$

$$ \infty \times \infty = \infty $$

Mind-boggling, hm? To understand this better, let's go visit the Hilbert Hotel. The proprietor, mathematician David Hilbert, has trained his staff to handle these exact equations in order to fill their infinite number of hotel rooms.

![Hilbert Hotel Rooms](/img/Hilbert-Hotel-Rooms.png)

When we arrive at the hotel, the person behind the front desk tells us, "Yes, this is the famous Hilbert Hotel. We can always find room for one more person. Watch and you'll see." As she's talking, a tired-looking guest comes in pulling a suitcase.

The receptionist checks the traveler in to Room 1. Just as the guest is starting for the hall, she sends a message on hotel speaker system: "Good evening, ladies and gentlemen. We have a situation that requires you all to move to the room with a number 1 greater than your own. Thank you for your cooperation."

When the new guest reaches Room 1, the former occupant is en route, suitcase in hand, to Room 2. And the former occupant of Room 2 is en route to Room 3, and the former occupant of Room 3 is en route to Room 4, and so on. Every guest at the hotel moves down the hall by 1 room, the new guest has a place to stay, and the hallway settles down as if nothing had happened.

"Wait!" you say to the receptionist. "Isn't somebody at the end booted out of the hotel? Like Musical Chairs?"

"No, we don't have any trouble of that sort," the receptionist replies with a smile, "because there isn't any 'end' to be booted out of."

Welcome to infinity.

No sooner have we wrapped our brains around that one than we hear a rumble and screech outside. A bus has just pulled up at the hotel door, and an infinite number of passengers piles out, each carrying a suitcase and looking very tired.

![Hilbert Infinity Bus](/img/Hilbert-Infinity-Bus.png)

"Do you have room for the whole tour group?" the bus driver asks the receptionist.

"Of course," the receptionist answers.

How can this be done? If the receptionist used the same trick as she did with the single traveler, she'd be repeating the process forever. This isn't just infinity plus one; this is infinity plus infinity. Luckily, she has a better solution.

"Good evening, ladies and gentlemen. We have a situation that requires you all to move to the room with a number double your own. Thank you for your cooperation."

Presently we see the guest from Room 1 move to Room 2, the guest from Room 2 move to Room 4, the guest from Room 3 move to Room 6, and so on. Soon the guests are occupying all the even-numbered rooms, leaving the odd-numbered rooms free for the infinite tour group.

"Wait!" you say to the receptionist. "How does that solve the problem? Won't there be too few rooms for the tour group? Aren't there fewer odd-numbered rooms than total hotel rooms?"

"Actually, no," the receptionist answers. "The number of odd numbers is infinite in the same way that the number of hotel rooms is infinite. You can always add 2 and get another one."

At first glance, it seems like the odd-number-infinity might be smaller than the hotel-room-number-infinity. But in fact, both of the infinities are *countable*: you can match them one-by-one to the counting numbers 1, 2, 3, etc. (which is how the Hilbert Hotel numbers its rooms).

Countability can get very tricky. For example: Are the rational numbers (fractions like 1/5 or 10000/31) countable?

It looks like there are way more fractions than whole numbers. After all, you've got infinity of them just in between 0 and 1. How could you possibly count all of them?

But the receptionist at the Hilbert Hotel knows just how to handle the situation. Our ponderings are interrupted by an infinite number of rumble and screeches. Infinity buses have just pulled up at the hotel door, and an infinite number of passengers piles out of each one. Infinity buses times infinity passengers per bus: we have infinity squared passengers on our hands.

![Hilbert Infinity Buses](/img/Hilbert-Infinity-Buses.jpg)

"Bus #1, line up here, please," the receptionist says. "Bus #2, line up next to the Bus #1 line. Bus #3, line up next to the Bus #2 line, and so on."

The receptionist has essentially arranged the passengers according to this table:

![Hilbert Hotel Infinity Squared 1](/img/Hilbert-Hotel-Infinity-Squared-1.jpg)

Each row contains one busload. Column 1 contains all the passengers who were the first to get off the bus, Column 2 contains all the passengers who were the second to get off the bus, and so on. From this arrangement, each passenger is assigned a fraction: row divided by column.

![Hilbert Hotel Infinity Squared 2](/img/Hilbert-Hotel-Infinity-Squared-2.jpg)

Now the receptionist must somehow traverse this entire array. But in order to line the passengers up such that she can assign them to hotel rooms, she wants to use only one "..." in her solution. That means she can't just go one bus at a time -- otherwise, all the rest of the buses would be waiting forever while she was finishing the first. Instead, the receptionist just zigzags through the table like so:

![Hilbert Hotel Infinity Squared 3](/img/Hilbert-Hotel-Infinity-Squared-3.jpg)

Soon she has just one long line of passengers behind her, everyone present and accounted for -- a single countable infinity that she can assign to the odd-numbered rooms like she did when there was only one bus. Every possible fraction is present in the lineup, since every possible fraction can be written as a bus number divided by a lineup number.

Before long, all of the infinite guests are settled comfortably in their rooms, and the hallway of the Hilbert Hotel looks as if nothing had happened.

After things have quieted down, we realize what just happened. The receptionist proved that the rational numbers are countable -- that there are as many fractions as there are whole numbers.

Yikes. That blows away your intuition, doesn't it?

Here's one more Hilbert Hotel problem to consider. Suppose that a crowd approaches the hotel: a great infinite horde of people skipping along, each one waving an infinitely long flag sporting an infinitely long decimal between 0 and 1 (such as 0.3525649817...). Can the receptionist find room for all these people in the hotel?

Considering that we figured out how to count the rational numbers, we might be rather hopeful about our chances here. But in fact it's impossible for the receptionist to assign these people to rooms. No matter how she lines the people up, there will always be someone left out. And we can prove it!

We'll start by ordering the people any which way, like so:

![Hilbert Decimals 1](/img/Hilbert-Decimals-1.png)

Now let's construct a new decimal from our above list. Take the first digit after the decimal point from the first flag number and make that the first digit after the decimal point in our new number. Then take the second digit after the decimal point from the second flag number and make that the second digit after the decimal point in our new number. Keep going like this for every flag in the lineup, picking the *n*th digit of the *n*th decimal-flag and assigning it to the *n*th digit of the new number.

![Hilbert Decimals 2](/img/Hilbert-Decimals-2.png)

Now we break it! What we do is change every number in the decimal we just constructed. Every digit becomes something different -- it doesn't matter what the new digit is, only that it's different.

![Hilbert Decimals 3](/img/Hilbert-Decimals-3.png)

The decimal we've just constructed *cannot* be in the lineup. It's not the number on the first flag, since the first digit after the decimal is different; it's not the number on the second flag, since the second digit after the decimal is different; it's not the number on the third flag, since the third digit after the decimal is different; and so on. It's not the same as *any* decimal in the lineup, so it must belong to a flag-waver who was left out.

We've just proved that it's impossible to line up the flag-wavers and assign them hotel rooms! Whatever kind of infinity the flag-wavers are, our everyday countable infinity is too small to contain them.

"Wait!" you say. "You mean there are really different sizes of infinity? Whatever happened to infinity being the biggest number? How many sizes of infinity are there and which one's the biggest?"

Good questions. Yes, there are really different sizes of infinity. And notice that I never said that there wasn't anything bigger than infinity -- because it's very tricky to try to talk about infinity as if it were an ordinary number. As we've seen, infinity is decidedly extraordinary.

As for your last question, it turns out that there are actually infinite sizes of infinity. So you can't really point to a "biggest infinity," since you can always take it and construct a bigger one. But the details of that one will have to wait for another time.
