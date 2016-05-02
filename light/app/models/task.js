import { Model } from 'lux-framework';

class Task extends Model {
  static attributes = {
    name: {
      type: 'text',
      required: true
    },

    completed: {
      type: 'boolean',
      defaultValue: false
    },

    dueDate: {
      type: 'date',
      time: true
    }
  };
}

export default Task;
