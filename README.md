# itoz-tailwind



## create .npmrc
```
//npm.pkg.github.com/:_authToken=<token>
```
## Getting started

```
$ npm i @itoz/itoz-tailwind@<version>
$ npx tailwindcss init
```

## tailwind.config.js
```

module.exports = {
  content: ["/dist/**/*.{html,js}"],
  ...

  plugins: [
    require('@itoz/itoz-tailwind/plugin')
  ]
}
```

## src/input.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## index.html
```
...
<link href="/dist/output.css" rel="stylesheet">
...
```

## Build


```
$ npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

```
### or package.json
```
"dev":"npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
"start":"npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify",
```


# Using PostCSS
```
WIP
```
# For develop

## Delivery
```
npm publish
```

## 
