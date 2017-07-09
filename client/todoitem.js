Vue.component('todo-item', {
  props: ['todo'],
  template: `
    <li class="list-group-item">
      <div class="checkbox">
        <label><input type="checkbox" value="" v-model="todo.status">
          <span :class="todo.status ? 'completed-todo': ''">{{ todo.description }}</span>
        </label>
        <button type="button" class="btn btn-danger" @click="removeBtnClick(todo)">x</button>
      </div>
    </li>
    `,
  methods: {
    removeBtnClick(todo) {
      this.$emit('removeTodo', todo);
    },
  },
});
