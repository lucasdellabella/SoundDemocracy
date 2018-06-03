import Component from '@ember/component';

export default Component.extend({
    actions: {
        showSound(sound) {
            alert(sound);
        }
    }
});
