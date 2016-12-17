import action from './action'

action.increment = {
  handler: {
    name: 'action_increment',
    action: ( num = 1 ) => {
      return [ num ];
    }
  }
}

