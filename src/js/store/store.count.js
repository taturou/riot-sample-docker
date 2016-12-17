import store from './store'
import action from '../../lib/action'
import obseriot from 'obseriot';

store.count = {
  state: {total: 0},
  handler: {
    name: 'store_count',
    action: () => {
      return [ store.count.state.total ];
    }
  }
}

obseriot.listen(action.increment, (num) => {
    store.count.state.total = store.count.state.total + num;
    obseriot.notify( store.count );
})
