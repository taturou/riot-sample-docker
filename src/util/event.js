import obseriot from 'obseriot';

let action = {};
let store = {};

action.increment = {
  handler: {
    name: 'action_increment',
    action: ( num = 1 ) => {
      return [ num ];
    }
  }
}

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

export {obseriot, action, store};
