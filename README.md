# monorepo-try

Uses [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true), [rollup](https://rollupjs.org/) and [express](https://expressjs.com). Uses the minimal dependencies to tie everything up.

> ⚠️ **Not for Production use**
>
> As you may have guessed, this code is just for learning and demonstration. Not for production use.

## Requirements

For the best experience, use the latest version of [node](https://nodejs.org) and [npm](https://npmjs.com/).

## How to run

After clone, run these

```sh
npm install
```

```sh
npm run develop
```

## Brief deep-dive

1. Checkout all the package.json files. All of them use the `"type": "module"` to fully support [ECMAScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
2. Rollup is used to bundle the JavaScript that is meant to be loaded in the browser.
3. The JavaScript bundle is loaded in the HTML file using a `<script type="module"></script>` tag. Check out the [app/public/index.html](app/public/index.html) file.
4. The root [package.json](package.json) also has a `"private": true` property to ensure that the root monorepo does not ever get published to public registries like npm.
