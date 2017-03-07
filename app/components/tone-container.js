import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['tone-container'],
	classNameBindings: ['tones.isLast:last'],
});
