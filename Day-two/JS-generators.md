# What Tamagotchi Can Teach You About ES6 Generators

Jennifer Creighton

@gurlcode

Built a web based version of Tamagotchi using SVG and `canvas`

Generators are useful when we deal with async code.

## Promises

One way to handle async code are promises. This might lead to some problems, though:

* Thenable hell
* It's hard to suspend (cancel) idle promises in the middle and execute anything else

To pause something and execute something else we can use generators => I want to pause an animation and `yield` something else

To create a generator function, you add an asterisk to it.

```javascript
function* count() {
  yield 1;
  yield;
  yield 3;
}

const generator = count();

generator.next();
// returns {value: 1, done: false}

generator.next();
// returns {value: undefined, done: false}
```

* We can have nested generators using the `*yield`
* We can end the generator using `generator.return()`
* Generator will not wait for promise to resolve, we have to work around that using for example coroutine
* Check out `coroutines` => think sequentially about async code

[https://github.com/jcreighton/tamagotchi](https://github.com/jcreighton/tamagotchi)
