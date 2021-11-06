---
title: How to create and publish a Toast library package with SvelteKit
summary: |
  Toasting in Svelte 🍞
published: 2021-10-14
layout: ../../layouts/PostLayout.astro
tags:
  - svelte
  - webDev
---

# How to create and publish a Toast library package with SvelteKit

In this article I will explain how to create a reusable toast library npm package for Svelte using SvelteKit.
We will cover what a toast is and use Svelte Components and a Store to create one ourselves.
If you just want to jump straight into the code, have [this REPL](https://svelte.dev/repl/ff8317744f4b4c3e8972a313a044e882?version=3.44.1), but this article also coves how you can use SvelteKit to package it all up.

## What are toasts?

By toasts, I mean notification-like floating text messages, that display brief informational text for users, without requiring action.
They are sometimes also called by other names like [Notifications in Carbon Design](https://www.carbondesignsystem.com/components/notification), [Snackbars in Material Design](https://material.io/components/snackbars) or [Alert in MUI](https://mui.com/components/alert/).

![Anatomy of a Toast Component, with the Toast as a Container for Text Content and a Cancel Button](/files/blog/toasting-in-svelte/Anatomy.png)

They all have in common, that they can display information to users, without interrupting them, unlike a modal or dialog which require some kind of action from the user.
Toasts typically also dismiss themselves after a timeout, but some versions also include a cancel button, so the user can dismiss the toast themselves if they are done with it.

## Package Goals

When creating a package, you need to think about how someone would use it. The closest browser-native analog is probably the "old-school" JavaScript `alert(msg)` method, which isn't exactly the same as a toast, because it blocks the user from interacting with the page until he closed the alert window.
I want to make displaying toasts as easy as displaying native alert windows.
So my package probably will export some kind of `addToast(mgs)` function, that can be called to create a new toast.

We might also want to be able to support different types of toast notifications, for example a 'warn' type toast that is displayed on a red background to signify the user, that something went wrong, like it didn't submit a form for example. Being able to set how long a toast stays visible could also be useful, for example if the text gets longer and you want the toast to be displayed for longer.

The usage of the package we will be creating could look like this:

```html
<script>
    import { Toasts, addToast } from "my-toast-lib-name";
    let value = "Hello World"
</script>

<Toasts/>

<input bind:value/>
<button on:click={() => {addToast(value)}}>
  Add as default info Toast
</button>
<button on:click={() => {addToast(value, 'warn', 8000)}}>
  Add as warning Toast that displays longer
</button>
```

## Using SvelteKit to create packages

The cooles thing about [SvelteKit](https://kit.svelte.dev/) is the option to bundle your `src/lib` folder as an npm Package in a snap.
Normally you think of SvelteKit as an application framework, where the contents of the `src/routes` folder are the public pages of your application, and the `src/lib` folder is used for an apps shared code or internal library.
But using `svelte-kit package` reverses this paradigm and your `src/lib` folder becomes the public facing package and the `src/routes` can be used for testing, as a demo and a documentation.
Using a `src/lib/index.js` file you can configure the packages entry point root and SvelteKit even creates type definitions inside `.d.ts` files for you!
[You can read more about packaging libraries with SvelteKit in the Docs.](https://kit.svelte.dev/docs#packaging)

To get started, create a new SvelteKit project using `npm init svelte@next my-toast-lib-name` (note: the `@next` is only needed while SvelteKit isn't at 1.0 yet and will not be needed after an official release). Select your preferred options, then go to the new folder.
After this setup, we can get started with creating the toast package.

## Creating the package

To build the toast package, we start by creating a couple of files inside the `src/lib` folder.

- `toastStore.js`: this will create a store that holds all active toast notifications and also exports functions to add and remove toasts.

- `Toast.svelte`: this will display a single toast notification.

- `Toasts.svelte`: this will read from the toastStore and display a list of `Toast` components for every toast entry in the store.

- `index.js`: this will describe the root of the package entry point and allows for clean importing of library exports.

Note that you can also write `.ts` files if you opted into TypeScript at the initialisation of the SvelteKit project.

### Creating a toast store

Inside the `toastStore.js` we will create a new writeable Svelte store to hold all of our active toast notifications.
I decided to use a store instead of context, because it allows for exporting a simple to use `addToast` function that edits this store.
We could also create a custom store to prevent the direct editing of the store, but for now I want to keep it as simple as possible.
So, to create a new writeable store for our toasts we import the writeable store from Svelte and create a new one with an initially empty array:

```js
// src/lib/toastStore.js

import { writable } from "svelte/store";

export const toasts = writable([]);
```

Next up, we will create and export a new function that can be used to add a new toast. This function arguments include a message for the toast, a type of toast (defaulting to 'info'), and number `removeAfter` which says how long the toast will be visible for (defaulting to 5000 ms).

1. Our toasts need some kind of identifier, so we can remove a specific toast for example. (We also want a unique key for our Svelte each block later on so we can add the flip animation!) For that we can use different approaches. You could also generate a random number [or string](https://stackoverflow.com/a/62674902/8081154), or include a package that can create uuids for you. For now, I decided to create an ID by using the current unix timestamp and combining it with the message of the toast. This will be unique enough, because generally you won't create multiple toasts with the same message at the same exact time.

2. To now add the function arguments as a toast to our toasts store we call the `toasts.update` function. This function expects a callback that takes the existing store value as its argument, and returns the new value to be set to the store. We return an array, which includes a new object with our generated id, the toast message, toast type and the number that controls how long the toast will be visible. We also spread the current value of the store inside this array, so all existing toasts will still be there after the update.

3. Making the toast disappear after the time specified by `removeAfter`, we call `setTimeout` and set a timeout for a call to a yet to be defined `removeToast` function.

4. We also might want to return the id of our toast, so the developer using this function can get the unique identifier for the toast that was just created.

All in all, our `addToast()` function could look something like this:

```js
// ... src/lib/toastStore.js

export function addToast(msg, type = "info", removeAfter = 5000) {
  // 1. create unique identifier
  const id = new Date().valueOf() + msg;

  // 2. add new toast using store.update
  toasts.update((all) => [
    {
      id,
      msg,
      type,
      removeAfter,
    },
    ...all,
  ]);

  // 3. set timeout for the removal of the toast after some time
  setTimeout(() => {
    removeToast(id);
  }, removeAfter);

  // 4. return the unique identifier
  return id;
}
```

Since we call `removeToast`, we need to define this function too. This function simply calls `.update` on the store, and filters the stores array value using the id that gets passed as an argument:

```js
// ... src/lib/toastStore.js

export function removeToast(id) {
  toasts.update((all) => all.filter((toast) => toast.id !== id));
}
```

### Creating a toast component

The `Toast.svelte` file will be our component that displays a single toast. We will use props to input a toast need to render our toast's message and style it according to the type of toast that it is. We will also add a cancel Button.

Let's start of with the `<script>` tag. Import the `removeToast` function from `./toastStore` and use export to add a prop named toast, where our toast data will get passed down though. Lets also import the `fade` and `fly` transitions to add some flair later.

```html
<!-- src/lib/Toast -->

<script>
  import { fade, fly } from "svelte/transition";
  import { removeToast } from "./toastStore";

  export let toast;
</script>
```

Next up comes our HTML markup, where we will wrap our toast in a div with the class depending on `toast.type`. We also apply our transitions to this element.

Inside the div, we add a span with the status role to display our toast message. If we use `{@html toast.msg}` we can make our toast notification more flexible because we can add any html to the message.

Beside the span we place a button that calls our `removeToast` function we imported and passes in the id of the current toast we are displaying.

```html
<!-- ... src/lib/Toast -->

<div class={toast.type} in:fly={{ y: -20 }} out:fade>
  <span role="status">
    {@html toast.msg}
  </span>
  <button on:click={() => {
    removeToast(toast.id)
  }}>
    ❌
  </button>
</div>
```

Last up we will define our styles. We add some padding, margin, border-radius, and a box-shadow to our div and then we add some margin to our button. Now we define the types we want to support with our toast component. For now we just define text and background color styles for `.info` and `.warn`.

```html
<!-- ... src/lib/Toast -->

<style>
  div {
    padding: 1.2em;
    margin-top: 1em;
    border-radius: 0.5em;
    box-shadow: 0 8px 16px hsla(0, 0%, 0%, 0.2);
  }

  button {
    margin: 0;
    margin-left: 2em;
  }

  .info {
    color: var(--toast-info-color, black);
    background: var(--toast-info-background, white);
  }

  .warn {
    color: var(--toast-warn-color, black);
    background: var(--toast-warn-background, lightpink);
  }
</style>
```

Notice the CSS Custom Properties inside the rules for `.info` and `.warn`. This gives our component even more flexibility, because now the colors are theme-able from the outside and can even change dynamically to a dark theme for example. Here is how you would set CSS Custom Properties for components in Svelte:

```html
<Toasts --toast-info-color="white" --toast-info-background="midnightblue" />
```

### Creating toasts list component

We can now store our toasts, add toasts, remove toasts and display a single toast, but we still need a Component that reads our store and renders a `Toast` component for every store entry. We do this inside the `Toasts.svelte` file.

Let's start with the Script block again. We need to import the `Toast` component from `./Toast.svelte`, then import the `toast` store from `./toastStore` and let's also import `flip` from `svelte/animate` for smooth list-item transitions. And thats about it. This component pretty much just plugs everything together, so no logic is needed inside the `<script>` tag.

```html
<!-- src/lib/Toasts -->

<script>
  import { flip } from "svelte/animate";
  import Toast from "./Toast.svelte";
  import { toasts } from "./toastStore";
</script>
```

We will wrap our entire markup section in a `{if $toasts.length}` block, as to not render anything if there are no toasts in the store. Notice the `$` in front of the store: this tells Svelte that you want to access the value of the store and let it take care of the subscription for you. Inside the `if` block we place a `<ul>` that will house all of our toast entries. Next we place a `{#each $toasts as toast (toast.id)}` block to render each of the toast entries. The part in parentheses at the end is our key, which helps Svelte track each toast entry and it's associated markup. It is also required for our flip animation that we will add to our `<li>` element inside the `each` block. Inside the `<li>` you can finally place the `Toast` component and pass in the `toast` from the `each` block. The prop and the variable we want to pass in are called the same we can use the short syntax `{toast}`, which means the same as `toast={toast}`.

```html
<!-- ... src/lib/Toasts -->

{#if $toasts.length}
<ul>
  {#each $toasts as toast (toast.id)}
  <li animate:flip>
    <Toast {toast} />
  </li>
  {/each}
</ul>
{/if}
```

Last up is the CSS that lets us display the toast on top of everything else on the page. We select our `ul`, remove the list styling, center the content and position it fixed it to the bottom of the screen.

```html
<!-- ... src/lib/Toasts -->

<style>
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 1em;
  }
</style>
```

### Packaging it all up

One thing we still need to code is our `index.js` file which describes the top level package entry point. We want to make the `Toasts` component and the `addToast` function from our `toastStores.js` file available.

```js
// src/lib/index.js
export { default as Toasts } from "./Toasts.svelte";
export { addToast } from "./toastStore";
```

We are pretty much done with the library. Let's first give it a spin to check if everything works like we want to.

Open up `src/routes/index.svelte` and replace it's contents with the an example usage of our Package. Notice here that we import from `$lib` to import files from our `src/lib` folder.

```html
<!-- src/routes/index.svelte -->
<script>
	  import { addToast } from "$lib/toastStore.js";
		import Toasts from "$lib/Toasts.svelte";
</script>

<Toasts/>

<button on:click={() => {addToast("hi")}}>
	Toast "Hi"
</button>
```

Run `npm install` to install our dev dependencies and then run `npm run dev -- --open` to start the development server and open it up in your default browser. The SvelteKit App should load and you should be able to click the Button to spawn a toast. If it doesn't work then check out the Terminal or Browser Dev Console to spot errors.

When everything works we can just set up a new npm script in our `package.json`. Inside that file add a new line inside the `"scripts"` section with the key `"package"` and the value `"svelte-kit package"`.

```json
// package.json
{
  // ...
  "scripts" {
    "dev": "svelte-kit dev",
    "package": "svelte-kit package",
    // ...
  }
}
```

Finally, the last step is to run that npm script with `npm run package` and SvelteKit will build our package inside the `package` folder. I won't cover how to publish this package to NPM so either check the [npm docs on publishing packages](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) search the internet for an article that covers that if you need help.

## Check out my toast package

You can also just use [my own Toast package](https://as-toast.vercel.app/) that features full customization using CSS Custom Properties
