# itoz-tailwind

## Getting started


## create .npmrc
```
//npm.pkg.github.com/:_authToken=<token>
```

```
$ npm i @itoz/itoz-tailwind@<version>
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


## Build

```
$ npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

```

## Delivery
```
npm publish
```
