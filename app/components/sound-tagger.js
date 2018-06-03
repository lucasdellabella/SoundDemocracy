import Component from '@ember/component';

export default Component.extend({
  tags: ['first', 'second'],
 
  actions: {
    addTag(tag) {
      this.get('tags').pushObject(tag);
    },
 
    removeTagAtIndex(index) {
      this.get('tags').removeAt(index);
    }
  }
});
