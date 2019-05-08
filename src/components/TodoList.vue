<template>
  <div>
    <TodoItem v-for="todo in todos"
              :key="todo.id"
              :todo="todo"
              :onDelete="() => deleteItem(todo.id)"
              @onEdit="onEdit"
              @onCompleteUpd="onCompleteUpd"
    />
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue';

  export default {
    name: "TodoList",
    components: {
      TodoItem
    },
    data () {
      return {
        todos: []
      }
    },
    methods: {
      deleteItem: async function(id) {
        await axios.delete( `/todos/${id}` );
        this.todos = this.todos.filter( todo => todo.id !== id )
      },
      onEdit: async function(todo) {
        await axios.patch( `/todos/${todo.id}`, {title: todo.title} ).then( res => this.todos[todo.id] = res.data );
        this.todos[todo.id].title = todo.title;
      },
      onCompleteUpd: async function(todo){
        await axios.patch( `/todos/${todo.id}`, {completed: todo.completed} ).then( res => this.todos[todo.id] = res.data );
        this.todos[todo.id].completed = todo.completed;
      }
    },
    created () {
      const get = async () => {
        await axios.get( '/todos' ).then( res => this.todos = res.data )
      };
      get();
    }
  }
</script>

<style scoped>

</style>
