# 7 Deadly Sins of React

@ErselAker

## Tightly coupled components

Those components are not really reusable and it's harder to write proper unit tests.

## Prop Gluttony

* pay attention to existing props
* what can be derived should be derived

## State greedy components

* avoid using complex state
* have clear ownership of state => don't have the same information in redux and local state

## Visibility Props

* instead of passing props like `isOpen` to the modal, do the condition on a higher level and don't render the component whatsoever

## Disparity between imported symbols and filesystem

? **Check out for more**

## Overzealous Snapshots

Nobody is reading `diff` of huge snapshots. If you decide to use them, be specific => put a snapshot against specific element you are testing (e.g. specific div within the component)

## Black box testing

Don't set state directly in the test of component - test behavior, not the implementation.

Use `react-testing-library` where the wrong approach is not possible.

_____

Interesting notes from the audience:

* Arrow functions in JS classes are not added to prototype => they are transpiled as many times as the class is used, that can fill the heap

[https://github.com/ersel/7-deadly-sins-of-react](https://github.com/ersel/7-deadly-sins-of-react)
