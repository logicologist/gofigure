---
title: "Pirate Gold - Solution"
---


{{< printfriendly "/doc/Pirate-Gold-Solution.pdf" >}}

At every decision point, the five pirates are assessing what would happen if they accepted or rejected the proposal. If we start with the first decision, we're going to need to handle some pretty complex decision criteria. So instead, we'll start with a much simpler case: let's imagine what would happen if most of the pirates were thrown overboard, and only 2 pirates -- Desdemona and Ed -- were left.

In this hypothetical interaction between Desdemona and Ed, Ed knows that if Desdemona is voted overboard, Ed will get all 100 gold coins -- so no matter what Desdemona proposes, Ed will always vote against it. Luckily for Desdemona, because Desdemona herself is eligible to vote on the proposal, she can propose whatever she wants and get the 50% agreement that she needs for the proposal to be accepted. So Desdemona will propose that she gets all the coins and Ed gets none, Desdemona will vote for the proposal and Ed will vote against it, and the proposal will be accepted.

Now let's look at the case where only Cornelius, Desdemona, and Ed are left. Desdemona and Ed will base their votes on what the alternative would be if Cornelius were thrown overboard -- in other words, the 2-pirate case we just solved. Since Desdemona can get nothing more than 100 coins from Cornelius's proposal, Desdemona will always vote against Cornelius. So for Cornelius to get the 50% majority needed to not be thrown overboard, he needs the votes of both himself and Ed. Cornelius knows that Ed will vote against him if his proposal gives Ed zero coins, so Cornelius must buy Ed's vote by proposing that Ed gets 1 coin, Desdemona gets 0 coins, and Cornelius gets the remaining 99 coins.

Let's keep going! Now let's examine what happens if there are 4 pirates left -- Bartholomew, Cornelius, Desdemona, and Ed. To avoid being thrown overboard, Bartholomew needs the vote of one other pirate besides himself. And, as before, Bartholomew must buy a vote by offering to a pirate something better than what that pirate would get in the 3-pirate case we just solved. That means Bartholomew could buy Cornelius's vote for 100 coins, Desdemona's vote for 1 coin, or Ed's vote for 2 coins. Then the best option for Bartholomew is to propose that Bartholomew gets 99 coins, Desdemona gets 1 coin, and Cornelius and Ed get no coins.

Now we're back to the 5-pirate case, which is the one we're really interested in. By now we have a pretty good sense of how Anastasia should craft her proposal. To not get thrown overboard, she needs 2 votes besides her own to accept her proposal. Buying Bartholomew's vote would cost 100 coins, Desdemona's would cost 2 coins, and Cornelius's and Ed's would cost 1 coin each. The cheapest way for Anastasia to buy two votes, then, is to propose that Anastasia gets 98 coins, Cornelius and Ed get 1 coin each, and Bartholomew and Desdemona get nothing.

After Anastasia makes her proposal to the other crew members, there is a lot of shouting about unfairness, but ultimately the pirates' self-interests dominate and they cast their votes as Anastasia expected. Ed uses his coin to buy a new ladle when they get back to shore. Cornelius sews his coin into the lining of his jacket. Anastasia buries her treasure on a remote island, but not before buying a new feather for her hat.

Interestingly, when we make a table containing our intermediate results, we start to see a pattern.

![](/img/Screen-Shot-2019-10-05-at-4.05.46-PM.png)

What would our table look like if we had a few more pirates? How would the results have been different if the pirate making a proposal were not allowed to vote on it? What about if Desdemona had decided to always vote against a proposal where the proposer in a *k*-pirate case took more than a 1/*k* fraction of the coins?
