import {obseriot, action, store} from './util/event.js'

<my-output>
  <span>{ total }</span>

  <script>
    this.total = 0;

    obseriot.listen(store.count, (total) => {
      this.total = total;
      this.update();
    });
  </script>

  <style>
  </style>
</my-output>
