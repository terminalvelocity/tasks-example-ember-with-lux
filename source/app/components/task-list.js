import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  actions: {
    create() {
      const title = this.get('newTitle');

      this.get('createTask')(title);
      this.set('newTitle', '');
    },
    save(model) {
      model.toggleProperty('completed');
      model.save();
    },
    delete(model) {
      if (confirm("Are you sure?")) {
        model.destroyRecord();
      }
    }
  }
});
