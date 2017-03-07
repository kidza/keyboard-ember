import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: ['isWholeTone:whole-tone:half-tone'],
    isWholeTone: true,

    mouseDown(event) {
    	let element = event.target;
        if (element.className.match(/tone-text-element/)) {
            element = element.parentElement;
        }
        element.classList.add('pressedTone');
       let matches = element.querySelectorAll("span");
        if (matches.length > 0) {
            let tone = matches[0].innerHTML;
            //playAudioTone(tone);
            let playedTones = document.getElementById('tone-played').value;
            if (playedTones == "") {
                playedTones = tone;
            } else {
                playedTones = playedTones + " " + tone;
            }
            document.getElementById('tone-played').value = playedTones;
        }
    },

    mouseUp(event) {
    	let element = event.target;
        if (element.className.match(/tone-text-element/)) {
            element = element.parentElement;
        }
        element.classList.remove('pressedTone');
    }
});
