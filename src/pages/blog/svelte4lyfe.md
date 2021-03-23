---
title: Wieso ich Svelte liebe
summary: |
  In diesem Artikel erkläre ich, wieso ich in Svelte verliebt bin und wieso Sie es auch sein sollten.
layout: blog
---

# {title}

[Svelte](https://svelte.dev/) unterscheidet sich von SPA Frameworks wie Angular, Vue und React dadurch, dass es ein _Compiler_ ist, der die Komponenten baut, und dadurch möglichst effizientes JavaScript produziert.

Bei Angular, Vue und React muss im Browser das gesamte Framework geladen werden, während Svelte durch den Bau-Schritt dies nicht benötigt.
Hier werden die Komponenten bzw. die Webapplikation zu möglichst kleinen JavaScript Bundles kompiliert.
Durch kleinere Bundles kann die App initial schneller von Besuchern geladen werden. [RealWorld App Vergleich von Bundle Sizes.](https://medium.com/dailyjs/a-realworld-comparison-of-front-end-frameworks-2020-4e50655fe4c1#31f0)

Außerdem bietet Svelte eine bessere Performance bei Laufzeit als andere Frameworks.
Der Compiler baut aus Komponenten effizientes JavaScript was chirurgisch das DOM verändert.
Dadurch wird kein Abgleichen mit einem Virtual DOM benötigt.
[RealWorld App Vergleich von Performance.](https://medium.com/dailyjs/a-realworld-comparison-of-front-end-frameworks-2020-4e50655fe4c1#ac34)

Außerdem erlaubt der Svelte Compiler eine eigene Syntax, welche zu einfachem, boilerplate freiem Code führt.
Svelte nutzt im Gegensatz zu React kein JSX, sondern eine eigene Syntax, die auf normalem HTML, CSS und JavaScript basiert.
Die Syntax ist somit ein Superset von HTML welches als Single File Component gekapselte Komponenten definieren kann.
[Beispiel einer geschachtelten Komponente.](https://svelte.dev/examples#nested-components)

Der Compiler bietet außerdem noch andere Vorteile wie eingebautes [Accessibility Testing](https://svelte.dev/repl/5ed4cb37c0ef43e4a709d6e8f37069c2?version=3.35.0) und eine [Transition und Animation API](https://svelte.dev/repl/f78106a749934114ae274828f1e3390c?version=3.35.0) die mitgeliefert werden kann.
Nur die Features die genutzt werden landen im fertigen Bundle, weshalb eine Vielzahl von Features mitgeliefert werden kann.

Svelte hat zusätzlich einen 100 % Score auf [Custom Elements Everywhere](https://custom-elements-everywhere.com/#svelte), eine Seite bei der die Kompatibilität von Frameworks mit Web Components getestet wird.
Außerdem kann der Svelte Compiler auch genutzt werden, [um Web Components als Output zu generieren](https://dev.to/silvio/how-to-create-a-web-components-in-svelte-2g4j).
Dadurch wäre es möglich, dass bei einem wechsel des Frameworks auch Komponenten als performante Web Components exportiert werden und mitgenommen werden können.
In einem Webcomponents.dev Artikel mit dem Titel ["All the Ways to Make a Web Component"](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/) hat Svelte bei der Bundle Size von einer Komponente den dritten Platz und bei der Performance den vierten Platz belegt.
Damit ist Svelte als einzige Bibliothek (neben dem regulären HTMLElement-basierten approach) in beiden Kategorien unter der Top 5.

Svelte ist zwar noch relativ neu, jedoch gibt es schon eine ziemlich aktive, gut organisierte und hilfreiche Community.
Projekte wie [Routify](https://routify.dev/) bieten z.B. einen einfachen Ordnerstruktur-basierten Router der sogar als Server Side Renderd App ausgeliefert werden kann.
[Elder.js](https://elderguide.com/tech/elderjs/) ist ein Framework zu erstellen von riesigen, statischen und SEO freundlichen Webapplikationen.
Mit [`@sveltejs/vite-plugin-svelte`](https://www.npmjs.com/package/@sveltejs/vite-plugin-svelte) kann das blitzschnelle [Vite](https://vitejs.dev/) als Dev-Sever und Bundler genutzt werden.
[Svelte hat außerdem den ersten Platz in den Kategorien Satisfacion und Interest in der Rubrik Front-end Frameworks im State of JS 2020 Survey erreicht.](https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/#front_end_frameworks_experience_ranking)

[`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess) ist ein offizieller Preprocessor der das Benutzen von u.a. [TypeScript](https://www.typescriptlang.org/) und [Sass/SCSS](https://sass-lang.com/) innerhalb von Svelte Komponenten ohne komplizierte Konfigurationen ermöglicht.

## TLDR Pro Svelte:

- kleinere .js Bundles für den Client
- bessere Performance, da kein Virtual DOM
- einfache, boilerplate-freie, auf HTML basierte Syntax
- weitere Vorteile wie integriertes Accessibility Testing und Transition API
- Kompatibel mit Web Components und auch als möglicher Output des Compilers
- Aktive und hiflreiche Community
- TypeScript kompatibel, dank `svelte-preprocess` sogar ohne Konfiguration
