riot-ssr-middleware
---

[riot-ssr](https://github.com/ilearnio/riot-ssr) wrapped into an Express-compatible middleware for convenience.

# Installation

```bash
npm i -S riot-ssr-middleware
```

## Usage

```js
const riotRenderMiddleware = require('riot-ssr-middleware')

router.use(riotRenderMiddleware({
  path: '/path/to.tag',
  opts: { ... }
}))
```

or pass it properties from `req` or `res`:

```js
router.use(riotRenderMiddleware((req, res) => ({
  path: req.pathToTag,
  opts: { ... }
})))
```
