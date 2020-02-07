# intersection-demo

Just a demo to learn how to use [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) in Vue.

Why Intersection Observer?
- When you have tons of data and want to load them lazily.

I have made two components LazyLoadParent and LazyLoadElement, which are the main responsible ones for deliving intersection observer functionality.
Just use LazyLoadParent in the top level and put your v-for elements inside, the rest will be taken care of! :)

TODO:
- cleanup
- make a general plugin that can be used

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
