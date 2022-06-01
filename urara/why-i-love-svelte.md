---
title: Why I ❤ Svelte
summary: |
  In this article I explain why I am in love with Svelte and why you should be too.
date: 2021-03-29
updated: 2021-03-29
tags:
  - svelte
  - webDev
---

# Why I ❤ Svelte

[Svelte](https://svelte.dev/) differs from SPA frameworks like Angular, Vue and React in that it is a _compiler_ that builds the components, thereby producing more efficient JavaScript.

Angular, Vue and React require the entire framework to be loaded in the browser, while Svelte does not need this due to the build step.
With Svelte, individual components or an entire web app are compiled into JavaScript bundles that are as small as possible.
Smaller bundles allow the app to be loaded faster by visitors initially. [RealWorld App Comparison of Bundle Sizes.](https://medium.com/dailyjs/a-realworld-comparison-of-front-end-frameworks-2020-4e50655fe4c1#31f0)

In addition, Svelte provides better runtime performance than other frameworks.
The compiler builds efficient JavaScript from your component source files which surgically changes the DOM.
This eliminates the need for continuously comparing against a Virtual DOM.
[RealWorld App Comparison of Performance.](https://medium.com/dailyjs/a-realworld-comparison-of-front-end-frameworks-2020-4e50655fe4c1#ac34)

Those two things in combination, _compiling_ our sourcecode to regular imperative JS code that _surgically updates the DOM_, ultimately means we are doing less work in the users browsers, making the current approach seem silly in comparison.

In addition, the Svelte compiler allows its own syntax, which leads to simple, boilerplate-free code.
Svelte, unlike React, does not use JSX, but its own syntax based on normal HTML, CSS and JavaScript.
The syntax is thus a superset of HTML which can define encapsulated components as a single file component.
[Example of a nested component.](https://svelte.dev/examples#nested-components) The syntax allows you to be super concise and it feels like Svelte is getting out of your way as much as possible, allowing to to add as much or as little sugar as you want. Because its a superset of HTML you can still do about everything you have learned about classic web dev! Old-school libraries just work, because [if they output some HTML as a String you can use Svelte to render it for you!](https://svelte.dev/repl/30d2efe6622f4150a73405b706d58321?version=3.42.5)

The compiler also offers other special features such as built-in [accessibility testing](https://svelte.dev/repl/5ed4cb37c0ef43e4a709d6e8f37069c2?version=3.35.0) and a [transition and animation API](https://svelte.dev/repl/f78106a749934114ae274828f1e3390c?version=3.35.0) that are included.
Only the features that are used end up in the final bundle, so a variety of features can be included inside Svelte without every end-user having to pay the cost.

Svelte also has a 100% score on [Custom Elements Everywhere](https://custom-elements-everywhere.com/#svelte), a site that tests the compatibility of frameworks with Web Components.
Furthermore, the Svelte compiler can also be used [to generate Web Components as output](https://dev.to/silvio/how-to-create-a-web-components-in-svelte-2g4j).
Thus it would be possible to change out the framework of an existing, previously Svelte based Application by compiling the Svelte components to high-performance Web Components and using them in a rewrite.
In a Webcomponents.dev article titled ["All the Ways to Make a Web Component"](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/), Svelte ranked third for bundle size of a single Web Component and fourth for performance.
This makes Svelte the only library (besides the regular HTMLElement-based approach) in the top 5 in both categories. (Note: Prism is currently above Svelte in both bundle size and performance. That said Prism was just an experimental Project that will no longer be developed, [according to its GitHub Description](https://github.com/kaleidawave/prism).)

While Svelte is still relatively new, there is already a fairly active, well-organized, and helpful community.
For example, projects like [Routify](https://routify.dev/) provide a simple folder structure based router that can easily be delivered as a server side rendered app. _This website is written using Routify!_ (Note: Not anymore actually, I rewrote it in Astro because it fits the use case better).
[Elder.js](https://elderguide.com/tech/elderjs/) is a framework to create huge, static and SEO friendly web applications.
With [`@sveltejs/vite-plugin-svelte`](https://www.npmjs.com/package/@sveltejs/vite-plugin-svelte), the lightning fast [Vite](https://vitejs.dev/) can be used as a dev sever and production bundler.
[Svelte also took first place in the Satisfaction and Interest categories in the Front-end Frameworks section of the State of JS 2020 Survey.](https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/#front_end_frameworks_experience_ranking)

[`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess) is an official preprocessor that enables the use of [TypeScript](https://www.typescriptlang.org/) and [Sass/SCSS](https://sass-lang.com/) (among other technologies) within Svelte components without complicated configurations.

## TLDR Pro Svelte:

- smaller .js bundles for the client bringing faster initial load times
- better performance, as no Virtual DOM
- simple, boilerplate-free, HTML-based syntax gets out of your way
- other advantages like integrated accessibility testing and transition API
- Compatible with Web Components and also as possible output of the compiler
- Active and helpful community
- TypeScript compatible, thanks to `svelte-preprocess`
