---
title: "Tech x Orbit Meetup #0010: The Why and How of GitOps"
date: "2023-05-15"
categories: 
  - "infrastructure-as-code"
  - "software-development"
tags: 
  - "coding"
  - "gitops"
  - "it"
coverImage: "/assets/blog/gitops/screenshot-2023-05-15-at-09.33.11.png"
author:
  name: Ellen Schwartau
  picture: "/assets/blog/authors/ellen.png"
excerpt: "Another week, another meetup! Joblift came to visit and talked about the Why and How of GitOps. Their platform includes over 100 microservices and comes with hugely interesting challenges!"
---

For the second event of our meetup Joblift joined us, talking about how and why they use GitOps. The platform of the Hamburg-based start-up offers extensive features to help users find a (new) job in the manner of a job coach. This includes over 100 microservices with various technologies and a vast amount of job data in the import.

![](images/img_1834-edited-1.png)

## Takeaway: GitOps Principles

> _OpenGitOps is a set of open-source standards, best practices, and community-focused education to help organizations adopt a structured, standardized approach to implementing GitOps._
> 
> https://opengitops.dev/

**Declarative**: A [system](https://github.com/open-gitops/documents/blob/v1.0.0/GLOSSARY.md#software-system) managed by GitOps must have its desired state expressed [declaratively](https://github.com/open-gitops/documents/blob/v1.0.0/GLOSSARY.md#declarative-description).  
**Versioned and Immutable:** Desired state is [stored](https://github.com/open-gitops/documents/blob/v1.0.0/GLOSSARY.md#state-store) in a way that enforces immutability, versioning and retains a complete version history.  
**Pulled Automatically:** Software agents automatically pull the desired state declarations from the source.  
**Continuously Reconciled:** Software agents [continuously](https://github.com/open-gitops/documents/blob/v1.0.0/GLOSSARY.md#continuous) observe actual system state and [attempt to apply](https://github.com/open-gitops/documents/blob/v1.0.0/GLOSSARY.md#reconciliation) the desired state.

## The How of Infrastructure at Orbit

Our newbie Christian added a second talk, about the How of Infrastructure at Orbit. In venture building, the products and services drive the technical infrastructure. Orbit needs to support all phases of building a venture, from the discovery to scaling the business. A constant in this is, that all developers must be able to provision infrastructure, adapt it to the needs of the project and be able to switch context with relative ease. How do we tackle these challenges at Orbit? Where do we stand and what still needs to be done in the future? For more info checkout _[Orbits Tech Snack](https://techsnack.orbitdigital.de/posts/orbit-meetup-cloud-run)_ blog.

**Do you want to be part of our next meetup?** Good news: the next one is already planned! We’ll have Joblift visiting us and talking about the why and how of GitOps on May 11th! [Find it on Meetup](https://www.meetup.com/de-DE/tech-x-orbit/events/291436063/) and join the group to not miss future events!
