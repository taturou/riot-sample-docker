import store_todo from './store.todo'
import action from '../../lib/action'
import obseriot from 'obseriot';

store_todo.added = {
  handler: {
    name: 'store_todo_added',
    action: (item) => {
      return [ store_todo.items, item ];
    }
  }
}

obseriot.listen(action.todo.add, (item) => {
  item.id = store_todo.items.length;
  store_todo.items.push(item);
  obseriot.notify(store_todo.added, item);
})
