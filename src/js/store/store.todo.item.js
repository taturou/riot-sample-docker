import store_todo from './store.todo'
import action from '../../lib/action'
import obseriot from 'obseriot';

store_todo.item = {
  handler: {
    name: 'store_todo_item',
    action: (item) => {
      return [ item ];
    }
  }
}

obseriot.listen(action.todo.item.update, (item) => {
  store_todo.items[item.id] = item;
  obseriot.notify(store_todo.item, item);
})
