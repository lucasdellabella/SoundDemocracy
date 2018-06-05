import Component from '@ember/component';

export default Component.extend({
    isPlaying: false,

    playPauseSourceImg: Ember.computed('isPlaying', function() {
        return this.get('isPlaying') ? 'play_button.png' : 'pause_button.png';
    }),

    actions: {
        toggleIsPlaying: function() {
            this.toggleProperty('isPlaying')
        }
    }
});
