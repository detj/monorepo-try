# web application

A simple [express](https://expressjs.com) based app that renders a single [index.html](public/index.html) file. The JavaScript bundle that is served to the browser also import the [protocol](../packages/protocol) library using a bunch of exports from it.

## Develop

Use the `npm run develop` command to bundle the JavaScript and start the Express server.

## Build

Use the `npm run build` command to bundle the JavaScript and copy files to the `public/javascripts` directory.
