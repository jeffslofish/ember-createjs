# ember-createjs

[createjs](http://www.createjs.com/) for Ember.

## installation

`ember install ember-createjs`

## usage

```js
import createjs from 'ember-createjs';

createjs.Sound;
createjs.LoadQueue;
```

## configuration

```js
// valid options: 'preload', 'sound', 'cordova-audio-plugin', 'flash-audio-plugin', 'easle', 'tween', 'webgl'
module.exports = function(environment) {
  var ENV = {
    . . . .
    createjs: {
      import: ['preload', 'sound']
    }
  }
```
