# Keynote by Ken Wheeler

## Web Worker

Running JS code "in the background" that doesn't block the main thread, i.e. one way to make JavaScript multithreaded

The code is always stored in a separate file. First we create the worker with event listener:

```javascript
// Creating web worker in the main thread
const worker = new Worker("WorkerExample.js");
worker.onmessage = (event) => {
  const {data} = event;
  // do something with data
}
```

Web pages and web workers communicate by exchanging messages. We post a message to the worker:

```javascript
// Sending data to the worker
worker.postMessage(myData);
```

The worker receives copy of the data, it can handle the message in event handler:

```javascript
// inside the worker.js
onmessage = (event) => {
  const {data} = event;
  // do something with data
  postMessage(result);
}
```

We can also cancel execution of the worker, if we want to:

```javascript
// Creating web worker in the main thread
worker.terminate();
```

<!-- 
const webWorker = new WebWorker('web-worker.js');
webWorker.onmessage = event => console.log(event.data);
webWorker.postMessage(1);
webWorker.postMessage(1e10);
-->

* It's good idea to send messages in JSON format with `messageType` property.

## Offscreen Canvas

A canvas that is fully detached from the DOM

```javascript
const offscreen = document.querySelector('canvas').transferControlToOffscreen()
```

[devnook.github.io/OffscreenCanvasDemo/index](https://devnook.github.io/OffscreenCanvasDemo/index)

? ***Check out layout system 'yoga'***

## Worklets

High performance javascript through web assembly

**Houdini** => framework that extends css with amazing stuff

```css
.my-element {
  background-image: paint(chucknorris);
}
```

```javascript
registerPaint('chucknorris', class {});
```

**Audion worklet** => processing audio

* Replaces ScriptProcessorNode
* Helps avoid main thread pressure

[acarabott.github.io/audio-dsp-playground](https://acarabott.github.io/audio-dsp-playground/)

**Web bluetooth** => connect bluetooth devices using the browser

* Lets you connect to nearby bluetooth devices
* Can read data from them
* Can send data to them

**Web MIDI API** => Musical Instrument Digital Interface

* A format that allows computers to emulate musical instruments

```javascript
navigator.requestMIDIAccess().then(success, fail)
```

? ***Check out web assembly***