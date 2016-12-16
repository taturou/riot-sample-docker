<app>
  <h1>Riot.js OBSERIOT</h1>

  <div>
    <my-button></my-button>
    =
    <my-output></my-output>
  </div>
  <div>
    <my-button></my-button>
    =
    <my-output></my-output>
  </div>

  <script>
    const str = 'Riot.js';
    this.content = `Hello ${str}`;
  </script>

  <style>
    :scope {
      --riot-color: gray;
    }
    h1 {
      color: var(--riot-color);
    }
  </style>
</app>
