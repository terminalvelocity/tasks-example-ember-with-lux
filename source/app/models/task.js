import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  completed: DS.attr('boolean'),
  dueDate: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
