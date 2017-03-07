import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: ['isWholeTone:whole-tone:half-tone'],
    isWholeTone: true
});
