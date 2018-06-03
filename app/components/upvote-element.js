import Component from '@ember/component';

export default Component.extend({

    upvoted: false,
    downvoted: false,

    upvoteSourceImg: Ember.computed('upvoted', function() {
        return this.get('upvoted') ? 'upvote_clicked.png' : 'upvote_unclicked.png';
    }),

    downvoteSourceImg: Ember.computed('downvoted', function() {
        return this.get('downvoted') ? 'downvote_clicked.png' : 'downvote_unclicked.png';
    }),

    actions: {
        upvote() {
            this.toggleProperty('upvoted');
            this.setProperties({'downvoted': false});
            return 1;
        },

        downvote() {
            this.toggleProperty('downvoted');
            this.setProperties({'upvoted': false});
            return 0;
        }
    }
});
