import store_todo from './store.todo'
import action from '../../lib/action'
import obseriot from 'obseriot';

store_todo.num_done = {
  handler: {
    name: 'store_todo_num_done',
    action: (num_done) => {
      return [ num_done ];
    }
  }
}

function num_done() {
  let num_done = 0;

  store_todo.items.forEach((item, i, items) => {
    if (item.done) {
      num_done = num_done + 1;
    }
  });
  return num_done;
}

obseriot.listen(action.todo.item.update, (_item) => {
  obseriot.notify(store_todo.num_done, num_done());
});

obseriot.listen(action.todo.gc, () => {
  obseriot.notify(store_todo.num_done, num_done());
});
