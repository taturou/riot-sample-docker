<my-button>
  <button onclick={ increment }>
    +1
  </button>

  <script>
    import action from '../lib/action'
    import obseriot from 'obseriot';

    increment() {
      obseriot.notify(action.increment, 1);
    }
  </script>

  <style>
  </style>
</my-button>
