# SVG Sprites Demo

Demoing of SVG Sprites for the [talk "SVG Sprites in a nutshell"](https://docs.google.com/presentation/d/1uDJ-7ygM_sWY3tvDtKI2Bs3AG846fICYdmXepCn-NdY/edit?usp=sharing).

## Run

The repo contains everything to run the demo.
You have to use real web, it doesn't work directly via `file://` because of `fetch()` (well, untested).
Just use e.g. PHPs build in web server.

```
php55 -S 0.0.0.0:8080
```

## Build

The SVG-Sprite are build via Grunt.

Install NPM packages:

```
yarn
```

Run Grunt:

```
grunt
```


## Licence

MIT
