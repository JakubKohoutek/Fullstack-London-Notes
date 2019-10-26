# Keynote by Ken Wheeler

## Web Worker

Running JS code "in the background" that doesn't block the main thread, i.e. one way to make JavaScript multithreaded

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