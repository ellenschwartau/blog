---
title: "Reasonable Refactorings"
date: "2022-04-16"
categories: 
  - "coding"
  - "en"
  - "software-development"
tags: 
  - "clean-code"
  - "it"
  - "refactoring"
coverImage: "/assets/blog/reasonable-refactorings/screenshot-2022-04-19-at-19.54.33.png"
author:
  name: Ellen Schwartau
  picture: "/assets/blog/authors/ellen.png"
excerpt: "It was tough to be told “Don’t refactor just to refactor” since I love clean, maintainable, and high-quality code. By now, I found ways to make space for refactorings in my day-to-day work. So, what are the cues to refactor code regularly, but in a reasonable way?"
---

_My personal challenge for this post: No googling whilst creating this talk,_  
_to fill it with my personal experience only._

#### The background story

I am prone to being a perfectionist. The cruel part about it: In a programmer's reality there is rarely time for _perfect_ code. The good thing: There is no need for it as well. What's needed is a healthy amount of pragmatism. There are methodologies helping perfection-lovers become more pragmatic: For example, the 80/20 rule is a start to finding the balance between pragmatism and perfectionism.

The downside: Imperfection leaves unfinished business. Despite trying to guess right when leaving things out, you can't get rid of the fact that you are skipping points - Meaning the list of possible improvements grows alongside the lifetime of a project. Talking to my former boss about how to get rid of that pile of imperfect code, growing in size and smell, **she said "Do not refactor just to refactor"**, which was a tough thing to hear at first. By now, I found ways to **make space for refactorings in my day-to-day work** to keep code maintainable and clean. **So, what are the cues to refactor code regularly, but in a reasonable way?**

#### What if you just don't refactor?

One way to deal with untidy code is to just leave it. But even if things once were neat and tidy, they tend to get entangled and messy over time. So this if not really an option.

#### What if you refactor too much?

The other extreme can become harmful as well: It leaves your Project Manager unhappy since no features get done. Besides your co-workers get unhappy since you introduce breaking changes and your code diffs become huge and illegible.

#### So, how to refactor?

To still make space for refactorings you should check the following points:

- Know **when** to refactor.
- Know **how** to refactor.
- Know when to **stop** refactoring.

##### WHEN to refactor

To decide whether to refactor I find it helpful to ask myself a couple of questions. The most important one: "_Do I understand this?_" No? Very likely others don't as well. Time to improve readability. In addition there are various Coding Patterns out there that can be translated into questions. E.g: "_Does this component fulfill exactly one purpose?_" No? Time to apply changes to fulfill Single Responsibility Principle.  
"_Does a change take too much time?_" Do you e.g. need 2 hours to change the color of your primary buttons? Sounds like your stylesheets got way too messy and should be refactored to make sure development speed goes back to normal.

Next to these questions there are other very obvious indicators you can check by just looking at your code. E.g. repeated blocks should be reused or classes with too many lines of code should be split appropriately. Make sure that everything you can automate is, as an example you shouldn't fix code style manually.

Coding Patterns help identify where code is not done right and knowing them is crucial. But what's even more helpful is practical experience: Over time you develop a gut feeling for where Code Smell is coming from. Your nose becomes finer the more expert knowledge you gain in practice and helps you stop the "odours" before they spread. Indicators can be the WTFs per time that pop up in your mind, or the bare feeling that this or that was done too complicated and should be done easier.

But: Trust your colleagues - there might have been a good reason to add the complexity. Check for code comments and hints in the commit message. Make sure you understand the code you are editing (or at least know what it was meant to do once).

##### HOW to refactor

Once you figured it's time for a refactoring the success depends on how you perform it. First: Do it right away. I try to **always leave the code cleaner than you found it**. What helped me was to take it as a personal challenge. But don't freak out about it: Every change to existing code is a refactoring, no matter the scale. _Edit:_ **Every change to existing code, which aims to improve it, is a refactoring, no matter the scale**. This can already be achieved by small changes: Actions like renaming, reordering and reusing code can be very impactful.

And if there really is no time in that very moment (we all had to fix some fuckups in the live system... self-produced or not ;)) - Avoid creating separate tasks for the improvements. Once in the backlog they tend to stay there for a very long time. What works better is combining these with a user story since it helps prioritising the change, or leave a _// FIXME_ comment in the code. The next person coming across the code may find time to fix it.

Another thing: Huge refactorings are hard to understand. Break it down into smaller steps and implement them one by one. If that's for whatever reason not possible, review the changes separately during pair programming or via a standalone merge request. In both cases, you should use a separate commit to not mix it with feature-related changes and to keep the code diff readable.

##### STOP refactoring

If you follow the above guidelines there is one last important thing: Don't dive too deep into the rabbit hole. You need to stop refactoring at some point. What helps is defining multiple steps or working with a timebox.

And make sure to understand: **Good enough is good enough.**

## Questions & Answers

_Popped up during talks or discussions about this topic. The below answers are thus likely to be more elaborate or eloquent than the original ones ;-)_

**PyLadies Berlin Meetup: Do you have any tips for refactoring other people's code, for example when you are not familiar with it?**

Most importantly: Understand it. What I do is checking the commit message for notes or the link to a user story, which may give a bit of context. In best case the original author is still working for your company and you can ask them for elaboration and propose your changes. Or a product owner that provides an overview on a higher, user-oriented level. Programming in pair and doing Code Reviews also help to get familiar with unknown code, plus if your test coverage is good the tests make sure you won't break something... fingers crossed :D

Sometimes code evolves to a point where no one can make sense of it (anymore). It may be time to throw away messy parts and rewrite functionality that makes sense from the current point of view ;)

## Slides

- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-1.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-1-1.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-2.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-3.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-4.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-5.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-6.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-7.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-8.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-9.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-10.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-11.jpg?w=960)
- ![](https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-12.jpg?w=960)
