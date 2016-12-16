<app>
  <h1>Riot.js TODO</h1>

  <table>
    <tr each={ item, i in items }>
      <td><input type="checkbox" onclick={ parent.check }></td>
      <td>#{ i + 1 }</td>
      <td refs="content" class={ completed: item.done }>{ item.content }</td>
    </tr>
  </table>

  <form onsubmit={ add }>
    <input ref="input">
    <button>Add #{ items.length + 1 }</button>
  </form>

  <script>
    this.items = [];

    add(e) {
      e.preventDefault();

      let input = this.refs.input;
      let item = {content: input.value, done: false};
      this.items.push(item);
      input.value = '';
    }

    check(e) {
      e.item.item.done = e.target.checked;
    }
  </script>

  <style>
    :scope {
      --riot-color: gray;
    }
    h1 {
      color: var(--riot-color);
    }
    .completed{
      text-decoration: line-through
    }
  </style>
</app>
