# Welcome to [Astro](https://astro.build)

## To make an astro project run the following command:
```bash
    npm init astro
```
> ð§âð **Seasoned astronaut?** Delete this file. Have fun!

## PARTIAL HYDRATION

- Astro generates every website with zero client-side JavaScript, by default. Use any frontend UI component that youâd like (React, Svelte, Vue, etc.) and Astro will automatically render it to HTML at build-time and strip away all JavaScript. This keeps every site fast by default.

- But sometimes, client-side JavaScript is required i.e. **Hydration** required which are of 4 types :

```javascript
/* Hydrate the component on page load. */
    <MyComponent client:load />

/* Hydrate the component as soon as main thread is free (uses requestIdleCallback()). */
<MyComponent client:idle />

/* Hydrate the component as soon as the element enters the viewport (uses IntersectionObserver). Useful for content lower down on the page. */
<MyComponent client:visible />

/* Hydrate the component as soon as the browser matches the given media query */
<MyComponent client:media=&#123;QUERY} />
```

## ð Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
âââ public/
â   âââ robots.txt
â   âââ favicon.ico
âââ src/
â   âââ components/
â   â   âââ Tour.astro
â   âââ pages/
â       âââ index.astro
âââ package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## ð§ Commands

All commands are run from the root of the project, from a terminal:

| Command      | Action                                      |
| :----------- | :------------------------------------------ |
| `yarn`       | Installs dependencies                       |
| `yarn start` | Starts local dev server at `localhost:3000` |
| `yarn build` | Build your production site to `./dist/`     |

## ð Want to learn more?

Feel free to check [our documentation](https://github.com/snowpackjs/astro) or jump into our [Discord server](https://astro.build/chat).
