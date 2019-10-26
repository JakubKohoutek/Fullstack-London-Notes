# Practical Performance for React (Native)

Anna Doubková

(speaking about React Native) There are no straightforward materials on performance, the knowledge is pretty distributed.

## Patterns vs Measurements

Choosing any pattern without measurement might not work - we have to assess if the pattern we introduced is really more efficient than different ones.

On web everythig were working fine, but when they used the same elements on mobile phones, they experienced a huge frame drop (even negative one, which shouldn't be even possible).

## Measuring JS performance

Performance tab in Chrome dev tools

? ***Check out React fiber***

## Tips

* Should component update might be a villan, not the good solution to have your app flooded with it
* We should avoid anonymous functions in props
* Redux's connect method runs on every render! We should use memoization when we select something from store in `mapStateToProps`, e.g. `reselect` npm package
* If we are setting local state, we should check if the value is wrong first
* Modal windows and UI stuff should be in local state, not in Redux
* Batch Redux actions where possible
* Connecting state - connect all components that needs to be connected to Redux store, don't connect only on top level and propagate props down the tree

## Native only stuff

* use `useNativeDriver: true` for animations
* use `react-native-fast-image` for handling images in Reacth Native
* do not use `React router native` - it uses JS and many times it takes many seconds. Use `React navigation` package instead
