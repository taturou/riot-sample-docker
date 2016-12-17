<my-output>
  <span>{ total }</span>

  <script>
    import store from '../lib/store'
    import obseriot from 'obseriot';

    this.total = 0;

    obseriot.listen(store.count, (state) => {
      this.total = state.total;
      this.update();
    });
  </script>

  <style>
  </style>
</my-output>
