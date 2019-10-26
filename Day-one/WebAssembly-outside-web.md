# Web Assembly outside the web

Till Schneidereit and Lin Clark

@linclark

Right now it is in experimental stage (not production ready), but it is seen as very probable trend in future.

## Why

Because of portability - one code can run on any device. They said that if the web assembly would be here 10 years ago, Docker wouldn't have to exist. Also security is the issue, for example Node.js can run javascript on machine without browsers, but it can be insecure to run code that we don't own (as it has direct access to files on the machine).

Web assembly solves the security aspect, but doesn't have direct access to the computer's resources.

## WASI

WebAssembly System Interface (standardized run time environment) - opens a new, wide range of use cases of WebAssembly.

Advantages:

* portability
* sandboxing (code is run separately)
* security (no direct access to the machine)

History:

* Emscripten 1.0 released in 2011 that allowed to compile `c` and `c++` codes to JS
* Mozilla announced `asm.js` in 2013 - allowed using var in JS as some specific type, e.g. as string (so called 'as ism')
* WebAssembly standardization announced in 2015
* Rust got initial WebAssembly support in 2016 (nowadays Rust is considered as the best language for WebAssembly)
* WebAssembly shipped in browsers in 2017 and tools around that emerged
* WebAssembly is a key feature of Rust since 2018
* Mozilla announced WASI in 2019

? ***Check out Rust for WebAssembly***

### Why WASI

* nearly native speed
* scalable (only a few kb when cold start compared to Mb of v8)

### What is WASI

System interface for web assembly

### Who is behind WASI

* Mozilla developers and other enthusiasts
* They are talking to Node.js developers on how they could possibly use the WASI

`Protection ring security` => way to define what the code has access to on my machine

? ***Check out POSIX***

[https://github.com/cranestation/wasmtime](https://github.com/cranestation/wasmtime)
