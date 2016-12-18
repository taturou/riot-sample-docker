import action_todo_item from './action.todo.item'

action_todo_item.update = {
  handler: {
    name: 'action_todo_item_update',
    action: (item) => {
      return [ item ];
    }
  }
}
