---
title: Toasting in Svelte 🍞
summary: |
  How to create a reusable Toast package for Svelte using SvelteKit.
published: 2021-10-14
layout: ../../layouts/PostLayout.astro
tags:
  - svelte
  - webDev
---

# How to create and publish a Toast library package with SvelteKit

In this article I will explain how to create reusable toast package for Svelte using SvelteKit.
We will cover what a toast is and use Svelte Components and a Store to create one ourselves.

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

## Using SvelteKit to create packages

The cooles thing about [SvelteKit](https://kit.svelte.dev/) is the option to bundle your `src/lib` folder as an npm Package in a snap.
Normally you think of SvelteKit as an application framework, where the contents of the `src/routes` folder are the public pages of your application, and the `src/lib` folder is used for an apps shared code or internal library.
But using `svelte-kit package` reverses this paradigm and your `src/lib` folder becomes the public facing package and the `src/routes` can be used for testing, as a demo and a documentation.
Using a `src/lib/index.js` file you can configure the packages entry point root and SvelteKit even creates type definitions inside `.d.ts` files for you!
[You can read more about packaging libraries with SvelteKit in the Docs.](https://kit.svelte.dev/docs#packaging)

To get started, create a new SvelteKit project using `npm init svelte@next my-lib-name` (note: the `@next` is only needed while SvelteKit isn't at 1.0 yet and will not be needed after an official release). Select your preferred options, then go to the new folder and run `npm install` and then `npm run dev -- --open` to start the development server and open it up in your default browser. After this setup, we can get started with creating the toast package.

## Creating the package

To create the toast package, we need a couple of files that can be created now inside the `src/lib` folder.

- `toastStore.js` (or `.ts`): this will create a store that holds all active toast notifications and also exports functions to add and remove toasts.

- `Toast.svelte`: this will display a single toast notification.

- `Toasts.svelte`: this will read from the toastStore and display `Toast` components for every toast in the store.

- `index.js` (or `.ts`): this will describe the root of the package entry point and allows for super clean importing of library exports.

### Creating a toast store

Inside the `toastStore.js` we will create a new writeable Svelte store to hold all of our active toast notifications.
I decided to use a store instead of context, because it allows for exporting a simple to use `addToast()` function that edits this store.
We could also create a custom store to make disable the direct editing of the store but for now I want to keep it as simple as possible.
So, to create a new writeable store for our toasts we import the writeable store from Svelte and create a new one with an initially empty array:

```js
import { writable } from "svelte/store";

export const toasts = writable([]);
```

Next up, we will create and export a new function that can be used to add a new toast. This function arguments include a message for the toast, a type of toast (defaulting to 'info'), and number `removeAfter` which says how long the toast will be visible for (defaulting to 5000 ms).

1. Our toasts need some kind of identifier, so we can remove a specific toast for example. (We also want a unique key for our Svelte each block later on so we can add the flip animation!) For that we can use different approaches. You could also generate a random number [or string](https://stackoverflow.com/a/62674902/8081154), or include a package that can create uuids for you. For now, I decided to create an ID by using the current unix timestamp and combining it with the message of the toast. This will be unique enough, because generally you won't create multiple toasts with the same message at the same exact time.

2. To now add the function arguments as a toast to our toasts store we call the `toasts.update()` function. This function expects a callback that takes the existing store value as its argument, and returns the new value to be set to the store. We return an array, which includes a new object with our generated id, the toast message, toast type and the number that controls how long the toast will be visible. We also spread the current value of the store inside this array, so all existing toasts will still be there after the update.

3. Making the toast disappear after the time specified by `removeAfter`, we call `setTimeout()` and set a timeout for a call to a yet to be defined `removeToast()` function.

4. We also might want to return the id of our toast, so the developer using this function can get the unique identifier for the toast that was just created.

All in all, our `addToast()` function could look something like this:

```js
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

Since we call `removeToast()`, we need to define this function too. This function simply calls `.update()` on the store, and filters the stores array value using the id that gets passed as an argument:

```js
export function removeToast(id) {
  toasts.update((all) => all.filter((toast) => toast.id !== id));
}
```

This concludes the store for our toast notifications. You can view [the complete file in TypeScript on my toast libraries GitHub page](https://github.com/SarcevicAntonio/as-toast/blob/main/src/lib/toastStore.ts).

### Creating a toast component

### Creating toasts component

### Allow Theming using CSS Custom Properties

## Check out my toast package
