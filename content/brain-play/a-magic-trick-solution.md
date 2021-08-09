---
title: "A Magic Trick - Solution"
---


{{< printfriendly "/doc/A-Magic-Trick-Solution.pdf" >}}

After fiddling with some expressions on paper, Harriet called Gus back. "I have the solution to your mystery," she told him.

Gus was excited. "I've been stuck on this for days! How did you solve it?"

"First," Harriet told him, "I wrote the two-digit number as $10a + b$, where $a$ and $b$ are variables representing digits between 0 and 9."

"Okay," said Gus. "That's what I did, too."

"Then reversing the two-digit number gives us $10b + a$," Harriet continued. "Since $a$ and $b$ are different, one of them has to be bigger. And whichever one is bigger, the number with that in the tens digit is bigger than its reversed-digit counterpart. Let's say $a$ is bigger than $b$ -- it doesn't really matter which -- so when we subtract, we get $(10a + b) - (10b + a)$."

"I did that also," said Gus. "That gave me $9a - 9b$. That's where I got stuck."

"Indeed," Harriet said. "Now comes the hard part: writing this new number in the form $10c + d$, so that we can reverse the digits again. We're actually going to un-simplify this expression in a useful way..."

$$ 9a - 9b = 9(a - b) = 10(a - b) - (a - b) $$

"Okay," Gus said, when he'd written down the expression she told him. "I see a 10 in there. That's good."

"Yes, it is..." Harriet said. "But that $-(a - b)$ part is a problem, because it's negative."

"Oh yeah, because $a$ is bigger than $b$," Gus echoed. "Are we stuck again?"

"Not quite," Harriet answered. "Since $a$ and $b$ are different digits, their difference has to be between 1 and 9, so $-(a - b)$ is between -9 and -1. If we add 10 to that, we'll get something that ranges from 10 - 9 to 10 - 1, which is from 1 to 9. Voilà -- a positive digit."

"Oh!" Gus exclaimed. "So we can add 10 to the $-(a - b)$ and subtract it from the $10(a - b)$, and the expression stays the same. That's tricky!"

$$ 10(a - b) - (a - b) = (10(a - b) - 10) + (10 - (a - b)) = 10(a - b - 1) + (10 - (a - b)) $$

Harriet nodded. "Yes, that's the hardest part of this puzzle. Now this looks like $10c + d$, where $c = a - b - 1$ and $d = 10 - (a - b)$."

"Wait..." Gus said. "What about that $a - b - 1$ expression? How do we know that's not negative?"

Harriet smiled. "Great question. Remember that $a - b$ has to be between 1 and 9 since $a$ and $b$ are different digits. When we subtract 1 from that, we'll get something between 0 and 8. Those are digits. The one strange one is 0, which happens when $a$ and $b$ only differ by 1 -- that's the reason your friend told you to keep a zero in front if your new number looks like a one-digit number."

"Hm," said Gus. "That is strange, but I guess I'm okay with it. So now we have our $10c + d$ expression. What next?"

"You do the next step," she encouraged him. "We reverse the digits of $10c + d$..."

"... to get $10d + c$," Gus finished. "When we add those two together, we get $(10c + d) + (10d + c) = 11c + 11d = 11(c + d)$."

"Right," Harriet said. "Now the last step: we plug in our expressions for $c$ and $d$, and we get..."

$$ 11(c + d) = 11(a - b - 1 + 10 - (a - b)) = 11(9) = 99 $$

"Whew!" Gus exclaimed. "I see now -- no matter what $a$ and $b$ we picked, we'll always get 99, because this manipulation says so."

"Exactly," Harriet concluded. "Case closed."

Bonus challenge: When Gus told his friend Alina that he'd figured out her magic trick, she gave him this one: Pick a three-digit number with the digits all different. Reverse its digits, and subtract the smaller number from the larger one to get a new number. (If it looks like a two-digit number, put a zero in front so you can treat it like a three-digit number.) Take this new number, reverse its digits, and add the new number and its reverse. The number you get will be 1089. Why?
