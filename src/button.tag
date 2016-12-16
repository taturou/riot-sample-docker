import {obseriot, action, store} from './util/event.js'

<my-button>
  <button onclick={ increment }>
    +1
  </button>

  <script>
    increment() {
      obseriot.notify( action.increment, 1 );
    }
  </script>

  <style>
  </style>
</my-button>
