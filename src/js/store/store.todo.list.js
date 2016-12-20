import store_todo from './store.todo'
import action from '../../lib/action'
import obseriot from 'obseriot';

store_todo.list = {
  handler: {
    name: 'store_todo_list',
    action: () => {
      return [ store_todo.items ];
    }
  }
}

obseriot.listen(action.todo.add, (item) => {
  item.id = store_todo.total;
  store_todo.total = store_todo.total + 1;
  store_todo.items.push(item);
  obseriot.notify(store_todo.list);
});

obseriot.listen(action.todo.gc, () => {
  store_todo.items = store_todo.items.filter((item) => {
    return !item.done;
  });
  obseriot.notify(store_todo.list);
});
