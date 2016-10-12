/* jshint node: true */
'use strict';

function findRoot(current) {
  var app;

  // Keep iterating upward until we don't have a grandparent.
  // Has to do this grandparent check because at some point we hit the project.
  do {
    app = current.app || app;
  } while (current.parent && current.parent.parent && (current = current.parent));

  return app;
}

module.exports = {
  name: 'ember-createjs',

  treeForAddon: function(app) {
    var app = findRoot(this);
    var createjsConfig = app.project.config(process.env.EMBER_ENV).createjs || {};
    var toImport = createjsConfig.import || ['preload', 'sound', 'cordova-audio-plugin', 'flash-audio-plugin', 'easle', 'tween', 'webgl'];

    toImport.forEach(function(file) {
      app.import('vendor/createjs/' + file + '.js');
    });

    return this._super.treeForAddon.apply(this, arguments);
  }
};
