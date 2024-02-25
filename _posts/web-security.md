---
title: "First Thoughts on Web Security"
date: "2023-08-18"

categories: 
  - "learning"
  - "software-development"
tags: 
  - "it"
  - "learn"
  - "web-security"
author:
  name: Ellen Schwartau
  picture: "/assets/blog/authors/ellen.png"
excerpt: "I recently attended We Are Developers and took the opportunity to gather insights in the field of web security; An area where I definitely lack knowledge, even though I consider it our responsibility as developers to build secure applications. 🔐 I decided to delve deeper into the topic; here's what I learned today."
coverImage: "/assets/blog/web-security/web-security-talk.JPG"
---

I recently attended We Are Developers and took the opportunity to gather insights in the field of web security; An area where I definitely lack knowledge, even though I consider it our responsibility as developers to build secure applications. 🔐 I decided to delve deeper into the topic; here's what I learned today.

## Oh, WASP!\* 🐝 \*\*

\*so sorry, but I couldn't resist...  
\*\* And yes this is a bee, not a wasp

The first thing that caught my attention was the **O**pen **W**eb **A**pplication **S**ecurity **P**roject, which aims to improve software security. This amongst others includes the [top 10 list of web security risks](https://owasp.org/Top10/) and a [web security testing guide](https://owasp.org/www-project-web-security-testing-guide/).

> **The OWASP® Foundation** works to improve the security of software through its community-led open source software projects, hundreds of chapters worldwide, tens of thousands of members, and by hosting local and global conferences.
> 
> owasp.org

### OWASP Top 10

[The most recent official update was published in 2021.](https://owasp.org/www-project-top-ten/) The data used consists of vulnerabilities found in applications, which were submitted by security vendors and consultancies, bug bounties (didn't know this term existed), and further. Such a submission would look similar to this one:

<figure>

| **Apps Tested** | **CWE** | Vulnerable Apps | **Report Year** | **Contributor Name** | **Contributor Contact Email** | **Type of Testing** | **Primary Language** | **Region** | **Industry** | **Retest** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 27 | 20 | 3 | 2018 | Jane Doe | ... | TaH | PHP | Global | Non-Technology | No |
| 66 | 125 | 2 | 2020 | Jane Doe | ... | Tooling | C | North America | Technology | No |
| 42 | 284 | 7 | 2020 | Jane Doe | ... | HaT | .NET | Europe | Retail | No |

<figcaption>

[Made up data based on the sample data submission files in the OWASP Top 10 Github repo](https://github.com/OWASP/Top10/tree/master/2021/Data)

</figcaption>



</figure>

**CWE** categorizes the type of risk based on the [common weakness enumeration](https://cwe.mitre.org/data/definitions/2000.html). The examples devised above mention vulnerabilities of _Improper Input Validation_ (20), _Out-of-bounds Read_ (125), and _Improper Access Control_ (284). The type of testing can be **H**uman-**a**ssited **T**ooling, **T**ool-**a**ssited **H**uman and raw **Tooling**. The collected data was used to update the top 10 security risks for 2021, also showing the changes compared to 4 years prior:

<figure>

![](https://ellenschwartau.files.wordpress.com/2023/08/image.png?w=936)

<figcaption>

Image from https://owasp.org/www-project-top-ten/

</figcaption>

</figure>

**Color Codes:** orange ranked down, yellow was merged with another category, green ranked higher than before.

More in-depth info about the collected data and their processing [can be found here](https://owasp.org/Top10/). Let's have a closer look at the newly listed vulnerabilities:

**[Insecure Design:](https://owasp.org/Top10/A04_2021-Insecure_Design/)** In contrast to an insecure implementation this category points to weaknesses or errors in how software is designed. A well-known example here is using "security" questions to allow you to reset your password. Nevertheless how safe the code is implemented, more than the person themselves could know its cat's name is Gerhard, thus the design itself is insecure.

**Total occurrences:** >262k  
**Avg. Incidence Rate:** 3%  
**Avg. Weighted Exploit:** 6.46 / 10  
**Avg. Weighted Impact:** 6.78 / 10

**[Software and Data Integrity Failures:](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)** Whenever you decide to include a library or external data in your application, the authenticity needs to be checked, meaning they are genuine and unaltered. This task should not only be performed at the moment you integrate them the first time, but also when updates are applied. Also, your CI/CD Pipeline and (De-)Serialisation plays a role here. For a real-world example of what may happen, you can read about the [SolarWinds Orion Attack](https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained-Everything-you-need-to-know), where a malicious update was spread in 2020.

**Total occurrences:** ~48k  
**Avg. Incidence Rate:** 2.05%  
**Avg. Weighted Exploit:** 6.94 / 10  
**Avg. Weighted Impact:** 7.94 / 10

**[Server-Side Request Forgery:](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)** If your application provides users with the functionality to input and fetch a URL, this offers opportunities for attacks. For instance, an attacker could create a URL such as `file:///etc/passwd`, `http://localhost:28017/` or `http://169.254.169.254/`, attempting to retrieve internal, metadata, or sensitive information.

**Total occurrences:** ~9.5k  
**Avg. Incidence Rate:** 2.72%  
**Avg. Weighted Exploit:** 8.28 / 10  
**Avg. Weighted Impact:** 6.72 / 10

## Conclusion for today

The OWASP top 10 definitely doesn't provide a complete list of security vulnerabilities, but it does give a fairly up-to-date overview of what web developers should be aware of at the very least. Especially, I will take a closer look at the listed examples of attacks and the tools for prevention. No one can guarantee 100% secure applications, but understanding the commonly exploited vulnerabilities is a first step.

Plus this is on my reading list: [This GitHub repo about OWASPs Web Security Testing Guide](https://github.com/OWASP/wstg/tree/master) is on my reading list.
