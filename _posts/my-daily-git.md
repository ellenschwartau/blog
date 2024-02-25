---
title: "My Daily Git"
date: "2022-12-03"
categories: 
  - "coding"
  - "git"
  - "programming"
  - "software-development"
author:
  name: Ellen Schwartau
  picture: "/assets/blog/authors/ellen.png"
excerpt: "The git history is a key for reconstructing the evolution of your code. Treating it with caution saves time. This is my cheat sheet for keeping it clean."
---

A teachers blackboard, an interpreters dictionary, or a financial advisors calculator. That's what **git** is for software engineers. It makes our life easier, not (only) because of [the pun of words I occasionally stumble upon,](https://ellenschwartau.com/2022/01/28/accidental-pun-of-words-git/) but due to its necessity and mightiness. Far from being a git expert, this is how I use git.

1. [The Basics](https://ellenschwartau.com/2022/12/03/my-daily-git/#the-basics)
2. [Merge is dead, long live rebase](https://ellenschwartau.com/2022/12/03/my-daily-git/#merge-is-dead-long-live-rebase)
3. [The icing on the cake](https://ellenschwartau.com/2022/12/03/my-daily-git/#the-icing-on-the-cake)
    1. [Squash it](https://ellenschwartau.com/2022/12/03/my-daily-git/#squash-it)
    2. [Edit prior commits](https://ellenschwartau.com/2022/12/03/my-daily-git/#edit-prior-commits)
4. [The Cheat Sheet](https://ellenschwartau.com/2022/12/03/my-daily-git/#the-cheat-sheet)

## The Basics

Git is a free and open source version controls system, allowing you to manage your code changes in a so called repository. It allows you keeping track of the history of your code and helps working together on the same code base.

> What's Git?
> 
> **Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.**

I don't want to talk about why to use branches and how to name commits. In short I prefer working with [short-lived feature branches](https://trunkbaseddevelopment.com/short-lived-feature-branches/) and follow the rules of [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). This an example explaining the what, how and why of a change:

```
fix(#ticket): upgrade version of typeorm
The prior version caused the local machine to fail.
Paired: Ellen, Julia
```

A commits message is the first thing I read whenever wondering about code. Making them clear and explanatory helps understanding the WHY behind a change. Additionally, if the author is still part of your company, commits uncover the GOTO for asking a question or reviewing your own changes.

Keeping your commits clean can save your ass: it is way easier to revert a change if you used one commit per feature. Not to forget that this helps getting a holistic view upon a feature anyways.

I not only use commits when pushing changes, but also to keep track of my TODOs. For that I use empty commits containing no code changes but the open points needing implementation:

```
git commit --allow-empty -m "[ ] Cleanup stylesheets"
```

Let's dig deeper into the git magic now. 🤓

## Merge is dead, long live rebase

When you start working on a branch others may push changes to the code base. Meaning you need to reunite your code and the deployed code base.

One strategy to do so is merging, meaning that your changes are applied onto the master branch until they are reflected completely. The good part: If your branch implements a feature, these changes are added as one commit, which makes it easy to understand a feature looking at only one commit.

```
        *---*---*    your branch
       /         \
  *---*---*---*---*  master
```

The downside: Even if separating your commits into multiple ones for a reason, they are combined to one. Also, when working on a project with multiple people, merging changes tends to get pretty messy. The screenshot below shows a git history where the team switched from a semi-linear git history to allowing merges without prior rebase:

<figure>

![This screenshot shows a gist history where the team switched from a linear git history to removing the fast forward only criteria.](https://ellenschwartau.files.wordpress.com/2022/12/image-2.png?w=1024)

<figcaption>

Thanks to Malte for providing this example 💛

</figcaption>

</figure>

Escalated quickly, and it's not even an uncommon or bad example ([see this as another](https://dev.to/bladesensei/avoid-messy-git-history-3g26)). The reason behind it was changes being that frequent that rebasing wasn't feasible anymore. Which of the strategies do you find easier to understand?

In my eyes, neglected git histories are hard to follow. So, what do I do about it? The only **merge** I allow myself is the following:

```
git merge --ff-only # short for 'fast forward'
```

This command only runs, if your branch is updated to the current master. In reality this is rarely the case. To create this kind of status for your branch in case commits were added afterwards you can use **rebase**: It adds the changes onto your branch and applies your changes on top of it:

```
# before rebase
# no fast forward

    *---*    your branch
   /      
-*---A---B  master
```

```
# after rebase
# fast forward possible

           *---* your branch
          /
-*---A---B       master
```

The base of your branch is changed to the fresh master state and when merging your commit is simply put on top of the master branch as is. To not depend on developers discipline, the **\- -ff-only** option can be enforced by tools like gitlab and prevents your git history from getting wasted.

## The icing on the cake

#### Squash it

Following the above rules you are enjoying a world of linear history and meaningful commits. Congratulations! Sometimes, during your work day you may feel the urge to "just push" your changes or keep smaller commits that you'd like to tidy up before merging them. Take this example:

```
commit c8ceddfe081c8d91ed7dde8111e175982bf2898a (HEAD -> kp-344, origin/kp-344)
    last fixed and review comments

commit c2f4d70d01ecddf995af2f85d0aa0d55f6086d02
    WIP

commit ed79cc8084d3889ec0318ec7a6f412ed89ff4d8f 
    feat(ticket-123): Add pagination to search result page

commit b85b2c5cdc20cbaa2df56a89ceeef97040f39ecf (origin/master, origin/HEAD, master)
    feat(search): Add search result page
```

You added the WIP commit message right before leaving the workplace, just to publish your changes (I assume you have heard about how to prevent the bus factor). Next day you reviewed your changes with a colleague and adopted some parts. To make it easier for that person to have a second look on your changes only you used a separate commit. To now add you changes to master in only one holistic commit your can use **squashing**.

To do so, you need to tell git you'd like to work on the last 3 commits:

```
git rebase -i HEAD~3
```

Afterwards, you mark the commits you want to squash by changing _pick_ to _squash_, or short _s_.

```
pick ed79cc808 feat(search): Add search result page
pick c2f4d70d0 WIP
pick c8ceddfe0 last fixed and review comments

# =>

pick ed79cc808 feat(search): Add search result page
s c2f4d70d0 WIP
s c8ceddfe0 last fixed and review comments
```

This will add the changes of your last two commits to the picked one, resulting in one clean commit.

#### Edit prior commits

Let's assume you want to add multiple commits to your merge request, because you are working on a pretty big feature or you are adding a refactoring upfront. I sometimes partition features into adapting the frontend and the backend, to make the parts reviewable by different persons.

Doing so, it may happen you want to adapt the frontend after already working on the backend code. Let's stick to the example of a search field: You start with adding the input to the frontend and forwarding the term to the backend api. The second commit takes the term into account when filtering the result. To prevent the search from being executed on each letter you add a submit button to the frontend at last. This would mess up the separation of your commits:

```
commit 1b63c2accc984f2252b8002d3c25a632c98b36e3 (HEAD -> kp-344)
    feat(#ticket): add submit button to refresh the search

commit 8557ad2af6446aa0e96b4275be62adbdb414c8f8
    feat(#ticket): narrow down results in the backend

commit 7e43176b3c8e3e0609ce0c68571f34be1a7b06af
    feat(#ticket): add search field to frontend and adapt endpoints
```

From separation of concerns the latest commit belongs to the first. But there are the backend changes in between, so we can't simply use **git commit - -amend** here. The rebase command doesn't only allow you to squash your commits, but also to edit them.

To do so, you need to reset your last commit in a way that keeps your changes:

```
git reset --soft 8557ad2af6446aa0e96b4275be62adbdb414c8f8
```

This way you keep the code changes adding the submit button to the frontend. **git status** would show you edited, unstaged files in this case:

```
Changes not staged for commit:
  modified:   frontend/src/search/SearchResultPage.vue
```

For entering the rebase mode, you need to have a clean local state, use **git stash** to remove but not loose your changes. Now you enter the rebase mode again, including the last two commits and markt the frontend related commit as the one you want to edit:

```
git rebase -i HEAD~2
error: cannot rebase: You have unstaged changes.
error: Please commit or stash them.

# stash the changes and try again
git stash
git rebase -i HEAD~2

# mark the target commit as edit

pick 8557ad2af
    feat(#ticket): narrow down search results in the backend
edit 7e43176b3
    feat(#ticket): add search field to frontend and adapt endpoints
```

Your **git log** only shows the first commit in rebase mode:

```
(master|REBASE 2/2) > git log
commit 7e43176b3c8e3e0609ce0c68571f34be1a7b06af
    feat(#ticket): add search field to frontend and adapt endpoints
```

Using **git stash pop** you can bring back the changes you stashed before and simply add and commit them to your current commit. Attention: if you accidentally use **git stash drop** you loose your changes instead of bringing them back. I tell you, that hurts ;)

You are currently still in rebase mode, use **git rebase - -continue** to apply your backend commit on top of it. And here we are, having our frontend and backend changes clean and separate again.

## The Cheat Sheet

The git history is a key for reconstructing the evolution of your code. Treating it with caution saves time. This is my cheat sheet for keeping it clean:

```
# use empty commits to keep track on TODOs
git commit --allow-empty

# The only merge command you should use
git merge --ff-only

# Pull the newest master changes onto your branch
git rebase master

# enter interactive mode to squash or edit your commits
git rebase -i HEAD~<#commits you want to include>

# ...use squash to summarise commits
# ...use edit to adapt prior commits
```

Don't panic if something goes wrong, there is an emergency trip wire:

```
git rebase --abort
```

What does your git cheat sheet look like? Feel free to comment.
