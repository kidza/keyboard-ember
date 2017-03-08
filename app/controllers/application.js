import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        playUserTones() {

            var keyboardTones = this.getKeyboardTones();
            var userTones = this.getUserTones();

            var i = 0;
            var duration = 0;

            function playTone() {
                setTimeout(function() {
                    if (i < userTones.length) {
                        duration = userTones[i].duration * 400;
                        for (var j = 0; j < keyboardTones.length; j++) {
                            if (keyboardTones[j].tone == userTones[i].tone) {
                                triggerSynchedMouseEvent(keyboardTones[j].element, duration);
                            }
                        }
                        i++;

                        playTone();
                    }
                }, duration)
            };
            playTone();

            function triggerSynchedMouseEvent(elem, duration) {
		        triggerMouseEvent(elem, 'mousedown');
		        setTimeout(function() {
		            triggerMouseEvent(elem, 'mouseup');
		        }, duration);
		    };

		    function triggerMouseEvent(node, eventType) {
		        var clickEvent = document.createEvent('MouseEvents');
		        clickEvent.initEvent(eventType, true, true);
		        node.dispatchEvent(clickEvent);
		    }
        }
    },

    getUserTones() {
        let tones = [], toneNumberOfCharacters, tone, duration;
        let userText = document.getElementById('user-tones').value;
        let tonesWithDuration = userText.split(/[ ,]+/);

        for (let i = 0; i < tonesWithDuration.length; i++) {
            if (tonesWithDuration[i].match(/#/)) {
                toneNumberOfCharacters = 2;
            } else {
                toneNumberOfCharacters = 1;
            }
            tone = tonesWithDuration[i].substr(0, toneNumberOfCharacters);
            duration = tonesWithDuration[i].substr(toneNumberOfCharacters, tonesWithDuration[i].length);

            if (tonesWithDuration[i].match(/\//)) {
                duration = parseFloat(eval(duration));
            }

            tones.push({ tone: tone, duration: duration });
        }
        return tones
    },

    getKeyboardTones() {
        let keyboardTones;
        let halfTones = this.getKeyboardTonesWithElements("half-tone");
        let wholeTones = this.getKeyboardTonesWithElements("whole-tone");

        return keyboardTones = halfTones.concat(wholeTones);
    },

    getKeyboardTonesWithElements(className) {
        let formatedTones = [];
        let elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let matches = element.querySelectorAll("span");
            if (matches.length > 0) {
                let tone = matches[0].innerHTML;
                formatedTones.push({
                    tone: tone,
                    element: element
                });
            }
        }
        return formatedTones;
    },
});
