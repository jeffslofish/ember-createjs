import createjs from 'ember-createjs';
import { module, test } from 'qunit';

module('Unit | createjs');

test('createjs is present', function(assert) {
  assert.expect(3);

  assert.ok(createjs, 'createjs is present');

  assert.ok(createjs.LoadQueue, 'LoadQueue is present');
  assert.ok(createjs.Sound, 'Sound is present');
});
