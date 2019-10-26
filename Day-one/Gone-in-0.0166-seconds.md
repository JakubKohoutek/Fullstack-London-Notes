# Gone in 0.0166 seconds

Alex Moldovan @JSHeroes @alexnmoldovan

"We will build sites that perform badly"

but

"We shouldn't be afraid of getting our hands dirty"'

## Rendering performance

### Browser rendering pipeline

Composed of 5 steps

* JavaScript
* Style calculation
* Layout - parses DOM from top left corner
* Paint - graphics is sent to GPU
* Composite - compose multiple layers and decide what is visible and what's not

1 second contains 60 frames, which means that we have about 16 ms to do all the rendering.
That implies that our application (JS) must run in 10 milliseconds (including business logic and data processing).

Usually the execution does not fit within 10 ms and so the browser drops frames.

DevTools => performance tab => hit 'record' => play with the page => stop recording

'Flame chart' is then displayed, where:

* yellow is JavaScript
* red spots at the top re dropped frames

Add 'Rendering' tab to the Performance chart and you can tick the 'Paint flashing' to see whenever the browser executes the paint phase.

Things to look for when optimizing:

* DOM Access
  * React shields us from DOM access
  * For example this:

    ```javascript
    document.getElementById('anchor').innerHTML = 'click me';
    ```

    is a red flag because it reads the DOM and then writes to it (two operations)
* Involuntarily Layout Trigger ('forced synchronous layout or FSL') caused e.g. by offsetLeft, offsetTop, scrollTo,...
  * Results in 'Layout Trashing'

* Long Running (event) Handlers
  * Event handlers are very problematic, for example onScroll handler that takes 100 ms will cause only 6 frames to render per second.

* Passive Event Listeners
? ***Check out passive event listeners***

* Make use of WebWorkers
? ***Check out WebWorkers***

CSS Animations
[https://csstriggers.com/](https://csstriggers.com/)

We can skip some rendering phase by using specific css rules for animation that can improve the performance. E.g. opacity animation skips directly to 'composite' step as it already knows all layers. `Transform` css rule is also good.
