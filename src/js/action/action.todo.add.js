import action_todo from './action.todo'

action_todo.add = {
  handler: {
    name: 'action_todo_add',
    action: (text) => {
      let item = {
        content: text,
        done: false
      };
      return [ item ];
    }
  }
}
