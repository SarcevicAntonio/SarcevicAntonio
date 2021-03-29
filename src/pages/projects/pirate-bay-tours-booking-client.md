---
title: Pirate Bay Tours Booking Client
summary: |
  During my 1th semester of my Informatics Masters's degree, we got tasked to create an offline-first booking app for internal use by a cruise line.
published: 2021-03-29
layout: blog
---

<script>
  import Resources from '../../components/Resources.svelte'
</script>

# {title}

During my 1th semester of my Informatics Masters's degree, we got tasked to create an offline-first booking app for internal use as part of a distributed database course. The idea was that there is a company offering cruise ship tickets and they need an internal booking app for sales agents to use on offline tablets when they recruit new customers.

We had the following loose requirements:

- Booking App to be internally used by Sales Agents to register new reservations
- multiple travel tours / boats with different capacities
- multiple sales agents working offline
- sync everybody together at some point

The issue is, that you don't want too much overbooking. So we generate an allowance per tour for every sales agent at sync that gets used up when the user makes reservations. Our solution implemented CouchDB with a WebApp based frontend plus a server side script for pending bookings that were above the allowance.

A more detailed description of the booking algorithm can be found inside the Project Documentation linked below. Its written in german but DeepL exists 😉 It also covers data strucutres used and the component organization of the frontend plus a user manual.

![UI of Pirate Bay Tours Booking Client](/files/projects/pirate-bay-tours/pbt-ui.png)

The web app was originally written using just jQuery and PouchDB. I later rewrote it in Svelte because i wanted to learn it. It's excellent. I've also added more features (auth, printing of reservations, adding themes, markdown tour descriptions) since the new codebase is much better to work in.

CouchDB is for the most part pretty easy to work with, except when it comes to user accounts. There doesn't seem to be a "built in" handling of user accounts, only admin account so i guess you just have to roll your own user storage. But for creating an offline fist application that has to replicate to a remote database CouchDB+PouchDB works like a breeze with zero config required. Using it inside Svelte was also pretty easy.

## Final Results

<Resources items={[{
href: "https://github.com/SarcevicAntonio/Booking-App",
txt: "Project Repo on GitHub"
},{
href: "/files/projects/pirate-bay-tours/VI___Dokumentation.pdf",
txt: "Project Documentation (23 pages, written in german)"
}]}/>
