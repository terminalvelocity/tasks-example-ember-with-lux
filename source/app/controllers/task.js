import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTask(newTitle) {
      const title = newTitle;
      const task = this.store.createRecord('task', {
        name: title
      });

      task.save();
    }
  }
});
