import store from './store'
import action from '../../lib/action'
import obseriot from 'obseriot';

store.count = {
  total: 0,
  handler: {
    name: 'store_count',
    action: () => {
      return [ store.count.total ];
    }
  }
}

obseriot.listen(action.increment, (num) => {
    store.count.total = store.count.total + num;
    obseriot.notify( store.count );
})
