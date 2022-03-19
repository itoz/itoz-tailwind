# itoz-tailwind

## Getting started


## .npmrc
```
WIP
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
