import { Serializer } from 'lux-framework';

class TasksSerializer extends Serializer {
  attributes = [
    'name',
    'completed',
    'dueDate',
    'createdAt',
    'updatedAt'
  ];
}

export default TasksSerializer;
