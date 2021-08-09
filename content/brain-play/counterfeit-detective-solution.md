---
title: "Counterfeit Detective - Solution"
---


{{< printfriendly "/doc/Counterfeit-Detective-Solution.pdf" >}}

Harriet pulled out 1 coin from the first bag, 2 coins from the second bag, 3 coins from the third bag, and so on, up through 10 coins from the tenth bag.

"If all of these were real," she thought to herself, "they would weigh $(1 + 2 + \ldots + 10) \cdot 5 \textrm{ grams} = 275 \textrm{ grams}$. But some of them are fake, so the total will be less than that -- and the difference will tell me which bag holds the fakes."

How does Harriet's strategy work? Suppose the first bag holds the counterfeits. Then the coins will weigh

$$ 1 \cdot 4 \textrm{ grams} + (2 + 3 + \ldots + 10) \cdot 5 \textrm{ grams} = 274 \textrm{ grams}. $$

That's 1 gram less than 275 grams. If instead the second bag holds the counterfeits, then the coins will weigh

$$ 1 \cdot 5 \textrm{ grams} + 2 \cdot 4 \textrm{ grams} + (3 + 4 + \ldots + 10) \cdot 5 \textrm{ grams} = 273 \textrm{ grams}. $$

That's 2 grams less than 275 grams. More generally, if bag number $i$ holds the counterfeits, then the coins will weigh

$$ (1 + 2 + \ldots + (i-1)) \cdot 5 \textrm{ grams} + i \cdot 4 \textrm{ grams} + ((i+1) + \ldots + 9 + 10) \cdot 5 \textrm{ grams} $$

$$ = (1 + 2 + \ldots + (i-1)) \cdot 5 \textrm{ grams} + (i \cdot 5 - i \cdot 1) \textrm{ grams} + ((i+1) + \ldots + 9 + 10) \cdot 5 \textrm{ grams} $$

$$ = (1 + 2 + \ldots + 10) \cdot 5 \textrm{ grams} - i \textrm{ grams} $$

$$ = 275 - i \textrm{ grams} $$

That's $i$ grams less than 275 grams.

Harriet put the coins on the scale and read the total: 267 grams. "The fake coins are in bag 8," she thought as she tucked the scale back under her coat, returning to the front room just as Mahmud and the store owner walked into view from behind a set of shelves. "This case will soon be closed."
