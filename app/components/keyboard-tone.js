import Ember from 'ember';

export default Ember.Component.extend({
	scale: [{wholeTone:'C', halfTone: 'C#'}, 
			{wholeTone:'D', halfTone: 'D#'}, 
			{wholeTone:'E'}, 
			{wholeTone:'F', halfTone: 'F#'}, 
			{wholeTone:'G', halfTone: 'G#'}, 
			{wholeTone:'A', halfTone: 'A#'}, 
			{wholeTone:'H', isLast: true}
		],
	elementId: 'container',
});
