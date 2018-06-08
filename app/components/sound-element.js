import Component from '@ember/component';
import { computed, inject } from '@ember/object';

export default Component.extend({
    init: function(fileUrl) {
        this._super()
        this.setProperties({
            fileUrl 
        })
    },

    hifi: inject.service(),

    isPlaying: false,

    fileUrl: null,

    playPauseSourceImg: computed(
        'hifi.currentSound.{url,isPlaying}', 
        'sound.url', 
        function() {
            let thisSoundIsPlaying = this.get('hifi.currentSound.url') == this.get('sound.url') && this.get('hifi.currentSound.isPlaying')
            return thisSoundIsPlaying ? 'pause_button.png' : 'play_button.png' ;
        }
    ),

    actions: {
        toggleIsPlaying: function(urls) {
            this.toggleProperty('isPlaying')
            if (this.get('isPlaying')) {
                console.log('play')
                this.get('hifi').play(urls).then(({ sound }) => {
                // sound object

                }).catch(error => {

                })
            } else {
                console.log('pause')
                this.get('hifi').pause()
            }
        },
    }
});
