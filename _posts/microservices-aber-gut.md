---
title: "Microservices, aber gut?"
date: "2021-10-10"
categories: 
  - "microservices"
  - "software-architecture"
  - "technology"
author:
  name: Ellen Schwartau
  picture: "/assets/blog/authors/ellen.png"
---

_Verfasst als [Techsnack des Orbit Technology Blogs](https://techsnack.orbitdigital.de/posts/love-to-ada-locelace)_

Die Softwarelandschaft ist übersäht von serviceorientierten Architekturen. Monolithen gelten als _“nicht mehr State of the Art_” – Heute _“macht man halt Microservices”_. Außer Acht gelassen wird jedoch der Aspekt, dass man es richtig machen muss, um tatsächlich einen Nutzen aus dieser Architektur zu ziehen. Folgender Artikel gibt einen Überblick über die Qualitätskriterien, die dazu erfüllt werden sollten.

#### Was hat das Thema bei uns auf den Tisch gebracht?

Während der Zusammenarbeit mit einem Kunden entstand innerhalb des ersten Jahres eine monolithische Struktur. Gerade zu Beginn hatte die Entwicklung in dieser Form viele Vorteile: Nur ein Projekt muss erstellt und deploy- sowie lauffähig gemacht werden. Auch lokal lässt sich die Anwendung fix starten, weil nur einer statt zahlreicher Services involviert sind. Zudem nutzt das gesamte Entwicklerteam denselben Tech-Stack und die gesamte Domäne ist zugreifbar.

<figure>

![](https://ellenschwartau.files.wordpress.com/2021/10/image-2.png?w=788)

<figcaption>

["Don't start with a monolith" by Martin Fowler](https://martinfowler.com/articles/dont-start-monolith.html)

</figcaption>

</figure>

Klingt In der Theorie super, und auch wenn Monolithen in der Praxis nicht per se eine unsaubere Architektur bedeuten erinnert das Ergebnis in der Realität meist leider doch an Pasta statt sauber getrennten Bereichen. Zwar stellten wir über Codestyle-Regeln sicher, dass die beinhalteten Domänen voneinander getrennt blieben, für eine parallele Entwicklung mit zwei Entwicklerteams reichte das jedoch nicht mehr aus: Mittelgroße Refactorings des einen Teams blockierten das andere, Kommunikation wie auch Absprachen fraßen unsere Zeit und bei Deployments konnte man entspannt einmal um den Block spazieren.

<figure>

![](https://ellenschwartau.files.wordpress.com/2021/10/image-1.png?w=660)

<figcaption>

Entwicklungseffizienz bei wachsender Komplexität in Relation der Ansätze zueinander

</figcaption>

</figure>

Für eine strikte Trennung der Teams entschieden wir uns dazu, den Monolithen in mehrere Teile zu zerlegen. Im Zuge dessen beschäftigten wir uns mit der Frage, welche Kriterien Microservices erfüllen sollten, um einen positiven Beitrag zur Softwarequalität zu leisten. Denn bei unbedachtem Vorgehen wird aus _einem_ [“Ball of mud”](http://www.laputan.org/mud/) leider eine Gruppe verteilter [“balls of mud”](http://www.codingthearchitecture.com/2014/07/06/distributed_big_balls_of_mud.html):

![](https://lh6.googleusercontent.com/hg-VJtqmOdTQxDwc2IKLCHAnrnU0xoSHGG_ndUOjKuV7JCmMRhCqZSVuEh-beX45hDTXMUkO1ujLyhhW834r2QRCyw50QJubpsa9Kj3BRcu2Vc_Knk80_STghFk-a6FrlJHywFzb=s0)

#### Was tun, um das zu verhindern?

Generell muss die Entscheidung für eine Software-Architektur immer im Kontext des Anwendungsfalls getroffen werden. Soll beispielsweise innerhalb einiger Wochen ein Prototyp auf die Beine gestellt werden, ist das Investment in Microservices nicht die beste Idee. Fällt die Wahl begründet auf Microservices, weil beispielsweise die unabhängige Skalierung einzelner Teile der Applikation von Bedeutung ist, sollten bestimmte Kriterien berücksichtigt werden. Andernfalls wird die Komplexität eines verteilten Systems eingekauft, ohne im Gegenzug daraus Profit zu schlagen.

**Ausgereifte Infrastruktur**  
Zunächst muss die Komplexität des verteilten Systems bewältigt werden. Um eine schnelle und effiziente Entwicklung sicherzustellen, ist eine ausgereifte Infrastruktur unabdinglich. Diese umfasst unter anderem die Automatisierung des Systems auf Ebenen wie Delivery und Deployment, Load Balancing mit Service Discovery sowie Monitoring.

**Passende Abgrenzung**  
Nicht nur das _Was,_ sondern ebenso das _Wie_ ist ausschlaggebend, um zwischen den Services eine passende Abgrenzung zu treffen getroffen. Ziel ist hier die lose Kopplung, um möglichst wenig Abhängigkeiten zwischen den Services zu erhalten. Jeder einzelne Service soll zudem über hohe Kohäsion verfügen und demnach Funktionalität in Gänze umsetzen. Zur Abgrenzung der Services stellt das [DDD eine ganze Kiste an Werkzeugen](https://www.informatik-aktuell.de/entwicklung/methoden/ddd-context-is-king-kein-context-keine-microservices.html) bereit.

**Unabhängigkeit**   
Es genügt nicht nur, den Code in separate Repositories aufzuteilen. Ein System mit zehn getrennten Services kann noch immer einen Monolithen darstellen, wenn alles gemeinsam deployed werden muss. Anzustreben ist also nicht nur unabhängiger Code, sondern auch ein unabhängiges Deployment. Ebenso zu vermeiden sind Laufzeit-Monolithen.

**Passende Technologien**  
Die getrennte Code-Basis und unabhängig lauffähige Applikationen machen es möglich, dem Verwendungszweck entsprechende Technologien zu nutzen. Diese sollte bedacht gewählt und die Gefahr des Technologiepluralismus gegengerechnet werden.

**Kommunikation und Reaktion**  
Je loser die Komponenten gekoppelt sind, desto weniger Kommunikation muss stattfinden. Komplett darauf verzichten lässt sich meist jedoch nicht. Dann gilt die “asynchron first”-Devise aus dem [Reactive Manifesto](https://www.reactivemanifesto.org/de), nach der Daten bevorzugt über Nachrichten ausgetauscht werden sollen. Das Manifest definiert zudem weitere Kriterien reaktiver Systeme: Antwortbereitschaft, Widerstandsfähigkeit, Elastizität (also die Anpassungsfähigkeit auf sich ändernde Lasten) sowie Wartbar- und Erweiterbarkeit. Im Grunde zahlen alle der Punkte auf die Reaktionsfähigkeit ein.

**Fehlertoleranz**  
Ein zusammengesetztes System bietet natürlich zahlreiche Punkte, an denen etwas kaputt gehen kann. Hier sollte ein Auge auf der Fehlertoleranz liegen: Ist ein Service langsam oder gar ausgefallen, sollte der Rest des Systems weiter funktionieren. Der [Chaos Monkey von Netflix](https://netflix.github.io/chaosmonkey/) zielt genau hierauf ab und setzt einzelne Komponenten außer Gefecht, um sich ausbreitende Fehlerquellen zu identifizieren. Denkbar wäre der Einsatz von Caching, um als Fallback-Mechanismus auf zuvor abgefragte Daten zurückzugreifen, oder der Einsatz von Circuit Breakern, um dem Nutzer eine schnellere Antwort zu liefern und im Gegenzug Regenerationszeit einzukaufen.

**Zustand und Datenhaltung**  
Ohne das Vorhandensein eines Zustands können ohne Probleme mehrere Instanzen eines Services gestartet werden. Zustandslosigkeit ist demnach ein anzustrebender Aspekt. Problematisch wird es jedoch, wenn mehrere Instanzen einen eigenen Zustand verwalten, der zudem synchronisiert werden muss.

<figure>

![](https://ellenschwartau.files.wordpress.com/2021/10/image.png?w=1024)

<figcaption>

Verteilter Zustand und verteilte Datenhaltung

</figcaption>

</figure>

Eine gängige Lösung ist, diesen Zustand in eine geteilte Datenbank auszulagern. Hier sollte jedoch keine gemeinsame Datenbank für alle Services vorhanden sein, sondern eine verteilte Datenhaltung umgesetzt werden. Ansonsten blockieren Datenmigrationen das gesamte System und einem Ausfall auf Ebene der Persistenz kann nicht wirklich etwas entgegengesetzt werden.

#### Zusammenfassung

Die Qualitätskriterien in Kürze:

- Eine ausgereifte Infrastruktur zur Bewältigung des verteilten Systems
- Unabhängige Deploybarkeit der Komponenten
- Passende Technologien mit Berücksichtigung des Technologiepluralismus
- Änderbarkeit der Komponenten
- Eine passende Abgrenzung, mit dem Ziel der losen Kopplung und einer hohen Kohäsion
- Möglichst geringer Kommunikationsaufwand
- Reaktionsfähigkeit und Fehlertoleranz des Systems
- Zustandslosigkeit sowie eine verteilte Datenhaltung

Nicht alle der oben genannten Kriterien können zu jedem Zeitpunkt erfüllt werden, deren Berücksichtigung erhöht aber die Chance darauf, statt bei _“distributed balls of mud”_ bei einer (mehr oder weniger) wohlgeformten Architektur zu landen:

<figure>

![](https://ellenschwartau.files.wordpress.com/2021/10/image-3.png?w=1024)

<figcaption>

Realistischeres Bild einer Microservice-Architektur

</figcaption>

</figure>

Werden obige Punkte bei der Einleitung einer verteilten Architektur berücksichtigt, stehen die Chancen gut mit Microservices einen Zugewinn zu erlangen. Unser erster Schritt im anfangs erwähnten Projekt war das Heraustrennen eines ersten Microservices aus dem Monolithen. Dabei implementierten wir die Basis für eine serviceorientierte Architektur und stellten die Infrastruktur zur Kommunikation zwischen unabhängigen Komponenten bereit. Fortan wurden neue funktionale Bestandteile direkt als Microservices umgesetzt und Stück für Stück weitere Bereiche aus dem Monolithen herausgelöst.

#### Links:

- [Building Microservices - Designing fine-grained Systems (Sam Newman)](https://www.amazon.de/Building-Microservices-Sam-Newman/dp/1491950358)
- [Microservices - Grundlagen flexibler Softwarearchitekturen (Eberhard Wolff)](https://www.amazon.de/Microservices-Grundlagen-Softwarearchitekturen-Eberhard-Wolff/dp/3864903130)
- [Microservices (Martin Fowler)](https://martinfowler.com/articles/microservices.html) 
- [Don't start with a monolith](https://martinfowler.com/articles/dont-start-monolith.html)
