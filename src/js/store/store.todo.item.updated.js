import store_todo from './store.todo'
import store_todo_item from './store.todo.item'
import action from '../../lib/action'
import obseriot from 'obseriot';

store_todo_item.updated = {
  handler: {
    name: 'store_todo_item_updated',
    action: (item) => {
      return [ item ];
    }
  }
}

obseriot.listen(action.todo.item.update, (item) => {
  store_todo.items[item.id] = item;
  obseriot.notify(store_todo_item.updated, item);
})
