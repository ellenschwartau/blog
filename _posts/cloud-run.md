---
title: "Tech x Orbit Meetup #0001: Cloud Run with Doreen Sacker"
date: "2023-05-10"
categories:
  - "software-development"
tags:
  - "cloud"
coverImage: "/assets/blog/cloud-run/image-4.png"
author:
  name: Ellen Schwartau
  picture: "/assets/blog/authors/ellen.png"
url: "/posts/cluud/cloud-run"
---

Our first own Tech Meetup at Orbit is dedicated to 🥁 CLOUD 🥁 We have invited an exciting speaker for you: Doreen Sacker, Senior Data Scientist at Opinary! She talked about how they increased the performance of their recommendations enormously by moving to Cloud Run.

**Background**

Opinary places surveys in online articles and needs to generate recommendations to do so. Since these polls are displayed in between the text, users need to scroll to see them. Thus, performance and taking the results 20 seconds to appear didn’t matter much at first. Still, slow software also costs money. So they decided to move their machine learning pipeline from the Kubernetes engine to Cloud Run.

**What’s Cloud Run?**

Cloud Run is Google's serverless solution: Instead of having software running all the time, just waiting there for incoming requests, burning money, you spring them up on demand. Sounds like a plan to reduce cost. But at the first attempt, Opinary was burning even more money. How though?

**Key takeaway: Beware of waiting times**

First moving their application to Cloud Run was done with a few changes. Unfortunately, instead of decreasing cost, these were four times higher than before. So what’s the issue? This is what the architecture looked like, after the migration:

<figure>

![](https://ellenschwartau.files.wordpress.com/2023/05/image-2.png?w=1024)

<figcaption>

First attempt to move to Cloud Run (source: [Google Cloud Blog](https://cloud.google.com/blog/topics/developers-practitioners/opinary-generates-recommendations-faster-cloud-run?hl=en))

</figcaption>

</figure>

As you can see, the recommender service plays the role of an orchestrator: When receiving a request, it takes over pinging the other services one after the other. This results in the recommender service being spun up and waiting for the other services to respond.

<figure>

![](https://ellenschwartau.files.wordpress.com/2023/05/image.png?w=1024)

<figcaption>

Waiting times of the first attempt (source: [Google Cloud Blog](https://cloud.google.com/blog/topics/developers-practitioners/opinary-generates-recommendations-faster-cloud-run?hl=en))

</figcaption>

</figure>

The overall time of running services without them being busy decreased, but the recommender service was now running in a much more expensive environment. Note to self: Cloud Run Services that need to wait are expensive and should be avoided at all costs, otherwise, they incur additional costs.

**Get rid of the orchestration pattern**

To reduce the runtime of the services the architecture needed to be adapted more than just changing some aspects like before:

<figure>

![](https://ellenschwartau.files.wordpress.com/2023/05/image-1.png?w=964)

<figcaption>

Meetup: Doreen speaks about problems concerning the orchestration pattern

</figcaption>

</figure>

Instead of the request-based data flow an event-based pattern was introduced; intermediate results were stored in a Cloud Storage bucket, triggering the next service to take action.

<figure>

![](https://ellenschwartau.files.wordpress.com/2023/05/image-3.png?w=1024)

<figcaption>

Adapted architecture using events (source: [Google Cloud Blog](https://cloud.google.com/blog/topics/developers-practitioners/opinary-generates-recommendations-faster-cloud-run?hl=en))

</figcaption>

</figure>

This way, each service was active only when its action was required. Read the fully fledged story about Opinary moving to Cloud Run in [this Blog Post](https://cloud.google.com/blog/topics/developers-practitioners/opinary-generates-recommendations-faster-cloud-run?hl=en).

**What does the Cloud mean in the context of our work as a Corporate Venture Builder?**

Unlike in developing a single product, the Cloud we use varies from project to project for various reasons. Our tech team opened up the discussion on what’s the most beautiful cloud (no. 7) 🌤️ and where our pain points lie. 🌩️

<figure>

![](https://ellenschwartau.files.wordpress.com/2023/05/image-5.png?w=885)

<figcaption>

Meetup: Mathias, CTO at Orbit, talks about what Cloud means in Orbits context

</figcaption>

</figure>

**So, how did our first meetup go?**

Approximately 20 people attended our first meetup; the atmosphere was relaxed and drinks and pizza encouraged networking after the talks. The best part was: Each talk was followed by an engaged discussion: Having a 20 minute talk followed by ten minutes of question and answers speaks to itself.

**Do you want to be part of our next meetup?** Good news: the next one is already planned! We’ll have Joblift visiting us and talking about the why and how of GitOps on May 11th! [Find it on Meetup](https://www.meetup.com/de-DE/tech-x-orbit/events/291436063/) and join the group to not miss future events!

_Originally posted as part of [Orbits Tech Snack](https://techsnack.orbitdigital.de/posts/orbit-meetup-cloud-run)._
