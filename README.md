<div align="center">
  <h1><a href="https://www.npmjs.com/package/@rajathshttgr/qwiker">Qwiker</a></h1>
  <h3>A light-weight Promise based HTTP client for the browser and node.js</h3>
</div>

<div align="center">

![NPM Version](https://img.shields.io/npm/v/@rajathshttgr/qwiker)
![npm bundle size](https://img.shields.io/bundlephobia/min/@rajathshttgr/qwiker)
![NPM Downloads](https://img.shields.io/npm/dm/@rajathshttgr/qwiker)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

## Features

- **Promise-based:** Fully supports the Promise API for easier asynchronous code.
- **Data Transformation:** Transform request and response data automatically.
- **Automatic JSON Handling:** Automatically serializes and parses JSON data.

## Installing

### Package manager

Using npm:

```bash
$ npm install @rajathshttgr/qwiker
```

Using yarn:

```bash
$ yarn add @rajathshttgr/qwiker
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import qwiker, { Qwiker, QwikerError, VERSION } from "@rajathshttgr/qwiker";
```

You can also use the default export, since the named export is just a re-export from the Qwiker Class:

```js
import qwiker from "@rajathshttgr/qwiker";

console.log(axios.VERSION);
```

If you use `require` for importing, **only default export is available**:

```js
const qwiker = require("@rajathshttgr/qwiker");

console.log(qwiker.VERSION);
```

## Example

```js
import qwiker from "@rajathshttgr/qwiker";

// GET Request
qwiker
  .get(`/posts/1`)
  .then((response) => (console.log(response);))
  .catch((error) => ( console.log(error);))
  .finally(function () {});


// POST Request
qwiker
  .post(`/posts/`,{title: "I love qwiker",userId: 1})
  .then((response) => (console.log(response);))
  .catch((error) => ( console.log(error);))
  .finally(function () {});

```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
