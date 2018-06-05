import Component from '@ember/component';

export default Component.extend({
  init: function() {
    this._super()
    this.setProperties({
      tags: ['first', 'second']
    })
  },

  tags: null,
 
  actions: {
    addTag(tag) {
      this.get('tags').pushObject(tag);
    },
 
    removeTagAtIndex(index) {
      this.get('tags').removeAt(index);
    }
  }
});
