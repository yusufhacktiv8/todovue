Vue.component('todo-list', {
  props: ['todos'],
  template: `
    <ul class="list-group">
      <todo-item
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
        @removeTodo="removeTodo"
      >
      </todo-item>
    </ul>
    `,
  methods: {
    removeTodo(todo) {
      console.log(todo);
    },
  },
});
