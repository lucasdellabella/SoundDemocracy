import Component from '@ember/component';

export default Component.extend({
    init: function(fileUrl) {
        this._super()
        this.setProperties({
            fileUrl 
        })
    },

    hifi: Ember.inject.service(),

    isPlaying: false,

    fileUrl: null,

    playPauseSourceImg: Ember.computed(
        'hifi.currentSound.url', 
        'hifi.currentSound.isPlaying',
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

        play: function(urls) {
        }

    }
});
