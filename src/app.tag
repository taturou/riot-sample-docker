<app>
  <h1>{ content }</h1>

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
