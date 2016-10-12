import Ember from 'ember';
import preload from './preload';
import sound from './sound';

const createjs = Ember.assign({}, preload, sound);

export default createjs;
